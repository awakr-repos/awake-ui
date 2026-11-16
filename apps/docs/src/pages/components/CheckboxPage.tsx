import { Checkbox } from '@awakr/awake-ui/checkbox'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function CheckboxPage() {
  return (
    <div>
      <PageHeader title="Checkbox" description="A control that allows users to toggle between checked, unchecked, and indeterminate states." />

      <h2 className="text-lg font-semibold mb-4">States</h2>
      <ComponentPreview code={`{/* Unchecked */}
<Checkbox.Root><Checkbox.Indicator /></Checkbox.Root>

{/* Checked */}
<Checkbox.Root defaultChecked><Checkbox.Indicator /></Checkbox.Root>

{/* Indeterminate */}
<Checkbox.Root checked="mixed"><Checkbox.Indicator /></Checkbox.Root>

{/* Disabled */}
<Checkbox.Root disabled><Checkbox.Indicator /></Checkbox.Root>

{/* Disabled checked */}
<Checkbox.Root disabled defaultChecked><Checkbox.Indicator /></Checkbox.Root>`}>
        <div className="flex items-center gap-4">
          <Checkbox.Root><Checkbox.Indicator /></Checkbox.Root>
          <Checkbox.Root defaultChecked><Checkbox.Indicator /></Checkbox.Root>
          <Checkbox.Root checked="mixed"><Checkbox.Indicator /></Checkbox.Root>
          <Checkbox.Root disabled><Checkbox.Indicator /></Checkbox.Root>
          <Checkbox.Root disabled defaultChecked><Checkbox.Indicator /></Checkbox.Root>
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
            <td className="py-2 pr-4 font-mono text-xs">Checkbox.Root</td>
            <td className="py-2 docs-text-muted">
              The checkbox control. Key props: <code className="docs-code-inline-bg px-1 rounded">checked</code> / <code className="docs-code-inline-bg px-1 rounded">defaultChecked</code> (boolean | "mixed" for indeterminate), <code className="docs-code-inline-bg px-1 rounded">onCheckedChange</code> ((checked: boolean) =&gt; void), <code className="docs-code-inline-bg px-1 rounded">disabled</code> (boolean).
            </td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Checkbox.Indicator</td>
            <td className="py-2 docs-text-muted">The checkmark icon. Renders a dash when the parent is in indeterminate state.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
