import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover } from './index';
import { Button } from '../button';

const meta: Meta = {
  title: 'Components/Popover',
  argTypes: {
    openOnHover: { control: 'boolean', description: 'Open on hover instead of click' },
    defaultOpen: { control: 'boolean', description: 'Open by default' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger render={<Button variant="outline">Open popover</Button>} />
      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Popup>
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>This is a popover with a title and description.</Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  ),
};

export const WithClose: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger render={<Button variant="outline">More info</Button>} />
      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Popup style={{ position: 'relative' }}>
            <Popover.Close>✕</Popover.Close>
            <Popover.Title>Help</Popover.Title>
            <Popover.Description>Click anywhere outside or the × button to close.</Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  ),
};

export const Sides: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Popover.Root key={side}>
          <Popover.Trigger render={<Button variant="outline">{side}</Button>} />
          <Popover.Portal>
            <Popover.Positioner side={side}>
              <Popover.Popup>Appears on the {side}</Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover.Root>
      ))}
    </div>
  ),
};
