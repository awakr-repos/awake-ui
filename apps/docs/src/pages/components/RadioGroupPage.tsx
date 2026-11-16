import { useState } from 'react'
import { RadioGroup } from '@awakr/awake-ui/radio-group'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function RadioGroupPage() {
  const [value, setValue] = useState('option1')
  return (
    <div>
      <PageHeader title="RadioGroup" description="Single-selection from a list of mutually exclusive options." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`const [value, setValue] = useState('option1')

<RadioGroup.Root value={value} onValueChange={setValue}>
  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <RadioGroup.Item value="option1" /> Option 1
  </label>
  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <RadioGroup.Item value="option2" /> Option 2
  </label>
</RadioGroup.Root>`}>
        <RadioGroup.Root value={value} onValueChange={(v) => setValue(v as string)}>
          <div className="flex flex-col gap-3">
            {['option1', 'option2', 'option3'].map((v) => (
              <label key={v} className="flex items-center gap-2 text-sm cursor-pointer">
                <RadioGroup.Item value={v} />
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </label>
            ))}
          </div>
        </RadioGroup.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <table className="w-full text-sm border-collapse">
        <thead><tr className="border-b docs-border"><th className="text-left py-2 pr-4 font-medium docs-text-muted">Component</th><th className="text-left py-2 font-medium docs-text-muted">Description</th></tr></thead>
        <tbody>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">RadioGroup.Root</td><td className="py-2 docs-text-muted">Container. Props: <code className="docs-code-inline-bg px-1 rounded">value</code>, <code className="docs-code-inline-bg px-1 rounded">onValueChange</code>, <code className="docs-code-inline-bg px-1 rounded">defaultValue</code>, <code className="docs-code-inline-bg px-1 rounded">disabled</code>.</td></tr>
          <tr><td className="py-2 pr-4 font-mono text-xs">RadioGroup.Item</td><td className="py-2 docs-text-muted">Individual radio button. Requires <code className="docs-code-inline-bg px-1 rounded">value</code>. Wrap in a <code className="docs-code-inline-bg px-1 rounded">label</code> for accessibility.</td></tr>
        </tbody>
      </table>
    </div>
  )
}
