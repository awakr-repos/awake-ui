import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Switch } from './index';

const meta: Meta = {
  title: 'Components/Switch',
  argTypes: {
    checked: { control: 'boolean', description: 'Checked state (controlled)' },
    defaultChecked: { control: 'boolean', description: 'Initial checked state (uncontrolled)' },
    onCheckedChange: { action: 'onCheckedChange', description: 'Called when the checked state changes' },
    disabled: { control: 'boolean', description: 'Disables the switch' },
    required: { control: 'boolean', description: 'Marks the field as required in a form' },
    className: { control: 'text', description: 'Additional CSS class for Root' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch.Root checked={checked} onCheckedChange={setChecked}>
        <Switch.Thumb />
      </Switch.Root>
    );
  },
};

export const Checked: Story = {
  render: () => (
    <Switch.Root defaultChecked>
      <Switch.Thumb />
    </Switch.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Switch.Root disabled>
      <Switch.Thumb />
    </Switch.Root>
  ),
};
