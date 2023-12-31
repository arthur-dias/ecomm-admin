'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { BannerColumn, bannerColumns } from '@/components/Columns'
import { DataTable } from '@/components/ui/dataTable'
import { ApiList } from '@/components/ui/apiList'
import { Plus } from 'lucide-react'

interface BannerClientProps {
  data: BannerColumn[]
}

export const BannerClient: React.FC<BannerClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Banners cadastrados (${data.length})`}
          description='Configure os banners da sua loja'
        />
        <Button onClick={() => router.push(`/${params.storeId}/banners/novo`)}>
          <Plus className='mr-2 h-4 w-4' />
          Adicionar Novo
        </Button>
      </div>
      <Separator />
      <DataTable columns={bannerColumns} data={data} searchKey='label' />
      <Heading title='API' description='API dos banners' />
      <Separator />
      <ApiList entityName='banners' entityIdName='bannerId' />
    </>
  )
}
