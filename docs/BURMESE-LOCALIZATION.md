# Burmese localization guide

## Voice and readability

- Write for a Myanmar business audience, not as a word-for-word rendering of English.
- Use clear, professional Burmese with short sentences. Prefer complete sentences in descriptions and concise labels for navigation and buttons.
- Use polite written Burmese (`ပါသည်`, `နိုင်ပါသည်`) for site copy. Loli's greeting may use a warmer conversational tone; consent and privacy notices must remain precise.
- Avoid literal English metaphors, excessive noun chains, and invented technical transliterations.
- Use Unicode Myanmar text. Preserve the existing Myanmar font, line-height and letter-spacing rules.

## Shared terminology

| Meaning | Preferred wording |
| --- | --- |
| Workflow | လုပ်ငန်းစဉ် |
| User journey | အသုံးပြုပုံအဆင့်ဆင့် |
| Deliverables | ပေးအပ်မည့်ရလဒ်များ |
| Custom software | လုပ်ငန်းလိုအပ်ချက်အလိုက် ဆော့ဖ်ဝဲ |
| Handover | လွှဲပြောင်းပေးအပ်ခြင်း |
| Privacy policy | ကိုယ်ရေးအချက်အလက် မူဝါဒ |
| Terms of use | အသုံးပြုမှု စည်းကမ်းချက်များ |
| Cookie policy | ကွတ်ကီး မူဝါဒ |
| Sensitive information | အထူးကာကွယ်ရန်လိုသော အချက်အလက်များ |

Keep brand names and familiar technical terms such as Cloud, API, SEO, SaaS, Android and iOS recognizable. Explain unfamiliar terms in context rather than forcing a Burmese equivalent. Do not translate cookie identifiers, routes, URLs or code attributes.

## Meaning and release review

- Preserve service exclusions, third-party costs, ownership conditions, consent choices, retention periods and legal qualifications. Editing a translation must not introduce new promises.
- The chat allowance is tracked by a browser cookie; Burmese wording should not imply hardware-based device tracking.
- English content and stable locale routes should remain unchanged.
- Run `npm run lint`, TypeScript checks, `npm run test:locale`, `npm run test:copy` and production smoke tests after changes. The copy tests check encoding, terminology and service structure; they do not evaluate fluency.
- Before publication, ask a native Burmese reviewer to read the rendered pages on mobile and desktop, including screen-reader labels, service FAQs, the contact dialog and Loli's consent/error states. Policy translations also need approval from the policy owner; language editing is not legal validation.
- Loli's prompt requests natural Burmese, but generated responses still require separate human evaluation.