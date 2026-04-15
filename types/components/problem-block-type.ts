import type { SectionBackgroundColor } from '@/lib/section-background'
import type { SectionPaddingValue } from '@/lib/section-padding'

export type ProblemBlockIcon = 'LuClock' | 'LuCode' | 'LuLayers'

export type ProblemBlockColumn = {
  _key?: string
  icon?: ProblemBlockIcon | string
  image?: {
    asset?: { metadata?: { dimensions?: { width?: number; height?: number } } }
    alt?: string
    [key: string]: unknown
  } | null
  content?: unknown
}

export type ProblemBlockType = {
  _type: 'problemBlock'
  _key?: string
  active?: boolean
  sectionPadding?: SectionPaddingValue | null
  anchor?: string
  backgroundColor?: SectionBackgroundColor
  content?: unknown
  columns?: ProblemBlockColumn[]
  excerpt?: unknown
}

export type ProblemBlockProps = {
  active?: boolean
  componentIndex?: number
  sectionPadding?: SectionPaddingValue | null
  anchor?: string
  backgroundColor?: SectionBackgroundColor
  content?: unknown
  columns?: ProblemBlockColumn[]
  excerpt?: unknown
}

export type ProblemColumnVisualProps = {
  column: ProblemBlockColumn
}
