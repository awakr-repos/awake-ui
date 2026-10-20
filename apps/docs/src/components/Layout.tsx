import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

export function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0 px-8 py-10 max-w-4xl">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
