'use client'

import { motion } from 'framer-motion'
import NormalText from '@/components/normal-text'
import {
  normalizeSectionBackground,
  sectionSemanticSurfaceClasses,
  sectionSurfaceAttrs,
} from '@/lib/section-background'
import { normalizeSectionContentLayout } from '@/lib/section-content-layout'
import { sectionPaddingToClass } from '@/lib/section-padding'
import { cleanStega } from '@/lib/stega'
import { cn } from '@/lib/utils'
import type { TextBlockProps } from '@/types/components/text-block-type'
import { Card } from '@/components/ui/card'

export default function TextBlock({
  active = true,
  componentIndex = 0,
  sectionPadding,
  anchor,
  contentLayout,
  backgroundColor,
  contentAlignment = 'left',
  content,
}: TextBlockProps) {
  if (!active) return null

  const bg = normalizeSectionBackground(backgroundColor)
  const layout = normalizeSectionContentLayout(contentLayout)
  const alignRaw = cleanStega(typeof contentAlignment === 'string' ? contentAlignment : '') || 'left'
  const alignClass =
    alignRaw === 'center' ? 'text-center' : alignRaw === 'right' ? 'text-right' : 'text-left'
  const itemsClass =
    alignRaw === 'center' ? 'items-center' : alignRaw === 'right' ? 'items-end' : 'items-start'

  return (
    <section
      id={anchor || `text-block-${componentIndex}`}
      data-background-color={bg}
      className={cn(
        'text-block w-full flex justify-center px-5',
        sectionSemanticSurfaceClasses(bg),
        sectionPaddingToClass(sectionPadding, 'default')
      )}
      {...sectionSurfaceAttrs(bg)}
    >
      <motion.div
        className={cn('container flex w-full flex-col', alignClass, itemsClass)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {layout === 'card' ? (
          <Card className="w-full">
            <div className="content text-balance">
              <NormalText content={content} />
            </div>
          </Card>
        ) : (
          <div className="content text-balance">
            <NormalText content={content} />
          </div>
        )}
      </motion.div>
    </section>
  )
}
