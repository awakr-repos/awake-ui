import { Avatar } from '@awakr/awake-ui/avatar'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function AvatarPage() {
  return (
    <div>
      <PageHeader title="Avatar" description="Displays a user profile image with an initial fallback." />

      <h2 className="text-lg font-semibold mb-4">Fallback</h2>
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
    </div>
  )
}
