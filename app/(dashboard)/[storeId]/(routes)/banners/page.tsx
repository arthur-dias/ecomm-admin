import prismadb from '@/lib/prismadb'
import { format } from 'date-fns'
import { BannerClient } from '@/components/BannerClient'
import { BannerColumn } from '@/components/Columns'

const BannersPage = async ({ params }: { params: { storeId: string } }) => {
  const banners = await prismadb.banner.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const formattedBanners: BannerColumn[] = banners.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'd/M/yyyy'),
  }))

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BannerClient data={formattedBanners} />
      </div>
    </div>
  )
}

export default BannersPage
