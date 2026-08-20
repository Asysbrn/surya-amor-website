import { Music2, Play, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { NewsVideo } from '../../data/news'

interface NewsVideoGalleryProps {
  videos: NewsVideo[]
}

interface AmbientBed {
  context: AudioContext
  master: GainNode
  oscillators: OscillatorNode[]
  lfo: OscillatorNode
}

export function NewsVideoGallery({ videos }: NewsVideoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [musicEnabled, setMusicEnabled] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const ambientRef = useRef<AmbientBed | null>(null)
  const activeVideo = videos[activeIndex]

  function createAmbientBed() {
    if (ambientRef.current) return ambientRef.current
    if (typeof AudioContext === 'undefined') return null
    const context = new AudioContext()
    const master = context.createGain()
    const filter = context.createBiquadFilter()
    master.gain.value = 0.0001
    filter.type = 'lowpass'
    filter.frequency.value = 720
    filter.Q.value = 0.45
    filter.connect(master)
    master.connect(context.destination)

    const oscillators = [130.81, 196, 261.63].map((frequency, index) => {
      const oscillator = context.createOscillator()
      const level = context.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.value = frequency
      oscillator.detune.value = [-4, 2, 5][index]
      level.gain.value = [0.018, 0.011, 0.006][index]
      oscillator.connect(level)
      level.connect(filter)
      oscillator.start()
      return oscillator
    })

    const lfo = context.createOscillator()
    const lfoDepth = context.createGain()
    lfo.frequency.value = 0.07
    lfoDepth.gain.value = 0.035
    lfo.connect(lfoDepth)
    lfoDepth.connect(master.gain)
    lfo.start()

    ambientRef.current = { context, master, oscillators, lfo }
    return ambientRef.current
  }

  function setAmbientPlaying(playing: boolean) {
    const ambient = ambientRef.current
    if (!ambient) return
    const now = ambient.context.currentTime
    ambient.master.gain.cancelScheduledValues(now)
    ambient.master.gain.setTargetAtTime(playing ? 0.28 : 0.0001, now, playing ? 0.8 : 0.16)
    if (playing) void ambient.context.resume()
  }

  function toggleMusic() {
    if (musicEnabled) {
      setAmbientPlaying(false)
      setMusicEnabled(false)
      return
    }
    const ambient = createAmbientBed()
    if (!ambient) return
    setMusicEnabled(true)
    if (videoRef.current && !videoRef.current.paused) setAmbientPlaying(true)
  }

  useEffect(() => () => {
    const ambient = ambientRef.current
    if (!ambient) return
    ambient.oscillators.forEach((oscillator) => oscillator.stop())
    ambient.lfo.stop()
    void ambient.context.close()
    ambientRef.current = null
  }, [])

  if (!activeVideo) return null

  return (
    <section className="news-video-block" aria-labelledby="news-video-heading">
      <header className="news-media-heading">
        <div><p className="eyebrow">In motion</p><h2 id="news-video-heading">Conference highlights</h2></div>
        <div className="news-media-heading__tools"><p>Select a clip to see more moments from SAT’s participation.</p>{typeof AudioContext !== 'undefined' && <><button type="button" onClick={toggleMusic} aria-pressed={musicEnabled}>{musicEnabled ? <Music2 size={16} aria-hidden="true" /> : <VolumeX size={16} aria-hidden="true" />} Ambient music: {musicEnabled ? 'On' : 'Off'}</button><small>Optional original ambient bed. Starts only with video playback.</small></>}</div>
      </header>
      <div className="news-video-stage">
        <video ref={videoRef} key={activeVideo.src} controls playsInline preload="metadata" poster={activeVideo.poster} aria-label={activeVideo.title} onPlay={() => setAmbientPlaying(musicEnabled)} onPause={() => setAmbientPlaying(false)} onEnded={() => setAmbientPlaying(false)}>
          <source src={activeVideo.src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        <div className="news-video-stage__caption"><strong>{activeVideo.title}</strong><span>{activeVideo.caption}</span></div>
      </div>
      {videos.length > 1 && (
        <div className="news-video-selectors" aria-label="Choose a conference video">
          {videos.map((video, index) => (
            <button className={index === activeIndex ? 'active' : ''} type="button" key={video.src} onClick={() => { setAmbientPlaying(false); setActiveIndex(index) }} aria-pressed={index === activeIndex}>
              <span className="news-video-selectors__thumb"><img src={video.poster} alt="" loading="lazy" /><span><Play size={14} fill="currentColor" aria-hidden="true" /></span></span>
              <span><strong>{video.title}</strong><small>Play video</small></span>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
