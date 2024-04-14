import { createClient } from 'contentful'

export const getClient = (token: string) =>
  createClient({
    // your space id
    space: process.env.CTFL_SPACE_ID!,
    // your environment id
    environment: process.env.CTFL_ENV_ID,
    // Supported values: 'preview.contentful.com' or 'cdn.contentful.com',
    host: process.env.CTFL_API_HOST,
    // needs to be access token if host = 'cdn.contentful.com' and preview token if 'preview.contentful.com'
    accessToken: token,
  })
