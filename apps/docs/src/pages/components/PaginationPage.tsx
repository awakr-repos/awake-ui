import { useState } from 'react'
import { Pagination } from '@developmentsnil/awake-ui/pagination'
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
    </div>
  )
}
