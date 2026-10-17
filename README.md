This is the Winter Arc Myanmar website built with [Next.js](https://nextjs.org).

## Getting Started

1. Create a local env file from the example:

```bash
cp .env.example .env.local
```

2. Add your APIFree.ai credentials:

- `APIFREE_API_KEY`: server-side key from APIFree.ai
- `LOLI_MODEL`: the Gemini model id you want to use through APIFree.ai
- `LOLI_COOKIE_SECRET`: a long random string used to sign the per-device rate-limit cookie

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Loli Assistant

- The site includes a `Loli` assistant backed by APIFree.ai's OpenAI-compatible `/v1/chat/completions` endpoint.
- The APIFree.ai key stays on the server in `src/app/api/loli/route.ts`.
- Each browser/device is limited to 6 questions using a signed HTTP-only cookie with a maximum age of 365 days.
- Before sending, visitors must actively choose AI chat after reading the provider and cookie disclosure. The API rejects requests without this acknowledgement. Chat is optional; direct contact is available without using it.
- When the limit is reached, the UI directs visitors to contact Winter Arc Myanmar by WhatsApp or email.
- Because the assistant uses a secure server route, this app must be deployed as a normal Next.js app or serverless deployment, not as `output: 'export'` static HTML.

## Notes

- Do not expose `APIFREE_API_KEY` in client-side code.
- The production site URL is defined in `src/lib/site.ts` as `https://winterarc.asia`, so `NEXT_PUBLIC_SITE_URL` is no longer needed for deployment.
- Netlify is configured to omit `NEXT_PUBLIC_SITE_URL` from secret scanning because that value is intentionally public if it still exists in your site settings.
- The per-device limit is cookie-based, so clearing cookies will reset the limit.
- You can override the assistant behavior with `LOLI_SYSTEM_PROMPT` if you want a stricter or more branded personality prompt.

## Commands

```bash
npm run dev
npm run lint
npm run build
```

For live HTTP regression tests, start the production server with `npm run start -- --port 3100`, then run `npm run test:smoke` in a second terminal. Set `TEST_BASE_URL` to test another deployment. These tests verify public routes, metadata, security headers, crawler files and rejected AI requests without sending messages to an AI provider.

## Launch, policies and search visibility

Read `docs/LAUNCH-CHECKLIST.md` before publishing. Privacy, terms and cookie pages describe the implementation, but are not a legal certification. The business operator must confirm its legal identity, applicable jurisdictions, provider arrangements and actual retention practices.

- Service landing pages are available under `/services`, with unique metadata and structured data.
- `/sitemap.xml` lists the homepage, services and policy pages; `/robots.txt` references it.
- Set `GOOGLE_SITE_VERIFICATION` to the Google Search Console HTML verification token if using URL-prefix verification. Domain-property DNS verification is also possible and does not need this variable. Rebuild after changing the token.
- The root layout no longer mounts the blocking brand intro or animated snowfall. Content is available immediately and with JavaScript disabled.
- Image optimization uses the Next.js image endpoint. Deploy using a Next.js-compatible runtime, not a static export.
- Verify production headers and any host-injected tracking separately; infrastructure settings are outside this repository.
- Technical SEO cannot guarantee indexing, a #1 ranking, or continuous visibility. Deployment and Search Console submission require access to the hosting/domain and Google account.
