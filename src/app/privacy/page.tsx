import Link from 'next/link'
import PolicyPage, { policyMetadata } from '@/components/PolicyPage'
import { LOLI_LIMIT } from '@/lib/loli-config'
import { siteName } from '@/lib/site'

export const metadata = policyMetadata(
  'Privacy Policy',
  'How Winter Arc Myanmar handles website requests, direct contact, optional AI chat, usage cookies, and privacy choices.',
  '/privacy'
)

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy policy"
      summary="What information is handled when you browse this website, contact us, or choose to use Loli, our optional AI assistant."
      path="/privacy"
      sections={[
        {
          id: 'scope',
          title: 'Who this notice covers',
          content: (
            <p>
              This notice describes the {siteName} website. Use the contact details below to reach the website operator about privacy. Project-specific data handling should be agreed separately in writing before sharing client or end-user data.
            </p>
          ),
        },
        {
          id: 'browsing-contact',
          title: 'Browsing and direct contact',
          content: (
            <>
              <p>
                Website delivery involves technical information such as IP address, browser information, requested URLs, and request times. The hosting service may keep access, security, and error logs. There are no analytics, advertising, or tracking integrations in the current website source; this does not mean the hosting service has no logs.
              </p>
              <p>
                If you email, call, or use a linked messaging service, we receive the contact details and information you choose to share and use them to discuss your inquiry, project, or support request. Email and messaging providers may keep messages and service logs under their own terms. Following external links also involves the destination service and its privacy practices.
              </p>
            </>
          ),
        },
        {
          id: 'optional-ai',
          title: 'Optional AI chat and your choice',
          content: (
            <>
              <p>
                Loli is optional. Before sending a message, you must actively check the initially unchecked privacy acknowledgment and consent checkbox. The server requires that acknowledgment for chat requests. Your choice is held only in the current React component memory, not saved in a consent cookie or browser storage, and must be made again after a reload or remount.
              </p>
              <p>
                When you send, up to the last six conversation messages, including your current message and recent assistant replies, go through our server to APIFree.ai and the downstream model provider configured for the assistant. These messages and website instructions are used to generate a reply. The configured provider may change; contact us before using chat if you need its identity or processing terms confirmed.
              </p>
              <p>
                Do not send passwords, payment details, identity documents, sensitive personal information, confidential project material, or someone else&apos;s personal data. You can use <Link href="/#contact">direct contact</Link> instead and discuss a suitable channel for sensitive information first.
              </p>
            </>
          ),
        },
        {
          id: 'storage-retention',
          title: 'Storage, logs, and retention limits',
          content: (
            <>
              <p>
                The displayed conversation is held in React memory, not persisted to localStorage, sessionStorage, or a chat-history database by this website implementation. A reload or component remount resets that local conversation. Closing the chat panel alone does not necessarily clear it.
              </p>
              <p>
                This is not a promise that no information is stored anywhere. Hosting, APIFree.ai, the downstream model provider, and email or messaging services may retain request metadata, messages, or operational logs according to their actual configuration and terms. The operator must confirm those providers&apos; retention, deletion, model-training practices, and processing terms; no fixed retention period or no-training promise is established here. Direct correspondence may also remain in the operator&apos;s mailbox and project records.
              </p>
              <p>
                After a successful AI answer, a signed <code>loli_usage</code> cookie records a random identifier, the number of questions used, and an expiry time to enforce the {LOLI_LIMIT}-question allowance for that browser. It contains no chat text. It lasts up to 365 days from the latest successful answer, unless removed sooner. See the <Link href="/cookies">cookie inventory and controls</Link>.
              </p>
            </>
          ),
        },
        {
          id: 'purposes-providers',
          title: 'Purposes, providers, and international processing',
          content: (
            <>
              <p>
                Information is handled to deliver and secure the website, answer inquiries, generate chat replies you request, and enforce the chat allowance. The checkbox gives you a choice about optional AI sending; it is not blanket consent to unrelated uses or a substitute for identifying the lawful basis for each processing activity.
              </p>
              <p>
                Hosting, AI, email, and messaging services may process information outside your country, including outside Myanmar. The operator must confirm applicable lawful bases, processing locations, contractual safeguards, and cross-border requirements for the actual services and audience. This notice does not claim a particular certification, transfer safeguard, or universal legal compliance.
              </p>
            </>
          ),
        },
        {
          id: 'choices-rights',
          title: 'Withdrawal, requests, and your rights',
          content: (
            <>
              <p>
                Uncheck the chat consent checkbox to stop future message submissions. This does not recall a request already sent, erase provider logs, or delete an existing usage cookie. Delete the site&apos;s cookies through your browser settings to remove that cookie; reload or leave the page to clear the local chat memory. Consent is not persisted, so it is not remembered for a later visit.
              </p>
              <p>
                Depending on applicable law, you may have rights to access, correct, delete, restrict, object to processing, withdraw consent, obtain a copy of your information, or complain to a relevant authority. Contact us to ask about your information or exercise applicable rights. We may need proportionate information to verify a request and will explain any applicable limits, including records held by independent providers or required by law. Withdrawal does not undo processing already carried out lawfully.
              </p>
            </>
          ),
        },
        {
          id: 'privacy-changes',
          title: 'Changes to this notice',
          content: <p>We may update this notice when the website or its providers change. The date above identifies the latest revision; review it before sharing information through a new or changed feature.</p>,
        },
      ]}
    />
  )
}