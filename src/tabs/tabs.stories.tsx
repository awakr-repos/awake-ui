import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './index';

const meta: Meta = {
  title: 'Components/Tabs',
  argTypes: {
    defaultValue: { control: 'text', description: 'Active tab by default (uncontrolled)' },
    value: { control: 'text', description: 'Active tab (controlled)' },
    onValueChange: { action: 'onValueChange', description: 'Called when the active tab changes' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'], description: 'Tab orientation' },
    activationMode: { control: 'select', options: ['automatic', 'manual'], description: 'Activation mode' },
    className: { control: 'text', description: 'Additional CSS class for Root' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tabs.Root defaultValue="account">
      <Tabs.List>
        <Tabs.Tab value="account">Account</Tabs.Tab>
        <Tabs.Tab value="password">Password</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="account">Make changes to your account here.</Tabs.Panel>
      <Tabs.Panel value="password">Change your password here.</Tabs.Panel>
      <Tabs.Panel value="settings">Manage your notification settings.</Tabs.Panel>
    </Tabs.Root>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs.Root defaultValue="one">
      <Tabs.List>
        <Tabs.Tab value="one">Tab one</Tabs.Tab>
        <Tabs.Tab value="two">Tab two</Tabs.Tab>
        <Tabs.Tab value="three" disabled>Disabled</Tabs.Tab>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Panel value="one">Content for tab one.</Tabs.Panel>
      <Tabs.Panel value="two">Content for tab two.</Tabs.Panel>
      <Tabs.Panel value="three">You can't see this.</Tabs.Panel>
    </Tabs.Root>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        {['Overview', 'Analytics', 'Reports', 'Notifications', 'Billing'].map((tab) => (
          <Tabs.Tab key={tab} value={tab.toLowerCase()}>{tab}</Tabs.Tab>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
      {['Overview', 'Analytics', 'Reports', 'Notifications', 'Billing'].map((tab) => (
        <Tabs.Panel key={tab} value={tab.toLowerCase()}>{tab} content goes here.</Tabs.Panel>
      ))}
    </Tabs.Root>
  ),
};
