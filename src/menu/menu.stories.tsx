import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './index';
import { Button } from '../button';

const meta: Meta = {
  title: 'Components/Menu',
  argTypes: {
    openOnHover: { control: 'boolean', description: 'Open on hover' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger render={<Button variant="outline">Actions ▾</Button>} />
      <Menu.Portal>
        <Menu.Positioner>
          <Menu.Popup>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Duplicate</Menu.Item>
            <Menu.Separator />
            <Menu.Item>Archive</Menu.Item>
            <Menu.Item disabled>Share (unavailable)</Menu.Item>
            <Menu.Separator />
            <Menu.Item style={{ color: 'var(--color-awake-error, #ef4444)' }}>Delete</Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger render={<Button variant="outline">More ▾</Button>} />
      <Menu.Portal>
        <Menu.Positioner>
          <Menu.Popup>
            <Menu.Group>
              <Menu.GroupLabel>Account</Menu.GroupLabel>
              <Menu.Item>Profile</Menu.Item>
              <Menu.Item>Settings</Menu.Item>
            </Menu.Group>
            <Menu.Separator />
            <Menu.Group>
              <Menu.GroupLabel>Support</Menu.GroupLabel>
              <Menu.Item>Documentation</Menu.Item>
              <Menu.Item>Changelog</Menu.Item>
            </Menu.Group>
            <Menu.Separator />
            <Menu.Item>Log out</Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  ),
};
