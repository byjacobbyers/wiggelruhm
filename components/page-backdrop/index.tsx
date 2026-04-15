import Grainient from '@/components/Grainient'
import { cn } from '@/lib/utils'

/**
 * Viewport-locked Grainient backdrop (lava lamp).
 *
 * Uses `fixed inset-0` so the layer is sized to the **viewport**, not the page’s
 * scroll height. Page content should sit above with a higher z-index (e.g. `main`
 * with `relative z-10`).
 */
export default function PageBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 z-0 overflow-hidden',
        className
      )}
      aria-hidden
    >
      <div className="h-full min-h-0 w-full" data-page-backdrop-root>
        <Grainient
          className="h-full min-h-0"
          color1="#f798b0"
          color2="#a098d0"
          color3="#fab47c"
          timeSpeed={0.9}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
    </div>
  )
}
