import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Switch } from './index';

const meta: Meta = {
  title: 'Components/Switch',
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
