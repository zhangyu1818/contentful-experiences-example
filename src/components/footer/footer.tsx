import { ArchiveIcon } from '@radix-ui/react-icons'

export interface FooterProps {
  title: string
  text: string
  children: React.ReactNode
}

export const Footer = (props: FooterProps) => {
  const { title, text, children } = props
  return (
    <footer className='mt-12 w-full border-t py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] lg:gap-12'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <ArchiveIcon className='h-6 w-6' />
              <h3 className='text-lg font-bold'>{title}</h3>
            </div>
            <p className='text-sm text-secondary-foreground dark:text-gray-400'>
              {text}
            </p>
          </div>
          {children}
        </div>
      </div>
    </footer>
  )
}
