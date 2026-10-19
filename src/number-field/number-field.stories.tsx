import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberField } from './index';

const meta: Meta = {
  title: 'Components/NumberField',
  argTypes: {
    value: { control: 'number', description: 'Current value (controlled)' },
    defaultValue: { control: 'number', description: 'Initial value (uncontrolled)' },
    onValueChange: { action: 'onValueChange', description: 'Called when the value changes' },
    min: { control: 'number', description: 'Minimum allowed value' },
    max: { control: 'number', description: 'Maximum allowed value' },
    step: { control: 'number', description: 'Step increment (default: 1)' },
    largeStep: { control: 'number', description: 'Large step increment (PageUp/PageDown)' },
    disabled: { control: 'boolean', description: 'Disables the field' },
    readOnly: { control: 'boolean', description: 'Read-only' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <NumberField.Root defaultValue={0} style={{ width: 160 }}>
      <NumberField.Group>
        <NumberField.Decrement>−</NumberField.Decrement>
        <NumberField.Input />
        <NumberField.Increment>+</NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  ),
};

export const WithMinMax: Story = {
  render: () => (
    <NumberField.Root defaultValue={5} min={0} max={10} style={{ width: 160 }}>
      <NumberField.Group>
        <NumberField.Decrement>−</NumberField.Decrement>
        <NumberField.Input />
        <NumberField.Increment>+</NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  ),
};

export const WithStep: Story = {
  render: () => (
    <NumberField.Root defaultValue={0} step={5} style={{ width: 160 }}>
      <NumberField.Group>
        <NumberField.Decrement>−</NumberField.Decrement>
        <NumberField.Input />
        <NumberField.Increment>+</NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: '0.875rem', fontWeight: 500 }} htmlFor="qty">
        Quantity
      </label>
      <NumberField.Root defaultValue={1} min={1} id="qty" style={{ width: 160 }}>
        <NumberField.Group>
          <NumberField.Decrement>−</NumberField.Decrement>
          <NumberField.Input />
          <NumberField.Increment>+</NumberField.Increment>
        </NumberField.Group>
      </NumberField.Root>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <NumberField.Root defaultValue={42} disabled style={{ width: 160 }}>
      <NumberField.Group>
        <NumberField.Decrement>−</NumberField.Decrement>
        <NumberField.Input />
        <NumberField.Increment>+</NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  ),
};

export const WithScrubArea: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <NumberField.ScrubArea style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'ew-resize', userSelect: 'none' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-awake-text-muted)' }}>
          ↔ Drag label
        </span>
        <NumberField.ScrubAreaCursor />
      </NumberField.ScrubArea>
      <NumberField.Root defaultValue={50} style={{ width: 160 }}>
        <NumberField.Group>
          <NumberField.Decrement>−</NumberField.Decrement>
          <NumberField.Input />
          <NumberField.Increment>+</NumberField.Increment>
        </NumberField.Group>
      </NumberField.Root>
    </div>
  ),
};
