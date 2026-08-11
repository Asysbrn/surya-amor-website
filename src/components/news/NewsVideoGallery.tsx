import { Play } from 'lucide-react'
import { useState } from 'react'
import type { NewsVideo } from '../../data/news'

interface NewsVideoGalleryProps {
  videos: NewsVideo[]
}

export function NewsVideoGallery({ videos }: NewsVideoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeVideo = videos[activeIndex]

  if (!activeVideo) return null

  return (
    <section className="news-video-block" aria-labelledby="news-video-heading">
      <header className="news-media-heading">
        <div><p className="eyebrow">In motion</p><h2 id="news-video-heading">Conference highlights</h2></div>
        <p>Select a clip to see more moments from SAT’s participation.</p>
      </header>
      <div className="news-video-stage">
        <video key={activeVideo.src} controls playsInline preload="metadata" poster={activeVideo.poster} aria-label={activeVideo.title}>
          <source src={activeVideo.src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        <div className="news-video-stage__caption"><strong>{activeVideo.title}</strong><span>{activeVideo.caption}</span></div>
      </div>
      {videos.length > 1 && (
        <div className="news-video-selectors" aria-label="Choose a conference video">
          {videos.map((video, index) => (
            <button className={index === activeIndex ? 'active' : ''} type="button" key={video.src} onClick={() => setActiveIndex(index)} aria-pressed={index === activeIndex}>
              <span className="news-video-selectors__thumb"><img src={video.poster} alt="" loading="lazy" /><span><Play size={14} fill="currentColor" aria-hidden="true" /></span></span>
              <span><strong>{video.title}</strong><small>Play video</small></span>
            </button>
          ))}
        </div>
      )}
    </section>
  )
}
