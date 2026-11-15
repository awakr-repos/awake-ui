import { useState } from 'react'
import { Pagination } from '@awakr/awake-ui/pagination'
import { PageHeader } from '../../components/PageHeader'
import { ComponentPreview } from '../../components/ComponentPreview'

function InteractiveDemo() {
  const [page, setPage] = useState(3)
  return (
    <div className="flex flex-col items-center gap-3">
      <Pagination totalPages={10} currentPage={page} onPageChange={setPage} />
      <span className="text-sm text-[var(--color-awake-text-muted)]">Current page: {page}</span>
    </div>
  )
}

function FirstPageDemo() {
  const [page, setPage] = useState(1)
  return <Pagination totalPages={10} currentPage={page} onPageChange={setPage} />
}

function LastPageDemo() {
  const [page, setPage] = useState(10)
  return <Pagination totalPages={10} currentPage={page} onPageChange={setPage} />
}

function FewPagesDemo() {
  const [page, setPage] = useState(2)
  return <Pagination totalPages={3} currentPage={page} onPageChange={setPage} />
}

export function PaginationPage() {
  return (
    <div>
      <PageHeader title="Pagination" description="Navigate through multiple pages of content." />

      <h2 className="text-lg font-semibold mb-4">Interactive</h2>
      <ComponentPreview code={`const [page, setPage] = useState(3)

<Pagination
  totalPages={10}
  currentPage={page}
  onPageChange={setPage}
/>`}>
        <InteractiveDemo />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">First page (Previous disabled)</h2>
      <ComponentPreview code={`const [page, setPage] = useState(1)

<Pagination totalPages={10} currentPage={page} onPageChange={setPage} />`}>
        <FirstPageDemo />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Last page (Next disabled)</h2>
      <ComponentPreview code={`const [page, setPage] = useState(10)

<Pagination totalPages={10} currentPage={page} onPageChange={setPage} />`}>
        <LastPageDemo />
      </ComponentPreview>

      <h2 className="text-lg font-semibold mb-4">Few pages</h2>
      <ComponentPreview code={`const [page, setPage] = useState(2)

<Pagination totalPages={3} currentPage={page} onPageChange={setPage} />`}>
        <FewPagesDemo />
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
            <td className="py-2 pr-4 font-mono text-xs">currentPage</td>
            <td className="py-2 pr-4 docs-text-muted">number</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Currently active page (1-based).</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">totalPages</td>
            <td className="py-2 pr-4 docs-text-muted">number</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Total number of pages.</td>
          </tr>
          <tr className="border-b docs-border">
            <td className="py-2 pr-4 font-mono text-xs">onPageChange</td>
            <td className="py-2 pr-4 docs-text-muted">(page: number) =&gt; void</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Callback fired when the user clicks Previous or Next.</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-mono text-xs">className</td>
            <td className="py-2 pr-4 docs-text-muted">string</td>
            <td className="py-2 pr-4 docs-text-muted">—</td>
            <td className="py-2 docs-text-muted">Additional CSS class. Also accepts all native <code className="docs-code-inline-bg px-1 rounded">nav</code> props.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
