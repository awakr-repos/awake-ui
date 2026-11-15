import { Alert } from '@awakr/awake-ui/alert'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function AlertPage() {
  return (
    <div>
      <PageHeader title="Alert" description="Displays a short, important message to the user." />

      <h2 className="text-lg font-semibold mb-4">Variants</h2>
      <ComponentPreview code={`<Alert variant="info">Info — something you should know.</Alert>
<Alert variant="success">Success — operation completed.</Alert>
<Alert variant="warning">Warning — proceed with care.</Alert>
<Alert variant="error">Error — something went wrong.</Alert>`}>
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <Alert variant="info">Info — something you should know.</Alert>
          <Alert variant="success">Success — operation completed.</Alert>
          <Alert variant="warning">Warning — proceed with care.</Alert>
          <Alert variant="error">Error — something went wrong.</Alert>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">With custom content</h2>
      <ComponentPreview code={`<Alert variant="info">
  <strong>Heads up!</strong> Your trial expires in 3 days.
</Alert>`}>
        <div className="w-full max-w-sm">
          <Alert variant="info">
            <strong>Heads up!</strong> Your trial expires in 3 days.
          </Alert>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b docs-border">
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Prop</th>
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Type</th>
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Default</th>
            <th className="text-left py-2 font-medium docs-text-muted">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">variant</td>
            <td className="py-2 pr-4 docs-text-muted">"info" | "success" | "warning" | "error"</td>
            <td className="py-2 pr-4 docs-text-muted">"info"</td>
            <td className="py-2 docs-text-muted">Visual style of the alert.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">children</td>
            <td className="py-2 pr-4 docs-text-muted">ReactNode</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Alert content. Can include HTML elements like <code className="docs-code-inline-bg px-1 rounded">strong</code>.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">className</td>
            <td className="py-2 pr-4 docs-text-muted">string</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Additional CSS class.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
