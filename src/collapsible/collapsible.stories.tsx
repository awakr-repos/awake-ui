import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapsible } from './index';

const meta: Meta = {
  title: 'Components/Collapsible',
  argTypes: {
    defaultOpen: { control: 'boolean', description: 'Open by default' },
    disabled: { control: 'boolean', description: 'Disable toggle' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <Collapsible.Root>
        <Collapsible.Trigger>What is awake-ui?</Collapsible.Trigger>
        <Collapsible.Panel>
          A React component library built on Base UI primitives with a Tailwind CSS v4 token system.
        </Collapsible.Panel>
      </Collapsible.Root>
    </div>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <Collapsible.Root defaultOpen>
        <Collapsible.Trigger>Open by default</Collapsible.Trigger>
        <Collapsible.Panel>
          This panel starts open. Click the trigger to toggle it.
        </Collapsible.Panel>
      </Collapsible.Root>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      {[
        { q: 'Is it accessible?', a: 'Yes — all interactive components follow WAI-ARIA patterns.' },
        { q: 'Does it support dark mode?', a: 'Yes — import dark-theme.css and apply data-theme="dark".' },
        { q: 'Can I customize the tokens?', a: 'Override the semantic CSS tokens in your own stylesheet.' },
      ].map(({ q, a }) => (
        <Collapsible.Root key={q}>
          <Collapsible.Trigger>{q}</Collapsible.Trigger>
          <Collapsible.Panel>{a}</Collapsible.Panel>
        </Collapsible.Root>
      ))}
    </div>
  ),
};
