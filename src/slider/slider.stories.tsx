import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Slider } from './index';

const meta: Meta = {
  title: 'Components/Slider',
  argTypes: {
    value: { control: 'object', description: 'Current value(s) — array of numbers (controlled)' },
    defaultValue: { control: 'object', description: 'Initial value(s) — array of numbers (uncontrolled)' },
    onValueChange: { action: 'onValueChange', description: 'Called continuously while dragging' },
    onValueCommitted: { action: 'onValueCommitted', description: 'Called when the thumb is released' },
    min: { control: 'number', description: 'Minimum value (default: 0)' },
    max: { control: 'number', description: 'Maximum value (default: 100)' },
    step: { control: 'number', description: 'Step increment (default: 1)' },
    disabled: { control: 'boolean', description: 'Disables the slider' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'], description: 'Slider orientation' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Slider.Root defaultValue={40} style={{ width: 300 }}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  ),
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState(60);
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: 300 }}>
        <Slider.Root value={value} onValueChange={setValue} style={{ flex: 1 }}>
          <Slider.Control>
            <Slider.Track>
              <Slider.Indicator />
              <Slider.Thumb />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
        <span style={{ fontSize: '0.875rem', minWidth: '2ch', textAlign: 'right' }}>{value}</span>
      </div>
    );
  },
};

export const WithMinMax: Story = {
  render: () => (
    <Slider.Root defaultValue={500} min={0} max={1000} step={50} style={{ width: 300 }}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  ),
};

export const Range: Story = {
  render: () => (
    <Slider.Root defaultValue={[20, 80]} style={{ width: 300 }}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  ),
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState(30);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: 300 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: 500 }} id="volume-label">
            Volume
          </label>
          <span style={{ fontSize: '0.875rem' }}>{value}%</span>
        </div>
        <Slider.Root value={value} onValueChange={setValue} aria-labelledby="volume-label">
          <Slider.Control>
            <Slider.Track>
              <Slider.Indicator />
              <Slider.Thumb />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Slider.Root defaultValue={40} disabled style={{ width: 300 }}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  ),
};
