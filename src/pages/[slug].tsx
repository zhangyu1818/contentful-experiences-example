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
import { getOldestProducts } from '@/service'
import { OldestProductsProvider } from '@/components/product/context'

const localeCode = 'en-US'

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  if (!params?.slug) {
    return {
      notFound: true,
    }
  }

  const slug = params.slug as string

  const experience = await fetchBySlug({
    client,
    slug, //could be fetched from the context
    experienceTypeId: process.env.CTFL_EXPERIENCE_CONTENT_TYPE_ID!,
    localeCode,
  })

  const oldestProducts = await getOldestProducts()

  //Serialize the experience manually
  const experienceJSON = JSON.stringify(experience)

  return {
    props: {
      experienceJSON: experienceJSON,
      localeCode,
      oldestProducts,
    },
  }
}

export default function Page({
  experienceJSON,
  localeCode,
  oldestProducts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const experience = createExperience(experienceJSON)

  return (
    <OldestProductsProvider value={oldestProducts}>
      <ExperienceRoot experience={experience} locale={localeCode} />
    </OldestProductsProvider>
  )
}
