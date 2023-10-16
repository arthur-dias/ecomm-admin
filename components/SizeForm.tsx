'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Size } from '@prisma/client'
import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import ImageUpload from '@/components/ui/imageUpload'
import { Input } from '@/components/ui/input'
import { AlertModal } from '@/components/modals/alertModal'
import { Trash } from 'lucide-react'

interface SizeFormProps {
  initialData: Size | null
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Escreva o nome dos tamanhos para continuar',
  }),
  value: z.string().min(1),
})

type SizeFormValues = z.infer<typeof formSchema>

export const SizeForm: React.FC<SizeFormProps> = ({ initialData }) => {
  const params = useParams()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const title = initialData ? 'Editar tamanho' : 'Adicionar tamanho'
  const description = initialData ? 'Editar tamanho' : 'Adicionar tamanho'
  const toastMessage = initialData ? 'Tamanho editado' : 'Tamanho adicionado'
  const action = initialData ? 'Salvar mudança' : 'Adicionar'

  const form = useForm<SizeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: '',
      value: '',
    },
  })

  const onSubmit = async (data: SizeFormValues) => {
    try {
      setLoading(true)

      if (!initialData) {
        await axios.post(`/api/${params.storeId}/sizes`, data)
      }

      if (initialData) {
        await axios.patch(`/api/${params.storeId}/sizes/${params.sizeId}`, data)
      }

      router.refresh()
      router.push(`/${params.storeId}/tamanhos`)
      toast.success(toastMessage)
    } catch (error) {
      toast.error('Algo deu errado')
    } finally {
      setLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setLoading(true)

      await axios.delete(`/api/${params.storeId}/sizes/${params.sizeId}`)
      router.refresh()
      router.push(`/${params.storeId}/tamanhos`)
      toast.success('Tamanho excluído')
    } catch (error) {
      toast.error(
        'Remova todos os produtos que utilizam este tamanho antes dessa ação'
      )
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <>
      <AlertModal
        isOpen={open}
        loading={loading}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
      />
      <div className='flex items-center justify-between'>
        <Heading title={title} description={description} />
        {initialData ? (
          <Button variant='destructive' size='sm' onClick={() => setOpen(true)}>
            <Trash className='h-4 w-4' />
          </Button>
        ) : null}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 w-full'>
          <div className='grid grid-cols-3 gap-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='Nome do tamanho'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='value'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tamanho</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='Valor do tamanho'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className='ml-auto' type='submit'>
            {action}
          </Button>
        </form>
      </Form>
    </>
  )
}
