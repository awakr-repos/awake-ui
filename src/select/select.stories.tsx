import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './index';

const meta: Meta = {
  title: 'Components/Select',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: { control: 'text', description: 'Selected value (controlled)' },
    defaultValue: { control: 'text', description: 'Initial value (uncontrolled)' },
    onValueChange: { action: 'onValueChange', description: 'Called when an option is selected' },
    open: { control: 'boolean', description: 'Dropdown open state (controlled)' },
    disabled: { control: 'boolean', description: 'Disables the select' },
    required: { control: 'boolean', description: 'Marks the field as required in a form' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Select.Root>
      <Select.Label>Nome</Select.Label>
      <Select.Trigger>
        <Select.Value placeholder="Selecione" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner>
          <Select.Popup>
            <Select.List>
              <Select.Item value="1">Item 1</Select.Item>
              <Select.Item value="2">Item 2</Select.Item>
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Select.Root>
      <Select.Label>Escolha uma opção</Select.Label>
      <Select.Trigger>
        <Select.Value placeholder="Selecione" />
        <Select.Icon>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Backdrop />
        <Select.Positioner>
          <Select.Popup>
            <Select.List>
              <Select.Item value="1">Opção 1</Select.Item>
              <Select.Item value="2">Opção 2</Select.Item>
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  ),
};

export const WithItemIndicator: Story = {
  render: () => (
    <Select.Root>
      <Select.Label>Escolha uma opção</Select.Label>
      <Select.Trigger>
        <Select.Value placeholder="Selecione" />
        <Select.Icon>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Backdrop />
        <Select.Positioner>
          <Select.Popup>
            <Select.List>
              <Select.Item value="1">
                <Select.ItemIndicator>✓</Select.ItemIndicator>
                <Select.ItemText>Opção 1</Select.ItemText>
              </Select.Item>
              <Select.Item value="2">
                <Select.ItemIndicator>✓</Select.ItemIndicator>
                <Select.ItemText>Opção 2</Select.ItemText>
              </Select.Item>
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select.Root>
      <Select.Label>Escolha uma fruta</Select.Label>
      <Select.Trigger>
        <Select.Value placeholder="Selecione" />
        <Select.Icon>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Backdrop />
        <Select.Positioner>
          <Select.Popup>
            <Select.List>
              <Select.Group>
                <Select.GroupLabel>Cítricas</Select.GroupLabel>
                <Select.Item value="laranja">
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                  <Select.ItemText>Laranja</Select.ItemText>
                </Select.Item>
                <Select.Item value="limão">
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                  <Select.ItemText>Limão</Select.ItemText>
                </Select.Item>
              </Select.Group>
              <Select.Separator />
              <Select.Group>
                <Select.GroupLabel>Outras</Select.GroupLabel>
                <Select.Item value="maçã">
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                  <Select.ItemText>Maçã</Select.ItemText>
                </Select.Item>
                <Select.Item value="banana">
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                  <Select.ItemText>Banana</Select.ItemText>
                </Select.Item>
              </Select.Group>
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  ),
};

export const WithScrollArrows: Story = {
  render: () => (
    <Select.Root>
      <Select.Label>Escolha um número</Select.Label>
      <Select.Trigger>
        <Select.Value placeholder="Selecione" />
        <Select.Icon>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Backdrop />
        <Select.Positioner>
          <Select.Popup>
            <Select.ScrollUpArrow>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M12 10H4l4-4.5z" />
              </svg>
            </Select.ScrollUpArrow>
            <Select.List>
              {Array.from({ length: 20 }, (_, i) => (
                <Select.Item key={i} value={String(i + 1)}>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                  <Select.ItemText>Opção {i + 1}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.List>
            <Select.ScrollDownArrow>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M12 6H4l4 4.5z" />
              </svg>
            </Select.ScrollDownArrow>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  ),
};

export const Complete: Story = {
  render: () => (
    <Select.Root>
      <Select.Label>Escolha uma categoria</Select.Label>
      <Select.Trigger>
        <Select.Value placeholder="Selecione" />
        <Select.Icon>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Backdrop />
        <Select.Positioner>
          <Select.Popup>
            <Select.ScrollUpArrow>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M12 10H4l4-4.5z" />
              </svg>
            </Select.ScrollUpArrow>
            <Select.List>
              <Select.Group>
                <Select.GroupLabel>Fruits</Select.GroupLabel>
                <Select.Item value="apple">
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                  <Select.ItemText>Apple</Select.ItemText>
                </Select.Item>
                <Select.Item value="banana">
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                  <Select.ItemText>Banana</Select.ItemText>
                </Select.Item>
              </Select.Group>
              <Select.Separator />
              <Select.Group>
                <Select.GroupLabel>Vegetables</Select.GroupLabel>
                <Select.Item value="carrot">
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                  <Select.ItemText>Carrot</Select.ItemText>
                </Select.Item>
                <Select.Item value="broccoli">
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                  <Select.ItemText>Broccoli</Select.ItemText>
                </Select.Item>
              </Select.Group>
            </Select.List>
            <Select.ScrollDownArrow>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M12 6H4l4 4.5z" />
              </svg>
            </Select.ScrollDownArrow>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  ),
};