import { Collapsible } from '@awakr/awake-ui/collapsible'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function CollapsiblePage() {
  return (
    <div>
      <PageHeader title="Collapsible" description="A single show/hide panel. Use Accordion for a grouped list." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<Collapsible.Root>
  <Collapsible.Trigger>What is awake-ui?</Collapsible.Trigger>
  <Collapsible.Panel>
    A React component library built on Base UI primitives.
  </Collapsible.Panel>
</Collapsible.Root>`}>
        <div style={{ maxWidth: 400 }}>
          <Collapsible.Root>
            <Collapsible.Trigger>What is awake-ui?</Collapsible.Trigger>
            <Collapsible.Panel>A React component library built on Base UI primitives with a Tailwind CSS v4 token system.</Collapsible.Panel>
          </Collapsible.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <table className="w-full text-sm border-collapse">
        <thead><tr className="border-b docs-border"><th className="text-left py-2 pr-4 font-medium docs-text-muted">Component</th><th className="text-left py-2 font-medium docs-text-muted">Description</th></tr></thead>
        <tbody>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">Collapsible.Root</td><td className="py-2 docs-text-muted">Container. Props: <code className="docs-code-inline-bg px-1 rounded">defaultOpen</code>, <code className="docs-code-inline-bg px-1 rounded">open</code>, <code className="docs-code-inline-bg px-1 rounded">onOpenChange</code>, <code className="docs-code-inline-bg px-1 rounded">disabled</code>.</td></tr>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">Collapsible.Trigger</td><td className="py-2 docs-text-muted">Toggle button with chevron indicator.</td></tr>
          <tr><td className="py-2 pr-4 font-mono text-xs">Collapsible.Panel</td><td className="py-2 docs-text-muted">Collapsible content area with animated height.</td></tr>
        </tbody>
      </table>
    </div>
  )
}
