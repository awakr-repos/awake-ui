import { NavLink } from 'react-router-dom'

const components = [
  { name: 'Accordion', path: 'accordion' },
  { name: 'Alert', path: 'alert' },
  { name: 'Autocomplete', path: 'autocomplete' },
  { name: 'Avatar', path: 'avatar' },
  { name: 'Badge', path: 'badge' },
  { name: 'Bottom Nav', path: 'bottom-nav' },
  { name: 'Button', path: 'button' },
  { name: 'Card', path: 'card' },
  { name: 'Dialog', path: 'dialog' },
  { name: 'Field', path: 'field' },
  { name: 'Loading', path: 'loading' },
  { name: 'Number Field', path: 'number-field' },
  { name: 'Pagination', path: 'pagination' },
  { name: 'Progress', path: 'progress' },
  { name: 'Select', path: 'select' },
  { name: 'Separator', path: 'separator' },
  { name: 'Slider', path: 'slider' },
  { name: 'Switch', path: 'switch' },
  { name: 'Table', path: 'table' },
  { name: 'Tabs', path: 'tabs' },
  { name: 'Toast', path: 'toast' },
  { name: 'Tooltip', path: 'tooltip' },
  { name: 'Week Strip', path: 'week-strip' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `block px-3 py-1.5 rounded-md text-sm transition-colors ${
    isActive
      ? 'bg-indigo-50 text-indigo-600 font-medium dark:bg-indigo-950 dark:text-indigo-400'
      : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
  }`

export function Sidebar() {
  return (
    <aside className="w-56 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-neutral-200 dark:border-neutral-800 py-8 px-4">
      <div className="mb-6">
        <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
          Getting Started
        </p>
        <NavLink to="/docs/getting-started" className={linkClass}>
          Introduction
        </NavLink>
      </div>
      <div>
        <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
          Components
        </p>
        <ul className="space-y-0.5">
          {components.map((c) => (
            <li key={c.path}>
              <NavLink to={`/docs/components/${c.path}`} className={linkClass}>
                {c.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
