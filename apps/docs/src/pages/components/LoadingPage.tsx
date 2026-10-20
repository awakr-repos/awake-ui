import { Loading } from '@developmentsnil/awake-ui/loading'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function LoadingPage() {
  return (
    <div>
      <PageHeader title="Loading" description="Indicates content is being loaded." />

      <h2 className="text-lg font-semibold mb-4">Sizes</h2>
      <ComponentPreview code={`<Loading size="sm" />
<Loading size="md" />
<Loading size="lg" />`}>
        <div className="flex items-center gap-8">
          <Loading size="sm" />
          <Loading size="md" />
          <Loading size="lg" />
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Custom label</h2>
      <ComponentPreview code={`<Loading size="md" label="Saving changes…" />`}>
        <Loading size="md" label="Saving changes…" />
      </ComponentPreview>
    </div>
  )
}
