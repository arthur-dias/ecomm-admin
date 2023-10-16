'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { ColorColumn, colorColumns } from '@/components/Columns'
import { DataTable } from '@/components/ui/dataTable'
import { ApiList } from '@/components/ui/apiList'
import { Plus } from 'lucide-react'

interface ColorClientProps {
  data: ColorColumn[]
}

export const ColorClient: React.FC<ColorClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Cores cadastradas (${data.length})`}
          description='Configure as cores dos seus itens'
        />
        <Button onClick={() => router.push(`/${params.storeId}/cores/novo`)}>
          <Plus className='mr-2 h-4 w-4' />
          Adicionar Novo
        </Button>
      </div>
      <Separator />
      <DataTable columns={colorColumns} data={data} searchKey='name' />
      <Heading title='API' description='API das cores' />
      <Separator />
      <ApiList entityName='colors' entityIdName='colorId' />
    </>
  )
}
