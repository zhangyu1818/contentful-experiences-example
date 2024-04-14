import { useProduct } from '@/components/product/context'
import { createRangeText } from '@/utils'
import { cn } from '@/lib/utils'

export const ProductPrice = (props: ExperiencesProps<HTMLParagraphElement>) => {
  const { className, ...rest } = props

  const { product } = useProduct()

  const priceRangeText = createRangeText(
    product.priceRange.minVariantPrice.amount,
    product.priceRange.maxVariantPrice.amount,
  )

  return (
    <p className={cn('font-semibold', className)} {...rest}>
      {priceRangeText}
    </p>
  )
}
