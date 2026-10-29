import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './index';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'warning', 'error', 'info'] },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { variant: 'default', children: 'Default' } };
export const Success: Story = { args: { variant: 'success', children: 'Ativo' } };
export const Warning: Story = { args: { variant: 'warning', children: 'Pendente' } };
export const Error: Story = { args: { variant: 'error', children: 'Inativo' } };
export const Info: Story = { args: { variant: 'info', children: 'Novo' } };

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="info">Novo</Badge>
      <Badge variant="success">Ativo</Badge>
      <Badge variant="warning">Pendente</Badge>
      <Badge variant="error">Inativo</Badge>
    </div>
  ),
};
