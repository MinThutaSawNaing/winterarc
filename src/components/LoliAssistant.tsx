'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
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
    "Hi, I'm Loli. I can answer up to 3 quick questions from this device about Winter Arc Myanmar's services, process, or how to get started.",
}

const fallbackUsage: UsageState = {
  questionsUsed: 0,
  questionsRemaining: 3,
  limit: 3,
  locked: false,
}

const suggestedQuestions = [
  'What can Winter Arc Myanmar help with?',
  'How do I start a project here?',
  'What happens after the 3-question limit?',
]

export default function LoliAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([introMessage])
  const [input, setInput] = useState('')
  const [usage, setUsage] = useState<UsageState>(fallbackUsage)
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState(
    'Loading available questions...'
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
              ? 'This device has already used all 3 free questions.'
              : `${data.usage.questionsRemaining} of ${data.usage.limit} free questions remaining.`
          )
          return
        }
      } catch {
        // Keep the interface usable even if the warm-up request fails.
      }

      setStatusMessage('You can ask up to 3 questions from this device.')
    }

    void loadUsage()
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  }, [messages, isLoading])

  const handleSuggestion = (question: string) => {
    setInput(question)
    inputRef.current?.focus()
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const question = input.trim()

    if (!question || isLoading || usage.locked) {
      return
    }

    const nextMessages = [...messages, { role: 'user', content: question } satisfies ChatMessage]

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
            ? 'This device reached the 3-question limit. Please contact us for more help.'
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

      const remainingQuestions = data.usage?.questionsRemaining ?? usage.questionsRemaining
      setStatusMessage(
        remainingQuestions === 0
          ? 'This device has used all 3 free questions. Please contact us for more help.'
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
    <section
      id="loli"
      className="section-shell relative overflow-hidden bg-[linear-gradient(180deg,#f7f5ef_0%,#efe8dc_100%)] py-16 md:py-24"
    >
      <div className="hero-orb left-[5%] top-20 h-40 w-40 bg-[rgba(15,118,110,0.14)] sm:h-56 sm:w-56" />
      <div className="hero-orb right-[7%] top-28 h-44 w-44 bg-[rgba(180,83,9,0.16)] sm:h-60 sm:w-60" />

      <div className="relative mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:px-8">
        <div className="panel-card-dark rounded-[2rem] p-6 sm:p-8">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.08] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
            AI Concierge
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            Meet Loli, Winter Arc Myanmar&apos;s on-site assistant for quick project questions.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Loli can answer basic questions about our services, delivery flow,
            and how to start working with Winter Arc Myanmar. To keep things
            safe and predictable, the API key stays on the server and each
            device gets 3 free questions.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              'Service overviews, project fit, and next-step guidance.',
              'Private data stays out. Keep passwords and keys out of chat.',
              'Need more help? Continue with WhatsApp or email.',
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
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
        </div>

        <div className="panel-card rounded-[2rem] p-4 shadow-[0_28px_60px_rgba(15,23,42,0.12)] sm:p-5">
          <div className="rounded-[1.7rem] border border-[rgba(18,26,40,0.08)] bg-white/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:p-5">
            <div className="flex flex-col gap-4 border-b border-[var(--color-line)] pb-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-deep)]">
                  Loli Chat
                </p>
                <p className="mt-1 max-w-xl text-sm leading-6 text-[var(--color-muted)]">
                  {statusMessage}
                </p>
              </div>

              <div className="rounded-full border border-[rgba(15,118,110,0.12)] bg-[var(--color-brand-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-brand-deep)]">
                {usage.questionsRemaining}/{usage.limit} left
              </div>
            </div>

            <div
              className="mt-4 h-[24rem] space-y-4 overflow-y-auto rounded-[1.4rem] bg-[linear-gradient(180deg,rgba(244,241,234,0.8),rgba(255,255,255,0.92))] p-4 sm:h-[28rem]"
              role="log"
              aria-live="polite"
              aria-relevant="additions text"
            >
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}-${message.content.slice(0, 16)}`}
                  className={`max-w-[92%] rounded-[1.35rem] px-4 py-3 text-sm leading-7 shadow-[0_8px_18px_rgba(15,23,42,0.05)] sm:text-[0.95rem] ${
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
                  Loli is typing...
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
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
                    ? 'This device reached the 3-question limit. Contact us for more help.'
                    : 'Ask about services, timelines, or how to get started...'
                }
                disabled={isBlocked || isLoading}
                rows={4}
                maxLength={1200}
                className="w-full rounded-[1.4rem] border border-[rgba(18,26,40,0.08)] bg-white px-4 py-3 text-[var(--color-ink)] shadow-[0_8px_18px_rgba(15,23,42,0.04)] outline-none transition placeholder:text-slate-400 focus:border-[rgba(15,118,110,0.35)] focus:ring-4 focus:ring-[rgba(15,118,110,0.12)] disabled:cursor-not-allowed disabled:bg-slate-50"
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-[var(--color-muted)]">
                  3-question device limit. For more, contact us directly.
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
    </section>
  )
}
