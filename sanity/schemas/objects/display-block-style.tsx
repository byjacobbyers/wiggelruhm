import type { ReactNode } from 'react'
import { textDisplayHeadingStyle } from '@/lib/text-display-style'

/** Studio preview for block style `display` — same `--text-display*` sizing as the site */
export function DisplayBlockStyle(props: { children?: ReactNode }) {
  return <h1 style={textDisplayHeadingStyle}>{props.children}</h1>
}
