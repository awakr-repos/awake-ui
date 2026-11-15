import { Separator } from '@awakr/awake-ui/separator'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function SeparatorPage() {
  return (
    <div>
      <PageHeader title="Separator" description="Visually or semantically separates content." />

      <h2 className="text-lg font-semibold mb-4">Horizontal</h2>
      <ComponentPreview code={`<p>Above the separator</p>
<Separator />
<p>Below the separator</p>`}>
        <div className="w-full max-w-sm space-y-2 text-sm">
          <p>Above the separator</p>
          <Separator />
          <p>Below the separator</p>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Vertical</h2>
      <ComponentPreview code={`<div className="flex items-center gap-4 h-6">
  <span>Left</span>
  <Separator orientation="vertical" />
  <span>Right</span>
</div>`}>
        <div className="flex items-center gap-4 h-6 text-sm">
          <span>Left</span>
          <Separator orientation="vertical" />
          <span>Right</span>
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
            <td className="py-2 pr-4 font-mono text-xs">orientation</td>
            <td className="py-2 pr-4 docs-text-muted">"horizontal" | "vertical"</td>
            <td className="py-2 pr-4 docs-text-muted">"horizontal"</td>
            <td className="py-2 docs-text-muted">Direction of the separator line.</td>
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
