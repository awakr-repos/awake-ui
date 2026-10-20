import { Slider } from '@developmentsnil/awake-ui/slider'
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
    </div>
  )
}
