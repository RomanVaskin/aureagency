import type { Metadata } from 'next'
import { ComingSoon } from '@/components/coming-soon'

export const metadata: Metadata = { title: 'Креатив — AURE', alternates: { canonical: '/creative' } }

export default function Page() {
  return <ComingSoon title="Креатив" />
}
