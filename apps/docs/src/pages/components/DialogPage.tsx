import { Dialog } from '@awakr/awake-ui/dialog'
import { Button } from '@awakr/awake-ui/button'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

function BasicDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger render={<Button>Open Dialog</Button>} />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description>This is a basic dialog with a title and description.</Dialog.Description>
          <div className="mt-4 flex gap-2 justify-end">
            <Dialog.Close render={<Button variant="secondary">Cancel</Button>} />
            <Dialog.Close render={<Button>Confirm</Button>} />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function DestructiveDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger render={<Button variant="destructive">Delete Item</Button>} />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Title>Are you sure?</Dialog.Title>
          <Dialog.Description>This action cannot be undone. The item will be permanently deleted.</Dialog.Description>
          <div className="mt-4 flex gap-2 justify-end">
            <Dialog.Close render={<Button variant="secondary">Cancel</Button>} />
            <Dialog.Close render={<Button variant="destructive">Delete</Button>} />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function DialogPage() {
  return (
    <div>
      <PageHeader title="Dialog" description="A modal dialog that interrupts the user's workflow to focus attention on a critical task or information." />

      <h2 className="text-lg font-semibold mb-4">Basic</h2>
      <ComponentPreview code={`<Dialog.Root>
  <Dialog.Trigger render={<Button>Open Dialog</Button>} />
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Popup>
      <Dialog.Title>Dialog Title</Dialog.Title>
      <Dialog.Description>This is a basic dialog.</Dialog.Description>
      <div className="mt-4 flex gap-2 justify-end">
        <Dialog.Close render={<Button variant="secondary">Cancel</Button>} />
        <Dialog.Close render={<Button>Confirm</Button>} />
      </div>
    </Dialog.Popup>
  </Dialog.Portal>
</Dialog.Root>`}>
        <BasicDialog />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Destructive action</h2>
      <ComponentPreview code={`<Dialog.Root>
  <Dialog.Trigger render={<Button variant="destructive">Delete Item</Button>} />
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Popup>
      <Dialog.Title>Are you sure?</Dialog.Title>
      <Dialog.Description>This action cannot be undone.</Dialog.Description>
      <div className="mt-4 flex gap-2 justify-end">
        <Dialog.Close render={<Button variant="secondary">Cancel</Button>} />
        <Dialog.Close render={<Button variant="destructive">Delete</Button>} />
      </div>
    </Dialog.Popup>
  </Dialog.Portal>
</Dialog.Root>`}>
        <DestructiveDialog />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <p className="docs-text-muted text-sm mb-4">
        <code className="docs-code-inline-bg px-1 rounded">Dialog.Trigger</code> and <code className="docs-code-inline-bg px-1 rounded">Dialog.Close</code> use the <code className="docs-code-inline-bg px-1 rounded">render</code> prop to compose with any element.
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
            <td className="py-2 pr-4 font-mono text-xs">Dialog.Root</td>
            <td className="py-2 docs-text-muted">Root context. Accepts <code className="docs-code-inline-bg px-1 rounded">open</code> / <code className="docs-code-inline-bg px-1 rounded">onOpenChange</code> for controlled usage.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Dialog.Trigger</td>
            <td className="py-2 docs-text-muted">Opens the dialog on click. Use <code className="docs-code-inline-bg px-1 rounded">render</code> prop to pass a styled element, e.g. <code className="docs-code-inline-bg px-1 rounded">{'render={<Button>Open</Button>}'}</code>.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Dialog.Portal</td>
            <td className="py-2 docs-text-muted">Renders content in a portal at the end of the document body.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Dialog.Backdrop</td>
            <td className="py-2 docs-text-muted">Semi-transparent overlay behind the popup.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Dialog.Popup</td>
            <td className="py-2 docs-text-muted">The dialog panel container.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Dialog.Title</td>
            <td className="py-2 docs-text-muted">Dialog heading. Linked to the popup via <code className="docs-code-inline-bg px-1 rounded">aria-labelledby</code>.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Dialog.Description</td>
            <td className="py-2 docs-text-muted">Supporting text. Linked via <code className="docs-code-inline-bg px-1 rounded">aria-describedby</code>.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Dialog.Close</td>
            <td className="py-2 docs-text-muted">Closes the dialog on click. Use <code className="docs-code-inline-bg px-1 rounded">render</code> prop for styling.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
