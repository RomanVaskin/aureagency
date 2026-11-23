'use server'

import { randomUUID } from 'node:crypto'
import { mkdir, rename, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'

type ContactResult = { status: 'idle' | 'error' | 'success'; message: string }

function readField(form: FormData, field: string) {
  const value = form.get(field)
  return typeof value === 'string' ? value.trim() : ''
}

export async function submitContact(_previous: ContactResult, form: FormData): Promise<ContactResult> {
  const name = readField(form, 'name')
  const contact = readField(form, 'contact')
  const message = readField(form, 'message')

  if (!contact || contact.length > 160 || name.length > 100 || message.length > 1500) {
    return { status: 'error', message: 'Укажите контакт для ответа и проверьте длину полей.' }
  }

  const success = { status: 'success', message: 'Спасибо! Мы получили вашу заявку.' } as const
  if (readField(form, 'website')) return success

  const directory = process.env.CONTACT_REQUESTS_DIR || path.join(process.cwd(), '.contact-requests')
  const file = path.join(directory, `${randomUUID()}.json`)
  const temporary = `${file}.tmp`

  try {
    await mkdir(directory, { recursive: true, mode: 0o700 })
    await writeFile(temporary, JSON.stringify({ receivedAt: new Date().toISOString(), name, contact, message }) + '\n', {
      mode: 0o600,
      flag: 'wx',
    })
    await rename(temporary, file)
    return success
  } catch {
    await unlink(temporary).catch(() => {})
    return { status: 'error', message: 'Не удалось отправить заявку. Повторите попытку или свяжитесь с нами по телефону или в мессенджере.' }
  }
}
