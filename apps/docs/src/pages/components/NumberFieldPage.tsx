import { NumberField } from '@awakr/awake-ui/number-field'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function NumberFieldPage() {
  return (
    <div>
      <PageHeader title="Number Field" description="An input for numeric values with increment/decrement controls." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<NumberField.Root defaultValue={0} min={0} max={100}>
  <NumberField.Group>
    <NumberField.Decrement />
    <NumberField.Input />
    <NumberField.Increment />
  </NumberField.Group>
</NumberField.Root>`}>
        <NumberField.Root defaultValue={0} min={0} max={100}>
          <NumberField.Group>
            <NumberField.Decrement />
            <NumberField.Input />
            <NumberField.Increment />
          </NumberField.Group>
        </NumberField.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">With step</h2>
      <ComponentPreview code={`<NumberField.Root defaultValue={0} min={0} max={100} step={10}>
  <NumberField.Group>
    <NumberField.Decrement />
    <NumberField.Input />
    <NumberField.Increment />
  </NumberField.Group>
</NumberField.Root>`}>
        <NumberField.Root defaultValue={0} min={0} max={100} step={10}>
          <NumberField.Group>
            <NumberField.Decrement />
            <NumberField.Input />
            <NumberField.Increment />
          </NumberField.Group>
        </NumberField.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Disabled</h2>
      <ComponentPreview code={`<NumberField.Root defaultValue={42} disabled>
  <NumberField.Group>
    <NumberField.Decrement />
    <NumberField.Input />
    <NumberField.Increment />
  </NumberField.Group>
</NumberField.Root>`}>
        <NumberField.Root defaultValue={42} disabled>
          <NumberField.Group>
            <NumberField.Decrement />
            <NumberField.Input />
            <NumberField.Increment />
          </NumberField.Group>
        </NumberField.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <p className="docs-text-muted text-sm mb-4">
        All sub-components accept <code className="docs-code-inline-bg px-1 rounded">className</code> and their underlying Base UI props.
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
            <td className="py-2 pr-4 font-mono text-xs">NumberField.Root</td>
            <td className="py-2 docs-text-muted">Root context. Key props: <code className="docs-code-inline-bg px-1 rounded">value</code> / <code className="docs-code-inline-bg px-1 rounded">defaultValue</code> (number), <code className="docs-code-inline-bg px-1 rounded">min</code> (number), <code className="docs-code-inline-bg px-1 rounded">max</code> (number), <code className="docs-code-inline-bg px-1 rounded">step</code> (number), <code className="docs-code-inline-bg px-1 rounded">disabled</code> (boolean), <code className="docs-code-inline-bg px-1 rounded">onChange</code> (function).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">NumberField.Group</td>
            <td className="py-2 docs-text-muted">Wrapper grouping the decrement button, input, and increment button.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">NumberField.Input</td>
            <td className="py-2 docs-text-muted">The numeric text input.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">NumberField.Increment</td>
            <td className="py-2 docs-text-muted">Button that increases the value by one step.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">NumberField.Decrement</td>
            <td className="py-2 docs-text-muted">Button that decreases the value by one step.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">NumberField.ScrubArea</td>
            <td className="py-2 docs-text-muted">Drag area that lets users scrub the value with the mouse.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">NumberField.ScrubAreaCursor</td>
            <td className="py-2 docs-text-muted">Virtual cursor shown during scrubbing.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
