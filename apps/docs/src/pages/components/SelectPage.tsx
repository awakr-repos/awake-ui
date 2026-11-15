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
            <td className="py-2 pr-4 font-mono text-xs">Select.Root</td>
            <td className="py-2 docs-text-muted">Root context. Key props: <code className="docs-code-inline-bg px-1 rounded">value</code> / <code className="docs-code-inline-bg px-1 rounded">defaultValue</code> (string), <code className="docs-code-inline-bg px-1 rounded">onValueChange</code> (function), <code className="docs-code-inline-bg px-1 rounded">disabled</code> (boolean).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Select.Trigger</td>
            <td className="py-2 docs-text-muted">Button that opens the dropdown.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Select.Value</td>
            <td className="py-2 docs-text-muted">Displays the selected value. Accepts <code className="docs-code-inline-bg px-1 rounded">placeholder</code> (string) for empty state.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Select.Icon</td>
            <td className="py-2 docs-text-muted">Chevron icon inside the trigger.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Select.Portal</td>
            <td className="py-2 docs-text-muted">Renders the popup in a portal to avoid z-index issues.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Select.Backdrop</td>
            <td className="py-2 docs-text-muted">Semi-transparent overlay shown when the dropdown is open.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Select.Positioner</td>
            <td className="py-2 docs-text-muted">Positions the popup relative to the trigger.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Select.Popup</td>
            <td className="py-2 docs-text-muted">The dropdown panel container.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Select.List</td>
            <td className="py-2 docs-text-muted">List of items inside the popup.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Select.Item</td>
            <td className="py-2 docs-text-muted">Individual option. Requires <code className="docs-code-inline-bg px-1 rounded">value</code> (string). Accepts <code className="docs-code-inline-bg px-1 rounded">disabled</code> (boolean).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Select.ItemText</td>
            <td className="py-2 docs-text-muted">The visible label for an item.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Select.ItemIndicator</td>
            <td className="py-2 docs-text-muted">Checkmark shown when the item is selected.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
