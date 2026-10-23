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
    </div>
  )
}
