import { useState, useEffect } from 'react'
import { Progress } from '@awakr/awake-ui/progress'
import { Button } from '@awakr/awake-ui/button'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

function AnimatedProgress() {
  const [value, setValue] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    if (value >= 100) { setRunning(false); return }
    const t = setTimeout(() => setValue((v) => Math.min(v + 5, 100)), 150)
    return () => clearTimeout(t)
  }, [running, value])

  function restart() { setValue(0); setRunning(true) }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 360 }}>
      <Progress.Root value={value}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <Progress.Label>Upload progress</Progress.Label>
          <Progress.Value />
        </div>
        <Progress.Track><Progress.Indicator /></Progress.Track>
      </Progress.Root>
      <Button size="sm" variant="secondary" onClick={restart}>
        {running ? 'Running…' : value >= 100 ? 'Restart' : 'Start'}
      </Button>
    </div>
  )
}

export function ProgressPage() {
  return (
    <div>
      <PageHeader title="Progress" description="Shows the completion status of a task." />

      <h2 className="text-lg font-semibold mb-4">Values</h2>
      <ComponentPreview code={`<Progress.Root value={0}>
  <Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>
<Progress.Root value={25}>
  <Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>
<Progress.Root value={60}>
  <Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>
<Progress.Root value={100}>
  <Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 360 }}>
          {[0, 25, 60, 100].map((v) => (
            <Progress.Root key={v} value={v}>
              <Progress.Track><Progress.Indicator /></Progress.Track>
            </Progress.Root>
          ))}
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">With label and value</h2>
      <ComponentPreview code={`<Progress.Root value={30}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
    <Progress.Label>Uploading…</Progress.Label>
    <Progress.Value />
  </div>
  <Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>`}>
        <div style={{ width: '100%', maxWidth: 360 }}>
          <Progress.Root value={30}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <Progress.Label>Uploading…</Progress.Label>
              <Progress.Value />
            </div>
            <Progress.Track><Progress.Indicator /></Progress.Track>
          </Progress.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Animated</h2>
      <ComponentPreview code={`const [value, setValue] = useState(0)

<Progress.Root value={value}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
    <Progress.Label>Upload progress</Progress.Label>
    <Progress.Value />
  </div>
  <Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>`}>
        <AnimatedProgress />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Indeterminate</h2>
      <ComponentPreview code={`{/* Omit value for indeterminate state */}
<Progress.Root value={null}>
  <Progress.Track><Progress.Indicator /></Progress.Track>
</Progress.Root>`}>
        <div style={{ width: '100%', maxWidth: 360 }}>
          <Progress.Root value={null}>
            <Progress.Track><Progress.Indicator /></Progress.Track>
          </Progress.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <p className="docs-text-muted text-sm mb-4">
        All sub-components accept <code className="docs-code-inline-bg px-1 rounded">className</code> and their underlying Base UI props.
      </p>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b docs-border">
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Component</th>
            <th className="text-left py-2 font-medium docs-text-muted">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Progress.Root</td>
            <td className="py-2 docs-text-muted">Root context. Accepts <code className="docs-code-inline-bg px-1 rounded">value</code> (number 0–100, or <code className="docs-code-inline-bg px-1 rounded">null</code> for indeterminate).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Progress.Track</td>
            <td className="py-2 docs-text-muted">The background bar track.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Progress.Indicator</td>
            <td className="py-2 docs-text-muted">The filled bar that grows with the value.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Progress.Label</td>
            <td className="py-2 docs-text-muted">Accessible label text for the progress bar.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Progress.Value</td>
            <td className="py-2 docs-text-muted">Displays the current value as a percentage string (e.g. "30%").</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
