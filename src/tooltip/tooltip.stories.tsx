import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './index';
import { useState } from 'react';

const meta: Meta = {
  title: 'Components/Tooltip',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: { control: 'boolean', description: 'Open state (controlled)' },
    defaultOpen: { control: 'boolean', description: 'Open by default (uncontrolled)' },
    onOpenChange: { action: 'onOpenChange', description: 'Called when the open state changes' },
    delay: { control: 'number', description: 'Open delay in ms (default: 600)' },
    closeDelay: { control: 'number', description: 'Close delay in ms (default: 300)' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger aria-label="Bold">
          <button>Hover me</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner>
            <Tooltip.Popup>
              <Tooltip.Arrow />
              Tooltip content
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Tooltip.Provider>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Tooltip.Root>
          <Tooltip.Trigger aria-label="Bold">
            <button>Bold</button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner>
              <Tooltip.Popup>
                <Tooltip.Arrow />
                Bold text
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger aria-label="Italic">
            <button>Italic</button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner>
              <Tooltip.Popup>
                <Tooltip.Arrow />
                Italic text
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger aria-label="Underline">
            <button>Underline</button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner>
              <Tooltip.Popup>
                <Tooltip.Arrow />
                Underline text
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
    </Tooltip.Provider>
  ),
};

export const Positioning: Story = {
  render: () => (
    <Tooltip.Provider>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {['top', 'bottom', 'left', 'right'].map((side) => (
          <Tooltip.Root key={side}>
            <Tooltip.Trigger aria-label={side}>
              <button>{side}</button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Positioner side={side as any}>
                <Tooltip.Popup>
                  <Tooltip.Arrow />
                  {side} tooltip
                </Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </div>
    </Tooltip.Provider>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Tooltip.Provider>
        <Tooltip.Root open={open} onOpenChange={setOpen}>
          <Tooltip.Trigger aria-label="Controlled">
            <button>Controlled tooltip</button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner>
              <Tooltip.Popup>
                <Tooltip.Arrow />
                Controlled content
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  },
};

export const WithViewport: Story = {
  render: () => (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger aria-label="Viewport">
          <button>Viewport constrained</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Viewport>
            <Tooltip.Positioner>
              <Tooltip.Popup>
                <Tooltip.Arrow />
                Tooltip stays within viewport
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Viewport>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger aria-label="Long content">
          <button>Long content</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner>
            <Tooltip.Popup>
              <Tooltip.Arrow />
              This is a longer tooltip content that demonstrates how the tooltip handles text wrapping and maximum width constraints.
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
};

export const Complete: Story = {
  render: () => (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger aria-label="Complete example">
          <button>Complete example</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Viewport>
            <Tooltip.Positioner side="top">
              <Tooltip.Popup>
                <Tooltip.Arrow />
                Complete tooltip with all features
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Viewport>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  ),
};