import { Button } from '@developmentsnil/awake-ui/button'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function ButtonPage() {
  return (
    <div>
      <PageHeader title="Button" description="Triggers an action or event." />

      <h2 className="text-lg font-semibold mb-4">Variants</h2>
      <ComponentPreview code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Sizes</h2>
      <ComponentPreview code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}>
        <div className="flex items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Disabled</h2>
      <ComponentPreview code={`<Button variant="primary" disabled>Primary</Button>
<Button variant="outline" disabled>Outline</Button>
<Button variant="destructive" disabled>Destructive</Button>`}>
        <div className="flex gap-3">
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="destructive" disabled>Destructive</Button>
        </div>
      </ComponentPreview>
    </div>
  )
}
