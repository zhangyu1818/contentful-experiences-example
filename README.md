# contentful-experiences-example

Basic template examples, including dynamic pages and product template pages.

## Setup

Create a new Experiences Type in Contentful.

It should include three Short Text fields:

- Title
- Slug
- Product (this field is for the product ID used in previews)

## Experiences Preview

Add two preview URLs, one for a regular page and one for a product template page:

- http://localhost:3000/{entry.fields.slug}
- http://localhost:3000/product/{entry.fields.product}

Use the first URL for pages with a slug.
Use the second URL for pages using the product template.

## ENV

```text
CTFL_SPACE_ID=
CTFL_ENV_ID=
CTFL_API_HOST=
CTFL_TOKEN=
CTFL_EXPERIENCE_CONTENT_TYPE_ID=
```
