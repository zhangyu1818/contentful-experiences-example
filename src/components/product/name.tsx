import { useProduct } from '@/components/product/context'
import { cn } from '@/lib/utils'

export const ProductName = (props: ExperiencesProps<HTMLHeadingElement>) => {
  const { className, ...rest } = props
  const { product } = useProduct()

  return (
    <h1
      className={cn('text-6xl font-extrabold tracking-wide', className)}
      {...rest}
    >
      {product.title}
    </h1>
  )
}
