'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { SizeColumn, sizeColumns } from '@/components/Columns'
import { DataTable } from '@/components/ui/dataTable'
import { ApiList } from '@/components/ui/apiList'
import { Plus } from 'lucide-react'

interface SizeClientProps {
  data: SizeColumn[]
}

export const SizeClient: React.FC<SizeClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Tamanhos cadastrados (${data.length})`}
          description='Configure os tamanhos dos seus itens'
        />
        <Button onClick={() => router.push(`/${params.storeId}/tamanhos/novo`)}>
          <Plus className='mr-2 h-4 w-4' />
          Adicionar Novo
        </Button>
      </div>
      <Separator />
      <DataTable columns={sizeColumns} data={data} searchKey='name' />
      <Heading title='API' description='API dos tamanhos' />
      <Separator />
      <ApiList entityName='sizes' entityIdName='sizesId' />
    </>
  )
}
