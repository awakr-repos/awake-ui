import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menubar } from './index';

const meta: Meta = {
  title: 'Components/Menubar',
  argTypes: {},
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Menubar.Root>
      {[
        { label: 'File', items: ['New', 'Open', 'Save', 'Save As…', 'Exit'] },
        { label: 'Edit', items: ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'] },
        { label: 'View', items: ['Zoom In', 'Zoom Out', 'Full Screen'] },
        { label: 'Help', items: ['Documentation', 'Keyboard Shortcuts', 'About'] },
      ].map(({ label, items }) => (
        <Menubar.Menu key={label}>
          <Menubar.Trigger>{label}</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Positioner>
              <Menubar.Popup>
                {items.map((item, i) => (
                  i === items.length - 1 ? (
                    <div key={item}>
                      <Menubar.Separator />
                      <Menubar.Item>{item}</Menubar.Item>
                    </div>
                  ) : (
                    <Menubar.Item key={item}>{item}</Menubar.Item>
                  )
                ))}
              </Menubar.Popup>
            </Menubar.Positioner>
          </Menubar.Portal>
        </Menubar.Menu>
      ))}
    </Menubar.Root>
  ),
};
