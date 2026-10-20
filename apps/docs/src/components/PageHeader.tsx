interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-10 pb-8 border-b border-neutral-200 dark:border-neutral-800">
      <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-lg">{description}</p>
    </div>
  )
}
