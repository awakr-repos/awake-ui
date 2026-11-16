import { ContextMenu } from '@awakr/awake-ui/context-menu'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function ContextMenuPage() {
  return (
    <div>
      <PageHeader title="ContextMenu" description="A menu that appears on right-click." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<ContextMenu.Root>
  <ContextMenu.Trigger>Right-click here</ContextMenu.Trigger>
  <ContextMenu.Portal>
    <ContextMenu.Positioner>
      <ContextMenu.Popup>
        <ContextMenu.Item>Open</ContextMenu.Item>
        <ContextMenu.Item>Copy</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>Delete</ContextMenu.Item>
      </ContextMenu.Popup>
    </ContextMenu.Positioner>
  </ContextMenu.Portal>
</ContextMenu.Root>`}>
        <ContextMenu.Root>
          <ContextMenu.Trigger style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 320, height: 120, border: '2px dashed var(--color-awake-border)', borderRadius: 'var(--radius-awake-md)', fontSize: '0.875rem', color: 'var(--color-awake-text-muted)', userSelect: 'none' }}>
            Right-click here
          </ContextMenu.Trigger>
          <ContextMenu.Portal>
            <ContextMenu.Positioner>
              <ContextMenu.Popup>
                <ContextMenu.Item>Open</ContextMenu.Item>
                <ContextMenu.Item>Open in new tab</ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item>Copy</ContextMenu.Item>
                <ContextMenu.Item>Paste</ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item style={{ color: 'var(--color-awake-error, #ef4444)' }}>Delete</ContextMenu.Item>
              </ContextMenu.Popup>
            </ContextMenu.Positioner>
          </ContextMenu.Portal>
        </ContextMenu.Root>
      </ComponentPreview>
    </div>
  )
}
