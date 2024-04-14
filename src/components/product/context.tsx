import { createContext, useContext } from 'react'
import type { OldestProducts, Product } from '@/service/interface'

const productContext = createContext<Product | null>(null)

export const ProductProvider = productContext.Provider

export const useProduct = () => {
  const product = useContext(productContext)
  if (!product) {
    throw new Error('useProduct must be used within a ProductProvider')
  }
  return product
}

const oldestProductsContext = createContext<OldestProducts | null>(null)

export const OldestProductsProvider = oldestProductsContext.Provider

export const useOldestProducts = () => {
  const oldestProducts = useContext(oldestProductsContext)
  if (!oldestProducts) {
    throw new Error(
      'useOldestProducts must be used within a OldestProductsProvider',
    )
  }
  return oldestProducts
}
