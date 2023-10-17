'use client'

import { cn } from '@/lib/utils'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname()
  const params = useParams()

  const routes = [
    {
      href: `/${params.storeId}`,
      label: 'Dashboard',
      active: pathName === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/configuracoes`,
      label: 'Configurações',
      active: pathName === `/${params.storeId}/configuracoes`,
    },
    {
      href: `/${params.storeId}/banners`,
      label: 'Banners',
      active: pathName === `/${params.storeId}/banners`,
    },
    {
      href: `/${params.storeId}/categorias`,
      label: 'Categorias',
      active: pathName === `/${params.storeId}/Categorias`,
    },
    {
      href: `/${params.storeId}/tamanhos`,
      label: 'Tamanhos',
      active: pathName === `/${params.storeId}/Tamanhos`,
    },
    {
      href: `/${params.storeId}/cores`,
      label: 'Cores',
      active: pathName === `/${params.storeId}/Cores`,
    },
    {
      href: `/${params.storeId}/produtos`,
      label: 'Produtos',
      active: pathName === `/${params.storeId}/Produtos`,
    },
  ]

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active
              ? 'text-black dark:text-white'
              : 'text-muted-foreground'
          )}>
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
