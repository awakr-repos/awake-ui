import { useState } from 'react'
import { BottomNav } from '@awakr/awake-ui/bottom-nav'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

const items = [
  { id: 'home',    label: 'Home',    icon: <HomeIcon /> },
  { id: 'search',  label: 'Search',  icon: <SearchIcon /> },
  { id: 'alerts',  label: 'Alerts',  icon: <BellIcon /> },
  { id: 'profile', label: 'Profile', icon: <UserIcon /> },
]

function Demo() {
  const [active, setActive] = useState('home')
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 400, height: 72 }}>
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
      <ComponentPreview code={`import { BottomNav } from '@awakr/awake-ui/bottom-nav'

function HomeIcon() {
  return <svg>...</svg>
}

const [active, setActive] = useState('home')

<BottomNav.Root>
  <BottomNav.Item icon={<HomeIcon />} label="Home" active={active === 'home'} onClick={() => setActive('home')} />
  <BottomNav.Item icon={<SearchIcon />} label="Search" active={active === 'search'} onClick={() => setActive('search')} />
  <BottomNav.Item icon={<BellIcon />} label="Alerts" active={active === 'alerts'} onClick={() => setActive('alerts')} />
  <BottomNav.Item icon={<UserIcon />} label="Profile" active={active === 'profile'} onClick={() => setActive('profile')} />
</BottomNav.Root>`}>
        <Demo />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props — BottomNav.Root</h2>
      <table className="w-full text-sm border-collapse mb-8">
        <thead>
          <tr className="border-b docs-border">
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Prop</th>
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Type</th>
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Default</th>
            <th className="text-left py-2 font-medium docs-text-muted">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">children</td>
            <td className="py-2 pr-4 docs-text-muted">ReactNode</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">One or more <code className="docs-code-inline-bg px-1 rounded">BottomNav.Item</code> elements.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">className</td>
            <td className="py-2 pr-4 docs-text-muted">string</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Additional CSS class. Also accepts all native <code className="docs-code-inline-bg px-1 rounded">nav</code> props.</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-lg font-semibold mb-4">Props — BottomNav.Item</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b docs-border">
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Prop</th>
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Type</th>
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Default</th>
            <th className="text-left py-2 font-medium docs-text-muted">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">icon</td>
            <td className="py-2 pr-4 docs-text-muted">ReactNode</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Icon element. Use an SVG icon component.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">label</td>
            <td className="py-2 pr-4 docs-text-muted">string</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Text label displayed below the icon.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">active</td>
            <td className="py-2 pr-4 docs-text-muted">boolean</td>
            <td className="py-2 pr-4 docs-text-muted">false</td>
            <td className="py-2 docs-text-muted">Marks this item as the current active page.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">onClick</td>
            <td className="py-2 pr-4 docs-text-muted">() =&gt; void</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Callback when the item is clicked.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">className</td>
            <td className="py-2 pr-4 docs-text-muted">string</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Additional CSS class.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
