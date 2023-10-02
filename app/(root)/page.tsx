'use client'

import { useEffect } from 'react'
import { useStoreModal } from '@/hooks/useStoreModal'

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <div className='p-5'>
      <p>Root page</p>
    </div>
  )
}

export default SetupPage
