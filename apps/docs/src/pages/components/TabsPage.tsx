import { Tabs } from '@awakr/awake-ui/tabs'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function TabsPage() {
  return (
    <div>
      <PageHeader title="Tabs" description="Organizes content into multiple sections accessible via tab triggers." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<Tabs.Root defaultValue="preview">
  <Tabs.List>
    <Tabs.Tab value="preview">Preview</Tabs.Tab>
    <Tabs.Tab value="code">Code</Tabs.Tab>
    <Tabs.Tab value="docs">Docs</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel value="preview">Preview content</Tabs.Panel>
  <Tabs.Panel value="code">Code content</Tabs.Panel>
  <Tabs.Panel value="docs">Docs content</Tabs.Panel>
</Tabs.Root>`}>
        <div className="w-full max-w-sm">
          <Tabs.Root defaultValue="preview">
            <Tabs.List>
              <Tabs.Tab value="preview">Preview</Tabs.Tab>
              <Tabs.Tab value="code">Code</Tabs.Tab>
              <Tabs.Tab value="docs">Docs</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="preview"><p className="pt-3 text-sm text-neutral-600 dark:text-neutral-400">Preview content</p></Tabs.Panel>
            <Tabs.Panel value="code"><p className="pt-3 text-sm text-neutral-600 dark:text-neutral-400">Code content</p></Tabs.Panel>
            <Tabs.Panel value="docs"><p className="pt-3 text-sm text-neutral-600 dark:text-neutral-400">Docs content</p></Tabs.Panel>
          </Tabs.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">With disabled tab</h2>
      <ComponentPreview code={`<Tabs.Root defaultValue="one">
  <Tabs.List>
    <Tabs.Tab value="one">One</Tabs.Tab>
    <Tabs.Tab value="two" disabled>Two (disabled)</Tabs.Tab>
    <Tabs.Tab value="three">Three</Tabs.Tab>
  </Tabs.List>
  ...
</Tabs.Root>`}>
        <div className="w-full max-w-sm">
          <Tabs.Root defaultValue="one">
            <Tabs.List>
              <Tabs.Tab value="one">One</Tabs.Tab>
              <Tabs.Tab value="two" disabled>Two (disabled)</Tabs.Tab>
              <Tabs.Tab value="three">Three</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="one"><p className="pt-3 text-sm text-neutral-600 dark:text-neutral-400">Content one</p></Tabs.Panel>
            <Tabs.Panel value="two"><p className="pt-3 text-sm text-neutral-600 dark:text-neutral-400">Content two</p></Tabs.Panel>
            <Tabs.Panel value="three"><p className="pt-3 text-sm text-neutral-600 dark:text-neutral-400">Content three</p></Tabs.Panel>
          </Tabs.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <p className="docs-text-muted text-sm mb-4">
        All sub-components accept <code className="docs-code-inline-bg px-1 rounded">className</code> and their underlying Base UI props.
      </p>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b docs-border">
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Component</th>
            <th className="text-left py-2 font-medium docs-text-muted">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Tabs.Root</td>
            <td className="py-2 docs-text-muted">Root context. Key props: <code className="docs-code-inline-bg px-1 rounded">value</code> / <code className="docs-code-inline-bg px-1 rounded">defaultValue</code> (string), <code className="docs-code-inline-bg px-1 rounded">onValueChange</code> (function).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Tabs.List</td>
            <td className="py-2 docs-text-muted">Container for the tab trigger buttons.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Tabs.Tab</td>
            <td className="py-2 docs-text-muted">A tab trigger button. Requires a unique <code className="docs-code-inline-bg px-1 rounded">value</code> (string). Accepts <code className="docs-code-inline-bg px-1 rounded">disabled</code> (boolean).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Tabs.Panel</td>
            <td className="py-2 docs-text-muted">Content shown when the matching tab is active. Requires a <code className="docs-code-inline-bg px-1 rounded">value</code> (string) matching a <code className="docs-code-inline-bg px-1 rounded">Tabs.Tab</code>.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Tabs.Indicator</td>
            <td className="py-2 docs-text-muted">Optional animated underline indicator that moves to the active tab.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
