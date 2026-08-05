import { CircleAlert } from 'lucide-react'

export function ConfirmationNotice({ children }: { children: React.ReactNode }) {
  return <div className="notice" role="note"><CircleAlert size={18} aria-hidden="true" /><span>{children}</span></div>
}
