import { PageHeader } from '../components/PageHeader'

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="px-5 py-4 rounded-xl bg-neutral-950 text-neutral-100 text-sm overflow-x-auto mb-6">
      <code>{children}</code>
    </pre>
  )
}

export function GettingStarted() {
  return (
    <div>
      <PageHeader
        title="Getting Started"
        description="Install Awake UI and start building in minutes."
      />

      <h2 className="text-xl font-semibold mb-3">Installation</h2>
      <CodeBlock>npm install @awakr/awake-ui</CodeBlock>

      <h2 className="text-xl font-semibold mb-3">Import styles</h2>
      <p className="docs-text-muted mb-3">
        Add the stylesheet to your app's entry point (e.g. <code className="text-sm docs-code-inline-bg px-1.5 py-0.5 rounded">main.tsx</code>):
      </p>
      <CodeBlock>{`import '@awakr/awake-ui/style.css'`}</CodeBlock>

      <p className="docs-text-muted mb-3">
        Optionally, import the dark theme:
      </p>
      <CodeBlock>{`import '@awakr/awake-ui/dark-theme.css'`}</CodeBlock>

      <h2 className="text-xl font-semibold mb-3 mt-8">Tailwind CSS setup</h2>
      <p className="docs-text-muted mb-3">
        Awake UI is built with Tailwind CSS v4. Make sure your project has Tailwind configured, then add the library source to your content paths so its classes are not purged:
      </p>
      <CodeBlock>{`// vite.config.ts
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()],
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mb-3 mt-8">Usage</h2>
      <CodeBlock>{`import { Button } from '@awakr/awake-ui/button'

export function App() {
  return <Button>Hello world</Button>
}`}</CodeBlock>

      <h2 className="text-xl font-semibold mb-3 mt-8">Dark mode</h2>
      <p className="docs-text-muted mb-3">
        Add <code className="text-sm docs-code-inline-bg px-1.5 py-0.5 rounded">data-theme="dark"</code> to your <code className="text-sm docs-code-inline-bg px-1.5 py-0.5 rounded">&lt;html&gt;</code> element to activate dark mode:
      </p>
      <CodeBlock>{`<html data-theme="dark">
  ...
</html>`}</CodeBlock>

      <h2 className="text-xl font-semibold mb-3 mt-8">Customization</h2>
      <p className="docs-text-muted mb-3">
        Awake UI uses a two-layer token system: raw color scales and semantic tokens. Components reference only the semantic layer, so you can retheme the entire library by overriding a handful of CSS variables — no need to touch the raw scales.
      </p>
      <CodeBlock>{`/* your global CSS */
:root {
  --color-awake-brand:        #0d9488; /* teal instead of indigo */
  --color-awake-brand-hover:  #0f766e;
  --color-awake-brand-subtle: #ccfbf1;
}`}</CodeBlock>
      <p className="docs-text-muted mb-3">Key semantic tokens:</p>
      <table className="w-full text-sm border-collapse mb-6">
        <thead>
          <tr className="border-b docs-border">
            <th className="text-left py-2 pr-4 font-medium docs-text-muted">Token</th>
            <th className="text-left py-2 font-medium docs-text-muted">Used for</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">--color-awake-brand</td>
            <td className="py-2 docs-text-muted">Primary actions, focus rings</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">--color-awake-surface</td>
            <td className="py-2 docs-text-muted">Page / card backgrounds</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">--color-awake-surface-raised</td>
            <td className="py-2 docs-text-muted">Elevated surfaces (dropdowns, popups)</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">--color-awake-border</td>
            <td className="py-2 docs-text-muted">Default borders</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">--color-awake-text</td>
            <td className="py-2 docs-text-muted">Body text</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">--color-awake-text-muted</td>
            <td className="py-2 docs-text-muted">Secondary / helper text</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
