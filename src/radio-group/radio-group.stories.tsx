import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { RadioGroup } from './index';

const meta: Meta = {
  title: 'Components/RadioGroup',
  argTypes: {
    defaultValue: { control: 'text', description: 'Default selected value' },
    disabled: { control: 'boolean', description: 'Disable all radio items' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <RadioGroup.Root value={value} onValueChange={setValue}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {['option1', 'option2', 'option3'].map((v) => (
            <label key={v} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
              <RadioGroup.Item value={v} />
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </label>
          ))}
        </div>
      </RadioGroup.Root>
    );
  },
};

export const WithLabels: Story = {
  render: () => {
    const options = [
      { value: 'free', label: 'Free', desc: 'Up to 3 projects' },
      { value: 'pro', label: 'Pro', desc: 'Unlimited projects' },
      { value: 'team', label: 'Team', desc: 'Shared workspace' },
    ];
    const [value, setValue] = useState('pro');
    return (
      <RadioGroup.Root value={value} onValueChange={setValue}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {options.map((o) => (
            <label key={o.value} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
              <RadioGroup.Item value={o.value} style={{ marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{o.label}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-awake-text-muted)' }}>{o.desc}</div>
              </div>
            </label>
          ))}
        </div>
      </RadioGroup.Root>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup.Root defaultValue="option1" disabled>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {['option1', 'option2'].map((v) => (
          <label key={v} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', opacity: 0.5 }}>
            <RadioGroup.Item value={v} />
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </label>
        ))}
      </div>
    </RadioGroup.Root>
  ),
};
