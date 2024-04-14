import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface FooterLinkProps extends ExperiencesProps {
  href: string
  text: string
}

export const FooterLink = (props: FooterLinkProps) => {
  const { href, text, className, ...rest } = props
  return (
    <Link
      href={href}
      className={cn('text-sm underline-offset-4 hover:underline', className)}
      {...rest}
    >
      {text}
    </Link>
  )
}
