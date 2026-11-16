import { Toggle } from '@awakr/awake-ui/toggle'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function TogglePage() {
  return (
    <div>
      <PageHeader title="Toggle / ToggleGroup" description="A pressed/unpressed button for binary state, with an optional grouped variant." />

      <h2 className="text-lg font-semibold mb-4">Single toggle</h2>
      <ComponentPreview code={`<Toggle.Root>Bold</Toggle.Root>`}>
        <div className="flex gap-2">
          <Toggle.Root>Bold</Toggle.Root>
          <Toggle.Root defaultPressed>Italic</Toggle.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Variants</h2>
      <ComponentPreview code={`<Toggle.Root variant="default">Default</Toggle.Root>
<Toggle.Root variant="outline">Outline</Toggle.Root>`}>
        <div className="flex gap-2">
          <Toggle.Root variant="default">Default</Toggle.Root>
          <Toggle.Root variant="outline">Outline</Toggle.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Toggle group</h2>
      <ComponentPreview code={`<Toggle.Group>
  <Toggle.Root value="b">B</Toggle.Root>
  <Toggle.Root value="i">I</Toggle.Root>
  <Toggle.Root value="u">U</Toggle.Root>
</Toggle.Group>`}>
        <Toggle.Group>
          <Toggle.Root value="b">B</Toggle.Root>
          <Toggle.Root value="i">I</Toggle.Root>
          <Toggle.Root value="u">U</Toggle.Root>
        </Toggle.Group>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <table className="w-full text-sm border-collapse">
        <thead><tr className="border-b docs-border"><th className="text-left py-2 pr-4 font-medium docs-text-muted">Prop</th><th className="text-left py-2 font-medium docs-text-muted">Type</th><th className="text-left py-2 font-medium docs-text-muted">Default</th><th className="text-left py-2 font-medium docs-text-muted">Description</th></tr></thead>
        <tbody>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">variant</td><td className="py-2 pr-4 font-mono text-xs">"default" | "outline"</td><td className="py-2 pr-4 docs-text-muted">"default"</td><td className="py-2 docs-text-muted">Visual style</td></tr>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">size</td><td className="py-2 pr-4 font-mono text-xs">"sm" | "md" | "lg"</td><td className="py-2 pr-4 docs-text-muted">"md"</td><td className="py-2 docs-text-muted">Button size</td></tr>
          <tr><td className="py-2 pr-4 font-mono text-xs">defaultPressed</td><td className="py-2 pr-4 font-mono text-xs">boolean</td><td className="py-2 pr-4 docs-text-muted">false</td><td className="py-2 docs-text-muted">Initial pressed state</td></tr>
        </tbody>
      </table>
    </div>
  )
}
