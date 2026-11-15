import { Autocomplete } from '@awakr/awake-ui/autocomplete'
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

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <p className="docs-text-muted text-sm mb-4">
        All sub-components accept <code className="docs-code-inline-bg px-1 rounded">className</code> and their underlying Base UI props.
        Use <code className="docs-code-inline-bg px-1 rounded">Autocomplete.useFilter</code> for built-in string filtering.
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
            <td className="py-2 pr-4 font-mono text-xs">Autocomplete.Root</td>
            <td className="py-2 docs-text-muted">Root container. Key props: <code className="docs-code-inline-bg px-1 rounded">items</code> (array), <code className="docs-code-inline-bg px-1 rounded">filter</code> (function), <code className="docs-code-inline-bg px-1 rounded">autoHighlight</code> (boolean), <code className="docs-code-inline-bg px-1 rounded">disabled</code> (boolean).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Autocomplete.InputGroup</td>
            <td className="py-2 docs-text-muted">Wrapper grouping the input, clear button, and trigger.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Autocomplete.Input</td>
            <td className="py-2 docs-text-muted">The text input. Accepts standard input props like <code className="docs-code-inline-bg px-1 rounded">placeholder</code>.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Autocomplete.Trigger</td>
            <td className="py-2 docs-text-muted">Button that opens/closes the dropdown list.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Autocomplete.Clear</td>
            <td className="py-2 docs-text-muted">Button that clears the current input value.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Autocomplete.Portal</td>
            <td className="py-2 docs-text-muted">Renders the popup in a portal to avoid z-index issues.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Autocomplete.Positioner</td>
            <td className="py-2 docs-text-muted">Positions the popup relative to the input. Accepts <code className="docs-code-inline-bg px-1 rounded">sideOffset</code> (number).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Autocomplete.Popup</td>
            <td className="py-2 docs-text-muted">The dropdown panel container.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Autocomplete.List</td>
            <td className="py-2 docs-text-muted">List of items inside the popup.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Autocomplete.Item</td>
            <td className="py-2 docs-text-muted">Individual option. Requires <code className="docs-code-inline-bg px-1 rounded">value</code> prop matching the items array entry.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Autocomplete.Empty</td>
            <td className="py-2 docs-text-muted">Shown when no items match the current filter.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Autocomplete.useFilter</td>
            <td className="py-2 docs-text-muted">Hook returning a <code className="docs-code-inline-bg px-1 rounded">contains</code> helper for locale-aware string matching. Accepts <code className="docs-code-inline-bg px-1 rounded">{'{ sensitivity: "base" | "case" | "accent" | "variant" }'}</code>.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
