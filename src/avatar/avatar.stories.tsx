import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    src: { control: 'text' },
    alt: { control: 'text' },
    fallback: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithFallback: Story = {
  args: { alt: 'Ana Lima', size: 'md' },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=47',
    alt: 'Ana Lima',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Avatar alt="SM" size="sm" />
      <Avatar alt="MD" size="md" />
      <Avatar alt="LG" size="lg" />
    </div>
  ),
};
