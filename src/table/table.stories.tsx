import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Table } from './index';

const meta: Meta = {
  title: 'Components/Table',
  argTypes: {
    striped: { control: 'boolean', description: 'Alternating row background colors' },
    hoverable: { control: 'boolean', description: 'Highlight rows on hover', defaultValue: true },
    loading: { control: 'boolean', description: 'Show loading skeleton overlay' },
    stickyHeader: { control: 'boolean', description: 'Pin the header on scroll' },
    searchBar: { control: false, description: 'Pass <Table.SearchBar value={query} onChange={setQuery} /> — the consumer owns the query state and decides the filtering logic' },
  },
};

export default meta;
type Story = StoryObj;

const users = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { id: '3', name: 'Carol White', email: 'carol@example.com', role: 'Viewer' },
  { id: '4', name: 'David Brown', email: 'david@example.com', role: 'Editor' },
];

export const Default: Story = {
  render: () => (
    <Table.Root>
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
  ),
};

export const Striped: Story = {
  render: () => (
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
  ),
};

export const Sortable: Story = {
  render: () => {
    const [sortDir, setSortDir] = useState<'asc' | 'desc' | null>(null);
    const sorted = [...users].sort((a, b) => {
      if (!sortDir) return 0;
      return sortDir === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
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
    );
  },
};

export const WithSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const allSelected = selected.size === users.length;
    const someSelected = selected.size > 0 && !allSelected;

    const toggleAll = (checked: boolean) => {
      setSelected(checked ? new Set(users.map((u) => u.id)) : new Set());
    };
    const toggleRow = (id: string) => (checked: boolean) => {
      setSelected((prev) => {
        const next = new Set(prev);
        checked ? next.add(id) : next.delete(id);
        return next;
      });
    };

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
    );
  },
};

export const Loading: Story = {
  render: () => (
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
  ),
};

export const EmptyState: Story = {
  render: () => (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Empty colSpan={3}>No users found.</Table.Empty>
      </Table.Body>
    </Table.Root>
  ),
};

export const Searchable: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    const filtered = users.filter(
      (u) =>
        u.name.toLowerCase().includes(query.toLowerCase()) ||
        u.email.toLowerCase().includes(query.toLowerCase()) ||
        u.role.toLowerCase().includes(query.toLowerCase()),
    );

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
    );
  },
};
