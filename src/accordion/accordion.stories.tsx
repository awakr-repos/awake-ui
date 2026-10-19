import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './index';

const meta: Meta = {
  title: 'Components/Accordion',
  argTypes: {
    defaultValue: { control: 'object', description: 'Items open by default (uncontrolled). Array of strings.' },
    value: { control: 'object', description: 'Open items (controlled). Array of strings.' },
    onValueChange: { action: 'onValueChange', description: 'Called when an item opens or closes' },
    openMultiple: { control: 'boolean', description: 'Allow multiple items to be open at the same time' },
    disabled: { control: 'boolean', description: 'Disables all accordion items' },
    className: { control: 'text', description: 'Additional CSS class for Root' },
  },
};

export default meta;
type Story = StoryObj;

const items = [
  { value: 'item-1', title: 'What is awake-ui?', content: 'awake-ui is a React component library built on Base UI primitives, with a Tailwind CSS v4 token system and full dark mode support.' },
  { value: 'item-2', title: 'Is it accessible?', content: 'Yes. All interactive components are built on Base UI, which follows WAI-ARIA patterns and is keyboard and screen-reader friendly.' },
  { value: 'item-3', title: 'Can I customize the styles?', content: 'Absolutely. Override the CSS custom properties (semantic tokens) on :root or on a wrapper element to change colours, spacing and radius globally or per-instance.' },
];

export const Default: Story = {
  render: () => (
    <Accordion.Root>
      {items.map(({ value, title, content }) => (
        <Accordion.Item key={value} value={value}>
          <Accordion.Header>
            <Accordion.Trigger>{title}</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>{content}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

export const MultipleOpen: Story = {
  render: () => (
    <Accordion.Root openMultiple>
      {items.map(({ value, title, content }) => (
        <Accordion.Item key={value} value={value}>
          <Accordion.Header>
            <Accordion.Trigger>{title}</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>{content}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Accordion.Root defaultValue={['item-1']}>
      {items.map(({ value, title, content }) => (
        <Accordion.Item key={value} value={value}>
          <Accordion.Header>
            <Accordion.Trigger>{title}</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel>{content}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};
