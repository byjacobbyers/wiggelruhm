import type { SectionBackgroundColor } from '@/lib/section-background'
import type { SectionPaddingValue } from '@/lib/section-padding'

/** Portable text block (simpleText) — aligned with FAQ / column usage */
export type SplitScrollBlockItem = {
  _key?: string
  image?: {
    asset?: { metadata?: { dimensions?: { width?: number; height?: number } } }
    alt?: string
    [key: string]: unknown
  } | null
  content?: unknown
}

export type SplitScrollBlockType = {
  _type: 'splitScrollBlock'
  _key?: string
  active?: boolean
  sectionPadding?: SectionPaddingValue | null
  anchor?: string
  backgroundColor?: SectionBackgroundColor
  title?: unknown
  items?: SplitScrollBlockItem[]
}

export type SplitScrollBlockProps = {
  active?: boolean
  componentIndex?: number
  sectionPadding?: SectionPaddingValue | null
  anchor?: string
  backgroundColor?: SectionBackgroundColor
  title?: unknown
  items?: SplitScrollBlockItem[]
}
