'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { ProductColumn, productColumns } from '@/components/Columns'
import { DataTable } from '@/components/ui/dataTable'
import { ApiList } from '@/components/ui/apiList'
import { Plus } from 'lucide-react'

interface ProductClientProps {
  data: ProductColumn[]
}

export const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Produtos cadastrados (${data.length})`}
          description='Configure os produtos da sua loja'
        />
        <Button onClick={() => router.push(`/${params.storeId}/produtos/novo`)}>
          <Plus className='mr-2 h-4 w-4' />
          Adicionar Novo
        </Button>
      </div>
      <Separator />
      <DataTable columns={productColumns} data={data} searchKey='label' />
      <Heading title='API' description='API dos produtos' />
      <Separator />
      <ApiList entityName='products' entityIdName='productId' />
    </>
  )
}
