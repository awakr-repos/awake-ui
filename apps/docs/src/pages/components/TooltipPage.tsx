import { Tooltip } from '@awakr/awake-ui/tooltip'
import { Button } from '@awakr/awake-ui/button'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

function TooltipDemo({ side, label }: { side?: 'top' | 'bottom' | 'left' | 'right', label: string }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger render={<Button variant="outline" size="sm">{side ?? 'top'}</Button>} />
      <Tooltip.Portal>
        <Tooltip.Positioner side={side ?? 'top'}>
          <Tooltip.Popup>{label}</Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

export function TooltipPage() {
  return (
    <div>
      <PageHeader title="Tooltip" description="Displays informative text when hovering an element." />

      <h2 className="text-lg font-semibold mb-4">Positions</h2>
      <ComponentPreview code={`<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger render={<Button variant="outline">Top</Button>} />
    <Tooltip.Portal>
      <Tooltip.Positioner side="top">
        <Tooltip.Popup>Tooltip on top</Tooltip.Popup>
      </Tooltip.Positioner>
    </Tooltip.Portal>
  </Tooltip.Root>
</Tooltip.Provider>`}>
        <Tooltip.Provider>
          <div className="flex gap-3">
            <TooltipDemo side="top" label="Tooltip on top" />
            <TooltipDemo side="bottom" label="Tooltip on bottom" />
            <TooltipDemo side="left" label="Tooltip on left" />
            <TooltipDemo side="right" label="Tooltip on right" />
          </div>
        </Tooltip.Provider>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <p className="docs-text-muted text-sm mb-4">
        <code className="docs-code-inline-bg px-1 rounded">Tooltip.Trigger</code> uses the <code className="docs-code-inline-bg px-1 rounded">render</code> prop to compose with any element.
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
            <td className="py-2 pr-4 font-mono text-xs">Tooltip.Provider</td>
            <td className="py-2 docs-text-muted">Optional shared context for multiple tooltips. Controls shared delay settings.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Tooltip.Root</td>
            <td className="py-2 docs-text-muted">Root context for a single tooltip. Accepts <code className="docs-code-inline-bg px-1 rounded">open</code> / <code className="docs-code-inline-bg px-1 rounded">onOpenChange</code> for controlled usage.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Tooltip.Trigger</td>
            <td className="py-2 docs-text-muted">The element that shows the tooltip on hover/focus. Use <code className="docs-code-inline-bg px-1 rounded">render</code> prop to pass a styled element.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Tooltip.Portal</td>
            <td className="py-2 docs-text-muted">Renders the tooltip in a portal to avoid z-index issues.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Tooltip.Positioner</td>
            <td className="py-2 docs-text-muted">Positions the popup. Accepts <code className="docs-code-inline-bg px-1 rounded">side</code> ("top" | "bottom" | "left" | "right") and <code className="docs-code-inline-bg px-1 rounded">sideOffset</code> (number).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Tooltip.Popup</td>
            <td className="py-2 docs-text-muted">The tooltip bubble containing the content.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Tooltip.Arrow</td>
            <td className="py-2 docs-text-muted">Optional arrow pointing from the popup to the trigger.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
