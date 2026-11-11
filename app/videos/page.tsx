import type { Metadata } from 'next'
import { ComingSoon } from '@/components/coming-soon'

export const metadata: Metadata = { title: 'Видео — AURE', alternates: { canonical: '/videos' } }

export default function Page() {
  return <ComingSoon title="Видео" />
}
