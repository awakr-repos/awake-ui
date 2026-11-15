import { Table } from '@awakr/awake-ui/table'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

const users = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
  { name: 'David Brown', email: 'david@example.com', role: 'Editor', status: 'Active' },
]

export function TablePage() {
  return (
    <div>
      <PageHeader title="Table" description="A structured data display component for rows and columns of information." />

      <h2 className="text-lg font-semibold mb-4">Basic table</h2>
      <ComponentPreview code={`<Table.Root>
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
      <Table.HeaderCell>Role</Table.HeaderCell>
      <Table.HeaderCell>Status</Table.HeaderCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    {users.map((user) => (
      <Table.Row key={user.email}>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>{user.role}</Table.Cell>
        <Table.Cell>{user.status}</Table.Cell>
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
            {users.map((user) => (
              <Table.Row key={user.email}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>{user.status}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Single row</h2>
      <ComponentPreview code={`<Table.Root>
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Role</Table.HeaderCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Alice Johnson</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>`}>
        <Table.Root>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Alice Johnson</Table.Cell>
              <Table.Cell>Admin</Table.Cell>
            </Table.Row>
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
            <td className="py-2 docs-text-muted">Outer container with a scroll wrapper. Renders a <code className="docs-code-inline-bg px-1 rounded">table</code> inside a <code className="docs-code-inline-bg px-1 rounded">div</code>.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Table.Head</td>
            <td className="py-2 docs-text-muted">Table header section (<code className="docs-code-inline-bg px-1 rounded">thead</code>).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Table.Body</td>
            <td className="py-2 docs-text-muted">Table body section (<code className="docs-code-inline-bg px-1 rounded">tbody</code>).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Table.Row</td>
            <td className="py-2 docs-text-muted">Table row (<code className="docs-code-inline-bg px-1 rounded">tr</code>). Used in both head and body.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Table.HeaderCell</td>
            <td className="py-2 docs-text-muted">Column header cell (<code className="docs-code-inline-bg px-1 rounded">th</code>).</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Table.Cell</td>
            <td className="py-2 docs-text-muted">Data cell (<code className="docs-code-inline-bg px-1 rounded">td</code>).</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
