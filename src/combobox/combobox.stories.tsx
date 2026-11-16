import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Combobox } from './index';

const meta: Meta = {
  title: 'Components/Combobox',
  argTypes: {
    placeholder: { control: 'text', description: 'Input placeholder' },
    disabled: { control: 'boolean', description: 'Disable input' },
  },
};
export default meta;
type Story = StoryObj;

const FRUITS = ['Apple', 'Avocado', 'Banana', 'Cherry', 'Grape', 'Kiwi', 'Mango', 'Orange', 'Peach', 'Strawberry'];

export const Default: Story = {
  render: () => {
    const [inputValue, setInputValue] = useState('');
    const filtered = FRUITS.filter((f) => f.toLowerCase().includes(inputValue.toLowerCase()));
    return (
      <div style={{ width: 280 }}>
        <Combobox.Root
          value={null}
          inputValue={inputValue}
          onInputChange={setInputValue}
        >
          <Combobox.InputWrapper>
            <Combobox.Input placeholder="Search fruits…" />
            <Combobox.Trigger>▾</Combobox.Trigger>
          </Combobox.InputWrapper>
          <Combobox.Portal>
            <Combobox.Positioner>
              <Combobox.Popup>
                {filtered.length > 0 ? (
                  filtered.map((f) => (
                    <Combobox.Item key={f} value={f}>{f}</Combobox.Item>
                  ))
                ) : (
                  <Combobox.Empty>No results found.</Combobox.Empty>
                )}
              </Combobox.Popup>
            </Combobox.Positioner>
          </Combobox.Portal>
        </Combobox.Root>
      </div>
    );
  },
};
