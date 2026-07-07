export type SiteAddressFields = {
  address?: string | null
  addressLocality?: string | null
  addressRegion?: string | null
  postalCode?: string | null
}

export function formatSiteAddress(
  site: SiteAddressFields | null | undefined
): string | null {
  if (!site) return null

  const street = site.address?.trim()
  const locality = site.addressLocality?.trim()
  const region = site.addressRegion?.trim()
  const postal = site.postalCode?.trim()

  console.log('street', street)
  console.log('locality', locality)
  console.log('region', region)
  console.log('postal', postal)

  if (!street && !locality && !region && !postal) return null

  const cityStateZip = [locality, [region, postal].filter(Boolean).join(' ')]
    .filter(Boolean)
    .join(', ')

  return [street, cityStateZip].filter(Boolean).join(', ')
}

export function formatNonprofitDisclaimer(site: {
  title?: string | null
  organizationJsonLd?: { name?: string | null; nonprofitId?: string | null } | null
} | null | undefined): string | null {
  const ein = site?.organizationJsonLd?.nonprofitId?.trim()
  if (!ein) return null

  const name =
    site?.organizationJsonLd?.name?.trim() ||
    site?.title?.trim() ||
    'Wiggelruhm'

  return `${name} is a registered 501(c)(3) nonprofit. EIN ${ein}.`
}
