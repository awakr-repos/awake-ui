import { Select } from '@awakr/awake-ui/select'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

function BasicSelect() {
  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger>
        <Select.Value placeholder="Select a fruit" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Backdrop />
        <Select.Positioner>
          <Select.Popup>
            <Select.List>
              {fruits.map((fruit) => (
                <Select.Item key={fruit} value={fruit.toLowerCase()}>
                  <Select.ItemText>{fruit}</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  )
}

function DisabledItemsSelect() {
  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger>
        <Select.Value placeholder="Select a fruit" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Backdrop />
        <Select.Positioner>
          <Select.Popup>
            <Select.List>
              <Select.Item value="apple">
                <Select.ItemText>Apple</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
              <Select.Item value="banana" disabled>
                <Select.ItemText>Banana (unavailable)</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
              <Select.Item value="cherry">
                <Select.ItemText>Cherry</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
              <Select.Item value="date" disabled>
                <Select.ItemText>Date (unavailable)</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  )
}

export function SelectPage() {
  return (
    <div>
      <PageHeader title="Select" description="A select input that allows the user to choose one option from a list." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<Select.Root defaultValue="apple">
  <Select.Trigger>
    <Select.Value placeholder="Select a fruit" />
    <Select.Icon />
  </Select.Trigger>
  <Select.Portal>
    <Select.Backdrop />
    <Select.Positioner>
      <Select.Popup>
        <Select.List>
          <Select.Item value="apple">
            <Select.ItemText>Apple</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
          {/* more items */}
        </Select.List>
      </Select.Popup>
    </Select.Positioner>
  </Select.Portal>
</Select.Root>`}>
        <BasicSelect />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">With disabled items</h2>
      <ComponentPreview code={`<Select.Item value="banana" disabled>
  <Select.ItemText>Banana (unavailable)</Select.ItemText>
  <Select.ItemIndicator />
</Select.Item>`}>
        <DisabledItemsSelect />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Disabled select</h2>
      <ComponentPreview code={`<Select.Root disabled>
  <Select.Trigger>
    <Select.Value placeholder="Disabled select" />
    <Select.Icon />
  </Select.Trigger>
</Select.Root>`}>
        <Select.Root disabled>
          <Select.Trigger>
            <Select.Value placeholder="Disabled select" />
            <Select.Icon />
          </Select.Trigger>
        </Select.Root>
      </ComponentPreview>
    </div>
  )
}
