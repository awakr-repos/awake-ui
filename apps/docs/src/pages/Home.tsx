import { Link } from 'react-router-dom'
import { Button } from '@developmentsnil/awake-ui/button'
import { Alert } from '@developmentsnil/awake-ui/alert'
import { Switch } from '@developmentsnil/awake-ui/switch'
import { Progress } from '@developmentsnil/awake-ui/progress'

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-lg tracking-tight">Awake UI</span>
          <nav className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <Link to="/docs/getting-started" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
              Docs
            </Link>
            <Link to="/docs/components/button" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
              Components
            </Link>
            <a href="https://github.com/developmentsnil/awake-ui" target="_blank" rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-screen-xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          Open source · MIT license
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
          A component library built for React
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl mx-auto">
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
            <code>npm install @developmentsnil/awake-ui</code>
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
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Button</p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Default</Button>
              <Button size="sm" variant="outline">Outline</Button>
              <Button size="sm" variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Alert */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Alert</p>
            <Alert variant="info" title="Heads up" description="This is an informational alert." />
          </div>

          {/* Switch */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
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
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Progress</p>
            <div className="flex flex-col gap-3">
              <Progress.Root value={40}><Progress.Track><Progress.Indicator /></Progress.Track></Progress.Root>
              <Progress.Root value={75}><Progress.Track><Progress.Indicator /></Progress.Track></Progress.Root>
            </div>
          </div>

          {/* CTA card */}
          <div className="rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950 p-6 flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <p className="font-semibold text-lg mb-2">17 components and counting</p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Accordion, Alert, Autocomplete, Button, Dialog, Field, Loading, Number Field, Pagination, Progress, Select, Separator, Slider, Switch, Table, Tabs, Tooltip.
              </p>
            </div>
            <Link to="/docs/components/button" className="mt-6 self-start">
              <Button size="sm">Browse all components →</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
