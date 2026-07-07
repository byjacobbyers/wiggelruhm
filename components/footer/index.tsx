import Route from '@/components/route'
import { CookieSettingsTrigger } from '@/components/cookie-consent-banner/cookie-settings-trigger'
import {
  formatNonprofitDisclaimer,
  formatSiteAddress,
} from '@/lib/format-site-address'
import type { FooterProps } from '@/types/components/footer-type'

export default function Footer({ navigation, site }: FooterProps) {
  const year = new Date().getFullYear()
  const address = formatSiteAddress(site)
  const nonprofitLine = formatNonprofitDisclaimer(site)

  return (
    <footer className="border-t-4 border-primary bg-background px-4 py-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <small>© {year} Wiggelruhm. All rights reserved.</small>
          {address && <p>{address}</p>}
          {nonprofitLine && <p>{nonprofitLine}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {navigation?.items && navigation.items.length > 0 && (
            <nav className="flex flex-wrap items-center gap-6">
              {navigation.items.map((item, i) => (
                <Route key={i} data={item} className="text-sm hover:opacity-80">
                  {item.title || 'Link'}
                </Route>
              ))}
            </nav>
          )}
          <CookieSettingsTrigger />
        </div>
      </div>
    </footer>
  )
}
