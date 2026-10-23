import { Alert } from '@awakr/awake-ui/alert'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function AlertPage() {
  return (
    <div>
      <PageHeader title="Alert" description="Displays a short, important message to the user." />

      <h2 className="text-lg font-semibold mb-4">Variants</h2>
      <ComponentPreview code={`<Alert variant="info">Info — something you should know.</Alert>
<Alert variant="success">Success — operation completed.</Alert>
<Alert variant="warning">Warning — proceed with care.</Alert>
<Alert variant="error">Error — something went wrong.</Alert>`}>
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <Alert variant="info">Info — something you should know.</Alert>
          <Alert variant="success">Success — operation completed.</Alert>
          <Alert variant="warning">Warning — proceed with care.</Alert>
          <Alert variant="error">Error — something went wrong.</Alert>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">With custom content</h2>
      <ComponentPreview code={`<Alert variant="info">
  <strong>Heads up!</strong> Your trial expires in 3 days.
</Alert>`}>
        <div className="w-full max-w-sm">
          <Alert variant="info">
            <strong>Heads up!</strong> Your trial expires in 3 days.
          </Alert>
        </div>
      </ComponentPreview>
    </div>
  )
}
