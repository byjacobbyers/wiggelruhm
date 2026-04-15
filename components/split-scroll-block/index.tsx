'use client'

import { motion } from 'framer-motion'
import SimpleText from '@/components/simple-text'
import SanityImage from '@/components/sanity-image'
import {
  normalizeSectionBackground,
  sectionSemanticSurfaceClasses,
  sectionSurfaceAttrs,
} from '@/lib/section-background'
import { sectionPaddingToClass } from '@/lib/section-padding'
import { cn } from '@/lib/utils'
import type { SplitScrollBlockProps } from '@/types/components/split-scroll-block-type'

export default function SplitScrollBlock({
  active = true,
  componentIndex = 0,
  sectionPadding,
  anchor,
  backgroundColor,
  title,
  items = [],
}: SplitScrollBlockProps) {
  if (!active || !items?.length) return null

  const bg = normalizeSectionBackground(backgroundColor)

  return (
    <section
      id={anchor || `split-scroll-block-${componentIndex}`}
      data-background-color={bg}
      className={cn(
        'split-scroll-block w-full flex justify-center px-5',
        sectionSemanticSurfaceClasses(bg),
        sectionPaddingToClass(sectionPadding, 'default')
      )}
      {...sectionSurfaceAttrs(bg)}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start"
        >
          <div className="lg:sticky lg:top-24 lg:self-start">
            {title && Array.isArray(title) && title.length > 0 ? (
              <div className="content">
                <SimpleText content={title} />
              </div>
            ) : null}
          </div>
          <div className="flex flex-col gap-12 pt-0 md:gap-16 lg:pt-[25vh]">
            {items.map((item, i) => (
              <article
                key={item._key ?? `split-scroll-item-${i}`}
                className="flex min-h-[12.5vh] md:min-h-[50vh] flex-col gap-4 md:gap-6"
              >
                {item.image ? (
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border shadow-lg">
                    <SanityImage
                      image={item.image}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                {item.content && Array.isArray(item.content) ? (
                  <div className="content">
                    <SimpleText content={item.content} />
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
