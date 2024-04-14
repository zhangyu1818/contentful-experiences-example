import { cn } from '@/lib/utils'

export interface HeaderNavProps extends ExperiencesProps {
  children: React.ReactNode
}

export const HeaderNav = (props: HeaderNavProps) => {
  const { className, ...rest } = props
  return (
    <nav
      className={cn(className, 'flex flex-1 gap-2 font-semibold md:gap-6')}
      {...rest}
    />
  )
}
