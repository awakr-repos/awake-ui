import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BottomNav } from './index';

const meta: Meta<typeof BottomNav.Root> = {
  title: 'Components/BottomNav',
  component: BottomNav.Root,
};

export default meta;
type Story = StoryObj<typeof BottomNav.Root>;

function Demo() {
  const [active, setActive] = useState('home');
  const items = [
    { id: 'home',    label: 'Início',   icon: '🏠' },
    { id: 'explore', label: 'Explorar', icon: '🔍' },
    { id: 'profile', label: 'Perfil',   icon: '👤' },
  ];
  return (
    <div style={{ position: 'relative', height: 120, background: 'var(--color-awake-surface)' }}>
      <BottomNav.Root style={{ position: 'absolute' }}>
        {items.map(item => (
          <BottomNav.Item
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={active === item.id}
            onClick={() => setActive(item.id)}
          />
        ))}
      </BottomNav.Root>
    </div>
  );
}

export const Playground: Story = {
  render: () => <Demo />,
};
