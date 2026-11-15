import { Avatar } from '@awakr/awake-ui/avatar'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function AvatarPage() {
  return (
    <div>
      <PageHeader title="Avatar" description="Displays a user profile image with an initial fallback." />

      <h2 className="text-lg font-semibold mb-4">Sizes</h2>
      <ComponentPreview code={`<Avatar alt="Ana Lima" size="sm" />
<Avatar alt="Ana Lima" size="md" />
<Avatar alt="Ana Lima" size="lg" />`}>
        <div className="flex items-center gap-3">
          <Avatar alt="Ana Lima" size="sm" />
          <Avatar alt="Ana Lima" size="md" />
          <Avatar alt="Ana Lima" size="lg" />
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">With image</h2>
      <ComponentPreview code={`<Avatar src="https://i.pravatar.cc/150?img=47" alt="Ana Lima" size="md" />
<Avatar src="https://i.pravatar.cc/150?img=12" alt="Carlos" size="md" />`}>
        <div className="flex items-center gap-3">
          <Avatar src="https://i.pravatar.cc/150?img=47" alt="Ana Lima" size="md" />
          <Avatar src="https://i.pravatar.cc/150?img=12" alt="Carlos" size="md" />
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Custom fallback</h2>
      <ComponentPreview code={`<Avatar fallback="👤" size="md" />
<Avatar fallback="AB" size="md" />`}>
        <div className="flex items-center gap-3">
          <Avatar fallback="👤" size="md" />
          <Avatar fallback="AB" size="md" />
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
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
            <td className="py-2 pr-4 font-mono text-xs">src</td>
            <td className="py-2 pr-4 docs-text-muted">string</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Image URL. When absent, shows the fallback.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">alt</td>
            <td className="py-2 pr-4 docs-text-muted">string</td>
            <td className="py-2 pr-4 docs-text-muted">""</td>
            <td className="py-2 docs-text-muted">Alt text for the image. First letter is used as fallback initial.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">fallback</td>
            <td className="py-2 pr-4 docs-text-muted">ReactNode</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Custom fallback content. Overrides the initial derived from <code className="docs-code-inline-bg px-1 rounded">alt</code>.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">size</td>
            <td className="py-2 pr-4 docs-text-muted">"sm" | "md" | "lg"</td>
            <td className="py-2 pr-4 docs-text-muted">"md"</td>
            <td className="py-2 docs-text-muted">Avatar size.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">className</td>
            <td className="py-2 pr-4 docs-text-muted">string</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Additional CSS class.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
