/**
 * Pill shape shared by the site's CTAs. Fixed height + min-width keep buttons the
 * same size regardless of the word: 160×50 mobile, 170×54 tablet, 180×56 desktop.
 */
export const ctaButtonBase =
  'inline-flex h-[50px] min-w-[160px] items-center justify-center rounded-full px-9 text-[15px] font-normal leading-none tracking-ui transition-opacity md:h-[54px] md:min-w-[170px] md:px-10 md:text-base lg:h-14 lg:min-w-[180px]'

/** Black pill link shared by the centered home-page CTAs (Услуги, Кейсы, Контакты). */
export const ctaButtonClass = `${ctaButtonBase} bg-foreground text-background hover:opacity-90`

/** Outlined counterpart of ctaButtonClass: white fill, thin black border. */
export const ctaButtonOutlineClass = `${ctaButtonBase} border border-foreground bg-background text-foreground hover:opacity-70`
