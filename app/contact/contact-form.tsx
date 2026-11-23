'use client'

import { useActionState, useState } from 'react'
import { submitContact } from './actions'

const fieldClass = 'mt-1.5 w-full rounded-sm border border-white/40 bg-white/5 px-3 py-2 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

export function ContactForm() {
  const [result, submit, pending] = useActionState(submitContact, { status: 'idle', message: '' })
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section aria-labelledby="contact-form-title">
      <h2 id="contact-form-title" className="text-[22px] font-light">Оставить заявку</h2>
      {result.status === 'success' ? (
        <p role="status" className="mt-4 text-[15px]">{result.message}</p>
      ) : (
        <form action={submit} className="mt-4 space-y-3">
          <label className="block text-sm">
            Имя
            <input name="name" autoComplete="name" maxLength={100} className={fieldClass} value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label className="block text-sm">
            Телефон, email или Telegram
            <input name="contact" required maxLength={160} className={fieldClass} value={contact} onChange={(event) => setContact(event.target.value)} />
          </label>
          <label className="block text-sm">
            О проекте <span className="text-muted-foreground">(необязательно)</span>
            <textarea name="message" rows={2} maxLength={1500} className={fieldClass} value={message} onChange={(event) => setMessage(event.target.value)} />
          </label>
          <div hidden>
            <input name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <p className="text-sm text-muted-foreground">Свяжемся с вами по указанному контакту.</p>
          {result.status === 'error' && <p role="alert" className="text-sm">{result.message}</p>}
          <button type="submit" disabled={pending} className="rounded-sm bg-white px-5 py-2 text-sm text-[#48423b] hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-60">
            {pending ? 'Отправляем…' : 'Отправить заявку'}
          </button>
        </form>
      )}
    </section>
  )
}
