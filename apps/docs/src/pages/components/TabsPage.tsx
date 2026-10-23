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
    </div>
  )
}
