import { Badge } from '@awakr/awake-ui/badge'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function BadgePage() {
  return (
    <div>
      <PageHeader title="Badge" description="Compact label for status or category." />

      <h2 className="text-lg font-semibold mb-4">Variants</h2>
      <ComponentPreview code={`<Badge variant="default">Default</Badge>
<Badge variant="info">Novo</Badge>
<Badge variant="success">Ativo</Badge>
<Badge variant="warning">Pendente</Badge>
<Badge variant="error">Inativo</Badge>`}>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="info">Novo</Badge>
          <Badge variant="success">Ativo</Badge>
          <Badge variant="warning">Pendente</Badge>
          <Badge variant="error">Inativo</Badge>
        </div>
      </ComponentPreview>
    </div>
  )
}
