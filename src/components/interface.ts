import React from 'react'

declare global {
  interface ExperiencesProps<T extends HTMLElement = HTMLElement> {
    className?: string
    onMouseDown?: React.MouseEventHandler<T>
    onClick?: React.MouseEventHandler<T>
    'data-cf-node-id'?: unknown
    'data-cf-node-block-id'?: unknown
    'data-cf-node-block-type'?: unknown
  }
}
