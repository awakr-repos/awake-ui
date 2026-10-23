import { Switch } from '@awakr/awake-ui/switch'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function SwitchPage() {
  return (
    <div>
      <PageHeader title="Switch" description="A toggle for binary on/off states." />

      <h2 className="text-lg font-semibold mb-4">States</h2>
      <ComponentPreview code={`{/* Off */}
<Switch.Root><Switch.Thumb /></Switch.Root>

{/* On */}
<Switch.Root defaultChecked><Switch.Thumb /></Switch.Root>

{/* Disabled off */}
<Switch.Root disabled><Switch.Thumb /></Switch.Root>

{/* Disabled on */}
<Switch.Root disabled defaultChecked><Switch.Thumb /></Switch.Root>`}>
        <div className="flex items-center gap-6">
          <Switch.Root><Switch.Thumb /></Switch.Root>
          <Switch.Root defaultChecked><Switch.Thumb /></Switch.Root>
          <Switch.Root disabled><Switch.Thumb /></Switch.Root>
          <Switch.Root disabled defaultChecked><Switch.Thumb /></Switch.Root>
        </div>
      </ComponentPreview>
    </div>
  )
}
