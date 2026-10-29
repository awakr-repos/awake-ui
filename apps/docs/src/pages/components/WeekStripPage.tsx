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

export function WeekStripPage() {
  return (
    <div>
      <PageHeader title="Week Strip" description="Visual 7-day week selector with today and selected highlights." />

      <h2 className="text-lg font-semibold mb-4">Playground</h2>
      <ComponentPreview code={`const [selected, setSelected] = useState(new Date())

<WeekStrip
  today={new Date()}
  selected={selected}
  onSelect={setSelected}
/>`}>
        <Demo />
      </ComponentPreview>
    </div>
  )
}
