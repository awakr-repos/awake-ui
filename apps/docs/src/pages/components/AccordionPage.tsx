import { Accordion } from '@awakr/awake-ui/accordion'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function AccordionPage() {
  return (
    <div>
      <PageHeader title="Accordion" description="Expandable sections for organizing and revealing content." />

      <h2 className="text-lg font-semibold mb-4">Default (single open)</h2>
      <ComponentPreview code={`<Accordion.Root>
  <Accordion.Item value="1">
    <Accordion.Trigger>What is Awake UI?</Accordion.Trigger>
    <Accordion.Panel>A component library built on Base UI and Tailwind CSS v4.</Accordion.Panel>
  </Accordion.Item>
  <Accordion.Item value="2">
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Panel>Yes. Built on Base UI which follows WAI-ARIA patterns.</Accordion.Panel>
  </Accordion.Item>
  <Accordion.Item value="3">
    <Accordion.Trigger>Is it open source?</Accordion.Trigger>
    <Accordion.Panel>Yes, released under the MIT license.</Accordion.Panel>
  </Accordion.Item>
</Accordion.Root>`}>
        <div className="w-full max-w-sm">
          <Accordion.Root>
            <Accordion.Item value="1">
              <Accordion.Trigger>What is Awake UI?</Accordion.Trigger>
              <Accordion.Panel>A component library built on Base UI and Tailwind CSS v4.</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="2">
              <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
              <Accordion.Panel>Yes. Built on Base UI which follows WAI-ARIA patterns.</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="3">
              <Accordion.Trigger>Is it open source?</Accordion.Trigger>
              <Accordion.Panel>Yes, released under the MIT license.</Accordion.Panel>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Multiple open</h2>
      <ComponentPreview code={`<Accordion.Root multiple>
  <Accordion.Item value="1">...</Accordion.Item>
  <Accordion.Item value="2">...</Accordion.Item>
</Accordion.Root>`}>
        <div className="w-full max-w-sm">
          <Accordion.Root multiple>
            <Accordion.Item value="1">
              <Accordion.Trigger>Can open multiple</Accordion.Trigger>
              <Accordion.Panel>This accordion allows multiple panels open simultaneously.</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="2">
              <Accordion.Trigger>Also stays open</Accordion.Trigger>
              <Accordion.Panel>Opening this won't close the other panel.</Accordion.Panel>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Disabled</h2>
      <ComponentPreview code={`<Accordion.Root disabled>
  <Accordion.Item value="1">
    <Accordion.Trigger>All items disabled</Accordion.Trigger>
    <Accordion.Panel>Cannot be opened.</Accordion.Panel>
  </Accordion.Item>
</Accordion.Root>`}>
        <div className="w-full max-w-sm">
          <Accordion.Root disabled>
            <Accordion.Item value="1">
              <Accordion.Trigger>All items disabled</Accordion.Trigger>
              <Accordion.Panel>Cannot be opened.</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="2">
              <Accordion.Trigger>Also disabled</Accordion.Trigger>
              <Accordion.Panel>Cannot be opened.</Accordion.Panel>
            </Accordion.Item>
          </Accordion.Root>
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
            <td className="py-2 pr-4 font-mono text-xs">Accordion.Root</td>
            <td className="py-2 docs-text-muted">Container. Accepts <code className="docs-code-inline-bg px-1 rounded">multiple</code> (boolean) to allow several panels open at once, and <code className="docs-code-inline-bg px-1 rounded">disabled</code> (boolean) to disable all items.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Accordion.Item</td>
            <td className="py-2 docs-text-muted">Individual section. Requires a unique <code className="docs-code-inline-bg px-1 rounded">value</code> (string) prop.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Accordion.Header</td>
            <td className="py-2 docs-text-muted">Optional semantic header wrapper around the trigger.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Accordion.Trigger</td>
            <td className="py-2 docs-text-muted">Clickable button that toggles the panel open or closed.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Accordion.Panel</td>
            <td className="py-2 docs-text-muted">Collapsible content area revealed when the trigger is activated.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
