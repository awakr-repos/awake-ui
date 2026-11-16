import type { Meta, StoryObj } from '@storybook/react-vite';
import { PreviewCard } from './index';

const meta: Meta = {
  title: 'Components/PreviewCard',
  argTypes: {
    delay: { control: 'number', description: 'Open delay in ms' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div style={{ padding: '2rem', fontSize: '0.875rem' }}>
      Hover over{' '}
      <PreviewCard.Root>
        <PreviewCard.Trigger>awake-ui</PreviewCard.Trigger>
        <PreviewCard.Portal>
          <PreviewCard.Positioner>
            <PreviewCard.Popup>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>awake-ui</strong>
              <span style={{ color: 'var(--color-awake-text-muted)', fontSize: '0.8125rem' }}>
                A React component library built on Base UI with a Tailwind CSS v4 token system.
              </span>
            </PreviewCard.Popup>
          </PreviewCard.Positioner>
        </PreviewCard.Portal>
      </PreviewCard.Root>{' '}
      to see the preview card.
    </div>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <div style={{ padding: '2rem', fontSize: '0.875rem' }}>
      Follow{' '}
      <PreviewCard.Root>
        <PreviewCard.Trigger>@awakr</PreviewCard.Trigger>
        <PreviewCard.Portal>
          <PreviewCard.Positioner>
            <PreviewCard.Popup>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-awake-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1rem' }}>A</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>Awakr</div>
                  <div style={{ color: 'var(--color-awake-text-muted)', fontSize: '0.8125rem' }}>@awakr · awake-ui maintainer</div>
                </div>
              </div>
            </PreviewCard.Popup>
          </PreviewCard.Positioner>
        </PreviewCard.Portal>
      </PreviewCard.Root>{' '}
      on GitHub.
    </div>
  ),
};
