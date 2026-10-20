import { Field } from '@developmentsnil/awake-ui/field'
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
    </div>
  )
}
