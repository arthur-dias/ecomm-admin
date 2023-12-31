'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import { CategoryColumn } from '@/components/Columns'
import { AlertModal } from '@/components/modals/alertModal'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Copy, Edit, MoreHorizontal, Trash } from 'lucide-react'

interface CellActionCategoryProps {
  data: CategoryColumn
}

export const CellActionCategory: React.FC<CellActionCategoryProps> = ({
  data,
}) => {
  const router = useRouter()
  const params = useParams()

  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast.success('Id copiada')
  }

  const onDelete = async () => {
    try {
      setLoading(true)

      await axios.delete(`/api/${params.storeId}/categories/${data.id}`)
      router.refresh()
      toast.success('Categoria excluída')
    } catch (error) {
      toast.error(
        'Remova todos os produtos que utilizam esta categoria antes dessa ação'
      )
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Abrir Menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className='mr-2 h-4 w-4' />
            Copiar Id
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push(`/${params.storeId}/categorias/${data.id}`)
            }>
            <Edit className='mr-2 h-4 w-4' />
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className='mr-2 h-4 w-4' />
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
