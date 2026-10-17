'use client'

import Image from 'next/image'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { LOLI_LIMIT, LOLI_OPEN_EVENT } from '@/lib/loli-config'
import { contactDetails } from '@/lib/site'
import { lockBodyScroll, unlockBodyScroll } from '@/lib/body-scroll-lock'
import type { Locale } from '@/lib/i18n'

type ChatRole = 'assistant' | 'user'

type ChatMessage = {
  role: ChatRole
  content: string
}

type UsageState = {
  questionsUsed: number
  questionsRemaining: number
  limit: number
  locked: boolean
}

const assistantCopy = {
  en: {
    intro: `Hi, I'm Loli. I can answer up to ${LOLI_LIMIT} quick questions from this device about Winter Arc Myanmar's services, process, or how to get started.`,
    ready: 'AI concierge. Available in one tap.',
    exhausted: `This device has used all ${LOLI_LIMIT} free questions.`,
    remaining: (remaining: number, limit: number) => `${remaining} of ${limit} free questions remaining.`,
    thinking: 'Loli is thinking...',
    genericError: 'Loli could not answer right now. Please contact us directly.',
    limitReached: `This device reached the ${LOLI_LIMIT}-question limit. Please contact us for more help.`,
    requestFailed: 'Loli could not answer that request.',
    networkError: 'I could not reach the server right now. Please try again soon or contact the team directly.',
    unavailable: 'The assistant is temporarily unavailable.',
    open: 'Open Loli AI assistant',
    ask: 'Ask Loli',
    concierge: 'AI concierge',
    closeAssistant: 'Close Loli assistant',
    title: 'Loli AI Concierge',
    usage: (remaining: number, limit: number) => `${remaining}/${limit} free questions left on this device`,
    close: 'Close',
    privacyNotice: "AI-generated answers may be inaccurate; confirm project details with our team. Sending shares your question and recent conversation with APIFree.ai and the configured AI provider. Please don't include personal, confidential or sensitive information.",
    privacyDetails: 'AI privacy details',
    consent: 'I choose to use AI chat and agree to sending my messages to these providers and using the 365-day usage-limit cookie. I can uncheck this to stop future sending or contact the team instead.',
    cookieDetails: 'Cookie details',
    questionLabel: 'Ask Loli a question',
    blockedPlaceholder: `This device reached the ${LOLI_LIMIT}-question limit. Contact us for more help.`,
    placeholder: 'Ask about services, timelines, or how to get started...',
    sending: 'Sending...',
    send: 'Send',
    limitNotice: `${LOLI_LIMIT}-question device limit. For more, contact us directly.`,
    email: 'Email',
    suggestions: ['What can Winter Arc Myanmar help with?', 'How do I start a project here?', `What happens after the ${LOLI_LIMIT}-question limit?`],
  },
  my: {
    intro: `မင်္ဂလာပါ၊ ကျွန်မက Loli ပါ။ ဒီစက်ကနေ Winter Arc Myanmar ရဲ့ ဝန်ဆောင်မှုတွေ၊ လုပ်ငန်းစဉ်တွေနဲ့ ဘယ်လိုစတင်ရမလဲဆိုတာနဲ့ ပတ်သက်ပြီး မေးခွန်း ${LOLI_LIMIT} ခုအထိ မေးနိုင်ပါတယ်။ ကျွန်မ အတိုချုံး ဖြေပေးနိုင်ပါတယ်။`,
    ready: 'AI အကူအညီပေးသူ။ တစ်ချက်နှိပ်ရုံဖြင့် အသုံးပြုနိုင်ပါသည်။',
    exhausted: `ဒီစက်မှ အခမဲ့မေးခွန်း ${LOLI_LIMIT} ခုလုံးကို အသုံးပြုပြီးပါပြီ။`,
    remaining: (remaining: number, limit: number) => `အခမဲ့မေးခွန်း ${limit} ခုအနက် ${remaining} ခု ကျန်ရှိပါသည်။`,
    thinking: 'Loli က အဖြေစဉ်းစားနေပါသည်...',
    genericError: 'လောလောဆယ် Loli မဖြေပေးနိုင်ပါ။ ကျွန်ုပ်တို့ထံ တိုက်ရိုက်ဆက်သွယ်ပါ။',
    limitReached: `ဒီစက်မှ မေးမြန်းနိုင်သည့် မေးခွန်း ${LOLI_LIMIT} ခု ပြည့်သွားပါပြီ။ နောက်ထပ်အကူအညီအတွက် ဆက်သွယ်ပါ။`,
    requestFailed: 'ဒီမေးခွန်းကို Loli မဖြေပေးနိုင်ခဲ့ပါ။',
    networkError: 'လောလောဆယ် ဆာဗာသို့ ချိတ်ဆက်မရပါ။ ခဏကြာလျှင် ပြန်ကြိုးစားပါ သို့မဟုတ် အဖွဲ့ထံ တိုက်ရိုက်ဆက်သွယ်ပါ။',
    unavailable: 'အကူအညီပေးစနစ်ကို ယာယီအသုံးမပြုနိုင်ပါ။',
    open: 'Loli AI အကူအညီပေးစနစ်ကို ဖွင့်ရန်',
    ask: 'Loli ကို မေးပါ',
    concierge: 'AI အကူအညီပေးသူ',
    closeAssistant: 'Loli အကူအညီပေးစနစ်ကို ပိတ်ရန်',
    title: 'Loli AI အကူအညီပေးသူ',
    usage: (remaining: number, limit: number) => `ဒီစက်တွင် အခမဲ့မေးခွန်း ${limit} ခုအနက် ${remaining} ခု ကျန်ရှိပါသည်`,
    close: 'ပိတ်ရန်',
    privacyNotice: 'AI က ဖန်တီးသည့်အဖြေများ မှားယွင်းနိုင်ပါသည်။ ပရောဂျက်အသေးစိတ်ကို ကျွန်ုပ်တို့အဖွဲ့နှင့် အတည်ပြုပါ။ စာပို့သည့်အခါ သင့်မေးခွန်းနှင့် လတ်တလောစကားဝိုင်းကို APIFree.ai နှင့် သတ်မှတ်ထားသော AI ဝန်ဆောင်မှုပေးသူထံ မျှဝေမည်ဖြစ်ပါသည်။ ကိုယ်ရေးကိုယ်တာ၊ လျှို့ဝှက် သို့မဟုတ် အထိခိုက်မခံသည့် အချက်အလက်များ မထည့်ပါနှင့်။',
    privacyDetails: 'AI ဆိုင်ရာ ကိုယ်ရေးအချက်အလက်အသေးစိတ်',
    consent: 'ကျွန်ုပ်သည် AI စကားပြောစနစ်ကို အသုံးပြုရန် ရွေးချယ်ပြီး ကျွန်ုပ်၏စာများကို ဤဝန်ဆောင်မှုပေးသူများထံ ပေးပို့ခြင်းနှင့် အသုံးပြုမှုကို ကန့်သတ်ရန် ၃၆၅ ရက်သက်တမ်းရှိ ကွတ်ကီးကို အသုံးပြုခြင်းတို့ကို သဘောတူပါသည်။ နောက်ထပ်စာပို့ခြင်းကို ရပ်တန့်ရန် ဤအမှန်ခြစ်ကို ဖြုတ်နိုင်ပါသည်။ သို့မဟုတ် အဖွဲ့ထံ တိုက်ရိုက်ဆက်သွယ်နိုင်ပါသည်။',
    cookieDetails: 'ကွတ်ကီးဆိုင်ရာ အသေးစိတ်',
    questionLabel: 'Loli ကို မေးခွန်းမေးရန်',
    blockedPlaceholder: `ဒီစက်မှ မေးမြန်းနိုင်သည့် မေးခွန်း ${LOLI_LIMIT} ခု ပြည့်သွားပါပြီ။ နောက်ထပ်အကူအညီအတွက် ဆက်သွယ်ပါ။`,
    placeholder: 'ဝန်ဆောင်မှုများ၊ အချိန်ဇယား သို့မဟုတ် စတင်ဆောင်ရွက်ပုံတို့ကို မေးပါ...',
    sending: 'ပို့နေသည်...',
    send: 'ပို့ရန်',
    limitNotice: `စက်တစ်လုံးလျှင် မေးခွန်း ${LOLI_LIMIT} ခုအထိသာ မေးမြန်းနိုင်ပါသည်။ နောက်ထပ်အကူအညီအတွက် တိုက်ရိုက်ဆက်သွယ်ပါ။`,
    email: 'အီးမေးလ်',
    suggestions: ['Winter Arc Myanmar က ဘာတွေ ကူညီပေးနိုင်ပါသလဲ။', 'ပရောဂျက်တစ်ခုကို ဘယ်လိုစတင်ရမလဲ။', `မေးခွန်း ${LOLI_LIMIT} ခု ပြည့်ပြီးနောက် ဘာလုပ်ရမလဲ။`],
  },
}

const fallbackUsage: UsageState = {
  questionsUsed: 0,
  questionsRemaining: LOLI_LIMIT,
  limit: LOLI_LIMIT,
  locked: false,
}

export default function LoliAssistant({ locale = 'en' }: { locale?: Locale }) {
  const copy = assistantCopy[locale]
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: 'assistant', content: copy.intro }])
  const [input, setInput] = useState('')
  const [usage, setUsage] = useState<UsageState>(fallbackUsage)
  const [isLoading, setIsLoading] = useState(false)
  const [privacyAcknowledged, setPrivacyAcknowledged] = useState(false)
  const [statusMessage, setStatusMessage] = useState(
    copy.ready
  )
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const dialogRef = useRef<HTMLElement | null>(null)
  const launcherRef = useRef<HTMLButtonElement | null>(null)

  const openAssistant = (question?: string) => {
    setIsOpen(true)

    if (question) {
      setInput(question)
    }

    if (window.location.hash !== '#loli') {
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}${window.location.search}#loli`
      )
    }
  }

  const closeAssistant = () => {
    setIsOpen(false)

    if (window.location.hash === '#loli') {
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}${window.location.search}`
      )
    }
  }

  useEffect(() => {
    const loadUsage = async () => {
      try {
        const response = await fetch('/api/loli', {
          cache: 'no-store',
        })
        const data = (await response.json()) as {
          usage?: UsageState
        }

        if (data.usage) {
          setUsage(data.usage)
          setStatusMessage(
            data.usage.locked
              ? copy.exhausted
              : copy.remaining(data.usage.questionsRemaining, data.usage.limit)
          )
          return
        }
      } catch {
        // Keep the launcher usable even if the warm-up request fails.
      }

      setStatusMessage(copy.ready)
    }

    void loadUsage()
  }, [copy])

  useEffect(() => {
    const handleOpen = () => {
      openAssistant()
    }

    const handleHashChange = () => {
      setIsOpen(window.location.hash === '#loli')
    }

    if (window.location.hash === '#loli') {
      setIsOpen(true)
    }

    window.addEventListener(LOLI_OPEN_EVENT, handleOpen)
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener(LOLI_OPEN_EVENT, handleOpen)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  }, [messages, isLoading, isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const launcher = launcherRef.current
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAssistant()
      }
      if (event.key === 'Tab') {
        const elements = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not(:disabled), textarea:not(:disabled), input:not(:disabled), [tabindex="0"]'
        )
        const first = elements?.[0]
        const last = elements?.[elements.length - 1]
        if (!first || !last) return
        if (event.shiftKey && (document.activeElement === first || !dialogRef.current?.contains(document.activeElement))) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && (document.activeElement === last || !dialogRef.current?.contains(document.activeElement))) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    lockBodyScroll()
    window.addEventListener('keydown', handleEscape)

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus()
    }, 0)

    return () => {
      window.removeEventListener('keydown', handleEscape)
      window.clearTimeout(focusTimer)
      unlockBodyScroll()
      launcher?.focus()
    }
  }, [isOpen])

  const handleSuggestion = (question: string) => {
    openAssistant(question)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const question = input.trim()

    if (!question || isLoading || usage.locked || !privacyAcknowledged) {
      return
    }

    const nextMessages = [
      ...messages,
      { role: 'user', content: question } satisfies ChatMessage,
    ]

    setMessages(nextMessages)
    setInput('')
    setIsLoading(true)
    setStatusMessage(copy.thinking)

    try {
      const response = await fetch('/api/loli', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: nextMessages.slice(-6),
          privacyAcknowledged,
          locale,
        }),
      })

      const data = (await response.json()) as {
        answer?: string
        message?: string
        usage?: UsageState
      }

      if (data.usage) {
        setUsage(data.usage)
      }

      if (!response.ok) {
        const fallbackReply =
          (locale === 'en' ? data.message : undefined) || copy.genericError

        setMessages((current) => [
          ...current,
          {
            role: 'assistant',
            content: fallbackReply,
          },
        ])

        setStatusMessage(
          data.usage?.locked
            ? copy.limitReached
            : copy.requestFailed
        )
        return
      }

      const assistantReply = data.answer?.trim()

      if (assistantReply) {
        setMessages((current) => [
          ...current,
          {
            role: 'assistant',
            content: assistantReply,
          },
        ])
      }

      const remainingQuestions =
        data.usage?.questionsRemaining ?? usage.questionsRemaining
      setStatusMessage(
        remainingQuestions === 0
          ? copy.limitReached
          : copy.remaining(remainingQuestions, data.usage?.limit ?? usage.limit)
      )
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: copy.networkError,
        },
      ])
      setStatusMessage(copy.unavailable)
    } finally {
      setIsLoading(false)
    }
  }

  const isBlocked = usage.locked

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={() => openAssistant()}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-left text-[var(--color-ink)] shadow-[var(--shadow-elevated)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(37,99,235,0.12)] sm:bottom-6 sm:right-6"
        aria-label={copy.open}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[var(--color-bg-alt)]">
          <Image
            src="/images/portfolio/loli-logo.png"
            alt=""
            fill
            sizes="40px"
            className="object-cover"
          />
        </span>

        <span className="flex min-w-0 flex-col">
          <span className="text-sm font-bold tracking-[-0.02em]">{copy.ask}</span>
          <span className="text-xs text-[var(--color-muted)]">{copy.concierge}</span>
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label={copy.closeAssistant}
            onClick={closeAssistant}
            className="absolute inset-0 h-full w-full bg-[rgba(15,23,42,0.44)] backdrop-blur-[2px]"
          />

          <div className="relative z-10 flex h-full items-end justify-center sm:items-center sm:p-4">
            <section
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="loli-dialog-title"
              aria-describedby="loli-dialog-description"
              className="relative flex h-[100dvh] w-full max-w-3xl flex-col overflow-hidden border border-[var(--color-line)] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:h-[min(92vh,56rem)] sm:rounded-xl"
            >
              <header className="flex items-start justify-between gap-3 border-b border-[var(--color-line)] px-4 py-3.5 sm:px-5 sm:py-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-[var(--color-bg-alt)]">
                    <Image
                      src="/images/portfolio/loli-logo.png"
                      alt=""
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </span>

                  <div className="min-w-0">
                    <p
                      id="loli-dialog-title"
                      className="truncate text-sm font-bold tracking-[0.06em] text-[var(--color-brand-deep)]"
                    >
                      {copy.title}
                    </p>
                    <p
                      id="loli-dialog-description"
                      className="truncate text-xs text-[var(--color-muted)]"
                    >
                      {copy.usage(usage.questionsRemaining, usage.limit)}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeAssistant}
                  className="rounded-lg bg-[var(--color-ink)] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(37,99,235,0.1)]"
                >
                  {copy.close}
                </button>
              </header>

              <div
                className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-5"
                role="log"
                aria-live="polite"
                aria-relevant="additions text"
              >
                <div className="rounded-lg border border-[rgba(37,99,235,0.12)] bg-[var(--color-brand-soft)] px-3.5 py-2.5 text-xs leading-5 text-[var(--color-brand-deep)]">
                  {statusMessage}
                </div>

                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}-${message.content.slice(0, 16)}`}
                    className={`max-w-[90%] rounded-xl px-3.5 py-2.5 text-sm leading-6 shadow-[var(--shadow-card)] sm:max-w-[82%] ${
                      message.role === 'assistant'
                        ? 'mr-auto bg-[var(--color-bg-alt)] text-[var(--color-ink)]'
                        : 'ml-auto bg-[var(--color-brand)] text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                ))}

                {isLoading && (
                  <div className="mr-auto inline-flex rounded-xl bg-[var(--color-bg-alt)] px-3.5 py-2.5 text-sm font-medium text-[var(--color-muted)] shadow-[var(--shadow-card)]">
                    {copy.thinking}
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              <footer className="border-t border-[var(--color-line)] bg-[var(--color-bg-alt)]/80 px-3.5 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] backdrop-blur-sm sm:px-5 sm:pb-4">
                <div id="loli-privacy-notice" className="mb-3 text-xs leading-5 text-[var(--color-muted)]">
                  {copy.privacyNotice}{' '}
                  <a href={`/${locale}/privacy#ai-assistant`} className="font-semibold text-[var(--color-brand-deep)] underline underline-offset-2">{copy.privacyDetails}</a>
                </div>
                <label className="mb-3 flex min-h-11 cursor-pointer items-start gap-3 text-xs leading-5 text-[var(--color-ink)]">
                  <input type="checkbox" checked={privacyAcknowledged} onChange={(event) => setPrivacyAcknowledged(event.target.checked)} disabled={isLoading} className="mt-1 h-4 w-4 shrink-0 accent-blue-600" />
                  <span>{copy.consent}{' '}<a href={`/${locale}/cookies`} className="underline underline-offset-2">{copy.cookieDetails}</a>{locale === 'my' ? '။' : '.'}</span>
                </label>
                <div className="mb-2.5 flex gap-2 overflow-x-auto pb-1">
                  {copy.suggestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => handleSuggestion(question)}
                      className="shrink-0 rounded-lg border border-[var(--color-line)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-ink)] shadow-[var(--shadow-card)] transition hover:border-[rgba(37,99,235,0.16)] hover:bg-[var(--color-brand-soft)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(37,99,235,0.1)]"
                    >
                      {question}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <label htmlFor="loli-question" className="sr-only">
                    {copy.questionLabel}
                  </label>

                  <div className="flex items-end gap-2">
                    <textarea
                      ref={inputRef}
                      id="loli-question"
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                      placeholder={
                        isBlocked
                          ? copy.blockedPlaceholder
                          : copy.placeholder
                      }
                      disabled={isBlocked || isLoading}
                      rows={2}
                      maxLength={1200}
                      aria-describedby="loli-privacy-notice"
                      className="min-h-[5rem] flex-1 resize-none rounded-xl border border-[var(--color-line)] bg-white px-3 py-2.5 text-sm text-[var(--color-ink)] shadow-[var(--shadow-card)] outline-none transition placeholder:text-slate-400 focus:border-[rgba(37,99,235,0.3)] focus:ring-4 focus:ring-[rgba(37,99,235,0.1)] disabled:cursor-not-allowed disabled:bg-slate-50"
                    />

                    <button
                      type="submit"
                      disabled={!input.trim() || isBlocked || isLoading || !privacyAcknowledged}
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-[var(--color-brand)] px-4 text-xs font-semibold text-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-deep)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(37,99,235,0.12)] disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
                    >
                      {isLoading ? copy.sending : copy.send}
                    </button>
                  </div>

                  <div className="mt-2 flex flex-col gap-2 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
                    <p>
                      {copy.limitNotice}
                    </p>
                    <div className="flex items-center gap-2">
                      <a
                        href={contactDetails.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-[rgba(37,99,235,0.12)] bg-[var(--color-brand-soft)] px-2.5 py-1 font-semibold text-[var(--color-brand-deep)]"
                      >
                        WhatsApp
                      </a>
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="rounded-lg border border-[var(--color-line)] bg-white px-2.5 py-1 font-semibold text-[var(--color-ink)]"
                      >
                        {copy.email}
                      </a>
                    </div>
                  </div>
                </form>
              </footer>
            </section>
          </div>
        </div>
      )}
    </>
  )
}
