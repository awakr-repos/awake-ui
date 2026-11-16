import { NavigationMenu } from '@awakr/awake-ui/navigation-menu'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function NavigationMenuPage() {
  return (
    <div>
      <PageHeader title="NavigationMenu" description="A horizontal navigation bar with optional dropdown panels." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<NavigationMenu.Root>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="#">Home</NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
      <NavigationMenu.Portal>
        <NavigationMenu.Positioner>
          <NavigationMenu.Popup>
            {/* dropdown content */}
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>`}>
        <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#">Home</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
              <NavigationMenu.Portal>
                <NavigationMenu.Positioner>
                  <NavigationMenu.Popup>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '0.25rem' }}>
                      {['Analytics', 'Dashboard', 'Reports', 'Settings'].map((item) => (
                        <a key={item} href="#" style={{ padding: '0.5rem 0.75rem', fontSize: '0.875rem', borderRadius: 'var(--radius-awake-sm)', color: 'var(--color-awake-text)', textDecoration: 'none', display: 'block' }}>{item}</a>
                      ))}
                    </div>
                  </NavigationMenu.Popup>
                </NavigationMenu.Positioner>
              </NavigationMenu.Portal>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#">Docs</NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </ComponentPreview>
    </div>
  )
}
