export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 font-primary text-[11px] font-normal uppercase leading-none tracking-label text-muted-foreground">
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
