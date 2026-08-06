import { Archive, FileCheck2, Files, ScanLine } from 'lucide-react'

const stages = [
  { icon: Files, title: 'Prepare', text: 'Review and organize the source material.' },
  { icon: ScanLine, title: 'Capture', text: 'Digitize using the agreed approach.' },
  { icon: FileCheck2, title: 'Structure', text: 'Review, index and prepare the output.' },
  { icon: Archive, title: 'Deliver', text: 'Provide files in the agreed format.' },
]

export function DigitizationWorkflow() {
  return (
    <div className="workflow-motion" role="img" aria-labelledby="workflow-motion-title workflow-motion-description">
      <div className="workflow-motion__header">
        <span>Physical source</span>
        <strong id="workflow-motion-title">From records to usable digital information</strong>
        <span>Digital output</span>
      </div>
      <p className="sr-only" id="workflow-motion-description">An animated four-stage workflow showing preparation, capture, structuring and digital delivery.</p>
      <div className="workflow-motion__track" aria-hidden="true"><span /></div>
      <div className="workflow-motion__stages">
        {stages.map(({ icon: Icon, title, text }, index) => (
          <div className="workflow-motion__stage" key={title}>
            <span className="workflow-motion__number">0{index + 1}</span>
            <div className="workflow-motion__icon"><Icon size={24} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className="workflow-motion__scan" aria-hidden="true"><span /></div>
    </div>
  )
}
