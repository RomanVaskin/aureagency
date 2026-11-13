import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { ServicesShowcase } from '@/components/services-showcase'
import { Audience } from '@/components/audience'
import { Services } from '@/components/services'
import { MarketingSystem } from '@/components/system'
import { ContactsCta } from '@/components/contacts-cta'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="font-primary tracking-body">
        <Hero />
        <About />
        <ServicesShowcase />
        <Audience />
        <Services />
        <MarketingSystem />
        <ContactsCta />
      </main>
      <SiteFooter />
    </>
  )
}
