'use client'

import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { OrderColumn, orderColumns } from '@/components/Columns'
import { DataTable } from '@/components/ui/dataTable'

interface OrderClientProps {
  data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Pedidos cadastrados (${data.length})`}
        description='Configure os pedidos da sua loja'
      />
      <Separator />
      <DataTable columns={orderColumns} data={data} searchKey='products' />
    </>
  )
}
