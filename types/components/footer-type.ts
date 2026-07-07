import type { BaseRouteType } from '@/types/objects/route-type'
import type { SiteType } from '@/lib/seo'

export type FooterProps = {
  navigation?: { items?: BaseRouteType[] } | null
  site?: SiteType | null
}
