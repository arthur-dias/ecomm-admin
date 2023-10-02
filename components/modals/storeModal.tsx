'use client'

import { useStoreModal } from '@/hooks/useStoreModal'
import { Modal } from '@/components/ui/modal'

export const StoreModal = () => {
  const storeModal = useStoreModal()

  return (
    <Modal
      title='Criar loja'
      description='Adicionar uma nova loja'
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}>
      Criar form de criação de nova loja
    </Modal>
  )
}
