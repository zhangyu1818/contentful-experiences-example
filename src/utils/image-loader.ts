// Docs: https://www.contentful.com/developers/docs/references/images-api/
export function contentfulLoader({ src, width, quality }: any) {
  const url = new URL(`https://${src}`)
  url.searchParams.set('fm', 'webp')
  url.searchParams.set('w', width.toString())
  url.searchParams.set('q', (quality || 75).toString())
  return url.href
}
