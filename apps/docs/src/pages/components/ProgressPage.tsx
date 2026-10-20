import { useState, useEffect } from 'react'
import { Progress } from '@developmentsnil/awake-ui/progress'
import { Button } from '@developmentsnil/awake-ui/button'
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
    </div>
  )
}
