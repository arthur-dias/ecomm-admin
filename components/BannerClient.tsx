'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'

export const BannerClient = () => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title='Banners (0)'
          description='Configure os banners da sua loja'
        />
        <Button onClick={() => router.push(`/${params.storeId}/banners/novo`)}>
          <Plus className='mr-2 h-4 w-4' />
          Adicionar Novo
        </Button>
      </div>
      <Separator />
    </>
  )
}
