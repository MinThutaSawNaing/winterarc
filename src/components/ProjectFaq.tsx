const questions = [
  {
    question: 'How much will my project cost?',
    answer: 'The cost depends on the scope, integrations and delivery requirements. Share your goals with us so we can discuss an estimate. Confirm the deliverables, payment milestones and any third-party costs in a written proposal before work starts.',
  },
  {
    question: 'What happens after I contact you?',
    answer: 'We discuss the problem, the people who will use the software and your priorities. From there, we can define a practical scope and proposed timeline. An inquiry or an AI chat message does not commit you to a paid project.',
  },
  {
    question: 'Can you improve an existing website or system?',
    answer: 'Yes. Tell us what is not working and which technologies you currently use. We can discuss an initial review and whether a targeted improvement or a rebuild is the better fit. Do not send passwords or private customer data in your initial message.',
  },
  {
    question: 'Who owns the code, and what support is included?',
    answer: 'Ownership, third-party licenses, account access, handover, support and maintenance need to be specified in your project agreement. Ask us to confirm these details before you approve a proposal.',
  },
  {
    question: 'Do you guarantee a top Google ranking?',
    answer: 'No. We can improve technical SEO, page content and discoverability, but search engines decide indexing and rankings. Rankings also vary by query, location, competition and time.',
  },
]

export default function ProjectFaq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-shell bg-[var(--color-bg-alt)] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div>
          <span className="section-label">Before we start</span>
          <h2 id="faq-heading" className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Good projects start with clear expectations.</h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">A few practical answers to help you take the next step. For details specific to your project, talk directly with our team.</p>
          <a href="/terms" className="mt-5 inline-flex min-h-11 items-center font-semibold text-[var(--color-brand-deep)] underline underline-offset-4">Read our website terms</a>
        </div>
        <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-2">
              <summary className="flex min-h-16 list-none items-center justify-between gap-5 rounded-lg py-4 text-base font-semibold [&::-webkit-details-marker]:hidden">
                {question}
                <span aria-hidden="true" className="shrink-0 text-xl text-[var(--color-brand)] group-open:hidden">+</span>
                <span aria-hidden="true" className="hidden shrink-0 text-xl text-[var(--color-brand)] group-open:block">−</span>
              </summary>
              <p className="pb-5 pr-6 text-sm leading-7 text-[var(--color-muted)]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}