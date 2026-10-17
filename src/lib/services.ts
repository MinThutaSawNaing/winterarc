import type { Locale } from '@/lib/i18n'

export type Service = {
  slug: string
  href: string
  title: string
  description: string
  introduction: string
  bestFor: string
  scope: { title: string; description: string }[]
  deliverables: string[]
  preparation: string[]
  process: { title: string; description: string }[]
  scopeNote: string
  faqs: { question: string; answer: string }[]
}

// English source data shared by the service routes, homepage cards, and sitemap.
export const services: Service[] = [
  {
    slug: 'web-development',
    href: '/services/web-development',
    title: 'Web Development',
    description:
      'Responsive websites, customer portals, and web applications for Myanmar businesses, with clear content, practical integrations, and maintainable code.',
    introduction:
      'Turn a business idea or an outdated website into a useful digital experience. We plan the content, user journeys, and technical foundations together, so the site supports the people visiting it and the team maintaining it.',
    bestFor:
      'Businesses introducing their services online, refreshing an existing website, or building a customer portal or browser-based product.',
    scope: [
      {
        title: 'Business and service websites',
        description:
          'Page structure, responsive layouts, clear service information, and enquiry journeys shaped around your audience and content.',
      },
      {
        title: 'Portals and web applications',
        description:
          'Account-based experiences, dashboards, forms, and administrative tools with roles and workflows defined during discovery.',
      },
      {
        title: 'Content and integrations',
        description:
          'Content editing options and connections to existing APIs or business tools, after reviewing access, data formats, and provider limitations.',
      },
      {
        title: 'Launch foundations',
        description:
          'Semantic page structure, page metadata, keyboard interaction checks, responsive testing, and deployment configuration for the agreed hosting setup.',
      },
    ],
    deliverables: [
      'An agreed sitemap, priority user journeys, and page or feature requirements.',
      'Responsive interface designs and implementation for the approved scope.',
      'Source code and configuration guidance for the agreed deployment environment.',
      'A handover covering content updates, known limitations, and follow-up priorities.',
    ],
    preparation: [
      'Your audience, main business goals, and the actions visitors should take.',
      'A page list, draft copy, brand assets, and any language requirements.',
      'Links to the current site and examples of useful layouts or features.',
      'Details of your domain, hosting, content tools, and required integrations. Share access securely after scope is agreed.',
    ],
    process: [
      {
        title: 'Map the experience',
        description:
          'Review your goals and content, then agree the sitemap, important user journeys, and acceptance criteria.',
      },
      {
        title: 'Design and review',
        description:
          'Develop the page hierarchy and responsive layouts, with review points before implementation expands.',
      },
      {
        title: 'Build and validate',
        description:
          'Implement pages and integrations, then check agreed journeys across relevant devices and browsers.',
      },
      {
        title: 'Launch and hand over',
        description:
          'Prepare deployment, review launch checks, and explain how to manage the delivered website.',
      },
    ],
    scopeNote:
      'Content writing, translation, hosting subscriptions, paid integrations, and ongoing maintenance are discussed separately. Search metadata and technical foundations do not guarantee search rankings.',
    faqs: [
      {
        question: 'Can you improve an existing website instead of rebuilding it?',
        answer:
          'Yes. We first review the current code, content, hosting, and main problems. That review helps determine whether focused improvements or a rebuild is the more practical approach.',
      },
      {
        question: 'Will our team be able to update the content?',
        answer:
          'Content editing can be part of the scope. We discuss who will make updates and how often, then choose an editing approach that fits those needs rather than adding a system unnecessarily.',
      },
      {
        question: 'Can the website support more than one language?',
        answer:
          'Multilingual pages can be planned from the start. We need to agree the languages, who supplies and approves translations, and how translated content will be maintained.',
      },
      {
        question: 'What determines the project schedule?',
        answer:
          'The number of page types, application features, integrations, content readiness, and review availability all affect the schedule. We discuss milestones after reviewing those dependencies.',
      },
    ],
  },
  {
    slug: 'mobile-app-development',
    href: '/services/mobile-app-development',
    title: 'Mobile App Development',
    description:
      'Mobile app planning, interface design, and cross-platform development for customer experiences and field workflows, with a practical release and handover plan.',
    introduction:
      'Build a mobile product around the tasks people actually need to complete. We help define a focused first release, plan the connection between app and backend, and account for devices, connectivity, and release requirements early.',
    bestFor:
      'Teams creating a customer-facing app, giving field staff access to business tools, or testing a focused mobile product concept.',
    scope: [
      {
        title: 'Product and platform planning',
        description:
          'Define the first release, target devices, account roles, and platform needs before choosing a cross-platform or platform-specific approach.',
      },
      {
        title: 'Mobile interface design',
        description:
          'Task-focused screens, navigation, forms, and loading or error states designed for smaller screens and touch interaction.',
      },
      {
        title: 'Application and API integration',
        description:
          'Implement agreed app flows and connect them to your backend. Notifications, device features, and offline behavior are assessed individually.',
      },
      {
        title: 'Testing and release preparation',
        description:
          'Check key journeys on an agreed device set and prepare builds and submission materials for your chosen distribution route.',
      },
    ],
    deliverables: [
      'A defined release scope, user flows, and platform requirements.',
      'Screen designs and an implemented app for the agreed platforms.',
      'Source code, build instructions, and integration configuration notes.',
      'Release preparation notes, test findings, and a handover for future updates.',
    ],
    preparation: [
      'The core problem, intended users, and the tasks the first release must support.',
      'Your target platforms, typical devices, and expected connectivity conditions.',
      'Brand assets, sample content, and any existing app or screen designs.',
      'Backend/API documentation and details of developer accounts or distribution requirements, without sending passwords in an initial enquiry.',
    ],
    process: [
      {
        title: 'Define the first release',
        description:
          'Prioritize essential tasks and agree platform coverage, backend dependencies, and release criteria.',
      },
      {
        title: 'Prototype the journeys',
        description:
          'Review screen flows and interaction states before building the complete experience.',
      },
      {
        title: 'Develop and test',
        description:
          'Build in reviewable increments and test important flows, API behavior, and relevant device conditions.',
      },
      {
        title: 'Prepare distribution',
        description:
          'Create release builds, review submission requirements, and document the update and handover process.',
      },
    ],
    scopeNote:
      'Store accounts, third-party service charges, backend development, and post-launch updates need an agreed scope. App store review decisions and approval timing remain with the platform providers.',
    faqs: [
      {
        question: 'Can one app support both Android and iOS?',
        answer:
          'A cross-platform approach can share much of the implementation. We review device features, performance needs, and platform differences before recommending it; some features still need platform-specific work.',
      },
      {
        question: 'Can the app work with our existing backend?',
        answer:
          'We can assess an existing API for authentication, data access, documentation, and reliability. Any backend changes or new endpoints are identified and scoped before integration.',
      },
      {
        question: 'Will the app work without an internet connection?',
        answer:
          'Offline use must be designed explicitly. We agree which tasks and data should be available offline, how information is stored on the device, and how sync conflicts should be handled.',
      },
      {
        question: 'Do you handle app store submission?',
        answer:
          'Submission preparation and assistance can be included. Your business needs the appropriate developer accounts and required policy information. Store approval is controlled by Apple or Google, not by the development team.',
      },
    ],
  },
  {
    slug: 'cloud-solutions',
    href: '/services/cloud-solutions',
    title: 'Cloud Solutions',
    description:
      'Cloud infrastructure planning, application deployment, and delivery automation for teams that need clearer environments, operational visibility, and maintainable hosting.',
    introduction:
      'Make hosting and deployment a deliberate part of your software, not an afterthought. We review the application and its operating needs, then plan infrastructure and release workflows your team can understand and maintain.',
    bestFor:
      'Teams preparing a first production deployment, moving an existing application, or replacing fragile manual release steps with a more repeatable workflow.',
    scope: [
      {
        title: 'Infrastructure assessment',
        description:
          'Review application dependencies, usage patterns, data needs, existing hosting, and team responsibilities to outline a suitable environment.',
      },
      {
        title: 'Environments and deployment',
        description:
          'Configure agreed hosting resources and separate development, staging, or production concerns where the project requires them.',
      },
      {
        title: 'Delivery automation',
        description:
          'Build repeatable build and deployment steps, environment configuration, and a documented approach to rollback and release review.',
      },
      {
        title: 'Operational foundations',
        description:
          'Plan access controls, application logs, monitoring, and backup or restore procedures appropriate to the agreed workload and responsibilities.',
      },
    ],
    deliverables: [
      'An environment plan showing services, dependencies, and ownership responsibilities.',
      'Infrastructure configuration and deployment workflows for the agreed scope.',
      'Documented configuration, access requirements, and operational checks.',
      'A runbook covering releases, rollback considerations, and agreed backup or monitoring arrangements.',
    ],
    preparation: [
      'An overview of the application stack, repositories, and current deployment process.',
      'Expected usage, data volumes, operating constraints, and known pain points.',
      'Your current cloud provider, account ownership, and preferred spending limits.',
      'Data sensitivity, recovery needs, and any requirements your team must meet. Arrange limited access securely during discovery.',
    ],
    process: [
      {
        title: 'Assess the workload',
        description:
          'Understand current behavior, operating constraints, and the risks or dependencies that affect deployment.',
      },
      {
        title: 'Plan the environment',
        description:
          'Agree the infrastructure approach, account ownership, access model, and boundaries of operational responsibility.',
      },
      {
        title: 'Configure and rehearse',
        description:
          'Set up resources and delivery workflows, then validate deployment and relevant recovery steps in the agreed environment.',
      },
      {
        title: 'Transition and document',
        description:
          'Coordinate the release or migration and hand over configuration notes, checks, and operating procedures.',
      },
    ],
    scopeNote:
      'Cloud accounts and usage charges belong to the agreed account owner. Continuous monitoring, incident response, managed operations, and service-level commitments are not assumed and require a separate agreement.',
    faqs: [
      {
        question: 'Do we need to move to a different cloud provider?',
        answer:
          'Not necessarily. We first examine your existing setup, workload, team familiarity, and constraints. Improving the current environment may be more appropriate than migrating.',
      },
      {
        question: 'Can you migrate an existing application?',
        answer:
          'Migration can be scoped after reviewing dependencies, data transfer requirements, DNS, and acceptable interruption. The plan should include validation and rollback considerations; zero downtime is not assumed.',
      },
      {
        question: 'How are cloud running costs handled?',
        answer:
          'Provider usage and subscriptions are separate from implementation work. We can review the main cost drivers and configuration options, but actual bills depend on provider rates, traffic, storage, and usage.',
      },
      {
        question: 'Is ongoing infrastructure support included?',
        answer:
          'The handover defines what has been configured and who operates it. Any ongoing support, monitoring coverage, or incident response needs to be discussed and agreed separately.',
      },
    ],
  },
  {
    slug: 'custom-software',
    href: '/services/custom-software',
    title: 'Custom Software',
    description:
      'Business software, internal tools, and integrations shaped around your workflows, reporting needs, and existing systems rather than a generic feature checklist.',
    introduction:
      'Replace fragmented spreadsheets or disconnected tools with software built around a clearly defined business process. We start with how work happens today, identify the most useful changes, and plan a manageable first release.',
    bestFor:
      'Businesses coordinating manual approvals, tracking operational records, bringing reports together, or connecting tools that do not currently share information.',
    scope: [
      {
        title: 'Workflow discovery',
        description:
          'Map tasks, handoffs, exceptions, and user roles to separate essential requirements from features that can wait.',
      },
      {
        title: 'Internal business tools',
        description:
          'Build operational interfaces for agreed needs such as record management, approvals, scheduling, or inventory workflows.',
      },
      {
        title: 'Data and integrations',
        description:
          'Plan data structures, import or export flows, and API connections with explicit rules for validation and ownership.',
      },
      {
        title: 'Reporting and administration',
        description:
          'Create useful views, filters, role-based access, and reports based on the decisions your team needs to make.',
      },
    ],
    deliverables: [
      'A workflow map, prioritized requirements, and agreed acceptance criteria.',
      'An implemented system with the agreed roles, data flows, and integrations.',
      'Source code, deployment guidance, and agreed data import or export tools.',
      'User and administrator handover notes, with known limitations and next-stage recommendations.',
    ],
    preparation: [
      'A description of the current workflow and where it creates repeated work or errors.',
      'The people who use, approve, or report on the process and their access needs.',
      'Anonymized examples of forms, spreadsheets, reports, and representative edge cases.',
      'Existing system documentation, data volumes, and a clear owner for requirements and user feedback.',
    ],
    process: [
      {
        title: 'Understand the operation',
        description:
          'Review real tasks and sample records with the people doing the work, including exceptions and approval rules.',
      },
      {
        title: 'Define a useful first version',
        description:
          'Agree a focused scope, data model, access roles, and acceptance criteria before implementation.',
      },
      {
        title: 'Build with feedback',
        description:
          'Deliver reviewable workflows and test them against representative data and agreed business scenarios.',
      },
      {
        title: 'Introduce and hand over',
        description:
          'Plan data setup and rollout, explain key workflows, and document administration and follow-up work.',
      },
    ],
    scopeNote:
      'Data cleanup, historical migration, third-party licenses, specialized regulatory requirements, and ongoing support must be evaluated explicitly. They are not assumed to be included in a first release.',
    faqs: [
      {
        question: 'Should we use an existing product instead?',
        answer:
          'Sometimes an existing tool is the better fit. Discovery compares your essential workflow needs with available options, so custom development is reserved for meaningful gaps rather than recreating standard features without a reason.',
      },
      {
        question: 'Can the system use our existing spreadsheet data?',
        answer:
          'We can assess sample files and define an import approach. Field mapping, duplicate records, missing values, and validation need review before migration work can be scoped.',
      },
      {
        question: 'Can different staff have different permissions?',
        answer:
          'Yes, role-based access can be part of the requirements. We define who can view, create, change, approve, or export information and test those rules against the agreed workflows.',
      },
      {
        question: 'Can we add features after the first release?',
        answer:
          'A phased approach is practical for many internal systems. We keep later ideas in a prioritized backlog and assess each addition against user feedback, data changes, and maintenance needs.',
      },
    ],
  },
]

// Keep every nested field translated; route identifiers remain language-neutral.
const burmeseServices: Service[] = [
  {
    slug: 'web-development',
    href: '/services/web-development',
    title: 'ဝက်ဘ်ဆိုက်နှင့် ဝက်ဘ်အက်ပ် ရေးဆွဲခြင်း',
    description: 'မြန်မာလုပ်ငန်းများအတွက် စက်အမျိုးမျိုးတွင် အဆင်ပြေစွာအသုံးပြုနိုင်သော ဝက်ဘ်ဆိုက်၊ ဖောက်သည်ပေါ်တယ်နှင့် ဝက်ဘ်အက်ပ်များကို ရှင်းလင်းသောအကြောင်းအရာ၊ လက်တွေ့အသုံးဝင်သည့် စနစ်ချိတ်ဆက်မှုနှင့် ပြုပြင်ထိန်းသိမ်းရလွယ်သော ကုဒ်တို့ဖြင့် တည်ဆောက်ပေးပါသည်။',
    introduction: 'လုပ်ငန်းစိတ်ကူးတစ်ခု သို့မဟုတ် ခေတ်နောက်ကျနေသော ဝက်ဘ်ဆိုက်ကို အသုံးဝင်သော ဒစ်ဂျစ်တယ်အတွေ့အကြုံအဖြစ် ပြောင်းလဲလိုက်ပါ။ အကြောင်းအရာ၊ အသုံးပြုသူ၏ လုပ်ဆောင်မှုအဆင့်ဆင့်နှင့် နည်းပညာအခြေခံကို အတူစီစဉ်ပြီး ဝင်ရောက်အသုံးပြုသူနှင့် ထိန်းသိမ်းမည့်အဖွဲ့ နှစ်ဖက်လုံးအတွက် အဆင်ပြေစေရန် တည်ဆောက်ပါသည်။',
    bestFor: 'ဝန်ဆောင်မှုများကို အွန်လိုင်းတွင် မိတ်ဆက်လိုသော၊ ရှိပြီးသားဝက်ဘ်ဆိုက်ကို အဆင့်မြှင့်လိုသော၊ ဖောက်သည်ပေါ်တယ် သို့မဟုတ် ဘရောက်ဇာမှ အသုံးပြုနိုင်သည့် ထုတ်ကုန် တည်ဆောက်လိုသော လုပ်ငန်းများ။',
    scope: [
      { title: 'လုပ်ငန်းနှင့် ဝန်ဆောင်မှု ဝက်ဘ်ဆိုက်များ', description: 'သင့်ပရိသတ်နှင့် အကြောင်းအရာကို အခြေခံ၍ စာမျက်နှာဖွဲ့စည်းပုံ၊ မျက်နှာပြင်အရွယ်အစားအလိုက် လိုက်လျောညီထွေရှိသော ဒီဇိုင်း၊ ရှင်းလင်းသည့် ဝန်ဆောင်မှုအချက်အလက်နှင့် စုံစမ်းဆက်သွယ်ရန် လုပ်ဆောင်မှုအဆင့်များကို စီစဉ်ပါသည်။' },
      { title: 'ပေါ်တယ်နှင့် ဝက်ဘ်အက်ပ်များ', description: 'လိုအပ်ချက်များကို ဆွေးနွေးသတ်မှတ်စဉ် အတည်ပြုထားသော အသုံးပြုသူအခန်းကဏ္ဍနှင့် အလုပ်စီးဆင်းမှုများအတိုင်း အကောင့်စနစ်၊ အချက်အလက်ခြုံငုံမြင်ကွင်း၊ ဖောင်နှင့် စီမံခန့်ခွဲရေးကိရိယာများကို တည်ဆောက်ပါသည်။' },
      { title: 'အကြောင်းအရာနှင့် စနစ်ချိတ်ဆက်မှု', description: 'အသုံးပြုခွင့်၊ ဒေတာပုံစံနှင့် ဝန်ဆောင်မှုပေးသူ၏ ကန့်သတ်ချက်များကို စစ်ဆေးပြီးနောက် အကြောင်းအရာတည်းဖြတ်ရန် နည်းလမ်းများနှင့် လက်ရှိ API သို့မဟုတ် လုပ်ငန်းသုံးကိရိယာများ ချိတ်ဆက်မှုကို စီစဉ်ပါသည်။' },
      { title: 'စတင်အသုံးပြုရန် နည်းပညာအခြေခံ', description: 'အကြောင်းအရာ၏ အဓိပ္ပာယ်နှင့်ကိုက်ညီသော HTML ဖွဲ့စည်းပုံ၊ စာမျက်နှာမက်တာဒေတာ၊ ကီးဘုတ်ဖြင့် အသုံးပြုနိုင်မှုစစ်ဆေးခြင်း၊ မျက်နှာပြင်အရွယ်အစားအမျိုးမျိုးတွင် စမ်းသပ်ခြင်းနှင့် သဘောတူထားသော ဆာဗာပတ်ဝန်းကျင်တွင် ဝက်ဘ်ဆိုက်တင်ရန် ပြင်ဆင်မှုတို့ ပါဝင်ပါသည်။' },
    ],
    deliverables: [
      'သဘောတူထားသော ဝက်ဘ်ဆိုက်စာမျက်နှာမြေပုံ၊ ဦးစားပေး အသုံးပြုသူလုပ်ဆောင်မှုအဆင့်များနှင့် စာမျက်နှာ သို့မဟုတ် လုပ်ဆောင်ချက်လိုအပ်ချက်များ။',
      'အတည်ပြုထားသော လုပ်ငန်းအတိုင်းအတာအတွက် စက်အရွယ်အစားအမျိုးမျိုးနှင့် ကိုက်ညီသည့် မျက်နှာပြင်ဒီဇိုင်းနှင့် အကောင်အထည်ဖော်ထားသော ဝက်ဘ်ဆိုက်။',
      'မူရင်းကုဒ်နှင့် သဘောတူထားသော စနစ်တင်မည့် ပတ်ဝန်းကျင်အတွက် ပြင်ဆင်သတ်မှတ်မှုလမ်းညွှန်။',
      'အကြောင်းအရာပြင်ဆင်နည်း၊ သိရှိထားသော ကန့်သတ်ချက်များနှင့် ဆက်လက်ဦးစားပေးဆောင်ရွက်ရန် အချက်များပါဝင်သည့် လွှဲပြောင်းရှင်းလင်းမှု။',
    ],
    preparation: [
      'ရည်ရွယ်ထားသောပရိသတ်၊ အဓိကလုပ်ငန်းရည်မှန်းချက်နှင့် ဝင်ရောက်သူများကို လုပ်ဆောင်စေလိုသည့် အရာများ။',
      'စာမျက်နှာစာရင်း၊ မူကြမ်းစာသား၊ အမှတ်တံဆိပ်ဆိုင်ရာ ဖိုင်များနှင့် လိုအပ်သော ဘာသာစကားများ။',
      'လက်ရှိဝက်ဘ်ဆိုက်လင့်ခ်နှင့် အသုံးဝင်သည်ဟု ယူဆထားသော ဒီဇိုင်း သို့မဟုတ် လုပ်ဆောင်ချက် နမူနာများ။',
      'ဒိုမိန်း၊ ဆာဗာဝန်ဆောင်မှု၊ အကြောင်းအရာစီမံသည့်ကိရိယာနှင့် ချိတ်ဆက်ရန်လိုသော စနစ်များ၏ အချက်အလက်။ လုပ်ငန်းအတိုင်းအတာ သဘောတူပြီးမှ အသုံးပြုခွင့်ကို လုံခြုံစွာ မျှဝေပါ။',
    ],
    process: [
      { title: 'အသုံးပြုမှုလမ်းကြောင်း သတ်မှတ်ခြင်း', description: 'ရည်မှန်းချက်နှင့် အကြောင်းအရာကို သုံးသပ်ပြီး စာမျက်နှာမြေပုံ၊ အရေးကြီးသော အသုံးပြုသူလုပ်ဆောင်မှုအဆင့်များနှင့် လက်ခံအတည်ပြုမည့် စံနှုန်းများကို သဘောတူပါသည်။' },
      { title: 'ဒီဇိုင်းနှင့် ပြန်လည်သုံးသပ်ခြင်း', description: 'စာမျက်နှာအချက်အလက် ဖွဲ့စည်းပုံနှင့် မျက်နှာပြင်အရွယ်အစားအလိုက် ဒီဇိုင်းများကို ရေးဆွဲပြီး တည်ဆောက်မှုကို ဆက်လက်တိုးချဲ့မလုပ်ဆောင်မီ ပြန်လည်သုံးသပ်ပါသည်။' },
      { title: 'တည်ဆောက်ပြီး စစ်ဆေးခြင်း', description: 'စာမျက်နှာနှင့် စနစ်ချိတ်ဆက်မှုများကို အကောင်အထည်ဖော်ပြီး သက်ဆိုင်ရာစက်နှင့် ဘရောက်ဇာများတွင် သဘောတူထားသော အသုံးပြုမှုအဆင့်များကို စစ်ဆေးပါသည်။' },
      { title: 'စတင်အသုံးပြုပြီး လွှဲပြောင်းခြင်း', description: 'ဆာဗာပေါ်တင်ရန် ပြင်ဆင်၍ စတင်အသုံးမပြုမီ စစ်ဆေးချက်များကို ပြန်လည်သုံးသပ်ကာ ရရှိထားသော ဝက်ဘ်ဆိုက်ကို စီမံခန့်ခွဲနည်း ရှင်းလင်းပေးပါသည်။' },
    ],
    scopeNote: 'အကြောင်းအရာရေးသားခြင်း၊ ဘာသာပြန်ခြင်း၊ ဆာဗာဝန်ဆောင်မှုကြေး၊ အခပေးစနစ်ချိတ်ဆက်မှုနှင့် ရေရှည်ထိန်းသိမ်းခြင်းတို့ကို သီးခြားဆွေးနွေးပါသည်။ ရှာဖွေရေးမက်တာဒေတာနှင့် နည်းပညာအခြေခံ ပြင်ဆင်ပေးခြင်းသည် ရှာဖွေမှုရလဒ်အဆင့်ကို အာမမခံပါ။',
    faqs: [
      { question: 'အသစ်ပြန်မတည်ဆောက်ဘဲ လက်ရှိဝက်ဘ်ဆိုက်ကို အဆင့်မြှင့်နိုင်ပါသလား။', answer: 'ရပါသည်။ လက်ရှိကုဒ်၊ အကြောင်းအရာ၊ ဆာဗာနှင့် အဓိကပြဿနာများကို ဦးစွာသုံးသပ်ပါသည်။ ထိုသုံးသပ်ချက်အပေါ်မူတည်၍ လိုအပ်သည့်နေရာကိုသာ ပြင်ဆင်ခြင်း သို့မဟုတ် အသစ်ပြန်တည်ဆောက်ခြင်း မည်သည်က ပိုလက်တွေ့ကျမည်ကို ဆုံးဖြတ်ပါသည်။' },
      { question: 'ကျွန်ုပ်တို့အဖွဲ့က အကြောင်းအရာကို ကိုယ်တိုင်ပြင်ဆင်နိုင်မည်လား။', answer: 'အကြောင်းအရာတည်းဖြတ်နိုင်မှုကို လုပ်ငန်းအတိုင်းအတာတွင် ထည့်သွင်းနိုင်ပါသည်။ မည်သူက မည်သည့်အကြိမ်နှုန်းဖြင့် ပြင်ဆင်မည်ကို ဆွေးနွေးပြီး မလိုအပ်သောစနစ် ထပ်မထည့်ဘဲ ထိုလိုအပ်ချက်နှင့် ကိုက်ညီသည့် တည်းဖြတ်နည်းကို ရွေးချယ်ပါသည်။' },
      { question: 'ဝက်ဘ်ဆိုက်တွင် ဘာသာစကားတစ်မျိုးထက်ပို၍ အသုံးပြုနိုင်ပါသလား။', answer: 'ဘာသာစကားစုံ စာမျက်နှာများကို အစကတည်းက စီစဉ်နိုင်ပါသည်။ ဘာသာစကားများ၊ ဘာသာပြန်စာကို ပံ့ပိုး၍ အတည်ပြုမည့်သူနှင့် ဘာသာပြန်အကြောင်းအရာကို ဆက်လက်ထိန်းသိမ်းမည့်နည်းကို သဘောတူရန် လိုပါသည်။' },
      { question: 'ပရောဂျက်အချိန်ဇယားကို မည်သည့်အချက်များက သတ်မှတ်ပါသလဲ။', answer: 'စာမျက်နှာပုံစံအရေအတွက်၊ အက်ပ်လုပ်ဆောင်ချက်များ၊ စနစ်ချိတ်ဆက်မှု၊ အကြောင်းအရာအဆင်သင့်ဖြစ်မှုနှင့် ပြန်လည်သုံးသပ်နိုင်မည့် အချိန်တို့အပေါ် မူတည်ပါသည်။ ထိုဆက်စပ်လိုအပ်ချက်များကို သုံးသပ်ပြီးမှ အဆင့်အလိုက်ပြီးစီးရမည့် မှတ်တိုင်များကို ဆွေးနွေးပါသည်။' },
    ],
  },
]

burmeseServices.push(
  {
    slug: 'mobile-app-development',
    href: '/services/mobile-app-development',
    title: 'မိုဘိုင်းအက်ပ် ရေးဆွဲခြင်း',
    description: 'ဖောက်သည်များ အသုံးပြုရန်နှင့် ကွင်းဆင်းလုပ်ငန်းစဉ်များတွင် အသုံးပြုရန် မိုဘိုင်းအက်ပ်များကို စီမံခြင်း၊ မျက်နှာပြင်ဒီဇိုင်းဆွဲခြင်းနှင့် ပလက်ဖောင်းစုံအတွက် ရေးဆွဲခြင်းတို့ကို လက်တွေ့ကျသော ဖြန့်ချိရေးနှင့် လွှဲပြောင်းရေးအစီအစဉ်ဖြင့် ဆောင်ရွက်ပေးပါသည်။',
    introduction: 'လူများ အမှန်တကယ်ပြီးမြောက်ရန်လိုသော အလုပ်များကို အခြေခံ၍ မိုဘိုင်းထုတ်ကုန်ကို တည်ဆောက်ပါ။ အဓိကလိုအပ်ချက်ကို ဦးစားပေးသော ပထမဗားရှင်းကို သတ်မှတ်ပေးပြီး အက်ပ်နှင့် နောက်ကွယ်စနစ်ချိတ်ဆက်မှုကို စီစဉ်ကာ စက်အမျိုးအစား၊ အင်တာနက်ချိတ်ဆက်မှုနှင့် ဖြန့်ချိရန်လိုအပ်ချက်များကို အစောပိုင်းကတည်းက ထည့်သွင်းစဉ်းစားပါသည်။',
    bestFor: 'ဖောက်သည်အသုံးပြုမည့် အက်ပ်တည်ဆောက်လိုသော၊ ကွင်းဆင်းဝန်ထမ်းများကို လုပ်ငန်းသုံးကိရိယာများ အသုံးပြုစေလိုသော၊ သို့မဟုတ် ရည်ရွယ်ချက်တိကျသည့် မိုဘိုင်းထုတ်ကုန်စိတ်ကူးကို စမ်းသပ်လိုသော အဖွဲ့များ။',
    scope: [
      { title: 'ထုတ်ကုန်နှင့် ပလက်ဖောင်း စီမံခြင်း', description: 'ပလက်ဖောင်းစုံသုံးနည်း သို့မဟုတ် ပလက်ဖောင်းသီးသန့်နည်းကို မရွေးချယ်မီ ပထမဗားရှင်း၊ ရည်ရွယ်ထားသောစက်များ၊ အကောင့်အခန်းကဏ္ဍနှင့် ပလက်ဖောင်းလိုအပ်ချက်များကို သတ်မှတ်ပါသည်။' },
      { title: 'မိုဘိုင်းမျက်နှာပြင် ဒီဇိုင်း', description: 'သေးငယ်သောမျက်နှာပြင်နှင့် ထိတွေ့အသုံးပြုမှုအတွက် လုပ်ဆောင်ရမည့်အလုပ်ကို အဓိကထားသော မျက်နှာပြင်များ၊ လမ်းညွှန်မီနူး၊ ဖောင်၊ ဒေတာရယူနေစဉ်နှင့် အမှားအယွင်းဖြစ်ပေါ်ချိန်တွင် ပြသမည့် မြင်ကွင်းများကို ဒီဇိုင်းဆွဲပါသည်။' },
      { title: 'အက်ပ်နှင့် API ချိတ်ဆက်ခြင်း', description: 'သဘောတူထားသော အက်ပ်လုပ်ဆောင်မှုများကို ရေးဆွဲ၍ သင့်နောက်ကွယ်စနစ်နှင့် ချိတ်ဆက်ပါသည်။ အသိပေးချက်၊ စက်၏သီးသန့်လုပ်ဆောင်ချက်နှင့် အင်တာနက်မရှိချိန် အသုံးပြုမှုကို တစ်ခုချင်းစီ သုံးသပ်ပါသည်။' },
      { title: 'စမ်းသပ်ခြင်းနှင့် ဖြန့်ချိရန် ပြင်ဆင်ခြင်း', description: 'သဘောတူထားသော စက်အမျိုးအစားများတွင် အဓိကအသုံးပြုမှုအဆင့်များကို စစ်ဆေးပြီး ရွေးချယ်ထားသော ဖြန့်ချိမည့်နည်းလမ်းအတွက် အက်ပ်ဖိုင်နှင့် တင်သွင်းရမည့် အချက်အလက်များကို ပြင်ဆင်ပါသည်။' },
    ],
    deliverables: [
      'သတ်မှတ်ထားသော ပထမဗားရှင်းအတိုင်းအတာ၊ အသုံးပြုမှုအဆင့်များနှင့် ပလက်ဖောင်းလိုအပ်ချက်များ။',
      'မျက်နှာပြင်ဒီဇိုင်းများနှင့် သဘောတူထားသော ပလက်ဖောင်းများအတွက် ရေးဆွဲပြီးသော အက်ပ်။',
      'မူရင်းကုဒ်၊ အက်ပ်ဖိုင်တည်ဆောက်နည်းနှင့် စနစ်ချိတ်ဆက်မှုပြင်ဆင်ရန် မှတ်စုများ။',
      'ဖြန့်ချိရေးပြင်ဆင်မှုမှတ်စု၊ စမ်းသပ်မှုတွေ့ရှိချက်နှင့် နောင်အဆင့်မြှင့်မှုများအတွက် လွှဲပြောင်းရှင်းလင်းမှု။',
    ],
    preparation: [
      'အဓိကဖြေရှင်းလိုသောပြဿနာ၊ ရည်ရွယ်ထားသောအသုံးပြုသူနှင့် ပထမဗားရှင်းတွင် ဆောင်ရွက်နိုင်ရမည့် အလုပ်များ။',
      'ရည်ရွယ်ထားသော ပလက်ဖောင်းများ၊ ပုံမှန်အသုံးပြုမည့်စက်များနှင့် မျှော်မှန်းထားသော အင်တာနက်ချိတ်ဆက်မှုအခြေအနေ။',
      'အမှတ်တံဆိပ်ဖိုင်များ၊ နမူနာအကြောင်းအရာနှင့် ရှိပြီးသားအက်ပ် သို့မဟုတ် မျက်နှာပြင်ဒီဇိုင်းများ။',
      'နောက်ကွယ်စနစ်နှင့် API စာတမ်း၊ ဆော့ဖ်ဝဲရေးသားသူအကောင့် သို့မဟုတ် ဖြန့်ချိရေးလိုအပ်ချက် အချက်အလက်များ။ ပထမဆုံးစုံစမ်းမေးမြန်းရာတွင် စကားဝှက်များ မပို့ပါနှင့်။',
    ],
    process: [
      { title: 'ပထမဗားရှင်း သတ်မှတ်ခြင်း', description: 'မရှိမဖြစ်အလုပ်များကို ဦးစားပေးပြီး ပံ့ပိုးမည့်ပလက်ဖောင်း၊ နောက်ကွယ်စနစ်အပေါ် မှီခိုမှုနှင့် ဖြန့်ချိရန် စံနှုန်းများကို သဘောတူပါသည်။' },
      { title: 'အသုံးပြုမှုနမူနာ ပြုလုပ်ခြင်း', description: 'အက်ပ်အပြည့်အစုံ မတည်ဆောက်မီ မျက်နှာပြင်တစ်ခုမှတစ်ခုသို့ စီးဆင်းပုံနှင့် အပြန်အလှန်တုံ့ပြန်မှုအခြေအနေများကို သုံးသပ်ပါသည်။' },
      { title: 'ရေးဆွဲပြီး စမ်းသပ်ခြင်း', description: 'ပြန်လည်သုံးသပ်နိုင်သော အပိုင်းငယ်များအလိုက် တည်ဆောက်ပြီး အရေးကြီးသောလုပ်ဆောင်မှုများ၊ API တုံ့ပြန်ပုံနှင့် သက်ဆိုင်ရာစက်အခြေအနေများကို စမ်းသပ်ပါသည်။' },
      { title: 'ဖြန့်ချိရေး ပြင်ဆင်ခြင်း', description: 'ဖြန့်ချိမည့် အက်ပ်ဖိုင်များတည်ဆောက်၍ တင်သွင်းရေးလိုအပ်ချက်များကို သုံးသပ်ကာ အဆင့်မြှင့်ခြင်းနှင့် လွှဲပြောင်းခြင်းလုပ်ငန်းစဉ်ကို မှတ်တမ်းတင်ပါသည်။' },
    ],
    scopeNote: 'အက်ပ်စတိုးအကောင့်၊ ပြင်ပဝန်ဆောင်မှုကြေး၊ နောက်ကွယ်စနစ်ရေးဆွဲခြင်းနှင့် စတင်အသုံးပြုပြီးနောက် အဆင့်မြှင့်မှုများအတွက် အတိုင်းအတာကို သဘောတူရန် လိုပါသည်။ အက်ပ်စတိုး၏ သုံးသပ်ဆုံးဖြတ်မှုနှင့် ခွင့်ပြုချိန်ကို သက်ဆိုင်ရာပလက်ဖောင်းပိုင်ရှင်ကသာ ဆုံးဖြတ်ပါသည်။',
    faqs: [
      { question: 'အက်ပ်တစ်ခုတည်းကို Android နှင့် iOS နှစ်မျိုးလုံးတွင် အသုံးပြုနိုင်ပါသလား။', answer: 'ပလက်ဖောင်းစုံသုံးနည်းဖြင့် ကုဒ်အများစုကို မျှဝေအသုံးပြုနိုင်ပါသည်။ သို့သော် အကြံပြုချက်မပေးမီ စက်၏လုပ်ဆောင်ချက်၊ စွမ်းဆောင်ရည်လိုအပ်ချက်နှင့် ပလက်ဖောင်းကွာခြားချက်များကို သုံးသပ်ပါသည်။ အချို့လုပ်ဆောင်ချက်များအတွက် ပလက်ဖောင်းသီးသန့် ရေးဆွဲရနိုင်ပါသည်။' },
      { question: 'လက်ရှိနောက်ကွယ်စနစ်နှင့် အက်ပ်ကို ချိတ်ဆက်နိုင်ပါသလား။', answer: 'ရှိပြီးသား API ၏ အကောင့်အတည်ပြုမှု၊ ဒေတာအသုံးပြုခွင့်၊ စာတမ်းနှင့် ယုံကြည်စိတ်ချရမှုကို သုံးသပ်နိုင်ပါသည်။ နောက်ကွယ်စနစ်ပြင်ဆင်ခြင်း သို့မဟုတ် API လမ်းကြောင်းအသစ် လိုအပ်ပါက မချိတ်ဆက်မီ ဖော်ထုတ်၍ အတိုင်းအတာသတ်မှတ်ပါသည်။' },
      { question: 'အင်တာနက်မရှိဘဲ အက်ပ်ကို အသုံးပြုနိုင်ပါသလား။', answer: 'အင်တာနက်မရှိချိန် အသုံးပြုမှုကို သီးသန့်စီစဉ်ရပါသည်။ မည်သည့်အလုပ်များ လုပ်ဆောင်နိုင်ရမည်၊ မည်သည့်ဒေတာများ အသုံးပြုနိုင်ရမည်၊ စက်ပေါ်တွင် မည်သို့သိမ်းမည်နှင့် ဒေတာပြန်လည်တစ်ပြေးညီဖြစ်အောင် ချိန်ညှိရာတွင် မကိုက်ညီမှုများကို မည်သို့ဖြေရှင်းမည်တို့ကို သဘောတူပါသည်။' },
      { question: 'အက်ပ်စတိုးသို့ တင်သွင်းပေးပါသလား။', answer: 'တင်သွင်းရန်ပြင်ဆင်ခြင်းနှင့် ကူညီပေးခြင်းကို ထည့်သွင်းနိုင်ပါသည်။ သင့်လုပ်ငန်းတွင် သင့်လျော်သော ဆော့ဖ်ဝဲရေးသားသူအကောင့်နှင့် လိုအပ်သည့်မူဝါဒအချက်အလက် ရှိရပါမည်။ စတိုးတွင် ဖြန့်ချိခွင့်ပြုမပြုကို ဆော့ဖ်ဝဲရေးဆွဲရေးအဖွဲ့မဟုတ်ဘဲ Apple သို့မဟုတ် Google က ဆုံးဖြတ်ပါသည်။' },
    ],
  },
)

burmeseServices.push(
  {
    slug: 'cloud-solutions',
    href: '/services/cloud-solutions',
    title: 'Cloud အခြေခံအဆောက်အအုံ ဝန်ဆောင်မှုများ',
    description: 'စနစ်ပတ်ဝန်းကျင်များကို ပိုမိုရှင်းလင်းစွာ သတ်မှတ်လိုသော၊ လည်ပတ်မှုအခြေအနေကို သိမြင်လိုသော၊ ဆာဗာစနစ်ကို ထိန်းသိမ်းရလွယ်ကူစေလိုသော အဖွဲ့များအတွက် Cloud အခြေခံအဆောက်အအုံ စီမံခြင်း၊ ဆာဗာပေါ် အက်ပ်တင်ခြင်းနှင့် ဖြန့်ချိမှုအလိုအလျောက်စနစ်များ တည်ဆောက်ခြင်းတို့ကို ဆောင်ရွက်ပေးပါသည်။',
    introduction: 'ဆာဗာနှင့် စနစ်တင်ခြင်းကို နောက်မှစဉ်းစားရမည့်အရာ မဖြစ်စေဘဲ ဆော့ဖ်ဝဲ၏ အစိတ်အပိုင်းအဖြစ် စနစ်တကျစီစဉ်ပါ။ အက်ပ်နှင့် လည်ပတ်မှုလိုအပ်ချက်ကို သုံးသပ်ပြီး သင့်အဖွဲ့ နားလည်ထိန်းသိမ်းနိုင်မည့် အခြေခံအဆောက်အအုံနှင့် ဗားရှင်းဖြန့်ချိရေးလုပ်ငန်းစဉ်များကို စီစဉ်ပါသည်။',
    bestFor: 'လက်တွေ့အသုံးပြုရန် စနစ်ကို ပထမဆုံးအကြိမ် တင်ရန်ပြင်ဆင်နေသော၊ ရှိပြီးသားအက်ပ်ကို ရွှေ့ပြောင်းလိုသော၊ သို့မဟုတ် အမှားဖြစ်လွယ်သည့် လူကိုယ်တိုင်လုပ်ဆောင်ရသော ဖြန့်ချိမှုအဆင့်များကို ထပ်ခါတလဲလဲ ယုံကြည်စိတ်ချစွာ လုပ်ဆောင်နိုင်သည့် လုပ်ငန်းစဉ်ဖြင့် အစားထိုးလိုသော အဖွဲ့များ။',
    scope: [
      { title: 'အခြေခံအဆောက်အအုံ သုံးသပ်ခြင်း', description: 'သင့်လျော်သော စနစ်ပတ်ဝန်းကျင်ကို သတ်မှတ်ရန် အက်ပ်မှီခိုသည့်စနစ်များ၊ အသုံးပြုမှုပုံစံ၊ ဒေတာလိုအပ်ချက်၊ လက်ရှိဆာဗာနှင့် အဖွဲ့၏ တာဝန်များကို သုံးသပ်ပါသည်။' },
      { title: 'စနစ်ပတ်ဝန်းကျင်နှင့် စနစ်တင်ခြင်း', description: 'သဘောတူထားသော ဆာဗာအရင်းအမြစ်များကို ပြင်ဆင်၍ ပရောဂျက်လိုအပ်သလို ဆော့ဖ်ဝဲရေးဆွဲရေး၊ အကြိုစမ်းသပ်ရေးနှင့် လက်တွေ့အသုံးပြုရေး ပတ်ဝန်းကျင်များကို ခွဲခြားပါသည်။' },
      { title: 'ဖြန့်ချိမှု အလိုအလျောက်စနစ်', description: 'ထပ်ခါတလဲလဲ လုပ်ဆောင်နိုင်သော ကုဒ်တည်ဆောက်မှုနှင့် စနစ်တင်ခြင်းအဆင့်များ၊ ပတ်ဝန်းကျင်သတ်မှတ်ချက်များ၊ ယခင်ဗားရှင်းသို့ ပြန်ပြောင်းနည်းနှင့် ဖြန့်ချိမှုသုံးသပ်နည်းတို့ကို တည်ဆောက်မှတ်တမ်းတင်ပါသည်။' },
      { title: 'လည်ပတ်မှုအခြေခံ စီမံခြင်း', description: 'သဘောတူထားသော စနစ်ဝန်ပမာဏနှင့် တာဝန်ခွဲဝေမှုအတွက် သင့်လျော်သော အသုံးပြုခွင့်ထိန်းချုပ်မှု၊ အက်ပ်မှတ်တမ်း၊ စောင့်ကြည့်မှုနှင့် အရန်သိမ်းဆည်းခြင်း သို့မဟုတ် ပြန်လည်ရယူခြင်းလုပ်ငန်းစဉ်များကို စီစဉ်ပါသည်။' },
    ],
    deliverables: [
      'ဝန်ဆောင်မှုများ၊ မှီခိုဆက်နွယ်မှုများနှင့် ပိုင်ရှင်၏ တာဝန်များကို ဖော်ပြသော စနစ်ပတ်ဝန်းကျင်အစီအစဉ်။',
      'သဘောတူထားသော အတိုင်းအတာအတွက် အခြေခံအဆောက်အအုံသတ်မှတ်ချက်နှင့် စနစ်တင်ခြင်းဆိုင်ရာ လုပ်ငန်းစဉ်များ။',
      'မှတ်တမ်းတင်ထားသော ပြင်ဆင်သတ်မှတ်ချက်၊ အသုံးပြုခွင့်လိုအပ်ချက်နှင့် လည်ပတ်မှုစစ်ဆေးချက်များ။',
      'ဗားရှင်းဖြန့်ချိခြင်း၊ ယခင်ဗားရှင်းသို့ ပြန်ပြောင်းရာတွင် စဉ်းစားရမည့်အချက်များနှင့် သဘောတူထားသော အရန်သိမ်းဆည်းမှု သို့မဟုတ် စောင့်ကြည့်မှုဆိုင်ရာ လုပ်ငန်းလမ်းညွှန်။',
    ],
    preparation: [
      'အက်ပ်၏ နည်းပညာဖွဲ့စည်းပုံ၊ ကုဒ်သိမ်းဆည်းရာနေရာများနှင့် လက်ရှိစနစ်တင်နည်းတို့၏ ခြုံငုံဖော်ပြချက်။',
      'မျှော်မှန်းအသုံးပြုမှု၊ ဒေတာပမာဏ၊ လည်ပတ်မှုကန့်သတ်ချက်နှင့် ကြုံတွေ့နေရသော အခက်အခဲများ။',
      'လက်ရှိ Cloud ဝန်ဆောင်မှုပေးသူ၊ အကောင့်ပိုင်ဆိုင်မှုနှင့် သတ်မှတ်လိုသော အသုံးစရိတ်ကန့်သတ်ချက်။',
      'ဒေတာလျှို့ဝှက်မှုအဆင့်၊ ပြန်လည်ရယူရန်လိုအပ်ချက်နှင့် သင့်အဖွဲ့လိုက်နာရမည့် သတ်မှတ်ချက်များ။ လိုအပ်ချက်ဆွေးနွေးစဉ် ကန့်သတ်ထားသော အသုံးပြုခွင့်ကို လုံခြုံစွာ စီစဉ်ပါ။',
    ],
    process: [
      { title: 'စနစ်ဝန်ပမာဏ သုံးသပ်ခြင်း', description: 'လက်ရှိလုပ်ဆောင်ပုံ၊ လည်ပတ်မှုကန့်သတ်ချက်နှင့် စနစ်တင်ခြင်းအပေါ် သက်ရောက်သော အန္တရာယ် သို့မဟုတ် မှီခိုမှုများကို လေ့လာပါသည်။' },
      { title: 'စနစ်ပတ်ဝန်းကျင် စီမံခြင်း', description: 'အခြေခံအဆောက်အအုံနည်းလမ်း၊ အကောင့်ပိုင်ဆိုင်မှု၊ အသုံးပြုခွင့်ပုံစံနှင့် လည်ပတ်ရေးတာဝန် နယ်နိမိတ်များကို သဘောတူပါသည်။' },
      { title: 'ပြင်ဆင်ပြီး လေ့ကျင့်စမ်းသပ်ခြင်း', description: 'အရင်းအမြစ်နှင့် ဖြန့်ချိရေးလုပ်ငန်းစဉ်များကို ပြင်ဆင်ပြီး သဘောတူထားသော ပတ်ဝန်းကျင်တွင် စနစ်တင်ခြင်းနှင့် သက်ဆိုင်ရာပြန်လည်ရယူမှုအဆင့်များကို စစ်ဆေးပါသည်။' },
      { title: 'ကူးပြောင်းပြီး မှတ်တမ်းတင်ခြင်း', description: 'ဗားရှင်းဖြန့်ချိမှု သို့မဟုတ် ရွှေ့ပြောင်းမှုကို ညှိနှိုင်းပြီး ပြင်ဆင်သတ်မှတ်မှုမှတ်စု၊ စစ်ဆေးချက်နှင့် လည်ပတ်ရေးလုပ်ငန်းစဉ်များကို လွှဲပြောင်းပေးပါသည်။' },
    ],
    scopeNote: 'Cloud အကောင့်နှင့် အသုံးပြုခများကို သဘောတူထားသော အကောင့်ပိုင်ရှင်က တာဝန်ယူရပါသည်။ အဆက်မပြတ်စောင့်ကြည့်ခြင်း၊ စနစ်ပြဿနာများကို တုံ့ပြန်ဖြေရှင်းခြင်း၊ စီမံလည်ပတ်ပေးခြင်းနှင့် ဝန်ဆောင်မှုအဆင့်အာမခံချက်တို့ အလိုအလျောက်မပါဝင်ဘဲ သီးခြားသဘောတူညီရန် လိုပါသည်။',
    faqs: [
      { question: 'အခြား Cloud ဝန်ဆောင်မှုပေးသူထံ ပြောင်းရန် လိုပါသလား။', answer: 'မဖြစ်မနေ ပြောင်းရန်မလိုပါ။ လက်ရှိစနစ်၊ စနစ်ဝန်ပမာဏ၊ အဖွဲ့၏ကျွမ်းဝင်မှုနှင့် ကန့်သတ်ချက်များကို ဦးစွာသုံးသပ်ပါသည်။ ရွှေ့ပြောင်းခြင်းထက် လက်ရှိပတ်ဝန်းကျင်ကို ပိုကောင်းအောင်လုပ်ခြင်းက ပိုသင့်လျော်နိုင်ပါသည်။' },
      { question: 'ရှိပြီးသားအက်ပ်ကို ရွှေ့ပြောင်းပေးနိုင်ပါသလား။', answer: 'မှီခိုဆက်နွယ်မှုများ၊ ဒေတာလွှဲပြောင်းရေးလိုအပ်ချက်၊ DNS နှင့် လက်ခံနိုင်သော အသုံးပြုမှုခေတ္တရပ်နားချိန်တို့ကို သုံးသပ်ပြီး ရွှေ့ပြောင်းမှုအတိုင်းအတာ သတ်မှတ်နိုင်ပါသည်။ စစ်ဆေးအတည်ပြုခြင်းနှင့် မူလစနစ်သို့ ပြန်ပြောင်းနည်းတို့ကို အစီအစဉ်တွင် ထည့်သွင်းသင့်ပြီး ဝန်ဆောင်မှုလုံးဝမရပ်နားဘဲ ရွှေ့ပြောင်းနိုင်မည်ဟု အာမမခံပါ။' },
      { question: 'Cloud လည်ပတ်မှုကုန်ကျစရိတ်ကို မည်သို့တွက်ချက်ပါသလဲ။', answer: 'ဝန်ဆောင်မှုပေးသူ၏ အသုံးပြုခနှင့် စာရင်းသွင်းကြေးများသည် တည်ဆောက်ရေးအလုပ်ခနှင့် သီးခြားဖြစ်ပါသည်။ အဓိကကုန်ကျစရိတ်ဖြစ်စေသော အချက်များနှင့် သတ်မှတ်မှုပုံစံများကို သုံးသပ်ပေးနိုင်သော်လည်း အမှန်တကယ်ကျသင့်ငွေသည် ဝန်ဆောင်မှုပေးသူနှုန်းထား၊ ဝင်ရောက်မှုပမာဏ၊ ဒေတာသိုလှောင်မှုနှင့် အသုံးပြုမှုပေါ် မူတည်ပါသည်။' },
      { question: 'အခြေခံအဆောက်အအုံအတွက် ရေရှည်ပံ့ပိုးမှု ပါဝင်ပါသလား။', answer: 'လွှဲပြောင်းရာတွင် မည်သည့်အရာများ ပြင်ဆင်ထားပြီး မည်သူက လည်ပတ်မည်ကို သတ်မှတ်ပါသည်။ ရေရှည်ပံ့ပိုးမှု၊ စောင့်ကြည့်ပေးမည့်အတိုင်းအတာ သို့မဟုတ် စနစ်ပြဿနာများကို တုံ့ပြန်ဖြေရှင်းပေးခြင်းတို့ကို သီးခြားဆွေးနွေးသဘောတူရန် လိုပါသည်။' },
    ],
  },
  {
    slug: 'custom-software',
    href: '/services/custom-software',
    title: 'လုပ်ငန်းလိုအပ်ချက်အလိုက် ဆော့ဖ်ဝဲ ရေးဆွဲခြင်း',
    description: 'ယေဘုယျလုပ်ဆောင်ချက်စာရင်းတစ်ခုအတိုင်း မဟုတ်ဘဲ သင့်အလုပ်စီးဆင်းမှု၊ အစီရင်ခံစာလိုအပ်ချက်နှင့် လက်ရှိစနစ်များအပေါ် အခြေခံသော လုပ်ငန်းသုံးဆော့ဖ်ဝဲ၊ အဖွဲ့တွင်းကိရိယာနှင့် စနစ်ချိတ်ဆက်မှုများကို ရေးဆွဲပေးပါသည်။',
    introduction: 'ပြန့်ကျဲနေသော စာရင်းဇယားများ သို့မဟုတ် မချိတ်ဆက်ထားသောကိရိယာများကို ရှင်းလင်းစွာသတ်မှတ်ထားသည့် လုပ်ငန်းစဉ်အလိုက် တည်ဆောက်ထားသော ဆော့ဖ်ဝဲဖြင့် အစားထိုးပါ။ လက်ရှိအလုပ်လုပ်ပုံမှ စတင်၍ အကျိုးအရှိဆုံး ပြောင်းလဲမှုများကို ဖော်ထုတ်ပြီး စီမံခန့်ခွဲရလွယ်ကူမည့် ပထမဗားရှင်းကို စီစဉ်ပါသည်။',
    bestFor: 'လူကိုယ်တိုင် ဆောင်ရွက်ရသော ခွင့်ပြုအတည်ပြုမှုများကို ညှိနှိုင်းနေသော၊ လည်ပတ်ရေးမှတ်တမ်းများကို ခြေရာခံနေသော၊ အစီရင်ခံစာများကို စုစည်းလိုသော သို့မဟုတ် အချက်အလက် မမျှဝေနိုင်သေးသော ကိရိယာများကို ချိတ်ဆက်လိုသော လုပ်ငန်းများ။',
    scope: [
      { title: 'အလုပ်စီးဆင်းမှု လေ့လာခြင်း', description: 'မရှိမဖြစ်လိုအပ်ချက်နှင့် နောက်မှဖြည့်နိုင်သော လုပ်ဆောင်ချက်ကို ခွဲခြားရန် အလုပ်များ၊ တာဝန်လွှဲပြောင်းမှု၊ ခြွင်းချက်နှင့် အသုံးပြုသူအခန်းကဏ္ဍများကို ပုံဖော်ပါသည်။' },
      { title: 'လုပ်ငန်းတွင်း အသုံးပြုသည့်ကိရိယာများ', description: 'မှတ်တမ်းစီမံခြင်း၊ ခွင့်ပြုအတည်ပြုခြင်း၊ အချိန်ဇယားစီစဉ်ခြင်း သို့မဟုတ် ကုန်ပစ္စည်းစာရင်းဆိုင်ရာ လုပ်ငန်းစဉ်များကဲ့သို့ သဘောတူထားသော လိုအပ်ချက်များအတွက် လုပ်ငန်းသုံးမျက်နှာပြင်များ တည်ဆောက်ပါသည်။' },
      { title: 'ဒေတာနှင့် စနစ်ချိတ်ဆက်မှု', description: 'စစ်ဆေးအတည်ပြုမှုနှင့် ပိုင်ဆိုင်မှုစည်းမျဉ်းများကို တိကျစွာသတ်မှတ်၍ ဒေတာဖွဲ့စည်းပုံ၊ တင်သွင်းခြင်း သို့မဟုတ် ထုတ်ယူခြင်းအဆင့်များနှင့် API ချိတ်ဆက်မှုများကို စီစဉ်ပါသည်။' },
      { title: 'အစီရင်ခံခြင်းနှင့် စီမံခန့်ခွဲခြင်း', description: 'သင့်အဖွဲ့ ဆုံးဖြတ်ရမည့်ကိစ္စများအပေါ် အခြေခံ၍ အသုံးဝင်သောမြင်ကွင်း၊ စစ်ထုတ်မှု၊ အခန်းကဏ္ဍအလိုက် အသုံးပြုခွင့်နှင့် အစီရင်ခံစာများကို ဖန်တီးပါသည်။' },
    ],
    deliverables: [
      'အလုပ်စီးဆင်းမှုမြေပုံ၊ ဦးစားပေးလိုအပ်ချက်များနှင့် သဘောတူထားသော လက်ခံအတည်ပြုမှုစံနှုန်းများ။',
      'သဘောတူထားသော အခန်းကဏ္ဍ၊ ဒေတာစီးဆင်းမှုနှင့် စနစ်ချိတ်ဆက်မှုများ ပါဝင်သည့် တည်ဆောက်ပြီးစနစ်။',
      'မူရင်းကုဒ်၊ စနစ်တင်ခြင်းဆိုင်ရာ လမ်းညွှန်နှင့် သဘောတူထားသော ဒေတာတင်သွင်းခြင်း သို့မဟုတ် ထုတ်ယူခြင်းကိရိယာများ။',
      'သိရှိထားသောကန့်သတ်ချက်နှင့် နောက်အဆင့်အကြံပြုချက်များပါဝင်သော အသုံးပြုသူနှင့် စီမံခန့်ခွဲသူအတွက် လွှဲပြောင်းရေးမှတ်စုများ။',
    ],
    preparation: [
      'လက်ရှိအလုပ်စီးဆင်းမှုနှင့် ထပ်တလဲလဲလုပ်ရခြင်း သို့မဟုတ် အမှားဖြစ်စေသည့် နေရာများ၏ ဖော်ပြချက်။',
      'လုပ်ငန်းစဉ်ကို အသုံးပြုသူ၊ အတည်ပြုသူ သို့မဟုတ် အစီရင်ခံသူများနှင့် ၎င်းတို့လိုအပ်သော အသုံးပြုခွင့်များ။',
      'ကိုယ်ရေးအချက်အလက်ဖယ်ထားသော ဖောင်၊ စာရင်းဇယား၊ အစီရင်ခံစာနှင့် ပုံမှန်မဟုတ်သော အခြေအနေ နမူနာများ။',
      'လက်ရှိစနစ်စာတမ်းများ၊ ဒေတာပမာဏနှင့် လိုအပ်ချက်များ၊ အသုံးပြုသူတုံ့ပြန်ချက်များအတွက် တာဝန်ရှိသူကို တိတိကျကျ သတ်မှတ်ထားခြင်း။',
    ],
    process: [
      { title: 'လုပ်ငန်းလည်ပတ်ပုံ နားလည်ခြင်း', description: 'အလုပ်ဆောင်ရွက်နေသူများနှင့်အတူ အမှန်တကယ်လုပ်ငန်းများ၊ နမူနာမှတ်တမ်းများ၊ ခြွင်းချက်နှင့် ခွင့်ပြုအတည်ပြုမှုစည်းမျဉ်းများကို သုံးသပ်ပါသည်။' },
      { title: 'အသုံးဝင်သော ပထမဗားရှင်း သတ်မှတ်ခြင်း', description: 'မတည်ဆောက်မီ အဓိကထားမည့်အတိုင်းအတာ၊ ဒေတာပုံစံ၊ အသုံးပြုခွင့်အခန်းကဏ္ဍနှင့် လက်ခံအတည်ပြုမှုစံနှုန်းများကို သဘောတူပါသည်။' },
      { title: 'တုံ့ပြန်ချက်နှင့်အတူ တည်ဆောက်ခြင်း', description: 'ပြန်လည်သုံးသပ်နိုင်ရန် လုပ်ငန်းစဉ်တစ်ခုချင်းစီ၏ လုပ်ဆောင်ချက်များကို တည်ဆောက်ပေးပို့ပြီး လက်တွေ့အသုံးပြုမှုကို ကိုယ်စားပြုသော ဒေတာနှင့် သဘောတူထားသော လုပ်ငန်းအခြေအနေများဖြင့် စမ်းသပ်ပါသည်။' },
      { title: 'မိတ်ဆက်ပြီး လွှဲပြောင်းခြင်း', description: 'ဒေတာပြင်ဆင်မှုနှင့် စတင်အသုံးပြုမှုကို စီစဉ်၍ အဓိကအလုပ်စီးဆင်းမှုများကို ရှင်းလင်းကာ စီမံခန့်ခွဲမှုနှင့် ဆက်လုပ်ရန်အချက်များကို မှတ်တမ်းတင်ပါသည်။' },
    ],
    scopeNote: 'ဒေတာသန့်စင်ခြင်း၊ ယခင်ဒေတာရွှေ့ပြောင်းခြင်း၊ ပြင်ပဆော့ဖ်ဝဲလိုင်စင်များ၊ သက်ဆိုင်ရာ ဥပဒေနှင့် စည်းမျဉ်းများအရ အထူးလိုအပ်ချက်များနှင့် ရေရှည်ပံ့ပိုးမှုတို့ကို သီးသန့်အကဲဖြတ်ရပါသည်။ ပထမဗားရှင်းတွင် အလိုအလျောက်ပါဝင်သည်ဟု မယူဆရပါ။',
    faqs: [
      { question: 'ရှိပြီးသားဆော့ဖ်ဝဲတစ်ခုကိုပဲ အသုံးပြုသင့်ပါသလား။', answer: 'တစ်ခါတစ်ရံ ရှိပြီးသားကိရိယာက ပိုသင့်လျော်ပါသည်။ လိုအပ်ချက်လေ့လာစဉ် သင့်လုပ်ငန်းစဉ်၏ မရှိမဖြစ်လိုအပ်ချက်များနှင့် ရရှိနိုင်သောရွေးချယ်စရာများကို နှိုင်းယှဉ်ပါသည်။ ထို့ကြောင့် အများသုံးလုပ်ဆောင်ချက်များကို အကြောင်းမဲ့ ပြန်ရေးခြင်းမဟုတ်ဘဲ ရှိပြီးသားကိရိယာများက မဖြည့်ဆည်းနိုင်သော အရေးပါသည့်လိုအပ်ချက်များအတွက်သာ သီးသန့်ရေးဆွဲပါသည်။' },
      { question: 'လက်ရှိစာရင်းဇယားဒေတာကို စနစ်တွင် အသုံးပြုနိုင်ပါသလား။', answer: 'နမူနာဖိုင်များကို သုံးသပ်ပြီး ဒေတာတင်သွင်းနည်း သတ်မှတ်နိုင်ပါသည်။ ရွှေ့ပြောင်းမှုအတိုင်းအတာ မသတ်မှတ်မီ မူလဒေတာအကွက်နှင့် စနစ်အသစ်၏ ဒေတာအကွက်များကို ကိုက်ညီအောင် သတ်မှတ်ပုံ၊ ထပ်နေသောမှတ်တမ်း၊ ဖြည့်သွင်းထားခြင်းမရှိသော တန်ဖိုးများနှင့် စစ်ဆေးအတည်ပြုမှုတို့ကို သုံးသပ်ရပါသည်။' },
      { question: 'ဝန်ထမ်းတစ်ဦးချင်းစီအတွက် အသုံးပြုခွင့် ကွဲပြားစွာ ပေးနိုင်ပါသလား။', answer: 'ရပါသည်။ အခန်းကဏ္ဍအလိုက် အသုံးပြုခွင့်ကို လိုအပ်ချက်တွင် ထည့်နိုင်ပါသည်။ မည်သူက အချက်အလက်ကြည့်ရှု၊ ဖန်တီး၊ ပြင်ဆင်၊ အတည်ပြု သို့မဟုတ် ထုတ်ယူနိုင်မည်ကို သတ်မှတ်ပြီး သဘောတူထားသော အလုပ်စီးဆင်းမှုများနှင့်အညီ ထိုစည်းမျဉ်းများကို စမ်းသပ်ပါသည်။' },
      { question: 'ပထမဗားရှင်းပြီးနောက် လုပ်ဆောင်ချက်များ ထပ်ထည့်နိုင်ပါသလား။', answer: 'လုပ်ငန်းတွင်းစနစ်များစွာအတွက် အဆင့်လိုက်ဆောင်ရွက်ခြင်းက လက်တွေ့ကျပါသည်။ နောက်ပိုင်းစိတ်ကူးများကို ဦးစားပေးစာရင်းတွင် ထားရှိပြီး တစ်ခုချင်းစီကို အသုံးပြုသူတုံ့ပြန်ချက်၊ ဒေတာပြောင်းလဲမှုနှင့် ထိန်းသိမ်းရေးလိုအပ်ချက်တို့ဖြင့် သုံးသပ်ပါသည်။' },
    ],
  },
)

/** Localized copy has exactly the same public shape and stable routes as English. */
export function getServices(locale: Locale): Service[] {
  return locale === 'my' ? burmeseServices : services
}