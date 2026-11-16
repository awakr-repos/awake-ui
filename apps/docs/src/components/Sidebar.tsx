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
  { name: 'Checkbox', path: 'checkbox' },
  { name: 'Collapsible', path: 'collapsible' },
  { name: 'Combobox', path: 'combobox' },
  { name: 'Context Menu', path: 'context-menu' },
  { name: 'Dialog', path: 'dialog' },
  { name: 'Drawer', path: 'drawer' },
  { name: 'Field', path: 'field' },
  { name: 'Input', path: 'input' },
  { name: 'Loading', path: 'loading' },
  { name: 'Menu', path: 'menu' },
  { name: 'Menubar', path: 'menubar' },
  { name: 'Navigation Menu', path: 'navigation-menu' },
  { name: 'Number Field', path: 'number-field' },
  { name: 'Pagination', path: 'pagination' },
  { name: 'Popover', path: 'popover' },
  { name: 'Preview Card', path: 'preview-card' },
  { name: 'Progress', path: 'progress' },
  { name: 'Radio Group', path: 'radio-group' },
  { name: 'Scroll Area', path: 'scroll-area' },
  { name: 'Select', path: 'select' },
  { name: 'Separator', path: 'separator' },
  { name: 'Slider', path: 'slider' },
  { name: 'Switch', path: 'switch' },
  { name: 'Table', path: 'table' },
  { name: 'Tabs', path: 'tabs' },
  { name: 'Toast', path: 'toast' },
  { name: 'Toggle', path: 'toggle' },
  { name: 'Tooltip', path: 'tooltip' },
  { name: 'Virtual List', path: 'virtual-list' },
  { name: 'Week Strip', path: 'week-strip' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `block px-3 py-1.5 rounded-md text-sm transition-colors ${
    isActive
      ? 'docs-nav-active-bg docs-nav-active-text font-medium'
      : 'docs-text-muted docs-hover-text'
  }`

export function Sidebar() {
  return (
    <aside className="w-56 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r docs-border py-8 px-4">
      <div className="mb-6">
        <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider docs-text-subtle">
          Getting Started
        </p>
        <NavLink to="/docs/getting-started" className={linkClass}>
          Introduction
        </NavLink>
      </div>
      <div>
        <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider docs-text-subtle">
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
