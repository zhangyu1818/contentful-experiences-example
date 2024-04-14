import { useProduct } from '@/components/product/context'

export const ProductDescription = (
  props: ExperiencesProps<HTMLParagraphElement>,
) => {
  const { product } = useProduct()
  return <p {...props}>{product.description}</p>
}
