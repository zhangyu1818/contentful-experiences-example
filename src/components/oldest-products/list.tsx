import { useOldestProducts } from '@/components/product/context'
import { Grid } from '@/components/grid'
import { ProductCard } from '@/components/product/card'

export const OldestProductsList = (
  props: ExperiencesProps<HTMLUListElement>,
) => {
  const {
    products: { edges },
  } = useOldestProducts()
  return (
    <Grid asChild>
      <ul {...props}>
        {edges.map(({ node }) => {
          return (
            <li key={node.id}>
              <ProductCard product={node} />
            </li>
          )
        })}
      </ul>
    </Grid>
  )
}
