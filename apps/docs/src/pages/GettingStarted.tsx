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
      <p className="text-neutral-600 dark:text-neutral-400 mb-3">
        Add the stylesheet to your app's entry point (e.g. <code className="text-sm bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">main.tsx</code>):
      </p>
      <CodeBlock>{`import '@awakr/awake-ui/style.css'`}</CodeBlock>

      <p className="text-neutral-600 dark:text-neutral-400 mb-3">
        Optionally, import the dark theme:
      </p>
      <CodeBlock>{`import '@awakr/awake-ui/dark-theme.css'`}</CodeBlock>

      <h2 className="text-xl font-semibold mb-3 mt-8">Tailwind CSS setup</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-3">
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
      <p className="text-neutral-600 dark:text-neutral-400 mb-3">
        Add <code className="text-sm bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">data-theme="dark"</code> to your <code className="text-sm bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">&lt;html&gt;</code> element to activate dark mode:
      </p>
      <CodeBlock>{`<html data-theme="dark">
  ...
</html>`}</CodeBlock>
    </div>
  )
}
