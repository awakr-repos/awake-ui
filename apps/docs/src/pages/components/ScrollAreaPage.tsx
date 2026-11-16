import { ScrollArea } from '@awakr/awake-ui/scroll-area'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)

export function ScrollAreaPage() {
  return (
    <div>
      <PageHeader title="ScrollArea" description="A scrollable container with a styled scrollbar." />

      <h2 className="text-lg font-semibold mb-4">Vertical</h2>
      <ComponentPreview code={`<ScrollArea.Root style={{ height: 200, width: 280 }}>
  <ScrollArea.Viewport style={{ height: '100%' }}>
    {items.map((item) => <div key={item}>{item}</div>)}
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar orientation="vertical" />
</ScrollArea.Root>`}>
        <ScrollArea.Root style={{ height: 200, width: 280, border: '1px solid var(--color-awake-border)', borderRadius: 'var(--radius-awake-md)' }}>
          <ScrollArea.Viewport style={{ height: '100%', padding: '0.5rem' }}>
            {items.map((item) => (
              <div key={item} style={{ padding: '0.375rem 0.5rem', fontSize: '0.875rem' }}>{item}</div>
            ))}
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical" />
        </ScrollArea.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <table className="w-full text-sm border-collapse">
        <thead><tr className="border-b docs-border"><th className="text-left py-2 pr-4 font-medium docs-text-muted">Component</th><th className="text-left py-2 font-medium docs-text-muted">Description</th></tr></thead>
        <tbody>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">ScrollArea.Root</td><td className="py-2 docs-text-muted">Container. Set a fixed <code className="docs-code-inline-bg px-1 rounded">height</code> or <code className="docs-code-inline-bg px-1 rounded">width</code> to constrain the scrollable area.</td></tr>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">ScrollArea.Viewport</td><td className="py-2 docs-text-muted">The scrollable inner container.</td></tr>
          <tr><td className="py-2 pr-4 font-mono text-xs">ScrollArea.Scrollbar</td><td className="py-2 docs-text-muted">Custom scrollbar. Prop: <code className="docs-code-inline-bg px-1 rounded">orientation</code> ("vertical" | "horizontal").</td></tr>
        </tbody>
      </table>
    </div>
  )
}
