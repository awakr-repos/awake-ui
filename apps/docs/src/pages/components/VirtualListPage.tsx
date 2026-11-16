import { VirtualList } from '@awakr/awake-ui/virtual-list'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

const ITEMS = Array.from({ length: 10_000 }, (_, i) => ({
  id: i + 1,
  label: `Item ${i + 1}`,
}))

export function VirtualListPage() {
  return (
    <div>
      <PageHeader
        title="VirtualList"
        description="Renders large lists efficiently by only mounting rows visible in the viewport."
      />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`const ITEMS = Array.from({ length: 10_000 }, (_, i) => ({
  id: i + 1,
  label: \`Item \${i + 1}\`,
}))

<VirtualList
  items={ITEMS}
  itemHeight={48}
  height={400}
  renderItem={(item) => <span>#{item.id} {item.label}</span>}
/>`}>
        <VirtualList
          items={ITEMS}
          itemHeight={48}
          height={400}
          renderItem={(item) => (
            <span>
              <strong>#{item.id}</strong>&nbsp;{item.label}
            </span>
          )}
        />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mt-8 mb-4">Props</h2>
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
            <td className="py-2 pr-4 font-mono text-xs">items</td>
            <td className="py-2 pr-4 font-mono text-xs">T[]</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Array of items to render.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">itemHeight</td>
            <td className="py-2 pr-4 font-mono text-xs">number</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Fixed height of each row in pixels.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">renderItem</td>
            <td className="py-2 pr-4 font-mono text-xs">(item: T, index: number) =&gt; ReactNode</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Render function for each row.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">height</td>
            <td className="py-2 pr-4 font-mono text-xs">number</td>
            <td className="py-2 pr-4 docs-text-muted">400</td>
            <td className="py-2 docs-text-muted">Fixed height of the scroll container in pixels.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">overscan</td>
            <td className="py-2 pr-4 font-mono text-xs">number</td>
            <td className="py-2 pr-4 docs-text-muted">5</td>
            <td className="py-2 docs-text-muted">Extra rows rendered beyond the visible area on each side.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
