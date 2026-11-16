import { Drawer } from '@awakr/awake-ui/drawer'
import { Button } from '@awakr/awake-ui/button'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function DrawerPage() {
  return (
    <div>
      <PageHeader title="Drawer" description="A panel that slides in from an edge of the screen." />

      <h2 className="text-lg font-semibold mb-4">Right</h2>
      <ComponentPreview code={`<Drawer.Root>
  <Drawer.Trigger render={<Button variant="outline">Open drawer</Button>} />
  <Drawer.Portal>
    <Drawer.Backdrop />
    <Drawer.Popup side="right">
      <Drawer.Close>✕</Drawer.Close>
      <Drawer.Title>Settings</Drawer.Title>
      <Drawer.Description>Adjust your preferences.</Drawer.Description>
    </Drawer.Popup>
  </Drawer.Portal>
</Drawer.Root>`}>
        <div className="flex gap-3 flex-wrap">
          {(['right', 'left', 'bottom', 'top'] as const).map((side) => (
            <Drawer.Root key={side}>
              <Drawer.Trigger render={<Button variant="outline">{side.charAt(0).toUpperCase() + side.slice(1)}</Button>} />
              <Drawer.Portal>
                <Drawer.Backdrop />
                <Drawer.Popup side={side}>
                  <Drawer.Close>✕</Drawer.Close>
                  <Drawer.Title>Drawer ({side})</Drawer.Title>
                  <Drawer.Description>Slides in from the {side}.</Drawer.Description>
                </Drawer.Popup>
              </Drawer.Portal>
            </Drawer.Root>
          ))}
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <table className="w-full text-sm border-collapse">
        <thead><tr className="border-b docs-border"><th className="text-left py-2 pr-4 font-medium docs-text-muted">Component</th><th className="text-left py-2 font-medium docs-text-muted">Description</th></tr></thead>
        <tbody>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">Drawer.Root</td><td className="py-2 docs-text-muted">Dialog root. Props: <code className="docs-code-inline-bg px-1 rounded">open</code>, <code className="docs-code-inline-bg px-1 rounded">onOpenChange</code>, <code className="docs-code-inline-bg px-1 rounded">defaultOpen</code>.</td></tr>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">Drawer.Popup</td><td className="py-2 docs-text-muted">Panel. Prop: <code className="docs-code-inline-bg px-1 rounded">side</code> ("right" | "left" | "bottom" | "top"). Default: "right".</td></tr>
          <tr><td className="py-2 pr-4 font-mono text-xs">Drawer.Close</td><td className="py-2 docs-text-muted">Button that closes the drawer.</td></tr>
        </tbody>
      </table>
    </div>
  )
}
