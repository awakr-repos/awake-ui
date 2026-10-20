import { NumberField } from '@developmentsnil/awake-ui/number-field'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function NumberFieldPage() {
  return (
    <div>
      <PageHeader title="Number Field" description="An input for numeric values with increment/decrement controls." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<NumberField.Root defaultValue={0} min={0} max={100}>
  <NumberField.Group>
    <NumberField.Decrement />
    <NumberField.Input />
    <NumberField.Increment />
  </NumberField.Group>
</NumberField.Root>`}>
        <NumberField.Root defaultValue={0} min={0} max={100}>
          <NumberField.Group>
            <NumberField.Decrement />
            <NumberField.Input />
            <NumberField.Increment />
          </NumberField.Group>
        </NumberField.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">With step</h2>
      <ComponentPreview code={`<NumberField.Root defaultValue={0} min={0} max={100} step={10}>
  <NumberField.Group>
    <NumberField.Decrement />
    <NumberField.Input />
    <NumberField.Increment />
  </NumberField.Group>
</NumberField.Root>`}>
        <NumberField.Root defaultValue={0} min={0} max={100} step={10}>
          <NumberField.Group>
            <NumberField.Decrement />
            <NumberField.Input />
            <NumberField.Increment />
          </NumberField.Group>
        </NumberField.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Disabled</h2>
      <ComponentPreview code={`<NumberField.Root defaultValue={42} disabled>
  <NumberField.Group>
    <NumberField.Decrement />
    <NumberField.Input />
    <NumberField.Increment />
  </NumberField.Group>
</NumberField.Root>`}>
        <NumberField.Root defaultValue={42} disabled>
          <NumberField.Group>
            <NumberField.Decrement />
            <NumberField.Input />
            <NumberField.Increment />
          </NumberField.Group>
        </NumberField.Root>
      </ComponentPreview>
    </div>
  )
}
