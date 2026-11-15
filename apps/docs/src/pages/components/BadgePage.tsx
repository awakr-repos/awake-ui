import { Badge } from '@awakr/awake-ui/badge'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function BadgePage() {
  return (
    <div>
      <PageHeader title="Badge" description="Compact label for status or category." />

      <h2 className="text-lg font-semibold mb-4">Variants</h2>
      <ComponentPreview code={`<Badge variant="default">Default</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`}>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
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
            <td className="py-2 pr-4 docs-text-muted">"default" | "success" | "warning" | "error" | "info"</td>
            <td className="py-2 pr-4 docs-text-muted">"default"</td>
            <td className="py-2 docs-text-muted">Visual style of the badge.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">children</td>
            <td className="py-2 pr-4 docs-text-muted">ReactNode</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Badge label content.</td>
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
