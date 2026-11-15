import { Card } from '@awakr/awake-ui/card'
import { Badge } from '@awakr/awake-ui/badge'
import { Button } from '@awakr/awake-ui/button'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function CardPage() {
  return (
    <div>
      <PageHeader title="Card" description="Surface container with optional header, content, and footer." />

      <h2 className="text-lg font-semibold mb-4">Full card</h2>
      <ComponentPreview code={`<Card.Root>
  <Card.Header>
    <Card.Title>Resumo do mês</Card.Title>
    <Card.Description>Janeiro 2025</Card.Description>
  </Card.Header>
  <Card.Content>
    <p>R$ 3.240,00 em receitas esse mês.</p>
  </Card.Content>
  <Card.Footer>
    <Badge variant="success">No prazo</Badge>
  </Card.Footer>
</Card.Root>`}>
        <Card.Root style={{ width: 300 }}>
          <Card.Header>
            <Card.Title>Resumo do mês</Card.Title>
            <Card.Description>Janeiro 2025</Card.Description>
          </Card.Header>
          <Card.Content>
            <p style={{ margin: 0, fontSize: 14 }}>R$ 3.240,00 em receitas esse mês.</p>
          </Card.Content>
          <Card.Footer>
            <Badge variant="success">No prazo</Badge>
          </Card.Footer>
        </Card.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">With action</h2>
      <ComponentPreview code={`<Card.Root>
  <Card.Header>
    <Card.Title>Novo componente</Card.Title>
    <Card.Description>Pronto para uso em produção.</Card.Description>
  </Card.Header>
  <Card.Content>
    <p>Adicione ao seu projeto com um simples import.</p>
  </Card.Content>
  <Card.Footer>
    <Button size="sm">Ver docs</Button>
  </Card.Footer>
</Card.Root>`}>
        <Card.Root style={{ width: 300 }}>
          <Card.Header>
            <Card.Title>Novo componente</Card.Title>
            <Card.Description>Pronto para uso em produção.</Card.Description>
          </Card.Header>
          <Card.Content>
            <p style={{ margin: 0, fontSize: 14 }}>Adicione ao seu projeto com um simples import.</p>
          </Card.Content>
          <Card.Footer>
            <Button size="sm">Ver docs</Button>
          </Card.Footer>
        </Card.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Content only</h2>
      <ComponentPreview code={`<Card.Root>
  <Card.Content>
    Card simples sem header ou footer.
  </Card.Content>
</Card.Root>`}>
        <Card.Root style={{ width: 300 }}>
          <Card.Content>
            <p style={{ margin: 0, fontSize: 14 }}>Card simples sem header ou footer.</p>
          </Card.Content>
        </Card.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <p className="docs-text-muted text-sm mb-4">
        All sub-components (<code className="docs-code-inline-bg px-1 rounded">Card.Root</code>, <code className="docs-code-inline-bg px-1 rounded">Card.Header</code>, <code className="docs-code-inline-bg px-1 rounded">Card.Content</code>, <code className="docs-code-inline-bg px-1 rounded">Card.Footer</code>) accept all native <code className="docs-code-inline-bg px-1 rounded">div</code> props plus <code className="docs-code-inline-bg px-1 rounded">className</code>.
        <code className="docs-code-inline-bg px-1 rounded">Card.Title</code> renders an <code className="docs-code-inline-bg px-1 rounded">h3</code> and <code className="docs-code-inline-bg px-1 rounded">Card.Description</code> renders a <code className="docs-code-inline-bg px-1 rounded">p</code>.
      </p>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b docs-border">
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Component</th>
            <th className="text-left py-2 font-medium docs-text-muted">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Card.Root</td>
            <td className="py-2 docs-text-muted">Outer container with border and radius.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Card.Header</td>
            <td className="py-2 docs-text-muted">Top section, typically holds title and description.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Card.Title</td>
            <td className="py-2 docs-text-muted">Card heading (<code className="docs-code-inline-bg px-1 rounded">h3</code>).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Card.Description</td>
            <td className="py-2 docs-text-muted">Subtitle or supporting text (<code className="docs-code-inline-bg px-1 rounded">p</code>).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Card.Content</td>
            <td className="py-2 docs-text-muted">Main body of the card.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Card.Footer</td>
            <td className="py-2 docs-text-muted">Bottom section, typically holds actions.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
