import { useState } from 'react'
import { Table } from '@awakr/awake-ui/table'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

const users = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { id: '3', name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
  { id: '4', name: 'David Brown', email: 'david@example.com', role: 'Editor', status: 'Active' },
]

function SortableDemo() {
  const [sortDir, setSortDir] = useState<'asc' | 'desc' | null>(null)
  const sorted = [...users].sort((a, b) => {
    if (!sortDir) return 0
    return sortDir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  })
  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell
            sortable
            sortDirection={sortDir}
            onSort={() => setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))}
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sorted.map((u) => (
          <Table.Row key={u.id}>
            <Table.Cell>{u.name}</Table.Cell>
            <Table.Cell>{u.email}</Table.Cell>
            <Table.Cell>{u.role}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

function SelectionDemo() {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const allSelected = selected.size === users.length
  const someSelected = selected.size > 0 && !allSelected

  const toggleAll = (checked: boolean) => {
    setSelected(checked ? new Set(users.map((u) => u.id)) : new Set())
  }
  const toggleRow = (id: string) => (checked: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev)
      checked ? next.add(id) : next.delete(id)
      return next
    })
  }

  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.SelectionHeaderCell
            checked={allSelected}
            indeterminate={someSelected}
            onChange={toggleAll}
          />
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {users.map((u) => (
          <Table.Row key={u.id} selected={selected.has(u.id)}>
            <Table.SelectionCell
              checked={selected.has(u.id)}
              onChange={toggleRow(u.id)}
              aria-label={`Select ${u.name}`}
            />
            <Table.Cell>{u.name}</Table.Cell>
            <Table.Cell>{u.email}</Table.Cell>
            <Table.Cell>{u.role}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}


function SearchableDemo() {
  const [query, setQuery] = useState('')
  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase()) ||
      u.role.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <Table.Root searchBar={<Table.SearchBar value={query} onChange={setQuery} placeholder="Search users…" />}>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {filtered.length > 0 ? (
          filtered.map((u) => (
            <Table.Row key={u.id}>
              <Table.Cell>{u.name}</Table.Cell>
              <Table.Cell>{u.email}</Table.Cell>
              <Table.Cell>{u.role}</Table.Cell>
            </Table.Row>
          ))
        ) : (
          <Table.Empty colSpan={3}>No results for "{query}".</Table.Empty>
        )}
      </Table.Body>
    </Table.Root>
  )
}

export function TablePage() {
  return (
    <div>
      <PageHeader title="Table" description="A structured data display component with sorting, selection, striped rows, loading and empty states." />

      <h2 className="text-lg font-semibold mb-4">Basic</h2>
      <ComponentPreview code={`<Table.Root>
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
      <Table.HeaderCell>Role</Table.HeaderCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    {users.map((u) => (
      <Table.Row key={u.id}>
        <Table.Cell>{u.name}</Table.Cell>
        <Table.Cell>{u.email}</Table.Cell>
        <Table.Cell>{u.role}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table.Root>`}>
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {users.map((u) => (
              <Table.Row key={u.id}>
                <Table.Cell>{u.name}</Table.Cell>
                <Table.Cell>{u.email}</Table.Cell>
                <Table.Cell>{u.role}</Table.Cell>
                <Table.Cell>{u.status}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Striped</h2>
      <ComponentPreview code={`<Table.Root striped>
  ...
</Table.Root>`}>
        <Table.Root striped>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {users.map((u) => (
              <Table.Row key={u.id}>
                <Table.Cell>{u.name}</Table.Cell>
                <Table.Cell>{u.email}</Table.Cell>
                <Table.Cell>{u.role}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Sortable columns</h2>
      <ComponentPreview code={`<Table.HeaderCell
  sortable
  sortDirection={sortDir}
  onSort={() => setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))}
>
  Name
</Table.HeaderCell>`}>
        <SortableDemo />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Row selection</h2>
      <ComponentPreview code={`<Table.SelectionHeaderCell
  checked={allSelected}
  indeterminate={someSelected}
  onChange={toggleAll}
/>
{/* per row: */}
<Table.SelectionCell
  checked={selected.has(u.id)}
  onChange={toggleRow(u.id)}
/>
<Table.Row selected={selected.has(u.id)}>...</Table.Row>`}>
        <SelectionDemo />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Loading</h2>
      <ComponentPreview code={`<Table.Root loading>
  ...
</Table.Root>`}>
        <Table.Root loading>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {users.map((u) => (
              <Table.Row key={u.id}>
                <Table.Cell>{u.name}</Table.Cell>
                <Table.Cell>{u.email}</Table.Cell>
                <Table.Cell>{u.role}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Searchable</h2>
      <ComponentPreview code={`const [query, setQuery] = useState('')
const filtered = users.filter((u) =>
  u.name.toLowerCase().includes(query.toLowerCase()) ||
  u.email.toLowerCase().includes(query.toLowerCase()),
)

<Table.Root searchBar={<Table.SearchBar value={query} onChange={setQuery} placeholder="Search users…" />}>
  <Table.Head>...</Table.Head>
  <Table.Body>
    {filtered.length > 0
      ? filtered.map((u) => <Table.Row key={u.id}>...</Table.Row>)
      : <Table.Empty colSpan={3}>No results.</Table.Empty>}
  </Table.Body>
</Table.Root>`}>
        <SearchableDemo />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Empty state</h2>
      <ComponentPreview code={`<Table.Body>
  <Table.Empty colSpan={3}>No results found.</Table.Empty>
</Table.Body>`}>
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Empty colSpan={3}>No results found.</Table.Empty>
          </Table.Body>
        </Table.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <p className="docs-text-muted text-sm mb-4">
        All sub-components accept <code className="docs-code-inline-bg px-1 rounded">className</code> and all native HTML props for their respective element.
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
            <td className="py-2 pr-4 font-mono text-xs">Table.Root</td>
            <td className="py-2 docs-text-muted">Outer container. Props: <code className="docs-code-inline-bg px-1 rounded">striped</code>, <code className="docs-code-inline-bg px-1 rounded">hoverable</code> (default true), <code className="docs-code-inline-bg px-1 rounded">loading</code>, <code className="docs-code-inline-bg px-1 rounded">stickyHeader</code> (all boolean).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Table.Head</td>
            <td className="py-2 docs-text-muted">Table header section (<code className="docs-code-inline-bg px-1 rounded">thead</code>). Becomes sticky when <code className="docs-code-inline-bg px-1 rounded">stickyHeader</code> is set on Root.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Table.Body</td>
            <td className="py-2 docs-text-muted">Table body section (<code className="docs-code-inline-bg px-1 rounded">tbody</code>).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Table.Row</td>
            <td className="py-2 docs-text-muted">Table row (<code className="docs-code-inline-bg px-1 rounded">tr</code>). Accepts <code className="docs-code-inline-bg px-1 rounded">selected</code> (boolean) for highlight + <code className="docs-code-inline-bg px-1 rounded">aria-selected</code>.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Table.HeaderCell</td>
            <td className="py-2 docs-text-muted">Column header (<code className="docs-code-inline-bg px-1 rounded">th</code>). Props: <code className="docs-code-inline-bg px-1 rounded">sortable</code>, <code className="docs-code-inline-bg px-1 rounded">sortDirection</code> ("asc" | "desc" | null), <code className="docs-code-inline-bg px-1 rounded">onSort</code> (() =&gt; void).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Table.Cell</td>
            <td className="py-2 docs-text-muted">Data cell (<code className="docs-code-inline-bg px-1 rounded">td</code>).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Table.SelectionHeaderCell</td>
            <td className="py-2 docs-text-muted">Header checkbox for select-all. Props: <code className="docs-code-inline-bg px-1 rounded">checked</code>, <code className="docs-code-inline-bg px-1 rounded">indeterminate</code>, <code className="docs-code-inline-bg px-1 rounded">onChange</code>.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Table.SelectionCell</td>
            <td className="py-2 docs-text-muted">Row checkbox. Props: <code className="docs-code-inline-bg px-1 rounded">checked</code>, <code className="docs-code-inline-bg px-1 rounded">onChange</code>, <code className="docs-code-inline-bg px-1 rounded">aria-label</code>.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Table.Empty</td>
            <td className="py-2 docs-text-muted">Empty state row. Requires <code className="docs-code-inline-bg px-1 rounded">colSpan</code> (number). Accepts optional <code className="docs-code-inline-bg px-1 rounded">children</code> for custom message.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Table.SearchBar</td>
            <td className="py-2 docs-text-muted">Search input styled for use inside <code className="docs-code-inline-bg px-1 rounded">Table.Root</code>. Props: <code className="docs-code-inline-bg px-1 rounded">value</code> (string), <code className="docs-code-inline-bg px-1 rounded">onChange</code> ((value: string) =&gt; void), <code className="docs-code-inline-bg px-1 rounded">placeholder</code> (string). The consumer owns the state and decides which columns to filter.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
