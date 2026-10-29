import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast, useToast } from './index';
import { Button } from '../button/index';

const meta: Meta = {
  title: 'Components/Toast',
  decorators: [
    (Story) => (
      <Toast.Provider>
        <Story />
      </Toast.Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

function ToastDemo() {
  const { toast } = useToast();
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button variant="secondary" onClick={() => toast({ message: 'Operação realizada!', variant: 'default' })}>Default</Button>
      <Button variant="secondary" onClick={() => toast({ message: 'Salvo com sucesso.', variant: 'success' })}>Success</Button>
      <Button variant="secondary" onClick={() => toast({ message: 'Atenção: verifique os dados.', variant: 'warning' })}>Warning</Button>
      <Button variant="secondary" onClick={() => toast({ message: 'Erro ao processar.', variant: 'error' })}>Error</Button>
      <Button variant="secondary" onClick={() => toast({ message: 'Nova versão disponível.', variant: 'info' })}>Info</Button>
    </div>
  );
}

export const Playground: Story = {
  render: () => <ToastDemo />,
};
