import PageBackdrop from '@/components/page-backdrop'
import Sections from '@/components/sections'
import { cn } from '@/lib/utils'
import type { PageSingleProps } from '@/types/components/page-single-type'

export default function Page({ page }: PageSingleProps) {
  if (!page) return null
  const { sections = [], backgroundColor = 'primary' } = page
  const isLavaLamp = backgroundColor === 'lavaLamp'
  const surfaceProps =
    backgroundColor === 'primary' || backgroundColor === 'secondary'
      ? { 'data-surface': backgroundColor as 'primary' | 'secondary' }
      : {}
  return (
    <div
      className={cn(
        'relative flex w-full min-h-screen flex-col items-center text-foreground',
        !isLavaLamp && 'bg-background'
      )}
    >
      {isLavaLamp ? <PageBackdrop /> : null}
      <main
        data-background-color={backgroundColor}
        {...surfaceProps}
        className={cn(
          'relative z-10 flex w-full flex-1 flex-col items-center',
          isLavaLamp ? 'bg-transparent' : 'bg-background'
        )}
      >
        <Sections body={sections} />
      </main>
    </div>
  )
}
