import { Separator } from '@awakr/awake-ui/separator'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function SeparatorPage() {
  return (
    <div>
      <PageHeader title="Separator" description="Visually or semantically separates content." />

      <h2 className="text-lg font-semibold mb-4">Horizontal</h2>
      <ComponentPreview code={`<p>Above the separator</p>
<Separator />
<p>Below the separator</p>`}>
        <div className="w-full max-w-sm space-y-2 text-sm">
          <p>Above the separator</p>
          <Separator />
          <p>Below the separator</p>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Vertical</h2>
      <ComponentPreview code={`<div className="flex items-center gap-4 h-6">
  <span>Left</span>
  <Separator orientation="vertical" />
  <span>Right</span>
</div>`}>
        <div className="flex items-center gap-4 h-6 text-sm">
          <span>Left</span>
          <Separator orientation="vertical" />
          <span>Right</span>
        </div>
      </ComponentPreview>
    </div>
  )
}
