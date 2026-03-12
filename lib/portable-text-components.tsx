import { buildRouteProps } from '@/lib/route-resolver'
import type { BaseRouteType } from '@/types/objects/route-type'

type LinkWithRouteValue = {
  _type?: string
  route?: BaseRouteType
}

export const portableTextComponents = {
  marks: {
    linkWithRoute: ({
      value,
      children,
    }: {
      value?: LinkWithRouteValue
      children?: React.ReactNode
    }) => {
      if (!value?.route) return <>{children}</>
      const props = buildRouteProps(value.route)
      return (
        <a
          {...props}
          className="text-primary underline underline-offset-2 hover:opacity-90"
        >
          {children}
        </a>
      )
    },
  },
}
