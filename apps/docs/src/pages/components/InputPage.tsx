import { useState } from 'react'
import { Input } from '@awakr/awake-ui/input'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function InputPage() {
  const [val, setVal] = useState('')
  return (
    <div>
      <PageHeader title="Input" description="A styled text input field built on Base UI's Input primitive." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<Input placeholder="Enter text…" />`}>
        <Input placeholder="Enter text…" style={{ width: 280 }} />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Sizes</h2>
      <ComponentPreview code={`<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium (default)" />
<Input size="lg" placeholder="Large" />`}>
        <div className="flex flex-col gap-3" style={{ width: 280 }}>
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Disabled</h2>
      <ComponentPreview code={`<Input disabled placeholder="Disabled" />`}>
        <Input disabled placeholder="Disabled" style={{ width: 280 }} />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Controlled</h2>
      <ComponentPreview code={`const [val, setVal] = useState('')
<Input value={val} onChange={(e) => setVal(e.target.value)} placeholder="Type something…" />`}>
        <Input value={val} onChange={(e) => setVal(e.target.value)} placeholder="Type something…" style={{ width: 280 }} />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <table className="w-full text-sm border-collapse">
        <thead><tr className="border-b docs-border"><th className="text-left py-2 pr-4 font-medium docs-text-muted">Prop</th><th className="text-left py-2 font-medium docs-text-muted">Type</th><th className="text-left py-2 font-medium docs-text-muted">Default</th><th className="text-left py-2 font-medium docs-text-muted">Description</th></tr></thead>
        <tbody>
          <tr className="border-b docs-border"><td className="py-2 pr-4 font-mono text-xs">size</td><td className="py-2 pr-4 font-mono text-xs">"sm" | "md" | "lg"</td><td className="py-2 pr-4 docs-text-muted">"md"</td><td className="py-2 docs-text-muted">Input height</td></tr>
          <tr><td className="py-2 pr-4 font-mono text-xs">…rest</td><td className="py-2 pr-4 font-mono text-xs">InputHTMLAttributes</td><td className="py-2 pr-4 docs-text-muted">—</td><td className="py-2 docs-text-muted">All native input props are forwarded</td></tr>
        </tbody>
      </table>
    </div>
  )
}
