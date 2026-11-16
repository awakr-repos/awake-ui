import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './index';
import { Button } from '../button';

const meta: Meta = {
  title: 'Components/Drawer',
  argTypes: {
    defaultOpen: { control: 'boolean', description: 'Open by default' },
  },
};
export default meta;
type Story = StoryObj;

export const Right: Story = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger render={<Button variant="outline">Open right drawer</Button>} />
      <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Popup side="right">
          <Drawer.Close>✕</Drawer.Close>
          <Drawer.Title>Settings</Drawer.Title>
          <Drawer.Description>Adjust your preferences below.</Drawer.Description>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-awake-text-muted)' }}>Drawer content goes here.</p>
        </Drawer.Popup>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};

export const Left: Story = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger render={<Button variant="outline">Open left drawer</Button>} />
      <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Popup side="left">
          <Drawer.Close>✕</Drawer.Close>
          <Drawer.Title>Navigation</Drawer.Title>
          <Drawer.Description>Browse pages and sections.</Drawer.Description>
        </Drawer.Popup>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger render={<Button variant="outline">Open bottom sheet</Button>} />
      <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Popup side="bottom">
          <Drawer.Title>Bottom sheet</Drawer.Title>
          <Drawer.Description>Slides up from the bottom of the screen.</Drawer.Description>
          <Button variant="ghost" style={{ marginTop: '1rem' }}>Close</Button>
        </Drawer.Popup>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};
