import { Switch } from '@awakr/awake-ui/switch'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function SwitchPage() {
  return (
    <div>
      <PageHeader title="Switch" description="A toggle for binary on/off states." />

      <h2 className="text-lg font-semibold mb-4">States</h2>
      <ComponentPreview code={`{/* Off */}
<Switch.Root><Switch.Thumb /></Switch.Root>

{/* On */}
<Switch.Root defaultChecked><Switch.Thumb /></Switch.Root>

{/* Disabled off */}
<Switch.Root disabled><Switch.Thumb /></Switch.Root>

{/* Disabled on */}
<Switch.Root disabled defaultChecked><Switch.Thumb /></Switch.Root>`}>
        <div className="flex items-center gap-6">
          <Switch.Root><Switch.Thumb /></Switch.Root>
          <Switch.Root defaultChecked><Switch.Thumb /></Switch.Root>
          <Switch.Root disabled><Switch.Thumb /></Switch.Root>
          <Switch.Root disabled defaultChecked><Switch.Thumb /></Switch.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <p className="docs-text-muted text-sm mb-4">
        Both sub-components accept <code className="docs-code-inline-bg px-1 rounded">className</code> and their underlying Base UI props.
      </p>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b docs-border">
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Component</th>
            <th className="text-left py-2 font-medium docs-text-muted">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Switch.Root</td>
            <td className="py-2 docs-text-muted">The toggle control. Key props: <code className="docs-code-inline-bg px-1 rounded">checked</code> / <code className="docs-code-inline-bg px-1 rounded">defaultChecked</code> (boolean), <code className="docs-code-inline-bg px-1 rounded">onCheckedChange</code> ((checked: boolean) =&gt; void), <code className="docs-code-inline-bg px-1 rounded">disabled</code> (boolean).</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Switch.Thumb</td>
            <td className="py-2 docs-text-muted">The sliding circular indicator that moves between off and on positions.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
