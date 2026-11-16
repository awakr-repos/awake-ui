import { Link } from 'react-router-dom'
import { Button } from '@awakr/awake-ui/button'
import { Alert } from '@awakr/awake-ui/alert'
import { Switch } from '@awakr/awake-ui/switch'
import { Progress } from '@awakr/awake-ui/progress'
import { useTheme } from '../components/ThemeContext'

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen docs-bg docs-text">
      {/* Header */}
      <header className="border-b docs-border">
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-lg tracking-tight">Awake UI</span>
          <nav className="flex items-center gap-6 text-sm docs-text-muted">
            <Link to="/docs/getting-started" className="docs-hover-text transition-colors">
              Docs
            </Link>
            <Link to="/docs/components/accordion" className="docs-hover-text transition-colors">
              Components
            </Link>
            <a href="https://github.com/awakr-repos/awake-ui" target="_blank" rel="noreferrer"
              className="docs-hover-text transition-colors">
              GitHub
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-md docs-text-subtle docs-hover-text docs-hover-nav-bg transition-colors"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-screen-xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full docs-nav-active-bg docs-nav-active-text text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          Open source · MIT license
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
          A component library built for React
        </h1>
        <p className="text-xl docs-text-muted mb-10 max-w-xl mx-auto">
          Accessible, themeable UI components built on top of Base UI and Tailwind CSS v4.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/docs/getting-started">
            <Button>Get started</Button>
          </Link>
          <Link to="/docs/components/button">
            <Button variant="outline">Browse components</Button>
          </Link>
        </div>
      </section>

      {/* Install snippet */}
      <section className="max-w-screen-xl mx-auto px-6 pb-20">
        <div className="max-w-xl mx-auto">
          <pre className="px-5 py-4 rounded-xl bg-neutral-950 text-neutral-100 text-sm overflow-x-auto">
            <code>npm install @awakr/awake-ui</code>
          </pre>
        </div>
      </section>

      {/* Component preview grid */}
      <section className="max-w-screen-xl mx-auto px-6 pb-32">
        <h2 className="text-center text-2xl font-semibold mb-12">
          Everything you need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Button */}
          <div className="rounded-2xl border docs-border p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Button</p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Default</Button>
              <Button size="sm" variant="outline">Outline</Button>
              <Button size="sm" variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Alert */}
          <div className="rounded-2xl border docs-border p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Alert</p>
            <Alert variant="info">Heads up — This is an informational alert.</Alert>
          </div>

          {/* Switch */}
          <div className="rounded-2xl border docs-border p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Switch</p>
            <div className="flex flex-col gap-3">
              <Switch.Root defaultChecked>
                <Switch.Thumb />
              </Switch.Root>
              <Switch.Root>
                <Switch.Thumb />
              </Switch.Root>
            </div>
          </div>

          {/* Progress */}
          <div className="rounded-2xl border docs-border p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Progress</p>
            <div className="flex flex-col gap-3">
              <Progress.Root value={40}><Progress.Track><Progress.Indicator /></Progress.Track></Progress.Root>
              <Progress.Root value={75}><Progress.Track><Progress.Indicator /></Progress.Track></Progress.Root>
            </div>
          </div>

          {/* CTA card */}
          <div className="rounded-2xl border docs-border-cta docs-nav-active-bg p-6 flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <p className="font-semibold text-lg mb-2">38 components and counting</p>
              <p className="docs-text-muted text-sm">
                Accordion, Alert, Autocomplete, Avatar, Badge, Bottom Nav, Button, Card, Checkbox, Collapsible, Combobox, Context Menu, Dialog, Drawer, Field, Input, Loading, Menu, Menubar, Navigation Menu, Number Field, Pagination, Popover, Preview Card, Progress, Radio Group, Scroll Area, Select, Separator, Slider, Switch, Table, Tabs, Toast, Toggle, Tooltip, Virtual List, Week Strip.
              </p>
            </div>
            <Link to="/docs/components/accordion" className="mt-6 self-start">
              <Button size="sm">Browse all components →</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
