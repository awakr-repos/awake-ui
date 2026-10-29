import { Card } from '@awakr/awake-ui/card'
import { Badge } from '@awakr/awake-ui/badge'
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

      <h2 className="text-lg font-semibold mb-4">Simple</h2>
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
    </div>
  )
}
