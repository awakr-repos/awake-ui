import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button';
import { Dialog } from './index';

const meta: Meta = {
  title: 'Components/Dialog',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger render={<Button>Open Dialog</Button>} />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>Dialog Description</Dialog.Description>
          <Dialog.Close render={<Button variant="secondary">Close</Button>} />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};

export const WithSecondaryTrigger: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger render={<Button variant="secondary">Open</Button>} />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Title>Secondary Trigger</Dialog.Title>
          <Dialog.Description>Trigger composed with a secondary button.</Dialog.Description>
          <Dialog.Close render={<Button variant="ghost">Dismiss</Button>} />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};
