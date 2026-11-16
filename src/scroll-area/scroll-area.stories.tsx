import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea } from './index';

const meta: Meta = {
  title: 'Components/ScrollArea',
  argTypes: {},
};
export default meta;
type Story = StoryObj;

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

export const Vertical: Story = {
  render: () => (
    <ScrollArea.Root style={{ height: 200, width: 280, border: '1px solid var(--color-awake-border)', borderRadius: 'var(--radius-awake-md)' }}>
      <ScrollArea.Viewport style={{ height: '100%', padding: '0.5rem' }}>
        {items.map((item) => (
          <div key={item} style={{ padding: '0.375rem 0.5rem', fontSize: '0.875rem' }}>{item}</div>
        ))}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" />
    </ScrollArea.Root>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea.Root style={{ width: 300, border: '1px solid var(--color-awake-border)', borderRadius: 'var(--radius-awake-md)' }}>
      <ScrollArea.Viewport style={{ padding: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', width: 'max-content' }}>
          {items.map((item) => (
            <div key={item} style={{ padding: '0.5rem 1rem', background: 'var(--color-awake-surface-raised)', borderRadius: 'var(--radius-awake-sm)', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>{item}</div>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal" />
    </ScrollArea.Root>
  ),
};
