import { Accordion } from '@developmentsnil/awake-ui/accordion'
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
    </div>
  )
}
