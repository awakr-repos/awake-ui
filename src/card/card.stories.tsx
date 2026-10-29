import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './index';

const meta: Meta<typeof Card.Root> = {
  title: 'Components/Card',
  component: Card.Root,
};

export default meta;
type Story = StoryObj<typeof Card.Root>;

export const Default: Story = {
  render: () => (
    <Card.Root style={{ width: 320 }}>
      <Card.Header>
        <Card.Title>Título do card</Card.Title>
        <Card.Description>Uma breve descrição do conteúdo deste card.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p style={{ margin: 0, fontSize: 14 }}>Aqui vai o conteúdo principal do card.</p>
      </Card.Content>
      <Card.Footer>
        <span style={{ fontSize: 12, color: 'var(--color-awake-text-muted)' }}>Rodapé do card</span>
      </Card.Footer>
    </Card.Root>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card.Root style={{ width: 320 }}>
      <Card.Content>
        <p style={{ margin: 0, fontSize: 14 }}>Card simples sem header ou footer.</p>
      </Card.Content>
    </Card.Root>
  ),
};
