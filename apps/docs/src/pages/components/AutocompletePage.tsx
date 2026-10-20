import { Autocomplete } from '@developmentsnil/awake-ui/autocomplete'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

const COUNTRIES = [
  'Argentina', 'Brazil', 'Canada', 'Denmark', 'Egypt',
  'France', 'Germany', 'Hungary', 'India', 'Japan',
  'Kenya', 'Mexico', 'Norway', 'Portugal', 'Spain',
]

function BasicAutocomplete() {
  const { contains } = Autocomplete.useFilter({ sensitivity: 'base' })
  return (
    <Autocomplete.Root
      items={COUNTRIES}
      filter={(item, input) => contains(item, input)}
      autoHighlight
    >
      <Autocomplete.InputGroup>
        <Autocomplete.Input placeholder="Search country…" />
        <Autocomplete.Clear aria-label="Clear">✕</Autocomplete.Clear>
        <Autocomplete.Trigger aria-label="Toggle list">▾</Autocomplete.Trigger>
      </Autocomplete.InputGroup>
      <Autocomplete.Portal>
        <Autocomplete.Positioner sideOffset={4}>
          <Autocomplete.Popup>
            <Autocomplete.List>
              {COUNTRIES.map((c) => (
                <Autocomplete.Item key={c} value={c}>{c}</Autocomplete.Item>
              ))}
            </Autocomplete.List>
            <Autocomplete.Empty>No results found.</Autocomplete.Empty>
          </Autocomplete.Popup>
        </Autocomplete.Positioner>
      </Autocomplete.Portal>
    </Autocomplete.Root>
  )
}

function DisabledAutocomplete() {
  const { contains } = Autocomplete.useFilter({ sensitivity: 'base' })
  return (
    <Autocomplete.Root
      items={COUNTRIES}
      filter={(item, input) => contains(item, input)}
      disabled
    >
      <Autocomplete.InputGroup>
        <Autocomplete.Input placeholder="Disabled autocomplete" />
        <Autocomplete.Trigger aria-label="Toggle list">▾</Autocomplete.Trigger>
      </Autocomplete.InputGroup>
    </Autocomplete.Root>
  )
}

export function AutocompletePage() {
  return (
    <div>
      <PageHeader title="Autocomplete" description="A text input with a dropdown list of suggestions that filter as you type." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`const COUNTRIES = ['Argentina', 'Brazil', 'Canada', ...]

function AutocompleteDemo() {
  const { contains } = Autocomplete.useFilter({ sensitivity: 'base' })
  return (
    <Autocomplete.Root
      items={COUNTRIES}
      filter={(item, input) => contains(item, input)}
      autoHighlight
    >
      <Autocomplete.InputGroup>
        <Autocomplete.Input placeholder="Search country…" />
        <Autocomplete.Clear aria-label="Clear">✕</Autocomplete.Clear>
        <Autocomplete.Trigger aria-label="Toggle list">▾</Autocomplete.Trigger>
      </Autocomplete.InputGroup>
      <Autocomplete.Portal>
        <Autocomplete.Positioner sideOffset={4}>
          <Autocomplete.Popup>
            <Autocomplete.List>
              {COUNTRIES.map((c) => (
                <Autocomplete.Item key={c} value={c}>{c}</Autocomplete.Item>
              ))}
            </Autocomplete.List>
            <Autocomplete.Empty>No results found.</Autocomplete.Empty>
          </Autocomplete.Popup>
        </Autocomplete.Positioner>
      </Autocomplete.Portal>
    </Autocomplete.Root>
  )
}`}>
        <BasicAutocomplete />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Disabled</h2>
      <ComponentPreview code={`<Autocomplete.Root items={COUNTRIES} filter={...} disabled>
  <Autocomplete.InputGroup>
    <Autocomplete.Input placeholder="Disabled autocomplete" />
    <Autocomplete.Trigger aria-label="Toggle list">▾</Autocomplete.Trigger>
  </Autocomplete.InputGroup>
</Autocomplete.Root>`}>
        <DisabledAutocomplete />
      </ComponentPreview>
    </div>
  )
}
