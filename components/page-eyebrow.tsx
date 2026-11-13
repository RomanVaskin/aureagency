import { SectionLabel } from './section-label'

/** Top-of-page marker for inner pages: "AURE AGENCY / <title>", styled like every section label. */
export function PageEyebrow({ title }: { title: string }) {
  return <SectionLabel>{`AURE AGENCY / ${title}`}</SectionLabel>
}
