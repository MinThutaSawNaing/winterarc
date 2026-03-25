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
- Each browser/device is limited to 3 questions using a signed HTTP-only cookie.
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
