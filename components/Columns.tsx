'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from '@/components/CellAction'

export type BannerColumn = {
  id: string
  label: string
  createdAt: string
}

export const columns: ColumnDef<BannerColumn>[] = [
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
    cell: ({ row }) => <CellAction data={row.original} />,
  },
]
