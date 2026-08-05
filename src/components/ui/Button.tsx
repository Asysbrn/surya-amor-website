import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'dark' | 'ghost'

interface CommonProps {
  children: ReactNode
  variant?: Variant
  arrow?: boolean
  className?: string
}

interface LinkButtonProps extends CommonProps {
  to: string
  type?: never
}

type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & CommonProps & {
  to?: never
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = 'primary', arrow = false, className = '' } = props
  const classes = `button button--${variant} ${className}`.trim()
  const content = <>{children}{arrow && <ArrowRight aria-hidden="true" size={17} />}</>

  if ('to' in props && props.to) return <Link className={classes} to={props.to}>{content}</Link>

  const { to: _to, variant: _variant, arrow: _arrow, ...buttonProps } = props as NativeButtonProps & { to?: undefined }
  void _to
  void _variant
  void _arrow
  return <button className={classes} {...buttonProps}>{content}</button>
}

export function ExternalButton({ children, className = '', ...props }: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={`button button--primary ${className}`} {...props}>{children}</a>
}
