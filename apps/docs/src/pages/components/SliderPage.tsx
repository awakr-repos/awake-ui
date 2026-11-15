import { Slider } from '@awakr/awake-ui/slider'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function SliderPage() {
  return (
    <div>
      <PageHeader title="Slider" description="Allows users to select a value from a range." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<Slider.Root defaultValue={40} min={0} max={100}>
  <Slider.Control>
    <Slider.Track>
      <Slider.Indicator />
      <Slider.Thumb />
    </Slider.Track>
  </Slider.Control>
</Slider.Root>`}>
        <div style={{ width: '100%', maxWidth: 360 }}>
          <Slider.Root defaultValue={40} min={0} max={100}>
            <Slider.Control>
              <Slider.Track>
                <Slider.Indicator />
                <Slider.Thumb />
              </Slider.Track>
            </Slider.Control>
          </Slider.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Range (two thumbs)</h2>
      <ComponentPreview code={`<Slider.Root defaultValue={[20, 75]} min={0} max={100}>
  <Slider.Control>
    <Slider.Track>
      <Slider.Indicator />
      <Slider.Thumb />
      <Slider.Thumb />
    </Slider.Track>
  </Slider.Control>
</Slider.Root>`}>
        <div style={{ width: '100%', maxWidth: 360 }}>
          <Slider.Root defaultValue={[20, 75]} min={0} max={100}>
            <Slider.Control>
              <Slider.Track>
                <Slider.Indicator />
                <Slider.Thumb />
                <Slider.Thumb />
              </Slider.Track>
            </Slider.Control>
          </Slider.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Disabled</h2>
      <ComponentPreview code={`<Slider.Root defaultValue={50} disabled>
  <Slider.Control>
    <Slider.Track>
      <Slider.Indicator />
      <Slider.Thumb />
    </Slider.Track>
  </Slider.Control>
</Slider.Root>`}>
        <div style={{ width: '100%', maxWidth: 360 }}>
          <Slider.Root defaultValue={50} disabled>
            <Slider.Control>
              <Slider.Track>
                <Slider.Indicator />
                <Slider.Thumb />
              </Slider.Track>
            </Slider.Control>
          </Slider.Root>
        </div>
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
            <td className="py-2 pr-4 font-mono text-xs">Slider.Root</td>
            <td className="py-2 docs-text-muted">Root context. Key props: <code className="docs-code-inline-bg px-1 rounded">value</code> / <code className="docs-code-inline-bg px-1 rounded">defaultValue</code> (number or number[] for range), <code className="docs-code-inline-bg px-1 rounded">min</code>, <code className="docs-code-inline-bg px-1 rounded">max</code>, <code className="docs-code-inline-bg px-1 rounded">step</code> (number), <code className="docs-code-inline-bg px-1 rounded">disabled</code> (boolean), <code className="docs-code-inline-bg px-1 rounded">onValueChange</code> (function).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Slider.Control</td>
            <td className="py-2 docs-text-muted">Interactive wrapper that handles pointer events.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Slider.Track</td>
            <td className="py-2 docs-text-muted">The background rail of the slider.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Slider.Indicator</td>
            <td className="py-2 docs-text-muted">Filled portion of the track representing the selected range.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Slider.Thumb</td>
            <td className="py-2 docs-text-muted">Draggable handle. Add two <code className="docs-code-inline-bg px-1 rounded">Slider.Thumb</code> elements for a range slider.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
