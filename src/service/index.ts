import { GraphQLClient, gql } from 'graphql-request'

import type { OldestProducts, Product } from './interface'

const API = 'https://mock.shop/api'

const client = new GraphQLClient(API)

export const getOldestProducts = (): Promise<OldestProducts> => {
  const query = gql`
    query OldestProducts {
      products(first: 8, sortKey: CREATED_AT, reverse: true) {
        edges {
          node {
            id
            title
            handle
            featuredImage {
              url
              id
            }
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  `
  return client.request(query)
}

export const getProduct = (handle: string): Promise<Product> => {
  const query = gql`
        query Product {
            product(handle: "${handle}") {
                id
                handle
                title
                description
                options {
                    id
                    name
                    values
                }
                priceRange {
                    maxVariantPrice {
                        amount
                    }
                    minVariantPrice {
                        amount
                    }
                }
                images(first:250){
                    nodes{
                        id
                        url
                    }
                }
                variants(first: 20) {
                    edges {
                        node {
                            id
                            title
                            selectedOptions {
                                name
                                value
                            }
                            price {
                                amount
                            }
                            image {
                                id
                                url
                            }
                        }
                    }
                }
                featuredImage {
                    id
                    url
                }
                tags
            }
        }
    `
  return client.request(query)
}
