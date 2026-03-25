'use client'

import Image from 'next/image'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { LOLI_LIMIT, LOLI_OPEN_EVENT } from '@/lib/loli-config'
import { contactDetails } from '@/lib/site'

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

const introMessage: ChatMessage = {
  role: 'assistant',
  content:
    `Hi, I'm Loli. I can answer up to ${LOLI_LIMIT} quick questions from this device about Winter Arc Myanmar's services, process, or how to get started.`,
}

const fallbackUsage: UsageState = {
  questionsUsed: 0,
  questionsRemaining: LOLI_LIMIT,
  limit: LOLI_LIMIT,
  locked: false,
}

const suggestedQuestions = [
  'What can Winter Arc Myanmar help with?',
  'How do I start a project here?',
  `What happens after the ${LOLI_LIMIT}-question limit?`,
]

export default function LoliAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([introMessage])
  const [input, setInput] = useState('')
  const [usage, setUsage] = useState<UsageState>(fallbackUsage)
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState(
    'Secure AI concierge. Available in one tap.'
  )
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

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
              ? `This device has used all ${LOLI_LIMIT} free questions.`
              : `${data.usage.questionsRemaining} of ${data.usage.limit} free questions remaining.`
          )
          return
        }
      } catch {
        // Keep the launcher usable even if the warm-up request fails.
      }

      setStatusMessage('Secure AI concierge. Available in one tap.')
    }

    void loadUsage()
  }, [])

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true)
    }

    window.addEventListener(LOLI_OPEN_EVENT, handleOpen)

    return () => {
      window.removeEventListener(LOLI_OPEN_EVENT, handleOpen)
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

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus()
    }, 0)

    return () => {
      window.removeEventListener('keydown', handleEscape)
      window.clearTimeout(focusTimer)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSuggestion = (question: string) => {
    setIsOpen(true)
    setInput(question)
    inputRef.current?.focus()
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const question = input.trim()

    if (!question || isLoading || usage.locked) {
      return
    }

    const nextMessages = [
      ...messages,
      { role: 'user', content: question } satisfies ChatMessage,
    ]

    setMessages(nextMessages)
    setInput('')
    setIsLoading(true)
    setStatusMessage('Loli is thinking...')

    try {
      const response = await fetch('/api/loli', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: nextMessages.slice(-6),
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
          data.message ||
          'Loli could not answer right now. Please contact us directly.'

        setMessages((current) => [
          ...current,
          {
            role: 'assistant',
            content: fallbackReply,
          },
        ])

        setStatusMessage(
          data.usage?.locked
            ? `This device reached the ${LOLI_LIMIT}-question limit. Please contact us for more help.`
            : 'Loli could not answer that request.'
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
          ? `This device has used all ${LOLI_LIMIT} free questions. Please contact us for more help.`
          : `${remainingQuestions} free question${remainingQuestions === 1 ? '' : 's'} remaining.`
      )
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content:
            'I could not reach the server right now. Please try again soon or contact the team directly.',
        },
      ])
      setStatusMessage('The assistant is temporarily unavailable.')
    } finally {
      setIsLoading(false)
    }
  }

  const isBlocked = usage.locked

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex max-w-[16rem] items-center gap-3 rounded-full border border-white/80 bg-white/92 px-3 py-2.5 text-left text-[var(--color-ink)] shadow-[0_24px_42px_rgba(15,23,42,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(15,118,110,0.16)] md:bottom-7 md:right-7"
        aria-label="Open Loli AI assistant"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[rgba(18,26,40,0.08)] bg-[linear-gradient(180deg,#f8f5ee,#ece7db)]">
          <Image
            src="/images/portfolio/loli-logo.png"
            alt=""
            fill
            sizes="44px"
            className="object-cover"
          />
        </span>

        <span className="flex min-w-0 flex-col">
          <span className="text-sm font-semibold tracking-[-0.02em]">
            Ask Loli
          </span>
          <span className="text-xs text-[var(--color-muted)]">
            Winter Arc AI concierge
          </span>
        </span>

        <span className="hidden rounded-full bg-[var(--color-brand-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--color-brand-deep)] sm:inline-flex">
          {LOLI_LIMIT} free questions
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close Loli assistant"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 h-full w-full bg-[rgba(16,24,39,0.38)] backdrop-blur-[2px]"
          />

          <div className="relative flex h-full items-end justify-center p-3 sm:items-center sm:p-6">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="loli-dialog-title"
              aria-describedby="loli-dialog-description"
              className="relative z-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,245,239,0.96))] shadow-[0_40px_100px_rgba(15,23,42,0.22)] backdrop-blur-2xl sm:max-h-[min(88vh,52rem)]"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[rgba(18,26,40,0.08)] px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[rgba(18,26,40,0.08)] bg-[linear-gradient(180deg,#f8f5ee,#ece7db)]">
                    <Image
                      src="/images/portfolio/loli-logo.png"
                      alt=""
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>

                  <div>
                    <p
                      id="loli-dialog-title"
                      className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-deep)]"
                    >
                      Loli AI Concierge
                    </p>
                    <p
                      id="loli-dialog-description"
                      className="mt-1 max-w-2xl text-sm leading-6 text-[var(--color-muted)]"
                    >
                      A calm, server-backed assistant for quick questions about
                      Winter Arc Myanmar, with a {LOLI_LIMIT}-question limit per device.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden rounded-full border border-[rgba(15,118,110,0.12)] bg-[var(--color-brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-brand-deep)] sm:inline-flex">
                    {usage.questionsRemaining}/{usage.limit} left
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full border border-[rgba(18,26,40,0.08)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-[rgba(15,118,110,0.04)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(15,118,110,0.12)]"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                <aside className="border-b border-[rgba(18,26,40,0.08)] bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(21,30,47,0.94))] px-5 py-5 text-white lg:border-b-0 lg:border-r lg:px-6">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
                    Premium AI support
                  </span>

                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                    Fast answers, clear next steps, and a human handoff when you
                    need one.
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                    Loli is built for visitors who want a quick, polished way to
                    understand Winter Arc Myanmar&apos;s services, process, and
                    fit before reaching out directly.
                  </p>

                  <div className="mt-5 rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-100">
                    {statusMessage}
                  </div>

                  <div className="mt-6 grid gap-3">
                    {[
                      'Service overviews, project fit, and next-step guidance.',
                      'Secure by design. Chat stays on our server.',
                      'Need more? Continue with WhatsApp or email.',
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-100"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <a
                      href={contactDetails.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
                    >
                      WhatsApp the Team
                    </a>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      Email the Team
                    </a>
                  </div>
                </aside>

                <div className="flex min-h-0 flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,245,239,0.98))]">
                  <div
                    className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6"
                    role="log"
                    aria-live="polite"
                    aria-relevant="additions text"
                  >
                    {messages.map((message, index) => (
                      <div
                        key={`${message.role}-${index}-${message.content.slice(0, 16)}`}
                        className={`max-w-[90%] rounded-[1.4rem] px-4 py-3 text-sm leading-7 shadow-[0_8px_18px_rgba(15,23,42,0.05)] sm:text-[0.95rem] ${
                          message.role === 'assistant'
                            ? 'mr-auto bg-white text-[var(--color-ink)]'
                            : 'ml-auto bg-[var(--color-brand)] text-white'
                        }`}
                      >
                        {message.content}
                      </div>
                    ))}

                    {isLoading && (
                      <div className="mr-auto inline-flex rounded-[1.35rem] bg-white px-4 py-3 text-sm font-medium text-[var(--color-muted)] shadow-[0_8px_18px_rgba(15,23,42,0.05)]">
                        Loli is thinking...
                      </div>
                    )}

                    <div ref={bottomRef} />
                  </div>

                  <div className="border-t border-[rgba(18,26,40,0.08)] bg-white/80 px-5 py-4 backdrop-blur-sm sm:px-6">
                    <div className="grid gap-2 sm:grid-cols-3">
                      {suggestedQuestions.map((question) => (
                        <button
                          key={question}
                          type="button"
                          onClick={() => handleSuggestion(question)}
                          className="rounded-[1.2rem] border border-[rgba(18,26,40,0.08)] bg-white px-3 py-2 text-left text-sm font-medium leading-6 text-[var(--color-ink)] shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-[rgba(15,118,110,0.2)] hover:bg-[rgba(15,118,110,0.04)]"
                        >
                          {question}
                        </button>
                      ))}
                    </div>

                    <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                      <label htmlFor="loli-question" className="sr-only">
                        Ask Loli a question
                      </label>
                      <textarea
                        ref={inputRef}
                        id="loli-question"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder={
                          isBlocked
                            ? `This device reached the ${LOLI_LIMIT}-question limit. Contact us for more help.`
                            : 'Ask about services, timelines, or how to get started...'
                        }
                        disabled={isBlocked || isLoading}
                        rows={4}
                        maxLength={1200}
                        className="w-full rounded-[1.4rem] border border-[rgba(18,26,40,0.08)] bg-white px-4 py-3 text-[var(--color-ink)] shadow-[0_8px_18px_rgba(15,23,42,0.04)] outline-none transition placeholder:text-slate-400 focus:border-[rgba(15,118,110,0.35)] focus:ring-4 focus:ring-[rgba(15,118,110,0.12)] disabled:cursor-not-allowed disabled:bg-slate-50"
                      />

                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm leading-6 text-[var(--color-muted)]">
                          {LOLI_LIMIT}-question device limit. For more, contact us
                          directly.
                        </p>

                        <button
                          type="submit"
                          disabled={!input.trim() || isBlocked || isLoading}
                          className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(15,118,110,0.2)] transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-deep)] disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
                        >
                          {isLoading ? 'Sending...' : 'Ask Loli'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
