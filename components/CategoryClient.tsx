'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { CategoryColumn, categoryColumns } from '@/components/Columns'
import { DataTable } from '@/components/ui/dataTable'
import { ApiList } from '@/components/ui/apiList'
import { Plus } from 'lucide-react'

interface CategoryClientProps {
  data: CategoryColumn[]
}

export const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Categorias cadastradas (${data.length})`}
          description='Configure as categorias da sua loja'
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categorias/novo`)}>
          <Plus className='mr-2 h-4 w-4' />
          Adicionar Novo
        </Button>
      </div>
      <Separator />
      <DataTable columns={categoryColumns} data={data} searchKey='name' />
      <Heading title='API' description='API das categorias' />
      <Separator />
      <ApiList entityName='categories' entityIdName='categoryId' />
    </>
  )
}
