import { useState } from 'react'
import { WeekStrip } from '@awakr/awake-ui/week-strip'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

function Demo() {
  const today = new Date()
  const [selected, setSelected] = useState<Date>(today)
  return (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <WeekStrip today={today} selected={selected} onSelect={setSelected} />
      <p style={{ marginTop: 12, fontSize: 14, color: 'var(--color-awake-text-muted)' }}>
        Selecionado: {selected.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
      </p>
    </div>
  )
}

function DemoCustomDays() {
  const today = new Date()
  const [selected, setSelected] = useState<Date>(today)

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    return { date: d, label: ['S', 'M', 'T', 'W', 'T', 'F', 'S'][d.getDay()] }
  })

  return (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <WeekStrip today={today} selected={selected} days={days} onSelect={setSelected} />
    </div>
  )
}

export function WeekStripPage() {
  return (
    <div>
      <PageHeader title="Week Strip" description="Visual 7-day week selector with today and selected highlights." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`const [selected, setSelected] = useState(new Date())

<WeekStrip
  today={new Date()}
  selected={selected}
  onSelect={setSelected}
/>`}>
        <Demo />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Custom days</h2>
      <p className="docs-text-muted text-sm mb-4">
        Pass a <code className="docs-code-inline-bg px-1 rounded">days</code> array to control which 7 days are shown and their labels.
      </p>
      <ComponentPreview code={`const days = Array.from({ length: 7 }, (_, i) => {
  const d = new Date()
  d.setDate(d.getDate() + i)
  return { date: d, label: ['S','M','T','W','T','F','S'][d.getDay()] }
})

<WeekStrip today={new Date()} selected={selected} days={days} onSelect={setSelected} />`}>
        <DemoCustomDays />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b docs-border">
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Prop</th>
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Type</th>
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Default</th>
            <th className="text-left py-2 font-medium docs-text-muted">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">today</td>
            <td className="py-2 pr-4 docs-text-muted">Date | string</td>
            <td className="py-2 pr-4 docs-text-muted">new Date()</td>
            <td className="py-2 docs-text-muted">Reference date for highlighting today.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">selected</td>
            <td className="py-2 pr-4 docs-text-muted">Date | string</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Currently selected date.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">days</td>
            <td className="py-2 pr-4 docs-text-muted">{'{ date: Date; label?: string }[]'}</td>
            <td className="py-2 pr-4 docs-text-muted">Current week (Sun–Sat)</td>
            <td className="py-2 docs-text-muted">Custom 7-day array. Defaults to the week containing <code className="docs-code-inline-bg px-1 rounded">today</code>.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">onSelect</td>
            <td className="py-2 pr-4 docs-text-muted">(date: Date) =&gt; void</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Callback fired when a day is clicked.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">className</td>
            <td className="py-2 pr-4 docs-text-muted">string</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Additional CSS class.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
