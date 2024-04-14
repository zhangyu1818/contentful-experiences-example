import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Children } from 'react'

export interface HeaderItemProps extends ExperiencesProps<HTMLAnchorElement> {
  href: string
  text?: string
  children?: React.ReactNode
}

export const HeaderItem = (props: HeaderItemProps) => {
  const { className, children, text, href = '/', ...rest } = props
  const emptyChildren = Children.count(children) === 0
  return (
    <Link
      href={href}
      className={cn(
        className,
        'block rounded-md px-2 py-1 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none md:px-4 md:py-2 md:text-base',
      )}
      {...rest}
    >
      {emptyChildren ? text : children}
    </Link>
  )
}
