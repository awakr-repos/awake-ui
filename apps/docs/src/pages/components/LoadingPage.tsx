import { Loading } from '@awakr/awake-ui/loading'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function LoadingPage() {
  return (
    <div>
      <PageHeader title="Loading" description="Indicates content is being loaded." />

      <h2 className="text-lg font-semibold mb-4">Sizes</h2>
      <ComponentPreview code={`<Loading size="sm" />
<Loading size="md" />
<Loading size="lg" />`}>
        <div className="flex items-center gap-8">
          <Loading size="sm" />
          <Loading size="md" />
          <Loading size="lg" />
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Custom label</h2>
      <ComponentPreview code={`<Loading size="md" label="Saving changes…" />`}>
        <Loading size="md" label="Saving changes…" />
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
            <td className="py-2 pr-4 font-mono text-xs">size</td>
            <td className="py-2 pr-4 docs-text-muted">"sm" | "md" | "lg"</td>
            <td className="py-2 pr-4 docs-text-muted">"md"</td>
            <td className="py-2 docs-text-muted">Size of the loading dots.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">label</td>
            <td className="py-2 pr-4 docs-text-muted">string</td>
            <td className="py-2 pr-4 docs-text-muted">"Loading…"</td>
            <td className="py-2 docs-text-muted">Accessible label for screen readers (passed as <code className="docs-code-inline-bg px-1 rounded">aria-label</code>).</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">className</td>
            <td className="py-2 pr-4 docs-text-muted">string</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Additional CSS class. Also accepts all native <code className="docs-code-inline-bg px-1 rounded">div</code> props.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
