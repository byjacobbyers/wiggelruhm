'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type ImageBlockProps = {
  active?: boolean
  componentIndex?: number
  anchor?: string
  image?: { asset?: { url?: string }; alt?: string } | null
}

export default function ImageBlock({
  active = true,
  componentIndex = 0,
  anchor,
  image,
}: ImageBlockProps) {
  if (!active) return null

  return (
    <section
      id={anchor || `image-block-${componentIndex}`}
      className="image-block w-full flex justify-center px-5 py-12"
    >
      <div className="container flex flex-col items-center gap-6">
        {image?.asset?.url ? (
          <motion.div
            className="relative w-full aspect-video"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={image.asset.url}
              alt={image.alt || 'Image'}
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
