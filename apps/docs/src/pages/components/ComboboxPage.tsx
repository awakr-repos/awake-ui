import { useState } from 'react'
import { Combobox } from '@awakr/awake-ui/combobox'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

const FRUITS = ['Apple', 'Avocado', 'Banana', 'Cherry', 'Grape', 'Kiwi', 'Mango', 'Orange']

export function ComboboxPage() {
  const [inputValue, setInputValue] = useState('')
  const filtered = FRUITS.filter((f) => f.toLowerCase().includes(inputValue.toLowerCase()))

  return (
    <div>
      <PageHeader title="Combobox" description="A searchable select that filters options as the user types." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`const [inputValue, setInputValue] = useState('')
const filtered = FRUITS.filter((f) => f.toLowerCase().includes(inputValue.toLowerCase()))

<Combobox.Root value={null} inputValue={inputValue} onInputChange={setInputValue}>
  <Combobox.InputWrapper>
    <Combobox.Input placeholder="Search fruits…" />
    <Combobox.Trigger>▾</Combobox.Trigger>
  </Combobox.InputWrapper>
  <Combobox.Portal>
    <Combobox.Positioner>
      <Combobox.Popup>
        {filtered.map((f) => <Combobox.Item key={f} value={f}>{f}</Combobox.Item>)}
        {filtered.length === 0 && <Combobox.Empty>No results.</Combobox.Empty>}
      </Combobox.Popup>
    </Combobox.Positioner>
  </Combobox.Portal>
</Combobox.Root>`}>
        <div style={{ width: 280 }}>
          <Combobox.Root value={null}>
            <Combobox.InputGroup>
              <Combobox.Input placeholder="Search fruits…" onChange={(e) => setInputValue(e.target.value)} />
              <Combobox.Trigger>▾</Combobox.Trigger>
            </Combobox.InputGroup>
            <Combobox.Portal>
              <Combobox.Positioner>
                <Combobox.Popup>
                  {filtered.length > 0
                    ? filtered.map((f) => <Combobox.Item key={f} value={f}>{f}</Combobox.Item>)
                    : <Combobox.Empty>No results found.</Combobox.Empty>}
                </Combobox.Popup>
              </Combobox.Positioner>
            </Combobox.Portal>
          </Combobox.Root>
        </div>
      </ComponentPreview>
    </div>
  )
}
