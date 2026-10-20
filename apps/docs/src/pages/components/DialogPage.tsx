import { useState } from 'react'
import { Dialog } from '@developmentsnil/awake-ui/dialog'
import { Button } from '@developmentsnil/awake-ui/button'
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
    </div>
  )
}
