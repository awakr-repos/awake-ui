import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from './index';

const meta: Meta = {
  title: 'Components/Table',
  argTypes: {
    className: { control: 'text', description: 'Additional CSS class for Root' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Nome</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>john.doe@example.com</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};