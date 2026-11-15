import { Button } from '@awakr/awake-ui/button'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function ButtonPage() {
  return (
    <div>
      <PageHeader title="Button" description="Triggers an action or event." />

      <h2 className="text-lg font-semibold mb-4">Variants</h2>
      <ComponentPreview code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Sizes</h2>
      <ComponentPreview code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}>
        <div className="flex items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Disabled</h2>
      <ComponentPreview code={`<Button variant="primary" disabled>Primary</Button>
<Button variant="outline" disabled>Outline</Button>
<Button variant="destructive" disabled>Destructive</Button>`}>
        <div className="flex gap-3">
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="destructive" disabled>Destructive</Button>
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
            <td className="py-2 pr-4 docs-text-muted">"primary" | "secondary" | "ghost" | "outline" | "destructive"</td>
            <td className="py-2 pr-4 docs-text-muted">"primary"</td>
            <td className="py-2 docs-text-muted">Visual style of the button.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">size</td>
            <td className="py-2 pr-4 docs-text-muted">"sm" | "md" | "lg"</td>
            <td className="py-2 pr-4 docs-text-muted">"md"</td>
            <td className="py-2 docs-text-muted">Size of the button.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">disabled</td>
            <td className="py-2 pr-4 docs-text-muted">boolean</td>
            <td className="py-2 pr-4 docs-text-muted">false</td>
            <td className="py-2 docs-text-muted">Disables the button.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">children</td>
            <td className="py-2 pr-4 docs-text-muted">ReactNode</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Button label content.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">className</td>
            <td className="py-2 pr-4 docs-text-muted">string</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Additional CSS class. Also accepts all native <code className="docs-code-inline-bg px-1 rounded">button</code> props.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
