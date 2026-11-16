import { Menu } from '@awakr/awake-ui/menu'
import { Button } from '@awakr/awake-ui/button'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function MenuPage() {
  return (
    <div>
      <PageHeader title="Menu" description="A dropdown list of actions triggered by a button." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<Menu.Root>
  <Menu.Trigger render={<Button variant="outline">Actions ▾</Button>} />
  <Menu.Portal>
    <Menu.Positioner>
      <Menu.Popup>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Duplicate</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Delete</Menu.Item>
      </Menu.Popup>
    </Menu.Positioner>
  </Menu.Portal>
</Menu.Root>`}>
        <Menu.Root>
          <Menu.Trigger render={<Button variant="outline">Actions ▾</Button>} />
          <Menu.Portal>
            <Menu.Positioner>
              <Menu.Popup>
                <Menu.Item>Edit</Menu.Item>
                <Menu.Item>Duplicate</Menu.Item>
                <Menu.Separator />
                <Menu.Item>Archive</Menu.Item>
                <Menu.Item disabled>Share (unavailable)</Menu.Item>
                <Menu.Separator />
                <Menu.Item style={{ color: 'var(--color-awake-error, #ef4444)' }}>Delete</Menu.Item>
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
      </ComponentPreview>
    </div>
  )
}
