export type OldestProducts = {
  products: {
    edges: Array<{
      node: {
        id: string
        title: string
        handle: string
        featuredImage: {
          url: string
          id: string
        }
        priceRange: {
          maxVariantPrice: {
            amount: string
          }
          minVariantPrice: {
            amount: string
          }
        }
      }
    }>
  }
}

export type Product = {
  product: {
    id: string
    handle: string
    title: string
    description: string
    options: Array<{
      id: string
      name: string
      values: Array<string>
    }>
    images: {
      nodes: Array<{
        id: string
        url: string
      }>
    }
    priceRange: {
      maxVariantPrice: {
        amount: string
      }
      minVariantPrice: {
        amount: string
      }
    }
    variants: {
      edges: Array<{
        node: {
          id: string
          title: string
          selectedOptions: Array<{
            name: string
            value: string
          }>
          price: {
            amount: string
          }
          image: {
            id: string
            url: string
          }
        }
      }>
    }
    featuredImage: {
      id: string
      url: string
    }
    tags: Array<string>
  }
}
