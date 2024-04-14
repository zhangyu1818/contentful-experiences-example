import {
  fetchBySlug,
  ExperienceRoot,
  createExperience,
} from '@contentful/experiences-sdk-react'
import { client } from '@/contentful/client'
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { getProduct } from '@/service'
import { ProductProvider } from '@/components/product/context'

const localeCode = 'en-US'

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  if (!params?.handle) {
    return {
      notFound: true,
    }
  }

  const handle = params.handle as string

  const experience = await fetchBySlug({
    client,
    slug: 'product',
    experienceTypeId: process.env.CTFL_EXPERIENCE_CONTENT_TYPE_ID!,
    localeCode,
  })

  const product = await getProduct(handle)

  const experienceJSON = JSON.stringify(experience)

  return {
    props: {
      experienceJSON: experienceJSON,
      localeCode,
      product,
    },
  }
}

export default function Page({
  experienceJSON,
  localeCode,
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const experience = createExperience(experienceJSON)

  return (
    <ProductProvider value={product}>
      <ExperienceRoot experience={experience} locale={localeCode} />
    </ProductProvider>
  )
}
