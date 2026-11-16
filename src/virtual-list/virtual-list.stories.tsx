import type { Meta, StoryObj } from '@storybook/react';
import { VirtualList } from './index';

type Item = { id: number; name: string };

const meta = {
  title: 'Components/VirtualList',
  component: VirtualList<Item>,
  parameters: { layout: 'padded' },
  argTypes: {
    items: {
      description: 'Array of items to render.',
      control: false,
    },
    itemHeight: {
      description: 'Height of each row in pixels.',
      control: { type: 'number' },
    },
    renderItem: {
      description: 'Render function for each row. Receives `(item, index)`.\n`(item: T, index: number) => React.ReactNode`',
      control: false,
    },
    height: {
      description: 'Fixed height of the scroll container in pixels.',
      control: { type: 'number' },
    },
    overscan: {
      description: 'Number of items rendered beyond the visible area on each side.',
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof VirtualList<Item>>;

export default meta;
type Story = StoryObj<typeof meta>;

const ITEMS: Item[] = Array.from({ length: 10_000 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `const items = Array.from({ length: 10_000 }, (_, i) => ({ id: i + 1, name: \`Item \${i + 1}\` }));

<VirtualList
  items={items}
  itemHeight={48}
  height={400}
  renderItem={(item) => (
    <span>
      <strong>#{item.id}</strong> {item.name}
    </span>
  )}
/>`,
      },
    },
  },
  render: (args) => (
    <VirtualList<Item>
      {...args}
      items={ITEMS}
      itemHeight={48}
      height={400}
      overscan={5}
      renderItem={(item) => (
        <span>
          <strong>#{item.id}</strong>&nbsp;{item.name}
        </span>
      )}
    />
  ),
};

export const DenseRows: Story = {
  parameters: {
    docs: {
      source: {
        code: `const items = Array.from({ length: 10_000 }, (_, i) => ({ id: i + 1, name: \`Item \${i + 1}\` }));

<VirtualList
  items={items}
  itemHeight={32}
  height={320}
  overscan={8}
  renderItem={(item) => (
    <span style={{ fontSize: '0.8125rem' }}>{item.name}</span>
  )}
/>`,
      },
    },
  },
  render: (args) => (
    <VirtualList<Item>
      {...args}
      items={ITEMS}
      itemHeight={32}
      height={320}
      overscan={8}
      renderItem={(item) => (
        <span style={{ fontSize: '0.8125rem' }}>{item.name}</span>
      )}
    />
  ),
};
