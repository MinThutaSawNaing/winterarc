import Link from 'next/link'
import { notFound } from 'next/navigation'
import PolicyPage, { policyMetadata } from '@/components/PolicyPage'
import { isLocale, localizedPath } from '@/lib/i18n'
import { LOLI_LIMIT } from '@/lib/loli-config'

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return policyMetadata(
    locale === 'my' ? 'ကွတ်ကီး မူဝါဒ' : 'Cookie Policy',
    locale === 'my'
      ? 'Winter Arc Myanmar ၏ ကွတ်ကီးစာရင်း၊ ဘာသာစကားရွေးချယ်မှု၊ ရွေးချယ်အသုံးပြုနိုင်သော AI အသုံးပြုမှုကွတ်ကီး၊ ဘရောက်ဇာမှတ်ဉာဏ်နှင့် သဘောတူညီမှု ရုပ်သိမ်းရန်၊ ကွတ်ကီးဖျက်ရန် နည်းလမ်းများ။'
      : 'The Winter Arc Myanmar cookie inventory, language preference, optional AI usage cookie, browser-memory behavior, and controls for withdrawal and deletion.',
    '/cookies',
    locale
  )
}

export default async function CookiesPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <PolicyPage
      locale={locale}
      title={locale === 'my' ? 'ကွတ်ကီး မူဝါဒ' : 'Cookie policy'}
      summary={locale === 'my' ? 'ဝက်ဘ်ဆိုက်၏ ဘာသာစကားရွေးချယ်မှု ကွတ်ကီး၊ အသုံးပြုမှုကွတ်ကီးနှင့် ဘရောက်ဇာယာယီမှတ်ဉာဏ်တို့၏ စာရင်းနှင့် သင်အသုံးပြုနိုင်သော ထိန်းချုပ်နည်းများ။' : 'A practical inventory of the website’s language-preference cookie, usage cookie, and temporary browser memory, with controls you can use.'}
      path="/cookies"
      sections={locale === 'my' ? [
        {
          id: 'cookie-overview',
          title: 'မည်သည့်အရာများကို အသုံးပြုထားသနည်း',
          content: <>
            <p>ကွတ်ကီးများသည် ဝက်ဘ်ဆိုက်က သင့်ဘရောက်ဇာတွင် သိမ်းထားပြီး နောက်ပိုင်း ကိုက်ညီသော တောင်းဆိုမှုများ၌ ပြန်လည်လက်ခံရရှိသည့် တန်ဖိုးငယ်များ ဖြစ်ပါသည်။ လက်ရှိ ဝက်ဘ်ဆိုက်ရင်းမြစ်ကုဒ်တွင် စာရင်းအင်းခွဲခြမ်းစိတ်ဖြာမှု၊ ကြော်ငြာ သို့မဟုတ် ခြေရာခံစနစ် ပေါင်းစည်းထားခြင်း မရှိပါ။ အက်ပ်၏ကွတ်ကီးများကို သင်ကိုယ်တိုင်ရွေးထားသည့် ဘာသာစကားကို မှတ်မိရန်နှင့် မိမိဆန္ဒဖြင့် အသုံးပြုနိုင်သော Loli AI လက်ထောက်အတွက် အသုံးပြုပါသည်။ ကြော်ငြာ သို့မဟုတ် ဆိုက်များအကြား သုံးစွဲသူပုံစံမှတ်တမ်းတည်ဆောက်ရန် မဟုတ်ပါ။</p>
            <p>ဆိုက်ကြည့်ရှုခြင်း၊ လက်ထောက်ကို ဖွင့်ခြင်း သို့မဟုတ် ကျန်အသုံးပြုခွင့်ကို စစ်ခြင်းကြောင့် အသုံးပြုမှုကွတ်ကီး မသိမ်းပါ။ သင်ကိုယ်တိုင် စကားပြောကို ရွေးချယ်အသုံးပြုပြီး AI အဖြေ အောင်မြင်စွာ ရပြီးမှသာ ၎င်းကို သိမ်းပါသည်။ ဘာသာစကားဦးစားပေး ကွတ်ကီးကိုလည်း ဘာသာစကား ကိုယ်တိုင်ရွေးချယ်မှသာ သိမ်းပါသည်။ Hosting အခြေခံစနစ်တွင် ကိုယ်ပိုင်လုပ်ဆောင်ပုံ ရှိနိုင်သဖြင့် စီမံသူက လက်တွေ့လွှင့်တင်ထားသော ဆိုက်ပေါ်တွင် အတည်ပြုရပါမည်။ ဤစာရင်းသည် hosting ဝန်ဆောင်မှုများ၌ မှတ်တမ်းမရှိဟု ဆိုလိုခြင်း မဟုတ်ပါ။</p>
          </>,
        },
        {
          id: 'language-cookie',
          title: 'ကွတ်ကီးစာရင်း — site_language နှင့် အလိုအလျောက် ဘာသာစကားရွေးချယ်မှု',
          content: <>
            <dl className="grid gap-4 rounded-xl border border-slate-200 p-5 sm:grid-cols-[10rem_1fr]">
              <dt className="font-semibold text-slate-900">အမည် / ပေးသူ</dt>
              <dd><code>site_language</code> — ဤဝက်ဘ်ဆိုက်၏ ကိုယ်ပိုင်ကွတ်ကီး။</dd>
              <dt className="font-semibold text-slate-900">ရည်ရွယ်ချက်နှင့် ပါဝင်သည့်အချက်အလက်</dt>
              <dd>သင်ကိုယ်တိုင် ရွေးချယ်ထားသည့် ဘာသာစကားကို မှတ်မိရန် ဖြစ်ပြီး အင်္ဂလိပ်အတွက် <code>en</code> သို့မဟုတ် မြန်မာအတွက် <code>my</code> ကိုသာ သိမ်းထားပါသည်။ စကားပြောသဘောတူညီမှု မှတ်တမ်း မဟုတ်ပါ။</dd>
              <dt className="font-semibold text-slate-900">သိမ်းသည့်အချိန်</dt>
              <dd>ဘာသာစကားရွေးချယ်သည့် ခလုတ်ကို အသုံးပြု၍ သင်ကိုယ်တိုင်ရွေးချယ်မှသာ သိမ်းပါသည်။ သာမန်စာမျက်နှာကြည့်ရှုမှု သို့မဟုတ် အလိုအလျောက် ဘာသာစကားလမ်းကြောင်းရွေးမှုကြောင့် မသိမ်းပါ။</dd>
              <dt className="font-semibold text-slate-900">သက်တမ်းနှင့် ထိန်းချုပ်နည်း</dt>
              <dd>ကိုယ်တိုင်ရွေးချယ်ချိန်မှ တစ်နှစ်ကြာ တည်ရှိပါသည်။ ဘာသာစကားကို ထပ်မံရွေးချယ်၍ ပြောင်းနိုင်သလို ဘရောက်ဇာ၏ ဆိုက်ဒေတာဆက်တင်များမှ စောစီးစွာ ဖျက်နိုင်ပါသည်။</dd>
            </dl>
            <p>သိမ်းထားသော ဘာသာစကားရွေးချယ်မှု မရှိပါက ကနဦးဘာသာစကား လမ်းကြောင်းရွေးရန် hosting ဝန်ဆောင်မှုက ပေးသော နိုင်ငံအဆင့် တည်နေရာအချက်အလက်ကို အသုံးပြုနိုင်ပါသည်။ ယင်းသည် တိကျသော GPS တည်နေရာ မဟုတ်ပါ။ သင့် IP လိပ်စာတည်နေရာကို ရှာရန် ပြင်ပ IP ရှာဖွေရေးဝန်ဆောင်မှုသို့ ထပ်မံတောင်းဆိုမှု မပြုပါ။ အလိုအလျောက် လမ်းကြောင်းရွေးခြင်းတစ်ခုတည်းဖြင့် ဘာသာစကားဦးစားပေး ကွတ်ကီးကို မသိမ်းပါ။</p>
          </>,
        },
        {
          id: 'cookie-inventory',
          title: 'ကွတ်ကီးစာရင်း — loli_usage',
          content: <dl className="grid gap-4 rounded-xl border border-slate-200 p-5 sm:grid-cols-[10rem_1fr]">
            <dt className="font-semibold text-slate-900">အမည် / ပေးသူ</dt>
            <dd><code>loli_usage</code> — ဤဝက်ဘ်ဆိုက်၏ ဆာဗာက ထုတ်ပေးသော ကိုယ်ပိုင်ကွတ်ကီး။</dd>
            <dt className="font-semibold text-slate-900">ရည်ရွယ်ချက်</dt>
            <dd>ထိုဘရောက်ဇာအတွက် မေးခွန်း {LOLI_LIMIT} ခု အသုံးပြုခွင့်အနက် အောင်မြင်စွာ အသုံးပြုပြီးသော မေးခွန်းအရေအတွက်ကို မှတ်မိရန် ဖြစ်ပါသည်။ ရွေးချယ်အသုံးပြုနိုင်သော စကားပြော၏ လုပ်ဆောင်မှုဆိုင်ရာ အသုံးပြုမှုထိန်းချုပ်ချက်ဖြစ်ပြီး သဘောတူညီမှု မှတ်တမ်း မဟုတ်ပါ။</dd>
            <dt className="font-semibold text-slate-900">ပါဝင်သည့်အချက်အလက်</dt>
            <dd>ကျပန်းအမှတ်အသား၊ မေးခွန်းအရေအတွက်၊ သက်တမ်းကုန်ချိန်နှင့် မသမာပြင်ဆင်မှုကို စစ်ဆေးရန် ဒစ်ဂျစ်တယ်လက်မှတ်တို့ ပါဝင်ပါသည်။ စကားပြောစာသား၊ အီးမေးလ်လိပ်စာ သို့မဟုတ် အမည် မပါဝင်ပါ။ လက်မှတ်ထည့်ခြင်းသည် ပါဝင်သည့်အချက်အလက်ကို ကုဒ်ဝှက်ခြင်း မဟုတ်ပါ။</dd>
            <dt className="font-semibold text-slate-900">သိမ်းသည့်အချိန်</dt>
            <dd>AI အဖြေ အောင်မြင်စွာ ရပြီးမှသာ သိမ်းပါသည်။ စာမျက်နှာကြည့်ခြင်း၊ ကျန်အသုံးပြုခွင့်စစ်ခြင်း သို့မဟုတ် မအောင်မြင်သော စကားပြောတောင်းဆိုမှုကြောင့် မသိမ်းပါ။</dd>
            <dt className="font-semibold text-slate-900">သက်တမ်း</dt>
            <dd>နောက်ဆုံးအောင်မြင်သော အဖြေရချိန်မှ ၃၆၅ ရက်အထိ တည်ရှိပါသည်။ နောက်ထပ် အောင်မြင်သော အဖြေတစ်ခုက သက်တမ်းကုန်ချိန်ကို အသစ်ပြန်သတ်မှတ်ပါသည်။ ဘရောက်ဇာမှ စောစီးစွာ ဖျက်နိုင်ပါသည်။</dd>
            <dt className="font-semibold text-slate-900">သတ်မှတ်ချက်များ</dt>
            <dd><code>HttpOnly</code> (စာမျက်နှာ JavaScript မှ ဖတ်မရ)၊ လက်တွေ့အသုံးပြုထုတ်လွှင့်မှုတွင် <code>Secure</code> (HTTPS သာ)၊ <code>SameSite=Lax</code> နှင့် လမ်းကြောင်း <code>/</code> တို့ဖြစ်ပါသည်။ ကိုက်ညီသော တောင်းဆိုမှုများတွင် ဤဆိုက်ထံသာ ပို့ပြီး AI ဝန်ဆောင်မှုပေးသူထံ တိုက်ရိုက်မပို့ပါ။</dd>
          </dl>,
        },
        {
          id: 'temporary-memory',
          title: 'ယာယီမှတ်ဉာဏ်သည် သိမ်းထားသော သဘောတူညီမှု မှတ်တမ်း မဟုတ်ပါ',
          content: <>
            <p>လက်ရှိစကားပြောနှင့် မူလက အမှန်ခြစ်မထားသော စကားပြောသဘောတူညီမှု ရွေးချယ်ချက်သည် React အစိတ်အပိုင်း၏ မှတ်ဉာဏ်ထဲတွင်သာ ရှိပါသည်။ ဝက်ဘ်ဆိုက်က ၎င်းတို့ကို localStorage၊ sessionStorage သို့မဟုတ် သဘောတူညီမှုကွတ်ကီးတွင် မသိမ်းပါ။ စာမျက်နှာပြန်တင်ခြင်း သို့မဟုတ် အစိတ်အပိုင်းအသစ် ပြန်တင်ခြင်းက ၎င်းတို့ကို ပြန်လည်စတင်စေပါသည်။ စကားပြောဘောင်ကို ပိတ်လိုက်ရုံဖြင့် စာမျက်နှာဖွင့်ထားဆဲအချိန်တွင် ထိုမှတ်ဉာဏ် ကျန်ရှိနေနိုင်ပါသည်။</p>
            <p>အစမိတ်ဆက်လုပ်ဆောင်ချက်နှင့် သက်ဆိုင်သော localStorage အသုံးပြုမှု လက်ရှိတွင် မရှိပါ။ အသုံးပြုမှုကွတ်ကီးနှင့် ဘာသာစကားဦးစားပေး ကွတ်ကီးတို့သည် ယာယီစကားပြောနှင့် သဘောတူညီမှုအခြေအနေတို့နှင့် သီးခြားဖြစ်ပြီး သက်တမ်းကုန်သည်အထိ သို့မဟုတ် သင်ဖျက်သည်အထိ စာမျက်နှာပြန်တင်ပြီးနောက်လည်း ဆက်ရှိနေပါသည်။</p>
          </>,
        },
        {
          id: 'cookie-controls',
          title: 'သင့်ထိန်းချုပ်ခွင့်နှင့် သဘောတူညီမှု ရုပ်သိမ်းခြင်း',
          content: <ul>
            <li>မိမိဆန္ဒဖြင့် AI ထံ စာပို့မှုနှင့် ၎င်း၏အသုံးပြုမှုကွတ်ကီး မဖန်တီးစေရန် စကားပြောအကွက်ကို အမှန်ခြစ်မထားဘဲ စာမပို့ပါနှင့်။ ဆိုက်ကို ဆက်လက်ကြည့်ရှုနိုင်ပြီး <Link href={localizedPath(locale, '/#contact')}>တိုက်ရိုက်ဆက်သွယ်မှု</Link>ကို အသုံးပြုနိုင်ပါသည်။</li>
            <li>နောက်ထပ်စကားပြောစာ ပို့ခြင်းအတွက် ရွေးချယ်မှုကို ရုပ်သိမ်းရန် အမှန်ခြစ်ဖြုတ်ပါ။ ဆာဗာကလည်း စကားပြောစာပို့ရာတွင် ကိုယ်ရေးအချက်အလက်ဆိုင်ရာ အသိအမှတ်ပြုမှုကို လိုအပ်ပါသည်။ အမှန်ခြစ်ဖြုတ်ခြင်းသည် ပို့ပြီးသား တောင်းဆိုမှုကို မပယ်ဖျက်၊ ဝန်ဆောင်မှုပေးသူ၏ မှတ်တမ်းများကို မဖျက်သကဲ့သို့ ရှိပြီးသား ကွတ်ကီးကိုလည်း မဖယ်ရှားပါ။</li>
            <li>ရှိပြီးသား ကွတ်ကီးကို ဖယ်ရှားရန် ဘရောက်ဇာ၏ ကိုယ်ရေးအချက်အလက် သို့မဟုတ် ဆိုက်ဒေတာ ဆက်တင်များကို ဖွင့်ကာ ဤဆိုက်ကို ရှာပြီး ကွတ်ကီးများ သို့မဟုတ် ဆိုက်ဒေတာကို ဖျက်ပါ။ အသုံးပြုမှုကွတ်ကီးမှာ HttpOnly ဖြစ်သဖြင့် စာမျက်နှာက သုံးစွဲသူဘက် JavaScript ဖြင့် ဖျက်၍ မရပါ။ ပြသထားသော ကျန်အသုံးပြုခွင့်ကို အသစ်ပြန်ရယူရန်နှင့် ယာယီစကားပြောမှတ်ဉာဏ်ကို ရှင်းရန် စာမျက်နှာကို ပြန်တင်ပါ။</li>
            <li>ဘာသာစကားကို ကိုယ်တိုင်ပြန်ရွေး၍ <code>site_language</code> ကို ပြောင်းနိုင်သလို ဘရောက်ဇာဆက်တင်များမှ ဖျက်နိုင်ပါသည်။ ဖျက်ပြီးနောက် ကနဦးဘာသာစကား အလိုအလျောက်ရွေးချယ်မှု ထပ်မံသက်ရောက်နိုင်ပါသည်။ ဘာသာစကားပြောင်းခြင်းသည် စကားပြောသဘောတူညီမှု ပေးခြင်း သို့မဟုတ် ရုပ်သိမ်းခြင်း မဟုတ်ပါ။</li>
            <li>ဘရောက်ဇာတွင် ကွတ်ကီးများကို ပိတ်ပင်နိုင်ပါသည်။ လက်ထောက်၏ အသုံးပြုခွင့်အရေအတွက်ကို မှတ်မိခြင်းနှင့် ရွေးချယ်ထားသော ဘာသာစကားကို မှတ်မိခြင်းတို့သည် ရည်ရွယ်ထားသည့်အတိုင်း အလုပ်မလုပ်တော့နိုင်ပါ။ အခြားဝက်ဘ်ဆိုက်အချက်အလက်များနှင့် တိုက်ရိုက်ဆက်သွယ်မှုကို ဆက်လက်အသုံးပြုနိုင်ပါသည်။ စကားပြောကန့်သတ်ချက်ကို ရှောင်လွှဲရန် ဖျက်ခြင်း သို့မဟုတ် ပိတ်ပင်ခြင်းကို မသုံးပါနှင့်။</li>
          </ul>,
        },
        {
          id: 'cookie-provider-records',
          title: 'ကွတ်ကီးဖျက်ခြင်းသည် ဝန်ဆောင်မှုပေးသူထံရှိ အချက်အလက် ဖျက်ခြင်း မဟုတ်ပါ',
          content: <p>ဘရောက်ဇာကွတ်ကီးကို ဖယ်ရှားခြင်းသည် ကျွန်ုပ်တို့၏ ဆာဗာမှတစ်ဆင့် APIFree.ai နှင့် သတ်မှတ်ထားသော နောက်ဆက်တွဲ AI မော်ဒယ်ပေးသူထံ ပို့ပြီးသော စာများ၊ hosting၊ ဝန်ဆောင်မှုပေးသူ၊ အီးမေးလ် သို့မဟုတ် စာတိုပို့မှတ်တမ်းများကို မဖျက်ပါ။ ထိုဝန်ဆောင်မှုများသည် စီမံသူက အတည်ပြုရမည့် ၎င်းတို့၏ လက်တွေ့ဆက်တင်များနှင့် စည်းကမ်းချက်များအရ မှတ်တမ်းများကို သိမ်းထားနိုင်ပါသည်။ စီမံဆောင်ရွက်မှုအသေးစိတ်နှင့် တောင်းဆိုနိုင်သော နည်းလမ်းများအတွက် <Link href={localizedPath(locale, '/privacy')}>ကိုယ်ရေးအချက်အလက် မူဝါဒ</Link>ကို ကြည့်ပါ။ ဝက်ဘ်ဆိုက်၏ သိမ်းဆည်းမှုပုံစံ ပြောင်းလဲပါက ဤစာရင်းကို ပြင်ဆင်ပါမည်။</p>,
        },
      ] : [
        {
          id: 'cookie-overview',
          title: 'What is used',
          content: (
            <>
              <p>
                Cookies are small values a website stores in your browser and receives on later matching requests. The current website source has no analytics, advertising, or tracking integrations. Its application cookies remember your manually selected language and support the optional Loli AI assistant, not advertising or cross-site profiling.
              </p>
              <p>
                Browsing the site, opening the assistant, or checking its remaining allowance does not set this usage cookie. It is set only after a successful AI answer, following your active choice to use chat. The language-preference cookie is set only after manual language selection. Hosting infrastructure can have its own behavior, which the operator must verify on the deployed site; this inventory is not a claim that hosting services keep no logs.
              </p>
            </>
          ),
        },
        {
          id: 'language-cookie',
          title: 'Cookie inventory: site_language and automatic language routing',
          content: <>
            <dl className="grid gap-4 rounded-xl border border-slate-200 p-5 sm:grid-cols-[10rem_1fr]">
              <dt className="font-semibold text-slate-900">Name / provider</dt>
              <dd><code>site_language</code> — a first-party cookie of this website.</dd>
              <dt className="font-semibold text-slate-900">Purpose / contents</dt>
              <dd>Remembers your manually selected language, storing only <code>en</code> for English or <code>my</code> for Burmese. It is not a chat consent record.</dd>
              <dt className="font-semibold text-slate-900">When set</dt>
              <dd>Only after you manually select a language using the language switcher, not from a normal page visit or automatic language routing.</dd>
              <dt className="font-semibold text-slate-900">Duration / controls</dt>
              <dd>One year from manual selection. You can change it by selecting a language again or delete it sooner through your browser’s site-data settings.</dd>
            </dl>
            <p>When there is no saved language preference, country-level geolocation supplied by the hosting service may be used for initial language routing. This is not precise GPS location. We do not make an additional request to a third-party IP lookup service to locate your IP address. Automatic routing alone does not store a language-preference cookie.</p>
          </>,
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
                There is no active intro-related localStorage use. The usage and language-preference cookies survive a reload until they expire or you remove them, independently of the temporary chat and consent state.
              </p>
            </>
          ),
        },
        {
          id: 'cookie-controls',
          title: 'Your controls and withdrawal',
          content: (
            <ul>
              <li>Leave the chat checkbox unchecked and do not send a message to avoid optional AI sending and creation of its usage cookie. You can still browse and use <Link href={localizedPath(locale, '/#contact')}>direct contact</Link>.</li>
              <li>Uncheck the checkbox to withdraw your choice for future chat sending. The server also requires the privacy acknowledgment on chat submissions. Unchecking does not cancel an already-sent request, erase provider records, or remove an existing cookie.</li>
              <li>To remove the existing cookie, open your browser&apos;s privacy or site-data settings, find this site, and delete its cookies or site data. Because the usage cookie is HttpOnly, the page cannot remove it through client-side JavaScript. Reload the page afterward to refresh the displayed allowance and clear temporary chat memory.</li>
              <li>Change <code>site_language</code> by manually selecting a language again, or delete it in your browser settings. After deletion, initial automatic language routing may apply again. Changing language does not give or withdraw chat consent.</li>
              <li>You may block cookies in your browser. The assistant&apos;s remembered allowance and language preference may no longer work as intended; other website information and direct contact remain available. Do not use deletion or blocking to evade the chat limit.</li>
            </ul>
          ),
        },
        {
          id: 'cookie-provider-records',
          title: 'Cookie deletion is not provider-data deletion',
          content: (
            <p>
              Removing a browser cookie does not delete messages already sent through our server to APIFree.ai and the configured downstream model provider, or any host, provider, email, or messaging logs. Those services may retain records under their actual settings and terms, which the operator must confirm. See the <Link href={localizedPath(locale, '/privacy')}>privacy policy</Link> for processing details and request options. We will update this inventory if the website&apos;s storage behavior changes.
            </p>
          ),
        },
      ]}
    />
  )
}