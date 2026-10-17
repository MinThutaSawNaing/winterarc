# Website launch checklist

Last updated: October 17, 2026

Production origin: https://winterarc.asia

This is an operator verification checklist, not evidence that these checks have passed or a legal-compliance certification. Leave items unchecked until the deployed configuration and supporting records have been reviewed. Do not treat the policy publication date as approval to launch.

## Operator identity and legal review — launch gates

- [ ] Confirm and document the actual individual or legal entity operating the site and entering project agreements. Publish the verified operator identity and legally required contact/address disclosures. Do not infer a registered company, registration number, or registered office from the Winter Arc Myanmar brand or the general contact location.
- [ ] Verify the existing public contact routes: winterarcmyanmar@yahoo.com, +95 9 977 144 320, and the links in `src/lib/site.ts`. Confirm the operator can receive privacy requests without promising an unverified response time.
- [ ] Obtain jurisdiction-specific counsel for the operator's location, intended customer markets, consumer rights, privacy/electronic communications requirements, international services, and any mandatory website disclosures. Do not assume one jurisdiction's requirements apply universally or that a checkbox alone establishes compliance.
- [ ] Confirm a written project-agreement process identifying the actual contracting parties. Agree scope, acceptance, fees/currency/taxes, payment, cancellation/refunds, intellectual property/licenses, confidentiality, data responsibilities, support, liability, and dispute arrangements in writing. Preserve mandatory rights.
- [ ] Review `/privacy`, `/cookies`, and `/terms` against actual operations and counsel's advice. Resolve missing identity and provider/retention details before enabling processing that requires them; revise notices when facts change rather than inventing assurances.

## Actual privacy operations and providers — launch gates

- [ ] Inventory actual personal-data flows: hosting and request/error/security logs, direct email and messaging, project records, chat requests, the usage cookie, and any infrastructure-added cookies or telemetry. Inspect deployed network requests and browser storage, not just application source.
- [ ] Record the lawful basis and purpose for each processing activity under applicable law, including optional AI sending, usage-limit storage, inquiries, security logs, and project administration. Review whether consent is appropriate and how withdrawal and any required evidence are handled; the application does not persist a consent record. Do not silently add consent tracking that contradicts the notices.
- [ ] Confirm the actual host, email/messaging providers, APIFree.ai service, and the downstream model/provider selected by `LOLI_MODEL`. Review official terms, privacy notices, data-processing agreements where required, subprocessors, permitted uses, and whether prompts/replies are retained, reviewed, or used for training. Do not assume no training or zero retention.
- [ ] Establish actual retention and deletion rules for each data category and provider: host/security/error logs, AI prompts/replies and metadata, mailbox messages, inquiries, project records, and backups. Record the configured periods, legal reasons, deletion process, and exceptions. Confirm them with providers and update public notices with verified details where required. The cookie's 365-day lifetime is not a retention period for all data.
- [ ] Review international processing locations, downstream transfers, applicable cross-border restrictions, and any required contractual safeguards. Confirm rather than claim a certification or transfer mechanism that has not been established.
- [ ] Set a workable privacy-request process: identity checks proportional to the request, access/correction/deletion/objection/withdrawal handling, provider escalation, applicable legal deadlines, lawful exceptions, and complaints. Do not request sensitive identity documents by default.
- [ ] Assign responsibility for security incidents, access controls, secret rotation, log review, deletion follow-through, and updating notices when providers or features change. Keep chat content out of added diagnostics unless specifically assessed and disclosed.

## Chat consent, storage, and security — deployed acceptance tests

- [ ] On a clean browser profile, confirm no `loli_usage` cookie is set by a page visit, opening the assistant, its GET allowance check, or a failed request. Confirm there is no active BrandIntro localStorage access and no analytics/tracking integration or unexpected third-party call.
- [ ] Confirm the privacy acknowledgment and consent checkbox starts **unchecked**, has an accessible label and a working privacy-policy link, and explains AI sending and usage-cookie behavior before the first message. Suggestions and keyboard submit must not bypass it.
- [ ] With consent unchecked, confirm the client sends no chat message. Test POST `/api/loli` directly with missing, false, and non-boolean `privacyAcknowledged`; all must be rejected without calling the AI provider or setting a cookie. Only `privacyAcknowledged: true` passes this gate, subject to other validation.
- [ ] Check the box and submit a non-sensitive test prompt. Confirm no more than the last six conversation messages go through the server to APIFree.ai and the configured downstream model, alongside the system instructions. Do not expose provider keys or signing secrets in browser bundles, responses, or logs.
- [ ] After a successful answer, inspect `loli_usage`: signed value, random identifier/question count/expiry only, no chat text, `HttpOnly`, `SameSite=Lax`, `Secure` in production, path `/`, and maximum age 31,536,000 seconds (365 days). Confirm renewal occurs only after another successful answer and the six-question allowance is enforced.
- [ ] Uncheck consent after a successful answer. Confirm it stops future submissions without claiming to recall an in-flight request, delete provider logs, or remove the existing usage cookie. Verify direct contact remains available.
- [ ] Reload/remount: confirm chat and consent reset, consent is again unchecked, no consent/chat localStorage or sessionStorage appears, and an existing usage cookie still determines the allowance. Closing the panel alone need not clear React memory.
- [ ] Delete this site's cookies through browser settings and reload. Confirm the cookie is gone and the displayed allowance is refreshed. Check cookie blocking and provider failure states are understandable, accessible, and offer direct contact.
- [ ] Exercise malformed messages, over-limit requests, unavailable provider, timeout, and missing server configuration. Confirm no successful-answer cookie is issued on failure and no sensitive upstream error details leak.
- [ ] Verify production HTTPS, deployed origin controls, secret configuration, and host/platform logs. If a test reveals behavior different from the notices, fix the implementation or revise the notices before launch.

## Content, assets, and permissions

- [ ] Substantiate public experience, delivery, client-count, portfolio, and performance claims. Remove or qualify claims that cannot be verified; make no guaranteed business results or search-ranking promise.
- [ ] Obtain and record client permission for portfolio work, names, logos, screenshots, and case-study details, including any confidential information shown.
- [ ] Obtain permission for testimonials and verify attribution and wording. Check permissions remain valid for the intended public use; do not fabricate quotes or imply an endorsement that was not granted.
- [ ] Verify licenses/permissions for artwork, fonts, photographs, animations, code, and other third-party assets. Ensure attribution or license obligations are met and any client-deliverable rights are separately agreed.
- [ ] Check email, phone, WhatsApp, Facebook, home/contact links, policy links, mobile layout, keyboard navigation, focus visibility, readable contrast, and the skip link. Policy pages must work independently without the primary home-page header.

## Metadata, crawling, and Search Console

- [ ] Confirm production pages return successful status codes over HTTPS and resolve consistently to the chosen https://winterarc.asia origin. Review redirects, robots directives, and accidental `noindex` or authentication before enabling indexing.
- [ ] Inspect rendered `/privacy`, `/terms`, and `/cookies` metadata: unique full titles/descriptions, canonical URL equal to the full production origin plus path, matching Open Graph and Twitter titles/descriptions/page URLs, and absolute image URL `https://winterarc.asia/opengraph-image`. Verify the image endpoint returns a usable image and social previews do not fall back to homepage metadata.
- [ ] Check `https://winterarc.asia/robots.txt` and `https://winterarc.asia/sitemap.xml` are reachable, correct, and consistent with intended public URLs and canonical routes. Ensure intended policy URLs are included in the sitemap, and dates reflect real changes rather than invented activity.
- [ ] In Google Search Console, create or select the **Domain property** for `winterarc.asia`. Add Google's issued DNS verification TXT record with the DNS provider, allow propagation, and confirm ownership. Keep the record in place; never invent a verification token. A site HTML verification environment variable is not a replacement for Domain-property DNS verification.
- [ ] Submit the sitemap at **https://winterarc.asia/sitemap.xml** in the verified property's Sitemaps report and review processing errors. Submission does not guarantee crawling or indexing.
- [ ] Use Search Console **URL Inspection** for the homepage and each policy URL. Run a live test, inspect crawl/index eligibility and declared versus Google-selected canonical URLs where available, and request indexing for eligible new/updated pages as appropriate.
- [ ] Recheck Search Console indexing and sitemap reports after launch. Investigate exclusions and crawl errors rather than repeatedly submitting unchanged URLs. Neither this implementation, sitemap submission, nor URL inspection guarantees indexing, a ranking position, traffic, or a delivery date for search results.

## Release evidence

- [ ] Run the established lint, TypeScript, and production build checks; record exact commands and results. Separate code failures from environment/network failures and do not mark unrun checks as passed.
- [ ] Record the release revision, deployment URL/date, reviewer, tested browser/device coverage, provider/configuration review, and unresolved issues without including API keys or personal test content.
- [ ] Do a final deployed smoke test of `/`, `/#contact`, `/privacy`, `/terms`, `/cookies`, the Open Graph image, robots, sitemap, and the complete opt-in/withdrawal chat flow.
- [ ] Resolve launch-blocking legal/privacy gaps and failed acceptance tests before publishing or enabling optional AI. Record approval only after the responsible operator has reviewed the evidence.