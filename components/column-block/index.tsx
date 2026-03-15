'use client'

import { motion } from 'framer-motion'
import SimpleText from '@/components/simple-text'
import SanityImage from '@/components/sanity-image'
import Route from '@/components/route'
import { Button } from '@/components/ui/button'

type ColumnBlockProps = {
  active?: boolean
  componentIndex?: number
  anchor?: string
  title?: string
  columns?: Array<{
    _key?: string
    title?: string
    content?: unknown
    image?: {
      asset?: { metadata?: { dimensions?: { width?: number; height?: number } } }
      [key: string]: unknown
    } | null
    cta?: { active?: boolean; route?: { title?: string; [key: string]: unknown } } | null
  }>
}

export default function ColumnBlock({
  active = true,
  componentIndex = 0,
  anchor,
  title,
  columns,
}: ColumnBlockProps) {
  if (!active) return null
  const columnCount = columns?.length || 1
  const gridCols =
    columnCount === 1
      ? 'grid-cols-1'
      : columnCount === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : columnCount === 3
          ? 'grid-cols-1 md:grid-cols-3'
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'

  return (
    <section
      id={anchor || `column-block-${componentIndex}`}
      className="column-block w-full flex justify-center px-5"
    >
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center justify-center"
        >
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-center mb-8">
              {title}
            </h2>
          )}
          {columns && Array.isArray(columns) && columns.length > 0 && (
            <div className={`grid ${gridCols} gap-8 md:gap-12 md:max-w-lg`}>
              {columns.map((column, index) => (
                <div key={column._key || index} className="flex flex-col text-center">
                  {column.image && (
                    <div className="mb-6">
                      <SanityImage
                        image={column.image}
                        width={column.image?.asset?.metadata?.dimensions?.width || 400}
                        height={column.image?.asset?.metadata?.dimensions?.height || 300}
                        fill={false}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                  {column.title && (
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-balance">
                      {column.title}
                    </h3>
                  )}
                  {column.content && Array.isArray(column.content) ? (
                    <div className="mb-6 text-balance">
                      <SimpleText content={column.content} />
                    </div>
                  ) : null}
                  {column.cta && column.cta.active && column.cta.route && (
                    <div className="mt-auto">
                      <Route data={column.cta.route as Parameters<typeof Route>[0]['data']}>
                        <Button variant="secondary">
                          {String((column.cta.route as { title?: string }).title || 'Learn More')}
                        </Button>
                      </Route>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
