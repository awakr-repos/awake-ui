import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContextMenu } from './index';

const meta: Meta = {
  title: 'Components/ContextMenu',
  argTypes: {},
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 320, height: 160, border: '2px dashed var(--color-awake-border)', borderRadius: 'var(--radius-awake-md)', fontSize: '0.875rem', color: 'var(--color-awake-text-muted)', userSelect: 'none' }}>
        Right-click here
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner>
          <ContextMenu.Popup>
            <ContextMenu.Item>Open</ContextMenu.Item>
            <ContextMenu.Item>Open in new tab</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Copy</ContextMenu.Item>
            <ContextMenu.Item>Paste</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item style={{ color: 'var(--color-awake-error, #ef4444)' }}>Delete</ContextMenu.Item>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  ),
};
