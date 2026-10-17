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

// Shared by the service routes, homepage cards, and sitemap.
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