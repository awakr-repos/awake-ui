import { useState, useEffect, useRef } from 'react'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import typescript from 'highlight.js/lib/languages/typescript'

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('typescript', typescript)

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
}

export function ComponentPreview({ children, code }: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (showCode && codeRef.current) {
      codeRef.current.removeAttribute('data-highlighted')
      hljs.highlightElement(codeRef.current)
    }
  }, [showCode])

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border docs-border mb-8">
      {/* Preview: w-full para que filhos com width:100% tenham referência de largura */}
      <div className="p-8 flex items-center justify-center docs-bg-alt min-h-32 rounded-t-xl w-full">
        <div className="w-full flex items-center justify-center">
          {children}
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-t docs-border docs-bg">
        <button
          onClick={() => setShowCode((v) => !v)}
          className="text-xs docs-text-subtle docs-hover-text transition-colors"
        >
          {showCode ? 'Hide code' : 'View code'}
        </button>
        <button
          onClick={handleCopy}
          className="text-xs docs-text-subtle docs-hover-text transition-colors"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      {/* Code block */}
      {showCode && (
        <div className="border-t border-neutral-800 rounded-b-xl overflow-hidden">
          <pre className="!m-0 !rounded-none !bg-neutral-950 text-sm overflow-x-auto">
            <code ref={codeRef} className="language-tsx !bg-transparent">
              {code}
            </code>
          </pre>
        </div>
      )}
    </div>
  )
}
