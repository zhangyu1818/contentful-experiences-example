import { cn } from '@/lib/utils'

export interface FooterNavProps extends ExperiencesProps {
  title: string
  children: React.ReactNode
}

export const FooterNav = (props: FooterNavProps) => {
  const { title, children, className, ...rest } = props
  return (
    <div className={cn('flex flex-col', className)} {...rest}>
      <h3 className='text-lg font-bold'>{title}</h3>
      <div className='grid gap-2'>{children}</div>
    </div>
  )
}
