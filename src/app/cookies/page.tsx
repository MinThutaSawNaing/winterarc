import Link from 'next/link'
import PolicyPage, { policyMetadata } from '@/components/PolicyPage'
import { LOLI_LIMIT } from '@/lib/loli-config'

export const metadata = policyMetadata(
  'Cookie Policy',
  'The Winter Arc Myanmar cookie inventory, optional AI usage cookie, browser-memory behavior, and controls for withdrawal and deletion.',
  '/cookies'
)

export default function CookiesPage() {
  return (
    <PolicyPage
      title="Cookie policy"
      summary="A practical inventory of the website’s usage cookie and temporary browser memory, with controls you can use."
      path="/cookies"
      sections={[
        {
          id: 'cookie-overview',
          title: 'What is used',
          content: (
            <>
              <p>
                Cookies are small values a website stores in your browser and receives on later matching requests. The current website source has no analytics, advertising, or tracking integrations. Its application cookie is used for the optional Loli AI assistant, not for advertising or cross-site profiling.
              </p>
              <p>
                Browsing the site, opening the assistant, or checking its remaining allowance does not set this usage cookie. It is set only after a successful AI answer, following your active choice to use chat. Hosting infrastructure can have its own behavior, which the operator must verify on the deployed site; this inventory is not a claim that hosting services keep no logs.
              </p>
            </>
          ),
        },
        {
          id: 'cookie-inventory',
          title: 'Cookie inventory: loli_usage',
          content: (
            <dl className="grid gap-4 rounded-xl border border-slate-200 p-5 sm:grid-cols-[10rem_1fr]">
              <dt className="font-semibold text-slate-900">Name / provider</dt>
              <dd><code>loli_usage</code> — first-party cookie issued by this website&apos;s server.</dd>
              <dt className="font-semibold text-slate-900">Purpose</dt>
              <dd>Remembers successful questions used toward the {LOLI_LIMIT}-question allowance for the browser. It is functional usage control for optional chat, not a consent record.</dd>
              <dt className="font-semibold text-slate-900">Contents</dt>
              <dd>A random identifier, question count, expiry timestamp, and a signature to detect tampering. No conversation text, email address, or name is included. Signing does not encrypt the contents.</dd>
              <dt className="font-semibold text-slate-900">When set</dt>
              <dd>After a successful AI answer only; not on a page visit, allowance check, or unsuccessful chat request.</dd>
              <dt className="font-semibold text-slate-900">Duration</dt>
              <dd>Up to 365 days after the latest successful answer. Another successful answer renews the expiry. You can delete it sooner in your browser.</dd>
              <dt className="font-semibold text-slate-900">Attributes</dt>
              <dd><code>HttpOnly</code> (not readable by page JavaScript), <code>Secure</code> in production (HTTPS only), <code>SameSite=Lax</code>, and path <code>/</code>. It is sent to this site on matching requests, not directly to the AI provider.</dd>
            </dl>
          ),
        },
        {
          id: 'temporary-memory',
          title: 'Temporary memory is not a saved consent record',
          content: (
            <>
              <p>
                The current conversation and the initially unchecked chat consent choice live only in React component memory. The website does not save them in localStorage, sessionStorage, or a consent cookie. A page reload or component remount resets them; simply closing the chat panel may leave that memory intact while the page remains open.
              </p>
              <p>
                There is no active intro-related localStorage use. The usage cookie survives a reload until it expires or you remove it, independently of the temporary chat and consent state.
              </p>
            </>
          ),
        },
        {
          id: 'cookie-controls',
          title: 'Your controls and withdrawal',
          content: (
            <ul>
              <li>Leave the chat checkbox unchecked and do not send a message to avoid optional AI sending and creation of its usage cookie. You can still browse and use <Link href="/#contact">direct contact</Link>.</li>
              <li>Uncheck the checkbox to withdraw your choice for future chat sending. The server also requires the privacy acknowledgment on chat submissions. Unchecking does not cancel an already-sent request, erase provider records, or remove an existing cookie.</li>
              <li>To remove the existing cookie, open your browser&apos;s privacy or site-data settings, find this site, and delete its cookies or site data. Because it is HttpOnly, the page cannot remove it through client-side JavaScript. Reload the page afterward to refresh the displayed allowance and clear temporary chat memory.</li>
              <li>You may block cookies in your browser. The assistant&apos;s remembered allowance may no longer work as intended; other website information and direct contact remain available. Do not use deletion or blocking to evade the chat limit.</li>
            </ul>
          ),
        },
        {
          id: 'cookie-provider-records',
          title: 'Cookie deletion is not provider-data deletion',
          content: (
            <p>
              Removing a browser cookie does not delete messages already sent through our server to APIFree.ai and the configured downstream model provider, or any host, provider, email, or messaging logs. Those services may retain records under their actual settings and terms, which the operator must confirm. See the <Link href="/privacy">privacy policy</Link> for processing details and request options. We will update this inventory if the website&apos;s storage behavior changes.
            </p>
          ),
        },
      ]}
    />
  )
}