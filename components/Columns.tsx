'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellActionBanner } from '@/components/CellActionBanner'
import { CellActionCategory } from '@/components/CellActionCategory'
import { CellActionSize } from '@/components/CellActionSize'

export type BannerColumn = {
  id: string
  label: string
  createdAt: string
}

export const bannerColumns: ColumnDef<BannerColumn>[] = [
  {
    accessorKey: 'label',
    header: 'Nome',
  },
  {
    accessorKey: 'createdAt',
    header: 'Data de upload',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellActionBanner data={row.original} />,
  },
]

export type CategoryColumn = {
  id: string
  name: string
  bannerLabel: string
  createdAt: string
}

export const categoryColumns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'banner',
    header: 'Banner',
    cell: ({ row }) => row.original.bannerLabel,
  },
  {
    accessorKey: 'createdAt',
    header: 'Data de upload',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellActionCategory data={row.original} />,
  },
]

export type SizeColumn = {
  id: string
  name: string
  value: string
  createdAt: string
}

export const sizeColumns: ColumnDef<SizeColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'value',
    header: 'Value',
  },
  {
    accessorKey: 'createdAt',
    header: 'Data de upload',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellActionSize data={row.original} />,
  },
]
