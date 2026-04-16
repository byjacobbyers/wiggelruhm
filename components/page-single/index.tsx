import Sections from '@/components/sections'
import { cn } from '@/lib/utils'
import type { PageSingleProps } from '@/types/components/page-single-type'

export default function Page({ page }: PageSingleProps) {
  if (!page) return null
  const { sections = [], backgroundColor: backgroundColorRaw = 'primary' } = page
  const backgroundColor =
    backgroundColorRaw === 'lavaLamp' ? 'primary' : backgroundColorRaw ?? 'primary'
  const surfaceProps =
    backgroundColor === 'primary' || backgroundColor === 'secondary'
      ? { 'data-surface': backgroundColor as 'primary' | 'secondary' }
      : {}
  return (
    <div
      className={cn(
        'relative flex w-full min-h-screen flex-col items-center bg-background text-foreground'
      )}
    >
      <main
        data-background-color={backgroundColor}
        {...surfaceProps}
        className="relative z-10 flex w-full flex-1 flex-col items-center bg-background"
      >
        <Sections body={sections} />
      </main>
    </div>
  )
}
