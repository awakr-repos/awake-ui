# @awakr/awake-ui

A React component library built on [Base UI](https://base-ui.com/) with Tailwind CSS v4. Unstyled primitives with a pre-built token system — easy to drop in, easy to customize.

## Installation

```bash
npm install @awakr/awake-ui
# or
pnpm add @awakr/awake-ui
```

**Peer dependencies:** React 19+

---

## Setup

### 1. Import the base styles

In your application root (e.g. `main.tsx`):

```tsx
import '@awakr/awake-ui/style.css';
```

### 2. (Optional) Import dark mode styles

```tsx
import '@awakr/awake-ui/dark-theme.css';
```

Then apply `data-theme="dark"` or the `.dark` class to a parent element to activate dark mode:

```tsx
// HTML attribute
<html data-theme="dark">

// CSS class
<html class="dark">

// Dynamic toggle
const [isDark, setIsDark] = useState(false);
<div data-theme={isDark ? 'dark' : 'light'}>
  {/* your app */}
</div>
```

---

## Components

### Accordion

```tsx
import { Accordion } from '@awakr/awake-ui/accordion';

<Accordion.Root>
  <Accordion.Item value="item-1">
    <Accordion.Header>
      <Accordion.Trigger>What is awake-ui?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Panel>
      A React component library built on Base UI primitives.
    </Accordion.Panel>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Header>
      <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Panel>
      Yes — all interactive components follow WAI-ARIA patterns.
    </Accordion.Panel>
  </Accordion.Item>
</Accordion.Root>

// Allow multiple items open at once
<Accordion.Root openMultiple>
  {/* ... */}
</Accordion.Root>

// Open a specific item by default
<Accordion.Root defaultValue={['item-1']}>
  {/* ... */}
</Accordion.Root>
```

---

### Alert

```tsx
import { Alert } from '@awakr/awake-ui/alert';

// Variants: info (default) | success | warning | error
<Alert variant="info">Your session will expire in 5 minutes.</Alert>
<Alert variant="success">Profile saved successfully.</Alert>
<Alert variant="warning">This action cannot be undone.</Alert>
<Alert variant="error">Failed to save changes.</Alert>
```

---

---

### Autocomplete

A text input that filters a list of options as the user types:

```tsx
import { Autocomplete } from '@awakr/awake-ui/autocomplete';

function SearchInput() {
  const FRUITS = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];
  const { contains } = Autocomplete.useFilter({ sensitivity: 'base' });

  return (
    <Autocomplete.Root
      items={FRUITS}
      filter={(item, input) => contains(item, input)}
      autoHighlight
    >
      <Autocomplete.InputGroup>
        <Autocomplete.Input placeholder="Search fruits…" />
        <Autocomplete.Clear aria-label="Clear">✕</Autocomplete.Clear>
        <Autocomplete.Trigger aria-label="Toggle list">▾</Autocomplete.Trigger>
      </Autocomplete.InputGroup>
      <Autocomplete.Portal>
        <Autocomplete.Positioner sideOffset={4}>
          <Autocomplete.Popup>
            <Autocomplete.List>
              {FRUITS.map((f) => (
                <Autocomplete.Item key={f} value={f}>{f}</Autocomplete.Item>
              ))}
            </Autocomplete.List>
            <Autocomplete.Empty>No results found.</Autocomplete.Empty>
          </Autocomplete.Popup>
        </Autocomplete.Positioner>
      </Autocomplete.Portal>
    </Autocomplete.Root>
  );
}
```

`Autocomplete.useFilter` accepts `sensitivity: 'base' | 'accent' | 'case' | 'variant'`.  
`Autocomplete.Clear` only renders when the input has a value.

---

---

### Button

```tsx
import { Button } from '@awakr/awake-ui/button';

// Variants: primary | secondary | ghost | outline | destructive
<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost">Learn more</Button>
<Button variant="outline">Edit</Button>
<Button variant="destructive">Delete</Button>

// Sizes: sm | md (default) | lg
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Disabled
<Button variant="primary" disabled>Processing…</Button>
```

---

---

### Dialog

`Dialog.Trigger` has no visual style — pass any element via the `render` prop:

```tsx
import { Dialog } from '@awakr/awake-ui/dialog';
import { Button } from '@awakr/awake-ui/button';

<Dialog.Root>
  <Dialog.Trigger render={<Button variant="primary">Open</Button>} />
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Popup>
      <Dialog.Title>Confirm action</Dialog.Title>
      <p>Are you sure you want to proceed?</p>
      <Dialog.Close render={<Button variant="ghost">Cancel</Button>} />
      <Dialog.Close render={<Button variant="destructive">Confirm</Button>} />
    </Dialog.Popup>
  </Dialog.Portal>
</Dialog.Root>
```

---

---

### Field

```tsx
import { Field } from '@awakr/awake-ui/field';

<Field.Root>
  <Field.Label>Email</Field.Label>
  <Field.Control type="email" placeholder="you@example.com" />
</Field.Root>
```

---

---

### Loading

```tsx
import { Loading } from '@awakr/awake-ui/loading';

// Sizes: sm | md (default) | lg
<Loading />
<Loading size="sm" label="Saving…" />
<Loading size="lg" label="Loading data" />
```

`label` sets the accessible `aria-label` (default: `"Loading…"`).

---

---

### Pagination

```tsx
import { Pagination } from '@awakr/awake-ui/pagination';

const [page, setPage] = useState(1);

<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
/>
```

---

---

### Progress

```tsx
import { Progress } from '@awakr/awake-ui/progress';

// Basic
<Progress.Root value={60}>
  <Progress.Track>
    <Progress.Indicator />
  </Progress.Track>
</Progress.Root>

// With label and value display
<Progress.Root value={40}>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Progress.Label>Uploading file…</Progress.Label>
    <Progress.Value />
  </div>
  <Progress.Track>
    <Progress.Indicator />
  </Progress.Track>
</Progress.Root>

// Indeterminate (omit value)
<Progress.Root>
  <Progress.Track>
    <Progress.Indicator />
  </Progress.Track>
</Progress.Root>
```

---

---

### Select

```tsx
import { Select } from '@awakr/awake-ui/select';

<Select.Root>
  <Select.Label>Country</Select.Label>
  <Select.Trigger>
    <Select.Value placeholder="Choose one…" />
    <Select.Icon>▾</Select.Icon>
  </Select.Trigger>
  <Select.Portal>
    <Select.Backdrop />
    <Select.Positioner>
      <Select.Popup>
        <Select.List>
          <Select.Item value="br">
            <Select.ItemIndicator>✓</Select.ItemIndicator>
            <Select.ItemText>Brazil</Select.ItemText>
          </Select.Item>
          <Select.Item value="us">
            <Select.ItemIndicator>✓</Select.ItemIndicator>
            <Select.ItemText>United States</Select.ItemText>
          </Select.Item>
        </Select.List>
      </Select.Popup>
    </Select.Positioner>
  </Select.Portal>
</Select.Root>
```

**With groups and scroll arrows** (for long lists):

```tsx
<Select.Popup>
  <Select.ScrollUpArrow>▲</Select.ScrollUpArrow>
  <Select.List>
    <Select.Group>
      <Select.GroupLabel>Fruits</Select.GroupLabel>
      <Select.Item value="apple">
        <Select.ItemIndicator>✓</Select.ItemIndicator>
        <Select.ItemText>Apple</Select.ItemText>
      </Select.Item>
    </Select.Group>
    <Select.Separator />
    <Select.Group>
      <Select.GroupLabel>Vegetables</Select.GroupLabel>
      <Select.Item value="carrot">
        <Select.ItemIndicator>✓</Select.ItemIndicator>
        <Select.ItemText>Carrot</Select.ItemText>
      </Select.Item>
    </Select.Group>
  </Select.List>
  <Select.ScrollDownArrow>▼</Select.ScrollDownArrow>
</Select.Popup>
```

---

---

### Separator

```tsx
import { Separator } from '@awakr/awake-ui/separator';

<Separator />                          // horizontal (default)
<Separator orientation="vertical" />  // vertical
```

---

---

### Slider

```tsx
import { Slider } from '@awakr/awake-ui/slider';

// Uncontrolled
<Slider.Root defaultValue={[40]}>
  <Slider.Track>
    <Slider.Indicator />
    <Slider.Thumb />
  </Slider.Track>
</Slider.Root>

// With min, max and step
<Slider.Root defaultValue={[50]} min={0} max={200} step={10}>
  <Slider.Track>
    <Slider.Indicator />
    <Slider.Thumb />
  </Slider.Track>
</Slider.Root>

// Range (two thumbs)
<Slider.Root defaultValue={[20, 80]}>
  <Slider.Track>
    <Slider.Indicator />
    <Slider.Thumb />
    <Slider.Thumb />
  </Slider.Track>
</Slider.Root>
```

---

---

### Switch

Switch uses the compound component pattern — `Root` controls the state, `Thumb` is the visual handle:

```tsx
import { Switch } from '@awakr/awake-ui/switch';

const [checked, setChecked] = useState(false);

<Switch.Root checked={checked} onCheckedChange={setChecked}>
  <Switch.Thumb />
</Switch.Root>

// Disabled
<Switch.Root checked={true} disabled>
  <Switch.Thumb />
</Switch.Root>
```

---

---

### Table

```tsx
import { Table } from '@awakr/awake-ui/table';

<Table.Root>
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Role</Table.HeaderCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Alice</Table.Cell>
      <Table.Cell>Engineer</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
```

---

---

### Tabs

```tsx
import { Tabs } from '@awakr/awake-ui/tabs';

<Tabs.Root defaultValue="account">
  <Tabs.List>
    <Tabs.Tab value="account">Account</Tabs.Tab>
    <Tabs.Tab value="password">Password</Tabs.Tab>
    <Tabs.Tab value="settings">Settings</Tabs.Tab>
    <Tabs.Indicator />
  </Tabs.List>
  <Tabs.Panel value="account">Account content</Tabs.Panel>
  <Tabs.Panel value="password">Password content</Tabs.Panel>
  <Tabs.Panel value="settings">Settings content</Tabs.Panel>
</Tabs.Root>

// With a disabled tab
<Tabs.Root defaultValue="one">
  <Tabs.List>
    <Tabs.Tab value="one">Tab one</Tabs.Tab>
    <Tabs.Tab value="two" disabled>Disabled</Tabs.Tab>
    <Tabs.Indicator />
  </Tabs.List>
  <Tabs.Panel value="one">Content</Tabs.Panel>
</Tabs.Root>
```

`Tabs.Indicator` renders an animated underline that follows the active tab.

---

---

### Tooltip

`Tooltip.Trigger` wraps any element as its child — no `render` prop needed:

```tsx
import { Tooltip } from '@awakr/awake-ui/tooltip';
import { Button } from '@awakr/awake-ui/button';

// Wrap multiple tooltips in a single Provider
<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger aria-label="More info">
      <Button variant="ghost">Hover me</Button>
    </Tooltip.Trigger>
    <Tooltip.Portal>
      <Tooltip.Positioner side="top">
        <Tooltip.Popup>
          Tooltip text
          <Tooltip.Arrow />
        </Tooltip.Popup>
      </Tooltip.Positioner>
    </Tooltip.Portal>
  </Tooltip.Root>
</Tooltip.Provider>
```

`side` accepts `top` | `right` | `bottom` | `left` (default: `top`).

---

## Customization

awake-ui uses a two-layer token system:

- **Raw scales** — full color palettes (`--color-awake-primary-500`, etc.)
- **Semantic tokens** — what components actually use (`--color-awake-brand`, `--color-awake-surface`, etc.)

To customize the library, **override only the semantic tokens** in your own CSS. You never need to touch the raw scales:

```css
:root {
  /* Change the brand color to teal */
  --color-awake-brand:       #0d9488;
  --color-awake-brand-hover: #0f766e;
  --color-awake-brand-subtle: #ccfbf1;
  --color-awake-brand-focus: #0d9488;
}
```

### Available semantic tokens

| Token | Default (light) | Used for |
|---|---|---|
| `--color-awake-brand` | indigo-500 | Primary actions, focus rings |
| `--color-awake-brand-hover` | indigo-600 | Hover state of brand elements |
| `--color-awake-brand-subtle` | indigo-50 | Subtle brand backgrounds |
| `--color-awake-surface` | #ffffff | Page / card backgrounds |
| `--color-awake-surface-raised` | neutral-100 | Elevated surfaces (dropdowns) |
| `--color-awake-border` | neutral-200 | Default borders |
| `--color-awake-border-strong` | neutral-300 | Emphasized borders |
| `--color-awake-text` | neutral-900 | Body text |
| `--color-awake-text-muted` | neutral-600 | Secondary text |
| `--color-awake-text-subtle` | neutral-400 | Placeholder / disabled text |
| `--color-awake-text-on-brand` | #ffffff | Text on brand-colored backgrounds |

### Per-component CSS variables

Some components expose their own variables for fine-grained control:

```css
/* Separator color */
.my-divider {
  --awake-separator-color: #e2e8f0;
}
```

---

## Dark mode

Import `dark-theme.css` once and apply `data-theme="dark"` or `.dark` to any ancestor element. Both selectors are supported out of the box:

```tsx
import '@awakr/awake-ui/dark-theme.css';

// Using HTML attribute (Radix / shadcn default)
document.documentElement.setAttribute('data-theme', 'dark');

// Using CSS class (Tailwind default)
document.documentElement.classList.add('dark');
```

To support `prefers-color-scheme` instead, add this to your own CSS:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* paste the same overrides from dark-theme.css here */
  }
}
```

---

## License

MIT
