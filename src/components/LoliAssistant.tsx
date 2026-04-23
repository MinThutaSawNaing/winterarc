'use client'

import Image from 'next/image'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { LOLI_LIMIT, LOLI_OPEN_EVENT } from '@/lib/loli-config'
import { contactDetails } from '@/lib/site'
import { lockBodyScroll, unlockBodyScroll } from '@/lib/body-scroll-lock'

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

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAssistant()
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
    }
  }, [isOpen])

  const handleSuggestion = (question: string) => {
    openAssistant(question)
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
        onClick={() => openAssistant()}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-full border border-white/80 bg-white/95 px-4 py-3 text-left text-[var(--color-ink)] shadow-[0_18px_36px_rgba(15,23,42,0.16)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(15,118,110,0.16)] sm:bottom-6 sm:right-6"
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
          <span className="text-sm font-semibold tracking-[-0.02em]">Ask Loli</span>
          <span className="text-xs text-[var(--color-muted)]">AI concierge</span>
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close Loli assistant"
            onClick={closeAssistant}
            className="absolute inset-0 h-full w-full bg-[rgba(16,24,39,0.44)] backdrop-blur-[2px]"
          />

          <div className="relative z-10 flex h-full items-end justify-center sm:items-center sm:p-4">
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="loli-dialog-title"
              aria-describedby="loli-dialog-description"
              className="relative flex h-[100dvh] w-full max-w-3xl flex-col overflow-hidden border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.985),rgba(247,245,239,0.98))] shadow-[0_30px_90px_rgba(15,23,42,0.22)] sm:h-[min(92vh,56rem)] sm:rounded-[1.75rem]"
            >
              <header className="flex items-start justify-between gap-3 border-b border-[rgba(18,26,40,0.08)] px-4 py-3.5 sm:px-5 sm:py-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[rgba(18,26,40,0.08)] bg-[linear-gradient(180deg,#f8f5ee,#ece7db)]">
                    <Image
                      src="/images/portfolio/loli-logo.png"
                      alt=""
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>

                  <div className="min-w-0">
                    <p
                      id="loli-dialog-title"
                      className="truncate text-sm font-semibold tracking-[0.08em] text-[var(--color-brand-deep)]"
                    >
                      Loli AI Concierge
                    </p>
                    <p
                      id="loli-dialog-description"
                      className="truncate text-xs text-[var(--color-muted)]"
                    >
                      {usage.questionsRemaining}/{usage.limit} free questions left on this device
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeAssistant}
                  className="rounded-full border border-[rgba(18,26,40,0.08)] bg-[var(--color-ink)] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#1f2b3d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(15,118,110,0.12)]"
                >
                  Close
                </button>
              </header>

              <div
                className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-5"
                role="log"
                aria-live="polite"
                aria-relevant="additions text"
              >
                <div className="rounded-2xl border border-[rgba(15,118,110,0.15)] bg-[var(--color-brand-soft)] px-3.5 py-2.5 text-xs leading-5 text-[var(--color-brand-deep)]">
                  {statusMessage}
                </div>

                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}-${message.content.slice(0, 16)}`}
                    className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 shadow-[0_8px_18px_rgba(15,23,42,0.05)] sm:max-w-[82%] ${
                      message.role === 'assistant'
                        ? 'mr-auto bg-white text-[var(--color-ink)]'
                        : 'ml-auto bg-[var(--color-brand)] text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                ))}

                {isLoading && (
                  <div className="mr-auto inline-flex rounded-2xl bg-white px-3.5 py-2.5 text-sm font-medium text-[var(--color-muted)] shadow-[0_8px_18px_rgba(15,23,42,0.05)]">
                    Loli is thinking...
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              <footer className="border-t border-[rgba(18,26,40,0.08)] bg-white/92 px-3.5 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] backdrop-blur-sm sm:px-5 sm:pb-4">
                <div className="mb-2.5 flex gap-2 overflow-x-auto pb-1">
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => handleSuggestion(question)}
                      className="shrink-0 rounded-full border border-[rgba(18,26,40,0.08)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-ink)] shadow-[0_6px_14px_rgba(15,23,42,0.04)] transition hover:border-[rgba(15,118,110,0.2)] hover:bg-[rgba(15,118,110,0.04)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(15,118,110,0.12)]"
                    >
                      {question}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <label htmlFor="loli-question" className="sr-only">
                    Ask Loli a question
                  </label>

                  <div className="flex items-end gap-2">
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
                      rows={2}
                      maxLength={1200}
                      className="min-h-[5rem] flex-1 resize-none rounded-2xl border border-[rgba(18,26,40,0.08)] bg-white px-3 py-2.5 text-sm text-[var(--color-ink)] shadow-[0_8px_18px_rgba(15,23,42,0.04)] outline-none transition placeholder:text-slate-400 focus:border-[rgba(15,118,110,0.35)] focus:ring-4 focus:ring-[rgba(15,118,110,0.12)] disabled:cursor-not-allowed disabled:bg-slate-50"
                    />

                    <button
                      type="submit"
                      disabled={!input.trim() || isBlocked || isLoading}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--color-brand)] px-4 text-xs font-semibold text-white shadow-[0_12px_24px_rgba(15,118,110,0.2)] transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-deep)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(15,118,110,0.16)] disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
                    >
                      {isLoading ? 'Sending...' : 'Send'}
                    </button>
                  </div>

                  <div className="mt-2 flex flex-col gap-2 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
                    <p>
                      {LOLI_LIMIT}-question device limit. For more, contact us directly.
                    </p>
                    <div className="flex items-center gap-2">
                      <a
                        href={contactDetails.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[rgba(15,118,110,0.16)] bg-[rgba(15,118,110,0.06)] px-2.5 py-1 font-semibold text-[var(--color-brand-deep)]"
                      >
                        WhatsApp
                      </a>
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="rounded-full border border-[rgba(18,26,40,0.12)] bg-white px-2.5 py-1 font-semibold text-[var(--color-ink)]"
                      >
                        Email
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
