import { useRouter } from 'next/router'
import Link from 'next/link'
import { useProduct } from '@/components/product/context'
import { Toggle } from '@/components/ui'
import { cn } from '@/lib/utils'

export const ProductVariantOptions = (
  props: ExperiencesProps<HTMLDivElement>,
) => {
  const { className, ...rest } = props
  const router = useRouter()
  const { product } = useProduct()

  const { options, handle } = product

  const searchParams = router.query as Record<string, unknown>

  return (
    <div className={cn('flex flex-col gap-4', className)} {...rest}>
      {options.map((option) => {
        const currentValue = searchParams[option.name]
        return (
          <div key={option.id}>
            <h2 className='font-semibold'>{option.name}</h2>
            <ul className='flex flex-wrap gap-2'>
              {option.values.map((value) => {
                return (
                  <li className='mt-2' key={value}>
                    <Link
                      href={{
                        pathname: '/product/[handle]',
                        query: { ...router.query, [option.name]: value },
                      }}
                      shallow
                    >
                      <Toggle
                        className='min-w-8'
                        variant='outline'
                        size='sm'
                        pressed={currentValue === value}
                      >
                        {value}
                      </Toggle>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
