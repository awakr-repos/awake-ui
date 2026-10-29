import { useState } from 'react'
import { BottomNav } from '@awakr/awake-ui/bottom-nav'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

const items = [
  { id: 'home',    label: 'Início',   icon: '🏠' },
  { id: 'explore', label: 'Explorar', icon: '🔍' },
  { id: 'profile', label: 'Perfil',   icon: '👤' },
]

function Demo() {
  const [active, setActive] = useState('home')
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 400, height: 80 }}>
      <BottomNav.Root style={{ position: 'absolute', left: 0, right: 0, bottom: 0, borderRadius: 12, overflow: 'hidden' }}>
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
  )
}

export function BottomNavPage() {
  return (
    <div>
      <PageHeader title="Bottom Nav" description="Fixed bottom navigation bar for mobile layouts." />

      <h2 className="text-lg font-semibold mb-4">Playground</h2>
      <ComponentPreview code={`<BottomNav.Root>
  <BottomNav.Item icon="🏠" label="Início" active onClick={() => {}} />
  <BottomNav.Item icon="🔍" label="Explorar" onClick={() => {}} />
  <BottomNav.Item icon="👤" label="Perfil" onClick={() => {}} />
</BottomNav.Root>`}>
        <Demo />
      </ComponentPreview>
    </div>
  )
}
