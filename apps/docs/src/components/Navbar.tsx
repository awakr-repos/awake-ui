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
    <header className="sticky top-0 z-50 border-b docs-border docs-nav-bg backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg tracking-tight docs-text">
          Awake UI
        </Link>
        <nav className="flex items-center gap-6 text-sm docs-text-muted">
          <Link to="/docs/getting-started" className="docs-hover-text transition-colors">
            Docs
          </Link>
          <Link to="/docs/components/accordion" className="docs-hover-text transition-colors">
            Components
          </Link>
          <a
            href="https://github.com/awakr-repos/awake-ui"
            target="_blank"
            rel="noreferrer"
            className="docs-hover-text transition-colors"
          >
            GitHub
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md docs-text-subtle docs-hover-text docs-hover-nav-bg transition-colors"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
    </header>
  )
}
