import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './index';

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload.Root,
  parameters: { layout: 'padded' },
  argTypes: {
    multiple: {
      description: 'Allow selecting multiple files at once.',
      control: { type: 'boolean' },
    },
    accept: {
      description: 'Array of accepted MIME types.',
      control: false,
    },
    maxSize: {
      description: 'Maximum file size in bytes. No limit if omitted.',
      control: { type: 'number' },
    },
    disabled: {
      description: 'Disables the dropzone and prevents interaction.',
      control: { type: 'boolean' },
    },
    onChange: {
      description: 'Callback fired when the file list changes. Receives `File[]`.',
      control: false,
    },
  },
} satisfies Meta<typeof FileUpload.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  parameters: {
    docs: {
      source: {
        code: `<FileUpload.Root onChange={(files) => console.log(files)}>
  <FileUpload.Dropzone />
  <FileUpload.FileList />
</FileUpload.Root>`,
      },
    },
  },
  render: (args) => (
    <FileUpload.Root {...args}>
      <FileUpload.Dropzone />
      <FileUpload.FileList />
    </FileUpload.Root>
  ),
};

export const Multiple: Story = {
  args: { multiple: true },
  parameters: {
    docs: {
      source: {
        code: `<FileUpload.Root multiple onChange={(files) => console.log(files)}>
  <FileUpload.Dropzone />
  <FileUpload.FileList />
</FileUpload.Root>`,
      },
    },
  },
  render: (args) => (
    <FileUpload.Root {...args}>
      <FileUpload.Dropzone />
      <FileUpload.FileList />
    </FileUpload.Root>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  parameters: {
    docs: {
      source: {
        code: `<FileUpload.Root disabled>
  <FileUpload.Dropzone />
</FileUpload.Root>`,
      },
    },
  },
  render: (args) => (
    <FileUpload.Root {...args}>
      <FileUpload.Dropzone />
    </FileUpload.Root>
  ),
};
