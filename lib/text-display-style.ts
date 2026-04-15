import type { CSSProperties } from 'react'

/** Portable text “display” block — uses the same tokens as `.content .display` in globals. */
export const textDisplayHeadingStyle: CSSProperties = {
  margin: 0,
  fontSize: 'var(--text-display)',
  lineHeight: 'var(--text-display--line-height)',
  letterSpacing: 'var(--text-display--letter-spacing)',
  fontWeight: 'var(--text-display--font-weight)',
}
