# @developmentsnil/awake-ui

A React component library built on [Base UI](https://base-ui.com/) with Tailwind CSS v4. Unstyled primitives with a pre-built token system — easy to drop in, easy to customize.

## Installation

```bash
npm install @developmentsnil/awake-ui
# or
pnpm add @developmentsnil/awake-ui
```

**Peer dependencies:** React 19+

---

## Setup

### 1. Import the base styles

In your application root (e.g. `main.tsx`):

```tsx
import '@developmentsnil/awake-ui/style.css';
```

### 2. (Optional) Import dark mode styles

```tsx
import '@developmentsnil/awake-ui/dark-theme.css';
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

### Button

```tsx
import { Button } from '@developmentsnil/awake-ui/button';

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

### Alert

```tsx
import { Alert } from '@developmentsnil/awake-ui/alert';

// Variants: info (default) | success | warning | error
<Alert variant="info">Your session will expire in 5 minutes.</Alert>
<Alert variant="success">Profile saved successfully.</Alert>
<Alert variant="warning">This action cannot be undone.</Alert>
<Alert variant="error">Failed to save changes.</Alert>
```

---

### Dialog

`Dialog.Trigger` has no visual style — pass any element via the `render` prop:

```tsx
import { Dialog } from '@developmentsnil/awake-ui/dialog';
import { Button } from '@developmentsnil/awake-ui/button';

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

### Field

```tsx
import { Field } from '@developmentsnil/awake-ui/field';

<Field.Root>
  <Field.Label>Email</Field.Label>
  <Field.Control type="email" placeholder="you@example.com" />
</Field.Root>
```

---

### Select

```tsx
import { Select } from '@developmentsnil/awake-ui/select';

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

### Switch

Switch uses the compound component pattern — `Root` controls the state, `Thumb` is the visual handle:

```tsx
import { Switch } from '@developmentsnil/awake-ui/switch';

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

### Loading

```tsx
import { Loading } from '@developmentsnil/awake-ui/loading';

// Sizes: sm | md (default) | lg
<Loading />
<Loading size="sm" label="Saving…" />
<Loading size="lg" label="Loading data" />
```

`label` sets the accessible `aria-label` (default: `"Loading…"`).

---

### Tooltip

```tsx
import { Tooltip } from '@developmentsnil/awake-ui/tooltip';
import { Button } from '@developmentsnil/awake-ui/button';

// Wrap multiple tooltips in a single Provider
<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger render={<Button variant="ghost">Hover me</Button>} />
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

### Separator

```tsx
import { Separator } from '@developmentsnil/awake-ui/separator';

<Separator />                          // horizontal (default)
<Separator orientation="vertical" />  // vertical
```

---

### Table

```tsx
import { Table } from '@developmentsnil/awake-ui/table';

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

### Pagination

```tsx
import { Pagination } from '@developmentsnil/awake-ui/pagination';

const [page, setPage] = useState(1);

<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
/>
```

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
import '@developmentsnil/awake-ui/dark-theme.css';

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
