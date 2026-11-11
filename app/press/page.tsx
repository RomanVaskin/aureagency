import type { Metadata } from 'next'
import { ComingSoon } from '@/components/coming-soon'

export const metadata: Metadata = { title: 'Пресса — AURE', alternates: { canonical: '/press' } }

export default function Page() {
  return <ComingSoon title="Пресса" />
}
