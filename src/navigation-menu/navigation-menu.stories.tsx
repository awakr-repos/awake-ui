import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationMenu } from './index';

const meta: Meta = {
  title: 'Components/NavigationMenu',
  argTypes: {},
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
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
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">Blog</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  ),
};
