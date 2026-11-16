import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './index';

const meta: Meta = {
  title: 'Components/Toggle',
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Visual size', defaultValue: 'md' },
    variant: { control: 'select', options: ['default', 'outline'], description: 'Visual variant', defaultValue: 'default' },
    disabled: { control: 'boolean', description: 'Disable the toggle' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <Toggle.Root>Bold</Toggle.Root>,
};

export const Outline: Story = {
  render: () => <Toggle.Root variant="outline">Italic</Toggle.Root>,
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Toggle.Root size="sm">Sm</Toggle.Root>
      <Toggle.Root size="md">Md</Toggle.Root>
      <Toggle.Root size="lg">Lg</Toggle.Root>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <Toggle.Group>
      <Toggle.Root value="left">Left</Toggle.Root>
      <Toggle.Root value="center">Center</Toggle.Root>
      <Toggle.Root value="right">Right</Toggle.Root>
    </Toggle.Group>
  ),
};

export const GroupSingleSelect: Story = {
  render: () => (
    <Toggle.Group toggleMultiple={false} defaultValue={['center']}>
      <Toggle.Root value="left">Left</Toggle.Root>
      <Toggle.Root value="center">Center</Toggle.Root>
      <Toggle.Root value="right">Right</Toggle.Root>
    </Toggle.Group>
  ),
};
