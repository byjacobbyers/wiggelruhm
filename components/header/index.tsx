import Link from 'next/link'
import Route from '@/components/route'
import { BaseRouteType } from '@/types/objects/route-type'

type HeaderProps = {
  navigation?: { items?: BaseRouteType[] } | null
}

export default function Header({ navigation }: HeaderProps) {

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-background px-5">
      <div className="flex h-16 items-center justify-between">
        <Link href="/">
          <h1
            className="text-2xl font-bold tracking-[-0.25rem] leading-none p-0 lg:text-3xl"
            title="Wiggelrhum"
          >
            Wiggelrhum
          </h1>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navigation?.items?.map((item, i) => (
            <Route key={i} data={item} className="text-sm font-medium hover:opacity-80">
              {item.title || 'Link'}
            </Route>
          ))}
        </nav>
      </div>
    </header>
  )
}
