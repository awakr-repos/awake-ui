import { Tooltip } from '@developmentsnil/awake-ui/tooltip'
import { Button } from '@developmentsnil/awake-ui/button'
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
    </div>
  )
}
