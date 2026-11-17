import { FileUpload } from '@awakr/awake-ui/file-upload'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function FileUploadPage() {
  return (
    <div>
      <PageHeader
        title="FileUpload"
        description="Drag-and-drop or click-to-select file input with thumbnail preview."
      />

      <h2 className="text-lg font-semibold mb-4">Single</h2>
      <ComponentPreview code={`<FileUpload.Root onChange={(files) => console.log(files)}>
  <FileUpload.Dropzone />
  <FileUpload.FileList />
</FileUpload.Root>`}>
        <FileUpload.Root>
          <FileUpload.Dropzone />
          <FileUpload.FileList />
        </FileUpload.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mt-8 mb-4">Multiple</h2>
      <ComponentPreview code={`<FileUpload.Root multiple onChange={(files) => console.log(files)}>
  <FileUpload.Dropzone />
  <FileUpload.FileList />
</FileUpload.Root>`}>
        <FileUpload.Root multiple>
          <FileUpload.Dropzone />
          <FileUpload.FileList />
        </FileUpload.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mt-8 mb-4">Disabled</h2>
      <ComponentPreview code={`<FileUpload.Root disabled>
  <FileUpload.Dropzone />
</FileUpload.Root>`}>
        <FileUpload.Root disabled>
          <FileUpload.Dropzone />
        </FileUpload.Root>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mt-8 mb-4">Props — FileUpload.Root</h2>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b docs-border">
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Prop</th>
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Type</th>
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Default</th>
            <th className="text-left py-2 font-medium docs-text-muted">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">multiple</td>
            <td className="py-2 pr-4 font-mono text-xs">boolean</td>
            <td className="py-2 pr-4 docs-text-muted">false</td>
            <td className="py-2 docs-text-muted">Allow selecting multiple files at once.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">accept</td>
            <td className="py-2 pr-4 font-mono text-xs">string[]</td>
            <td className="py-2 pr-4 docs-text-muted">['image/jpeg', 'image/png', 'image/webp']</td>
            <td className="py-2 docs-text-muted">Array of accepted MIME types.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">maxSize</td>
            <td className="py-2 pr-4 font-mono text-xs">number</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Maximum file size in bytes. No limit if omitted.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">disabled</td>
            <td className="py-2 pr-4 font-mono text-xs">boolean</td>
            <td className="py-2 pr-4 docs-text-muted">false</td>
            <td className="py-2 docs-text-muted">Disables the dropzone and prevents interaction.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">onChange</td>
            <td className="py-2 pr-4 font-mono text-xs">(files: File[]) =&gt; void</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Callback fired when the file list changes.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
