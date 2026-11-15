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

        <h2 className="text-lg font-semibold mb-3">Setup</h2>
        <p className="docs-text-muted text-sm mb-4">
          Wrap your app (or the section that needs toasts) with <code className="docs-code-inline-bg px-1 rounded">Toast.Provider</code>.
          Then use the <code className="docs-code-inline-bg px-1 rounded">useToast</code> hook inside any child component to trigger notifications.
        </p>
        <pre className="px-5 py-4 rounded-xl bg-neutral-950 text-neutral-100 text-sm overflow-x-auto mb-8">
          <code>{`import { Toast, useToast } from '@awakr/awake-ui/toast'

function App() {
  return (
    <Toast.Provider>
      <YourApp />
    </Toast.Provider>
  )
}

function YourApp() {
  const { toast } = useToast()
  return (
    <button onClick={() => toast({ message: 'Salvo!', variant: 'success' })}>
      Save
    </button>
  )
}`}</code>
        </pre>

        <h2 className="text-lg font-semibold mb-4">Variants</h2>
        <ComponentPreview code={`const { toast } = useToast()

toast({ message: 'Operação realizada!', variant: 'default' })
toast({ message: 'Salvo com sucesso.', variant: 'success' })
toast({ message: 'Atenção: verifique os dados.', variant: 'warning' })
toast({ message: 'Erro ao processar.', variant: 'error' })
toast({ message: 'Nova versão disponível.', variant: 'info' })`}>
          <ToastDemo />
        </ComponentPreview>

        <h2 className="text-lg font-semibold mb-4">Custom duration</h2>
        <ComponentPreview code={`toast({ message: 'Fechar em 8s.', variant: 'info', duration: 8000 })`}>
          <ToastDemoCustom />
        </ComponentPreview>

        <h2 className="text-lg font-semibold mb-4">toast() options</h2>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b docs-border">
              <th className="text-left py-2 pr-4 font-medium docs-text-muted">Option</th>
              <th className="text-left py-2 pr-4 font-medium docs-text-muted">Type</th>
              <th className="text-left py-2 pr-4 font-medium docs-text-muted">Default</th>
              <th className="text-left py-2 font-medium docs-text-muted">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b docs-border">
              <td className="py-2 pr-4 font-mono text-xs">message</td>
              <td className="py-2 pr-4 docs-text-muted">ReactNode</td>
              <td className="py-2 pr-4 docs-text-muted">—</td>
              <td className="py-2 docs-text-muted">Content of the toast notification.</td>
            </tr>
            <tr className="border-b docs-border">
              <td className="py-2 pr-4 font-mono text-xs">variant</td>
              <td className="py-2 pr-4 docs-text-muted">"default" | "success" | "warning" | "error" | "info"</td>
              <td className="py-2 pr-4 docs-text-muted">"default"</td>
              <td className="py-2 docs-text-muted">Visual style of the toast.</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-mono text-xs">duration</td>
              <td className="py-2 pr-4 docs-text-muted">number</td>
              <td className="py-2 pr-4 docs-text-muted">4000</td>
              <td className="py-2 docs-text-muted">Auto-dismiss delay in milliseconds.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Toast.Provider>
  )
}

function ToastDemoCustom() {
  const { toast } = useToast()
  return (
    <Button variant="secondary" onClick={() => toast({ message: 'Fechar em 8s.', variant: 'info', duration: 8000 })}>
      Show toast (8s)
    </Button>
  )
}
