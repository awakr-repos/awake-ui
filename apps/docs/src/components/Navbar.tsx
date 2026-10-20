import { Link } from 'react-router-dom'
import { useTheme } from './ThemeContext'

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg tracking-tight text-neutral-900 dark:text-neutral-100">
          Awake UI
        </Link>
        <nav className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <Link to="/docs/getting-started" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            Docs
          </Link>
          <Link to="/docs/components/button" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            Components
          </Link>
          <a
            href="https://github.com/developmentsnil/awake-ui"
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            GitHub
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
    </header>
  )
}
