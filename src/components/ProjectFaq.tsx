import { localizedPath, type Locale } from '@/lib/i18n'

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

export default function ProjectFaq({ locale = 'en' }: { locale?: Locale }) {
  const my = locale === 'my'
  const localizedQuestions = my ? [
    { question: 'ကျွန်ုပ်၏ ပရောဂျက်အတွက် ဘယ်လောက်ကုန်ကျမလဲ။', answer: 'ကုန်ကျစရိတ်သည် လုပ်ငန်းအတိုင်းအတာ၊ အခြားစနစ်များနှင့် ချိတ်ဆက်မှု၊ လုပ်ငန်းအပ်နှံမှုဆိုင်ရာ သတ်မှတ်ချက်များအပေါ် မူတည်ပါသည်။ ခန့်မှန်းကုန်ကျစရိတ်ကို ဆွေးနွေးနိုင်ရန် သင့်ရည်မှန်းချက်များကို မျှဝေပေးပါ။ လုပ်ငန်းမစတင်မီ အပ်နှံမည့်ရလဒ်များ၊ အဆင့်လိုက်ငွေပေးချေမှုနှင့် ပြင်ပဝန်ဆောင်မှု ကုန်ကျစရိတ်များကို စာဖြင့်ရေးသားထားသော အဆိုပြုလွှာတွင် အတည်ပြုပါ။' },
    { question: 'ဆက်သွယ်ပြီးနောက် ဘာဆက်လုပ်ရမလဲ။', answer: 'ဖြေရှင်းလိုသော ပြဿနာ၊ ဆော့ဖ်ဝဲကို အသုံးပြုမည့်သူများနှင့် သင်ဦးစားပေးသည့်အချက်များကို ဆွေးနွေးပါမည်။ ထို့နောက် လက်တွေ့ကျသော လုပ်ငန်းအတိုင်းအတာနှင့် အဆိုပြုအချိန်ဇယားကို သတ်မှတ်နိုင်ပါသည်။ စုံစမ်းမေးမြန်းခြင်း သို့မဟုတ် AI စကားပြောစနစ်ထံ စာပို့ခြင်းကြောင့် အခပေးပရောဂျက်တစ်ခုကို လက်ခံရန် တာဝန်ရှိသွားမည် မဟုတ်ပါ။' },
    { question: 'လက်ရှိဝက်ဘ်ဆိုက် သို့မဟုတ် စနစ်ကို ပိုမိုကောင်းမွန်အောင် ပြုပြင်ပေးနိုင်ပါသလား။', answer: 'ရပါသည်။ အဆင်မပြေသည့်အချက်များနှင့် လက်ရှိအသုံးပြုနေသော နည်းပညာများကို ပြောပြပါ။ ကနဦးစစ်ဆေးလေ့လာမှုအကြောင်း ဆွေးနွေးပြီး သတ်မှတ်နေရာများကို အဆင့်မြှင့်တင်ခြင်း သို့မဟုတ် အသစ်ပြန်တည်ဆောက်ခြင်းတို့အနက် ပိုမိုသင့်လျော်သည့်နည်းကို ရွေးချယ်နိုင်ပါသည်။ ပထမဆုံးပေးပို့သည့်စာတွင် စကားဝှက်များ သို့မဟုတ် ဖောက်သည်များ၏ ကိုယ်ရေးအချက်အလက်များကို မပေးပို့ပါနှင့်။' },
    { question: 'ကုဒ်ကို ဘယ်သူပိုင်ဆိုင်မလဲ၊ ဘယ်လိုပံ့ပိုးမှုတွေ ပါဝင်မလဲ။', answer: 'ပိုင်ဆိုင်မှု၊ ပြင်ပဆော့ဖ်ဝဲလိုင်စင်များ၊ အကောင့်အသုံးပြုခွင့်၊ လွှဲပြောင်းအပ်နှံမှု၊ ပံ့ပိုးမှုနှင့် ပြုပြင်ထိန်းသိမ်းမှုတို့ကို ပရောဂျက်သဘောတူညီချက်တွင် သတ်မှတ်ရန် လိုအပ်ပါသည်။ အဆိုပြုလွှာကို အတည်မပြုမီ ဤအသေးစိတ်များကို ကျွန်ုပ်တို့ထံ အတည်ပြုမေးမြန်းပါ။' },
    { question: 'Google ရှာဖွေမှုတွင် ထိပ်ဆုံးအဆင့်ရမည်ဟု အာမခံပါသလား။', answer: 'အာမမခံပါ။ နည်းပညာပိုင်း SEO၊ စာမျက်နှာအကြောင်းအရာနှင့် ရှာဖွေတွေ့ရှိနိုင်မှုတို့ကို တိုးတက်အောင် လုပ်ဆောင်နိုင်သော်လည်း အညွှန်းတွင် ထည့်သွင်းခြင်းနှင့် အဆင့်သတ်မှတ်ခြင်းကို ရှာဖွေရေးစနစ်များက ဆုံးဖြတ်ပါသည်။ အဆင့်သည် ရှာဖွေသောစကားလုံး၊ တည်နေရာ၊ ပြိုင်ဆိုင်မှုနှင့် အချိန်အလိုက်လည်း ပြောင်းလဲပါသည်။' },
  ] : questions
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-shell bg-[var(--color-bg-alt)] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div>
          <span className="section-label">{my ? 'မစတင်မီ သိထားရန်' : 'Before we start'}</span>
          <h2 id="faq-heading" className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{my ? 'ကောင်းမွန်သော ပရောဂျက်များသည် ရှင်းလင်းသော မျှော်မှန်းချက်များမှ စတင်ပါသည်။' : 'Good projects start with clear expectations.'}</h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">{my ? 'နောက်တစ်ဆင့် ဆက်လက်ဆောင်ရွက်နိုင်ရန် အထောက်အကူဖြစ်စေမည့် လက်တွေ့ကျသော အဖြေများ။ သင့်ပရောဂျက်နှင့် သက်ဆိုင်သည့် အသေးစိတ်များအတွက် ကျွန်ုပ်တို့အဖွဲ့နှင့် တိုက်ရိုက်ဆွေးနွေးပါ။' : 'A few practical answers to help you take the next step. For details specific to your project, talk directly with our team.'}</p>
          <a href={localizedPath(locale, '/terms')} className="mt-5 inline-flex min-h-11 items-center font-semibold text-[var(--color-brand-deep)] underline underline-offset-4">{my ? 'ဝက်ဘ်ဆိုက်အသုံးပြုမှု စည်းကမ်းချက်များကို ဖတ်ရှုပါ' : 'Read our website terms'}</a>
        </div>
        <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {localizedQuestions.map(({ question, answer }) => (
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