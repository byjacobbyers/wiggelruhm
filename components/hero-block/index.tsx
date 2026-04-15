'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Route from '@/components/route'
import SanityImage from '@/components/sanity-image'
import SimpleText from '@/components/simple-text'
import {
  normalizeSectionBackground,
  sectionSemanticSurfaceClasses,
  sectionSurfaceAttrs,
} from '@/lib/section-background'
import { normalizeSectionContentLayout } from '@/lib/section-content-layout'
import { sectionPaddingToClass } from '@/lib/section-padding'
import { cn } from '@/lib/utils'
import type { HeroBlockProps } from '@/types/components/hero-block-type'
import { Card } from '@/components/ui/card'

export default function HeroBlock({
  active = true,
  componentIndex = 0,
  sectionPadding,
  layout = 'image-right',
  anchor,
  contentLayout,
  backgroundColor,
  image,
  content,
  cta,
}: HeroBlockProps) {
  if (!active) return null

  const bg = normalizeSectionBackground(backgroundColor)
  const innerContentLayout = normalizeSectionContentLayout(contentLayout)
  const layoutClass = layout === 'image-left' ? 'md:flex-row-reverse' : 'md:flex-row'

  return (
    <section
      id={anchor || `hero-block-${componentIndex}`}
      data-background-color={bg}
      {...sectionSurfaceAttrs(bg)}
      className={cn(
        'hero-block w-full flex justify-center px-5',
        sectionSemanticSurfaceClasses(bg),
        sectionPaddingToClass(sectionPadding, 'default')
      )}
    >
      <div
        className={`container flex flex-wrap md:flex-nowrap ${layoutClass} flex-col-reverse items-center w-full gap-10 gap-y-16`}
      >
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: componentIndex !== 0 ? 0.5 : 0 }}
        >
          {innerContentLayout === 'card' ? (
            <Card className="w-full">
              {content ? (
                <div className="content">
                  <SimpleText content={content} />
                </div>
              ) : null}
              {cta?.active && cta?.route ? (
                <div className="flex">
                  <Button asChild variant={bg === 'secondary' ? 'secondary' : 'default'} className="mt-5">
                    <Route data={cta.route as Parameters<typeof Route>[0]['data']}>
                      {(cta.route as { title?: string }).title || 'Learn More'}
                    </Route>
                  </Button>
                </div>
              ) : null}
            </Card>
          ) : (
            <>
              {content ? (
                <div className="content">
                  <SimpleText content={content} />
                </div>
              ) : null}
              {cta?.active && cta?.route ? (
                <div className="flex">
                  <Button asChild variant={bg === 'secondary' ? 'secondary' : 'default'} className="mt-5">
                    <Route data={cta.route as Parameters<typeof Route>[0]['data']}>
                      {(cta.route as { title?: string }).title || 'Learn More'}
                    </Route>
                  </Button>
                </div>
              ) : null}
            </>
          )}
        </motion.div>
        <motion.div
          className="relative mx-auto w-full max-w-xl overflow-hidden rounded-lg md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: componentIndex !== 0 ? 0.5 : 0 }}
        >
          <SanityImage
            image={image}
            fill={false}
            alt={
              image && typeof image === 'object' && 'alt' in image && typeof (image as { alt?: string }).alt === 'string'
                ? (image as { alt?: string }).alt
                : 'Hero'
            }
            className="h-auto w-full"
            sizes="(max-width: 768px) min(100vw, 42rem), min(50vw, 42rem)"
          />
        </motion.div>
      </div>
    </section>
  )
}
