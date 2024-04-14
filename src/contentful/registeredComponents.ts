import { defineComponents } from '@contentful/experiences-sdk-react'
import Link from 'next/link'
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  DiscordLogoIcon,
} from '@radix-ui/react-icons'

import { Button, Separator } from '@/components/ui'

import { OldestProductsList } from '@/components/oldest-products'
import { Header, HeaderNav, HeaderItem } from '@/components/header'
import { Footer, FooterNav, FooterLink } from '@/components/footer'
import {
  ProductImage,
  ProductName,
  ProductPrice,
  ProductVariantOptions,
  ProductDescription,
  ProductCTA,
} from '@/components/product'
import { ThemeToggle } from '@/components/theme-toggle'
import { Banner } from '@/components/banner'

const transformed = (values: string[]) =>
  values.map((item) => ({
    value: item,
    displayName: item.charAt(0).toUpperCase() + item.slice(1),
  }))

defineComponents([
  {
    component: Link,
    definition: {
      id: 'link',
      name: 'Link',
      category: 'Base Components',
      children: true,
      variables: {
        href: {
          type: 'Text',
          group: 'style',
          description: 'Link Href',
          defaultValue: '/',
        },
      },
    },
    options: { wrapComponent: false },
  },
  {
    component: Button,
    definition: {
      id: 'button',
      name: 'Button',
      category: 'Base Components',
      children: true,
      builtInStyles: ['cfMargin', 'cfPadding', 'cfWidth'],
      variables: {
        text: {
          type: 'Text',
          group: 'style',
          description: 'Button Text',
          defaultValue: 'Button',
        },
        variant: {
          type: 'Text',
          group: 'style',
          description: 'Button Variant',
          validations: {
            in: transformed([
              'default',
              'destructive',
              'outline',
              'secondary',
              'ghost',
              'link',
            ]),
          },
        },
        type: {
          type: 'Text',
          group: 'style',
          description: 'Button Type',
          validations: {
            in: transformed(['submit', 'button', 'reset']),
          },
        },
      },
    },
    options: { wrapComponent: false },
  },
  {
    component: Separator,
    definition: {
      id: 'separator',
      name: 'Separator',
      category: 'Base Components',
      variables: {
        decorative: {
          type: 'Boolean',
          description: 'Whether or not the component is purely decorative.',
        },
        orientation: {
          type: 'Text',
          group: 'style',
          description: 'Either vertical or horizontal. Defaults to horizontal.',
          validations: {
            in: transformed(['"horizontal", "vertical"']),
          },
        },
      },
    },
    options: { wrapComponent: false },
  },
  {
    component: GitHubLogoIcon,
    definition: {
      id: 'github-icon',
      name: 'GithubIcon',
      category: 'Icon',
      builtInStyles: [
        'cfMargin',
        'cfPadding',
        'cfWidth',
        'cfHeight',
        'cfTextColor',
      ],
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: InstagramLogoIcon,
    definition: {
      id: 'instagram-icon',
      name: 'InstagramLogoIcon',
      category: 'Icon',
      builtInStyles: [
        'cfMargin',
        'cfPadding',
        'cfWidth',
        'cfHeight',
        'cfTextColor',
      ],
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: TwitterLogoIcon,
    definition: {
      id: 'twitter-icon',
      name: 'TwitterLogoIcon',
      category: 'Icon',
      builtInStyles: [
        'cfMargin',
        'cfPadding',
        'cfWidth',
        'cfHeight',
        'cfTextColor',
      ],
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: DiscordLogoIcon,
    definition: {
      id: 'discord-icon',
      name: 'DiscordLogoIcon',
      category: 'Icon',
      builtInStyles: [
        'cfMargin',
        'cfPadding',
        'cfWidth',
        'cfHeight',
        'cfTextColor',
      ],
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: ThemeToggle,
    definition: {
      id: 'theme-toggle',
      name: 'ThemeToggle',
      category: 'Functional Components',
      children: true,
      builtInStyles: ['cfMargin', 'cfPadding', 'cfWidth'],
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: Header,
    definition: {
      id: 'header',
      name: 'Header',
      category: 'Header Components',
      children: true,
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: HeaderNav,
    definition: {
      id: 'header-nav',
      name: 'HeaderNav',
      category: 'Header Components',
      children: true,
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: HeaderItem,
    definition: {
      id: 'header-item',
      name: 'HeaderItem',
      category: 'Header Components',
      children: true,
      variables: {
        href: {
          type: 'Text',
          defaultValue: '/',
        },
        text: {
          type: 'Text',
        },
      },
    },
    options: { wrapComponent: false },
  },
  {
    component: Footer,
    definition: {
      id: 'footer',
      name: 'Footer',
      category: 'Footer Components',
      children: true,
      variables: {
        title: {
          type: 'Text',
        },
        text: {
          type: 'Text',
        },
      },
    },
    options: { wrapComponent: false },
  },
  {
    component: FooterNav,
    definition: {
      id: 'footer-nav',
      name: 'FooterNav',
      category: 'Footer Components',
      children: true,
      builtInStyles: ['cfGap'],
      variables: {
        title: {
          type: 'Text',
        },
      },
    },
    options: { wrapComponent: false },
  },
  {
    component: FooterLink,
    definition: {
      id: 'footer-link',
      name: 'FooterLink',
      category: 'Footer Components',
      children: true,
      variables: {
        href: {
          type: 'Text',
          defaultValue: '/',
        },
        text: {
          type: 'Text',
        },
      },
    },
    options: { wrapComponent: false },
  },
  {
    component: OldestProductsList,
    definition: {
      id: 'oldest-products-list',
      name: 'OldestProductsList',
      category: 'Oldest Products Components',
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: ProductName,
    definition: {
      id: 'product-name',
      name: 'ProductName',
      category: 'Product Components',
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: ProductPrice,
    definition: {
      id: 'product-price',
      name: 'ProductPrice',
      category: 'Product Components',
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: ProductVariantOptions,
    definition: {
      id: 'product-variant-options',
      name: 'ProductVariantOptions',
      category: 'Product Components',
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: ProductImage,
    definition: {
      id: 'product-image',
      name: 'ProductImage',
      category: 'Product Components',
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: ProductImage,
    definition: {
      id: 'product-image',
      name: 'ProductImage',
      category: 'Product Components',
      builtInStyles: ['cfMargin', 'cfPadding', 'cfWidth'],
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: ProductDescription,
    definition: {
      id: 'product-description',
      name: 'ProductDescription',
      category: 'Product Components',
      builtInStyles: [
        'cfMargin',
        'cfPadding',
        'cfFontSize',
        'cfFontWeight',
        'cfLineHeight',
        'cfLetterSpacing',
        'cfTextColor',
        'cfTextAlign',
        'cfTextTransform',
        'cfTextBold',
        'cfTextItalic',
        'cfTextUnderline',
      ],
      variables: {},
    },
    options: { wrapComponent: false },
  },
  {
    component: ProductCTA,
    definition: {
      id: 'product-cta',
      name: 'ProductCTA',
      category: 'Product Components',
      children: true,
      builtInStyles: ['cfMargin', 'cfPadding', 'cfWidth'],
      variables: {
        text: {
          type: 'Text',
          group: 'style',
          description: 'Button Text',
          defaultValue: 'Button',
        },
        variant: {
          type: 'Text',
          group: 'style',
          description: 'Button Variant',
          validations: {
            in: transformed([
              'default',
              'destructive',
              'outline',
              'secondary',
              'ghost',
              'link',
            ]),
          },
        },
        type: {
          type: 'Text',
          group: 'style',
          description: 'Button Type',
          validations: {
            in: transformed(['submit', 'button', 'reset']),
          },
        },
      },
    },
    options: { wrapComponent: false },
  },
  {
    component: Banner,
    definition: {
      id: 'banner',
      name: 'Banner',
      category: 'Banner Components',
      builtInStyles: ['cfMargin', 'cfPadding', 'cfWidth'],
      variables: {
        image: {
          type: 'Media',
        },
      },
    },
    options: { wrapComponent: false },
  },
])
