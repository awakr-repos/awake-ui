import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './index';

const meta: Meta = {
  title: 'Components/Pagination',
  argTypes: {
    currentPage: { control: { type: 'number', min: 1 }, description: 'Current page (1-indexed)' },
    totalPages: { control: { type: 'number', min: 1 }, description: 'Total number of pages' },
    onPageChange: { action: 'onPageChange', description: 'Called when the user navigates to a new page' },
    className: { control: 'text', description: 'Additional CSS class' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Pagination
      currentPage={1}
      totalPages={10}
      onPageChange={(page) => console.log(page)}
    />
  ),
};
