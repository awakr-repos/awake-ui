import { Toast, useToast } from '@awakr/awake-ui/toast'
import { Button } from '@awakr/awake-ui/button'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

function ToastDemo() {
  const { toast } = useToast()
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="secondary" onClick={() => toast({ message: 'Operação realizada!', variant: 'default' })}>Default</Button>
      <Button variant="secondary" onClick={() => toast({ message: 'Salvo com sucesso.', variant: 'success' })}>Success</Button>
      <Button variant="secondary" onClick={() => toast({ message: 'Atenção: verifique os dados.', variant: 'warning' })}>Warning</Button>
      <Button variant="secondary" onClick={() => toast({ message: 'Erro ao processar.', variant: 'error' })}>Error</Button>
      <Button variant="secondary" onClick={() => toast({ message: 'Nova versão disponível.', variant: 'info' })}>Info</Button>
    </div>
  )
}

export function ToastPage() {
  return (
    <Toast.Provider>
      <div>
        <PageHeader title="Toast" description="Temporary notifications shown in the bottom-right corner." />

        <h2 className="text-lg font-semibold mb-4">Variants</h2>
        <ComponentPreview code={`const { toast } = useToast()

toast({ message: 'Salvo com sucesso.', variant: 'success' })
toast({ message: 'Erro ao processar.', variant: 'error' })`}>
          <ToastDemo />
        </ComponentPreview>
      </div>
    </Toast.Provider>
  )
}
