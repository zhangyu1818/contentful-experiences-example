import { cn } from '@/lib/utils'

export const Header = (props: ExperiencesProps) => {
  const { className, ...rest } = props
  return (
    <header
      className={cn(
        className,
        'sticky top-0 z-10 flex w-full items-center gap-2 bg-background/85 px-2 py-1 backdrop-blur md:px-6 md:py-4',
      )}
      {...rest}
    />
  )
}
