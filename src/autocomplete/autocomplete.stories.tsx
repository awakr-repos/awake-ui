import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Autocomplete } from './index';

const FRUITS = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Blueberry',
  'Cherry', 'Coconut',
  'Grape', 'Guava',
  'Kiwi',
  'Lemon', 'Lime',
  'Mango', 'Melon',
  'Orange',
  'Papaya', 'Peach', 'Pear', 'Pineapple',
  'Raspberry',
  'Strawberry',
  'Watermelon',
];

const GROUPED_ITEMS = {
  Fruits: ['Apple', 'Banana', 'Mango', 'Orange', 'Strawberry'],
  Vegetables: ['Broccoli', 'Carrot', 'Lettuce', 'Spinach', 'Tomato'],
  Grains: ['Oats', 'Quinoa', 'Rice', 'Wheat'],
};

const meta: Meta = {
  title: 'Components/Autocomplete',
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: 320, padding: 32 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: { control: 'text', description: 'Selected value (controlled)' },
    defaultValue: { control: 'text', description: 'Initial value (uncontrolled)' },
    onValueChange: { action: 'onValueChange', description: 'Called when an option is selected' },
    inputValue: { control: 'text', description: 'Input text value (controlled)' },
    onInputChange: { action: 'onInputChange', description: 'Called when the user types in the input' },
    open: { control: 'boolean', description: 'Dropdown open state (controlled)' },
    disabled: { control: 'boolean', description: 'Disables the autocomplete' },
    readOnly: { control: 'boolean', description: 'Read-only' },
    autoHighlight: { control: 'boolean', description: 'Automatically highlights the first option' },
  },
};

export default meta;

// ── Basic ─────────────────────────────────────────────────────────────────────
export const Basic: StoryObj = {
  render: () => {
    const { contains } = Autocomplete.useFilter({ sensitivity: 'base' });

    return (
      <Autocomplete.Root items={FRUITS} filter={(item, inputValue) => contains(item, inputValue)}>
        <Autocomplete.InputGroup>
          <Autocomplete.Input placeholder="Search fruits…" />
        </Autocomplete.InputGroup>
        <Autocomplete.Portal>
          <Autocomplete.Positioner sideOffset={4}>
            <Autocomplete.Popup>
              <Autocomplete.List>
                {FRUITS.map((fruit) => (
                  <Autocomplete.Item key={fruit} value={fruit}>
                    {fruit}
                  </Autocomplete.Item>
                ))}
              </Autocomplete.List>
              <Autocomplete.Empty>No results found.</Autocomplete.Empty>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    );
  },
};

// ── With trigger and clear ────────────────────────────────────────────────────
export const WithTriggerAndClear: StoryObj = {
  render: () => {
    const { contains } = Autocomplete.useFilter({ sensitivity: 'base' });

    return (
      <Autocomplete.Root items={FRUITS} filter={(item, inputValue) => contains(item, inputValue)}>
        <Autocomplete.InputGroup>
          <Autocomplete.Input placeholder="Search fruits…" />
          <Autocomplete.Clear aria-label="Clear">✕</Autocomplete.Clear>
          <Autocomplete.Trigger aria-label="Toggle list">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
            </svg>
          </Autocomplete.Trigger>
        </Autocomplete.InputGroup>
        <Autocomplete.Portal>
          <Autocomplete.Positioner sideOffset={4}>
            <Autocomplete.Popup>
              <Autocomplete.List>
                {FRUITS.map((fruit) => (
                  <Autocomplete.Item key={fruit} value={fruit}>
                    {fruit}
                  </Autocomplete.Item>
                ))}
              </Autocomplete.List>
              <Autocomplete.Empty>No results found.</Autocomplete.Empty>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    );
  },
};

// ── Grouped ───────────────────────────────────────────────────────────────────
export const Grouped: StoryObj = {
  render: () => {
    const allItems = Object.values(GROUPED_ITEMS).flat();
    const { contains } = Autocomplete.useFilter({ sensitivity: 'base' });

    return (
      <Autocomplete.Root items={allItems} filter={(item, inputValue) => contains(item, inputValue)}>
        <Autocomplete.InputGroup>
          <Autocomplete.Input placeholder="Search food…" />
        </Autocomplete.InputGroup>
        <Autocomplete.Portal>
          <Autocomplete.Positioner sideOffset={4}>
            <Autocomplete.Popup>
              <Autocomplete.List>
                {Object.entries(GROUPED_ITEMS).map(([group, items], index) => (
                  <Autocomplete.Group key={group} items={items}>
                    {index > 0 && <Autocomplete.Separator />}
                    <Autocomplete.GroupLabel>{group}</Autocomplete.GroupLabel>
                    {items.map((item) => (
                      <Autocomplete.Item key={item} value={item}>
                        {item}
                      </Autocomplete.Item>
                    ))}
                  </Autocomplete.Group>
                ))}
              </Autocomplete.List>
              <Autocomplete.Empty>No results found.</Autocomplete.Empty>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    );
  },
};

// ── Controlled ────────────────────────────────────────────────────────────────
export const Controlled: StoryObj = {
  render: () => {
    const [value, setValue] = useState('');
    const { contains } = Autocomplete.useFilter({ sensitivity: 'base' });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Autocomplete.Root
          items={FRUITS}
          value={value}
          onValueChange={setValue}
          filter={(item, inputValue) => contains(item, inputValue)}
        >
          <Autocomplete.InputGroup>
            <Autocomplete.Input placeholder="Search fruits…" />
            <Autocomplete.Clear aria-label="Clear">✕</Autocomplete.Clear>
          </Autocomplete.InputGroup>
          <Autocomplete.Portal>
            <Autocomplete.Positioner sideOffset={4}>
              <Autocomplete.Popup>
                <Autocomplete.List>
                  {FRUITS.map((fruit) => (
                    <Autocomplete.Item key={fruit} value={fruit}>
                      {fruit}
                    </Autocomplete.Item>
                  ))}
                </Autocomplete.List>
                <Autocomplete.Empty>No results found.</Autocomplete.Empty>
              </Autocomplete.Popup>
            </Autocomplete.Positioner>
          </Autocomplete.Portal>
        </Autocomplete.Root>
        <p style={{ fontSize: 13, color: 'var(--color-awake-text-muted)' }}>
          Selected: <strong>{value || '—'}</strong>
        </p>
      </div>
    );
  },
};

// ── Auto highlight ────────────────────────────────────────────────────────────
export const AutoHighlight: StoryObj = {
  render: () => {
    const { contains } = Autocomplete.useFilter({ sensitivity: 'base' });

    return (
      <Autocomplete.Root
        items={FRUITS}
        autoHighlight
        filter={(item, inputValue) => contains(item, inputValue)}
      >
        <Autocomplete.InputGroup>
          <Autocomplete.Input placeholder="Start typing to auto-highlight…" />
        </Autocomplete.InputGroup>
        <Autocomplete.Portal>
          <Autocomplete.Positioner sideOffset={4}>
            <Autocomplete.Popup>
              <Autocomplete.List>
                {FRUITS.map((fruit) => (
                  <Autocomplete.Item key={fruit} value={fruit}>
                    {fruit}
                  </Autocomplete.Item>
                ))}
              </Autocomplete.List>
              <Autocomplete.Empty>No results found.</Autocomplete.Empty>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    );
  },
};
