import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { WeekStrip } from './index';

const meta: Meta<typeof WeekStrip> = {
  title: 'Components/WeekStrip',
  component: WeekStrip,
};

export default meta;
type Story = StoryObj<typeof WeekStrip>;

function Demo() {
  const today = new Date();
  const [selected, setSelected] = useState<Date>(today);
  return (
    <div style={{ maxWidth: 480 }}>
      <WeekStrip today={today} selected={selected} onSelect={setSelected} />
      <p style={{ marginTop: 12, fontSize: 14, color: 'var(--color-awake-text-muted)' }}>
        Selecionado: {selected.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
      </p>
    </div>
  );
}

export const Playground: Story = {
  render: () => <Demo />,
};
