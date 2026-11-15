import { Field } from '@awakr/awake-ui/field'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

export function FieldPage() {
  return (
    <div>
      <PageHeader title="Field" description="A labeled form field wrapper." />

      <h2 className="text-lg font-semibold mb-4">Default</h2>
      <ComponentPreview code={`<Field.Root>
  <Field.Label>Email</Field.Label>
  <Field.Control type="email" placeholder="you@example.com" />
</Field.Root>`}>
        <div className="w-full max-w-xs">
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Field.Control type="email" placeholder="you@example.com" />
          </Field.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Multiple fields</h2>
      <ComponentPreview code={`<Field.Root>
  <Field.Label>First name</Field.Label>
  <Field.Control type="text" placeholder="Alice" />
</Field.Root>
<Field.Root>
  <Field.Label>Last name</Field.Label>
  <Field.Control type="text" placeholder="Smith" />
</Field.Root>`}>
        <div className="w-full max-w-xs flex flex-col gap-4">
          <Field.Root>
            <Field.Label>First name</Field.Label>
            <Field.Control type="text" placeholder="Alice" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Last name</Field.Label>
            <Field.Control type="text" placeholder="Smith" />
          </Field.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Disabled</h2>
      <ComponentPreview code={`<Field.Root>
  <Field.Label>Username</Field.Label>
  <Field.Control type="text" defaultValue="awake_user" disabled />
</Field.Root>`}>
        <div className="w-full max-w-xs">
          <Field.Root>
            <Field.Label>Username</Field.Label>
            <Field.Control type="text" defaultValue="awake_user" disabled />
          </Field.Root>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Props</h2>
      <p className="docs-text-muted text-sm mb-4">
        All sub-components accept <code className="docs-code-inline-bg px-1 rounded">className</code> and their underlying Base UI props.
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
            <td className="py-2 pr-4 font-mono text-xs">Field.Root</td>
            <td className="py-2 docs-text-muted">Container that links the label and control via <code className="docs-code-inline-bg px-1 rounded">htmlFor</code> / <code className="docs-code-inline-bg px-1 rounded">id</code> automatically.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">Field.Label</td>
            <td className="py-2 docs-text-muted">Styled <code className="docs-code-inline-bg px-1 rounded">label</code> element automatically associated with the control.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">Field.Control</td>
            <td className="py-2 docs-text-muted">Styled <code className="docs-code-inline-bg px-1 rounded">input</code> element. Accepts all native input props: <code className="docs-code-inline-bg px-1 rounded">type</code>, <code className="docs-code-inline-bg px-1 rounded">placeholder</code>, <code className="docs-code-inline-bg px-1 rounded">disabled</code>, <code className="docs-code-inline-bg px-1 rounded">defaultValue</code>, etc.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
