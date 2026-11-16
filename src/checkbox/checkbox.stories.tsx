import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './index';

const meta: Meta = {
  title: 'Components/Checkbox',
  argTypes: {
    checked: { control: 'boolean', description: 'Controlled checked state' },
    defaultChecked: { control: 'boolean', description: 'Initial checked state (uncontrolled)' },
    disabled: { control: 'boolean', description: 'Disables the checkbox' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Checkbox.Root>
      <Checkbox.Indicator />
    </Checkbox.Root>
  ),
};

export const Checked: Story = {
  render: () => (
    <Checkbox.Root defaultChecked>
      <Checkbox.Indicator />
    </Checkbox.Root>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <Checkbox.Root checked="mixed">
      <Checkbox.Indicator />
    </Checkbox.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Checkbox.Root disabled>
        <Checkbox.Indicator />
      </Checkbox.Root>
      <Checkbox.Root disabled defaultChecked>
        <Checkbox.Indicator />
      </Checkbox.Root>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Checkbox.Root>
        <Checkbox.Indicator />
      </Checkbox.Root>
      <Checkbox.Root defaultChecked>
        <Checkbox.Indicator />
      </Checkbox.Root>
      <Checkbox.Root checked="mixed">
        <Checkbox.Indicator />
      </Checkbox.Root>
      <Checkbox.Root disabled>
        <Checkbox.Indicator />
      </Checkbox.Root>
      <Checkbox.Root disabled defaultChecked>
        <Checkbox.Indicator />
      </Checkbox.Root>
    </div>
  ),
};
