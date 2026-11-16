import { Popover } from '@awakr/awake-ui/popover'
import { Button } from '@awakr/awake-ui/button'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function PopoverPage() {
  return (
    <div>
      <PageHeader title="Popover" description="A floating panel anchored to a trigger element." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<Popover.Root>
  <Popover.Trigger render={<Button variant="outline">Open popover</Button>} />
  <Popover.Portal>
    <Popover.Positioner>
      <Popover.Popup>
        <Popover.Title>Title</Popover.Title>
        <Popover.Description>Description here.</Popover.Description>
      </Popover.Popup>
    </Popover.Positioner>
  </Popover.Portal>
</Popover.Root>`}>
        <Popover.Root>
          <Popover.Trigger render={<Button variant="outline">Open popover</Button>} />
          <Popover.Portal>
            <Popover.Positioner>
              <Popover.Popup>
                <Popover.Title>Popover title</Popover.Title>
                <Popover.Description>This is a popover with a title and description.</Popover.Description>
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <table className="w-full text-sm border-collapse">
        <thead><tr className="border-b docs-border"><th className="text-left py-2 pr-4 font-medium docs-text-muted">Component</th><th className="text-left py-2 font-medium docs-text-muted">Description</th></tr></thead>
        <tbody>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">Popover.Root</td><td className="py-2 docs-text-muted">State container. Props: <code className="docs-code-inline-bg px-1 rounded">defaultOpen</code>, <code className="docs-code-inline-bg px-1 rounded">open</code>, <code className="docs-code-inline-bg px-1 rounded">onOpenChange</code>.</td></tr>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">Popover.Trigger</td><td className="py-2 docs-text-muted">Uses <code className="docs-code-inline-bg px-1 rounded">render</code> prop for composition.</td></tr>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">Popover.Positioner</td><td className="py-2 docs-text-muted">Positions the popup. Props: <code className="docs-code-inline-bg px-1 rounded">side</code> ("top"|"right"|"bottom"|"left"), <code className="docs-code-inline-bg px-1 rounded">sideOffset</code> (default 8).</td></tr>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">Popover.Popup</td><td className="py-2 docs-text-muted">The floating panel content.</td></tr>
          <tr><td className="py-2 pr-4 font-mono text-xs">Popover.Close</td><td className="py-2 docs-text-muted">Button that closes the popover.</td></tr>
        </tbody>
      </table>
    </div>
  )
}
