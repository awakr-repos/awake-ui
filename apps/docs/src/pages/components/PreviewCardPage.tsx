import { PreviewCard } from '@awakr/awake-ui/preview-card'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function PreviewCardPage() {
  return (
    <div>
      <PageHeader title="PreviewCard" description="A floating card that appears on hover to preview linked content." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<PreviewCard.Root>
  <PreviewCard.Trigger>awake-ui</PreviewCard.Trigger>
  <PreviewCard.Portal>
    <PreviewCard.Positioner>
      <PreviewCard.Popup>
        Preview content here.
      </PreviewCard.Popup>
    </PreviewCard.Positioner>
  </PreviewCard.Portal>
</PreviewCard.Root>`}>
        <div style={{ padding: '1rem', fontSize: '0.875rem' }}>
          Hover over{' '}
          <PreviewCard.Root>
            <PreviewCard.Trigger>awake-ui</PreviewCard.Trigger>
            <PreviewCard.Portal>
              <PreviewCard.Positioner>
                <PreviewCard.Popup>
                  <strong style={{ display: 'block', marginBottom: '0.25rem' }}>awake-ui</strong>
                  <span style={{ color: 'var(--color-awake-text-muted)', fontSize: '0.8125rem' }}>A React component library built on Base UI.</span>
                </PreviewCard.Popup>
              </PreviewCard.Positioner>
            </PreviewCard.Portal>
          </PreviewCard.Root>
          {' '}to see the card.
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <table className="w-full text-sm border-collapse">
        <thead><tr className="border-b docs-border"><th className="text-left py-2 pr-4 font-medium docs-text-muted">Component</th><th className="text-left py-2 font-medium docs-text-muted">Description</th></tr></thead>
        <tbody>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">PreviewCard.Root</td><td className="py-2 docs-text-muted">Container. Props: <code className="docs-code-inline-bg px-1 rounded">delay</code> (open delay ms), <code className="docs-code-inline-bg px-1 rounded">closeDelay</code>.</td></tr>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">PreviewCard.Trigger</td><td className="py-2 docs-text-muted">Inline trigger element (renders as a button by default).</td></tr>
          <tr><td className="py-2 pr-4 font-mono text-xs">PreviewCard.Positioner</td><td className="py-2 docs-text-muted">Positions the card. Props: <code className="docs-code-inline-bg px-1 rounded">side</code>, <code className="docs-code-inline-bg px-1 rounded">sideOffset</code> (default 8).</td></tr>
        </tbody>
      </table>
    </div>
  )
}
