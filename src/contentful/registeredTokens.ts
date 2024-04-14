// src/registeredTokens.ts

import { defineDesignTokens } from '@contentful/experiences-sdk-react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

const resolveColor = (
  color: Record<string, unknown>,
  prefix = '',
): Record<string, string> => {
  return Object.entries(color).reduce((acc, [key, value]) => {
    if (typeof value === 'string') {
      if (value.startsWith('#')) {
        return { ...acc, [prefix ? `${prefix}.${key}` : key]: value }
      }
      return acc
    }

    return {
      ...acc,
      ...resolveColor(value as Record<string, unknown>, key),
    }
  }, {})
}

// register design tokens
defineDesignTokens({
  spacing: fullConfig.theme.spacing,
  textColor: {
    ...resolveColor(fullConfig.theme.textColor),
    black: '#000000',
    white: '#ffffff',
    inherit: 'inherit',
  },
  fontSize: Object.entries(fullConfig.theme.fontSize).reduce(
    (acc, [key, [value]]) => ({ ...acc, [key]: value }),
    {},
  ),
})
