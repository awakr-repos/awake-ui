import { Menubar } from '@awakr/awake-ui/menubar'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function MenubarPage() {
  return (
    <div>
      <PageHeader title="Menubar" description="A persistent menu bar with keyboard navigation between menus." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<Menubar.Root>
  <Menubar.Menu>
    <Menubar.Trigger>File</Menubar.Trigger>
    <Menubar.Portal>
      <Menubar.Positioner>
        <Menubar.Popup>
          <Menubar.Item>New</Menubar.Item>
          <Menubar.Item>Open</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Exit</Menubar.Item>
        </Menubar.Popup>
      </Menubar.Positioner>
    </Menubar.Portal>
  </Menubar.Menu>
</Menubar.Root>`}>
        <Menubar.Root>
          {[
            { label: 'File', items: ['New', 'Open', 'Save', 'Exit'] },
            { label: 'Edit', items: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'] },
            { label: 'View', items: ['Zoom In', 'Zoom Out'] },
          ].map(({ label, items }) => (
            <Menubar.Menu key={label}>
              <Menubar.Trigger>{label}</Menubar.Trigger>
              <Menubar.Portal>
                <Menubar.Positioner>
                  <Menubar.Popup>
                    {items.map((item, i) => (
                      <div key={item}>
                        {i === items.length - 1 && <Menubar.Separator />}
                        <Menubar.Item>{item}</Menubar.Item>
                      </div>
                    ))}
                  </Menubar.Popup>
                </Menubar.Positioner>
              </Menubar.Portal>
            </Menubar.Menu>
          ))}
        </Menubar.Root>
      </ComponentPreview>
    </div>
  )
}
