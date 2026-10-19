import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './index';

const meta: Meta = {
  title: 'Components/Progress',
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 }, description: 'Current value (0–100). Omit for indeterminate.' },
    max: { control: 'number', description: 'Maximum value (default: 100)' },
    getAriaLabel: { description: 'Function that returns the accessible aria-label' },
    className: { control: 'text', description: 'Additional CSS class for Root' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Progress.Root value={60}>
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
    </Progress.Root>
  ),
};

export const WithValue: Story = {
  render: () => (
    <Progress.Root value={75}>
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
      <Progress.Value />
    </Progress.Root>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Progress.Root value={40}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <Progress.Label>Uploading file…</Progress.Label>
        <Progress.Value />
      </div>
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
    </Progress.Root>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <Progress.Root>
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
    </Progress.Root>
  ),
};

export const Zero: Story = {
  render: () => (
    <Progress.Root value={0}>
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
    </Progress.Root>
  ),
};

export const Complete: Story = {
  render: () => (
    <Progress.Root value={100}>
      <Progress.Track>
        <Progress.Indicator />
      </Progress.Track>
      <Progress.Value />
    </Progress.Root>
  ),
};
