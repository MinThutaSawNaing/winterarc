import Link from 'next/link'
import PolicyPage, { policyMetadata } from '@/components/PolicyPage'
import { LOLI_LIMIT } from '@/lib/loli-config'
import { siteName } from '@/lib/site'

export const metadata = policyMetadata(
  'Terms of Use',
  'Terms for using the Winter Arc Myanmar website and optional AI assistant, separate from written project agreements and mandatory legal rights.',
  '/terms'
)

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of use"
      summary="These terms cover this website and its optional assistant. Paid work needs a separate written project agreement."
      path="/terms"
      sections={[
        {
          id: 'website-scope',
          title: 'Website information, not a project contract',
          content: (
            <>
              <p>
                These terms describe acceptable use of the {siteName} website. If you do not agree, do not use its interactive features. Nothing here removes rights that applicable law gives you regardless of these terms.
              </p>
              <p>
                Service descriptions, examples, and AI replies are general information, not a binding quote, offer, delivery commitment, or professional legal, financial, or security advice. Browsing, contacting us, or chatting with Loli does not by itself create a paid engagement. Confirm current details with us before relying on them.
              </p>
            </>
          ),
        },
        {
          id: 'project-agreements',
          title: 'Paid projects require written agreement',
          content: (
            <>
              <p>Before paid work starts, the parties should agree in writing on:</p>
              <ul>
                <li>The parties&apos; identities, scope, deliverables, dependencies, milestones, acceptance criteria, and change-request process.</li>
                <li>Fees, currency, applicable taxes, invoicing, payment dates, deposits, and any third-party service costs.</li>
                <li>Cancellation, termination, refunds, and payment for work already performed or committed costs.</li>
                <li>Ownership and licensing of deliverables, pre-existing tools, client materials, third-party components, and when any rights transfer.</li>
                <li>Confidentiality, personal-data responsibilities, hosting and account access, handover, maintenance, support scope and duration, and any service levels.</li>
                <li>Warranties, liability, applicable law, and dispute arrangements suitable for that engagement.</li>
              </ul>
              <p>
                These website terms do not set a universal refund rule, transfer project intellectual property, include ongoing support, or fix a project jurisdiction. A written project agreement governs the engagement on its agreed terms, subject to mandatory law. Ask for clarification before authorizing work or making payment.
              </p>
            </>
          ),
        },
        {
          id: 'acceptable-use',
          title: 'Use the site responsibly',
          content: (
            <ul>
              <li>Do not use the website for unlawful activity, harassment, impersonation, or sharing material you have no right to disclose.</li>
              <li>Do not introduce malicious code, overload services, probe for unauthorized access, extract secrets, or interfere with other visitors.</li>
              <li>Do not bypass usage controls, automate abusive requests, or attempt to evade the assistant&apos;s question limit.</li>
              <li>Share only information needed for an inquiry. Arrange an appropriate channel before sending confidential or sensitive material.</li>
            </ul>
          ),
        },
        {
          id: 'ai-terms',
          title: 'Loli is optional AI assistance',
          content: (
            <>
              <p>
                Loli generates replies using APIFree.ai and a configured downstream model. Replies may be inaccurate, incomplete, or out of date and are not promises about pricing, deadlines, contracts, or results. A human must confirm project details. Availability is not guaranteed, and the current free allowance is {LOLI_LIMIT} successful questions per browser usage record.
              </p>
              <p>
                Before sending, actively check the privacy acknowledgment and consent checkbox. Up to the last six messages are sent through our server for AI processing. You may uncheck it to stop future sending or use direct contact instead. The <Link href="/privacy">privacy policy</Link> and <Link href="/cookies">cookie policy</Link> explain the usage cookie, temporary memory, provider processing, and deletion limits. Do not treat AI chat as a confidential client workspace or submit sensitive information.
              </p>
            </>
          ),
        },
        {
          id: 'website-materials',
          title: 'Website materials and third-party services',
          content: (
            <>
              <p>
                Website text, graphics, code, and branding remain subject to their respective owners&apos; intellectual-property rights and any applicable licenses. You may view the site and share links for legitimate reference; no ownership or general redistribution license is granted. Uses permitted by law remain permitted. Client names, logos, and third-party marks belong to their respective owners; their appearance does not itself establish endorsement or a partnership.
              </p>
              <p>
                External websites, email, and messaging services have their own terms and privacy practices. We do not control their availability or content. Linking to a service is not a guarantee about it.
              </p>
            </>
          ),
        },
        {
          id: 'availability-rights',
          title: 'Availability, responsibility, and mandatory rights',
          content: (
            <>
              <p>
                We aim to keep website information useful but do not guarantee uninterrupted access, error-free content, security against every threat, or any business or search-ranking outcome. Features may be changed or suspended for maintenance, security, misuse, or provider availability. Keep your own copies of information important to you.
              </p>
              <p>
                To the extent permitted by applicable law, website information and the optional assistant are provided as available without additional warranties about accuracy, fitness, or availability. Responsibility for a particular loss depends on applicable law and any relevant written agreement; these terms do not impose a blanket exclusion or a fixed liability cap.
              </p>
              <p>
                Nothing here excludes or limits liability that cannot legally be excluded or limited, or waives mandatory consumer protections, remedies, or other non-waivable rights. Raise a concern using the contact details below; that does not prevent you from using any legal remedy or authority available to you. No exclusive court or governing jurisdiction is selected by these website terms.
              </p>
            </>
          ),
        },
        {
          id: 'terms-changes',
          title: 'Changes and questions',
          content: <p>We may revise these website terms as the site changes and update the date above. Revisions do not rewrite an existing written project agreement without the agreement process required by that contract and applicable law. Contact us if anything is unclear before relying on a website statement or starting a project.</p>,
        },
      ]}
    />
  )
}