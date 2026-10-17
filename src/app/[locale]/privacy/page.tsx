import Link from 'next/link'
import { notFound } from 'next/navigation'
import PolicyPage, { policyMetadata } from '@/components/PolicyPage'
import { isLocale, localizedPath } from '@/lib/i18n'
import { LOLI_LIMIT } from '@/lib/loli-config'
import { siteName } from '@/lib/site'

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return policyMetadata(
    locale === 'my' ? 'ကိုယ်ရေးအချက်အလက် မူဝါဒ' : 'Privacy Policy',
    locale === 'my'
      ? 'ဝက်ဘ်ဆိုက် တောင်းဆိုမှုများ၊ တိုက်ရိုက်ဆက်သွယ်မှု၊ ရွေးချယ်အသုံးပြုနိုင်သော AI စကားပြော၊ ကွတ်ကီးများနှင့် ကိုယ်ရေးအချက်အလက်ဆိုင်ရာ ရွေးချယ်ခွင့်များကို Winter Arc Myanmar က ကိုင်တွယ်ပုံ။'
      : 'How Winter Arc Myanmar handles website requests, direct contact, optional AI chat, usage cookies, and privacy choices.',
    '/privacy',
    locale
  )
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <PolicyPage
      locale={locale}
      title={locale === 'my' ? 'ကိုယ်ရေးအချက်အလက် မူဝါဒ' : 'Privacy policy'}
      summary={locale === 'my' ? 'ဤဝက်ဘ်ဆိုက်ကို ကြည့်ရှုခြင်း၊ ကျွန်ုပ်တို့ထံ ဆက်သွယ်ခြင်း သို့မဟုတ် မိမိဆန္ဒဖြင့် အသုံးပြုနိုင်သော AI လက်ထောက် Loli ကို ရွေးချယ်အသုံးပြုခြင်းတို့တွင် မည်သည့်အချက်အလက်များကို ကိုင်တွယ်သည်ကို ရှင်းပြထားပါသည်။' : 'What information is handled when you browse this website, contact us, or choose to use Loli, our optional AI assistant.'}
      path="/privacy"
      sections={locale === 'my' ? [
        {
          id: 'scope',
          title: 'ဤအသိပေးချက်၏ အကျုံးဝင်မှု',
          content: <p>ဤအသိပေးချက်သည် {siteName} ဝက်ဘ်ဆိုက်အကြောင်းကို ဖော်ပြပါသည်။ ကိုယ်ရေးအချက်အလက်ဆိုင်ရာ ကိစ္စများအတွက် အောက်ပါဆက်သွယ်ရန် အချက်အလက်များမှတစ်ဆင့် ဝက်ဘ်ဆိုက်စီမံသူကို ဆက်သွယ်ပါ။ ဖောက်သည် သို့မဟုတ် အသုံးပြုသူတို့၏ အချက်အလက်များကို မမျှဝေမီ ပရောဂျက်အလိုက် အချက်အလက်ကိုင်တွယ်ပုံကို စာဖြင့် သီးခြားသဘောတူထားသင့်ပါသည်။</p>,
        },
        {
          id: 'browsing-contact',
          title: 'ဝက်ဘ်ဆိုက်ကြည့်ရှုခြင်းနှင့် တိုက်ရိုက်ဆက်သွယ်ခြင်း',
          content: <>
            <p>ဝက်ဘ်ဆိုက်ကို ပေးပို့ပြသရန် IP လိပ်စာ၊ ဘရောက်ဇာအချက်အလက်၊ တောင်းဆိုထားသော URL များနှင့် တောင်းဆိုချိန်တို့ကဲ့သို့ နည်းပညာဆိုင်ရာ အချက်အလက်များကို အသုံးပြုရပါသည်။ ဝက်ဘ်ဆိုက် hosting ဝန်ဆောင်မှုသည် ဝင်ရောက်မှု၊ လုံခြုံရေးနှင့် အမှားမှတ်တမ်းများကို သိမ်းထားနိုင်ပါသည်။ လက်ရှိဝက်ဘ်ဆိုက် ရင်းမြစ်ကုဒ်တွင် စာရင်းအင်းခွဲခြမ်းစိတ်ဖြာမှု၊ ကြော်ငြာ သို့မဟုတ် ခြေရာခံစနစ် ပေါင်းစည်းထားခြင်း မရှိပါ။ သို့သော် hosting ဝန်ဆောင်မှု၌ မှတ်တမ်းများ မရှိဟု ဆိုလိုခြင်း မဟုတ်ပါ။</p>
            <p>သင်က အီးမေးလ်ပို့ခြင်း၊ ဖုန်းခေါ်ခြင်း သို့မဟုတ် ချိတ်ဆက်ထားသည့် စာတိုပို့ဝန်ဆောင်မှုကို အသုံးပြုခြင်းပြုပါက သင်ရွေးချယ်မျှဝေသော ဆက်သွယ်ရန် အချက်အလက်နှင့် အခြားအချက်အလက်များကို ကျွန်ုပ်တို့ လက်ခံရရှိပြီး သင့်မေးမြန်းချက်၊ ပရောဂျက် သို့မဟုတ် အကူအညီတောင်းဆိုချက်ကို ဆွေးနွေးရန် အသုံးပြုပါသည်။ အီးမေးလ်နှင့် စာတိုပို့ဝန်ဆောင်မှုပေးသူများသည် ၎င်းတို့၏ ကိုယ်ပိုင်စည်းကမ်းချက်များအရ စာများနှင့် ဝန်ဆောင်မှုမှတ်တမ်းများကို သိမ်းထားနိုင်ပါသည်။ ပြင်ပလင့်ခ်များကို ဖွင့်သည့်အခါ သက်ဆိုင်ရာ ဝန်ဆောင်မှုနှင့် ၎င်း၏ ကိုယ်ရေးအချက်အလက်ဆိုင်ရာ လုပ်ထုံးလုပ်နည်းများလည်း ပါဝင်လာပါသည်။</p>
          </>,
        },
        {
          id: 'language-location',
          title: 'ဘာသာစကား ရွေးချယ်မှုနှင့် နိုင်ငံအဆင့် တည်နေရာ',
          content: <>
            <p>သင်က ဘာသာစကားကို ကိုယ်တိုင်ရွေးချယ်မှသာ <code>site_language</code> ကွတ်ကီးကို သင့်ရွေးချယ်မှု မှတ်မိရန် တစ်နှစ်ကြာ သိမ်းထားပါသည်။ ၎င်း၏တန်ဖိုးမှာ အင်္ဂလိပ်အတွက် <code>en</code> သို့မဟုတ် မြန်မာအတွက် <code>my</code> ဖြစ်သည်။ စာမျက်နှာကို ကြည့်ရှုရုံ သို့မဟုတ် အလိုအလျောက် ဘာသာစကားရွေးပေးခြင်းကြောင့် ဤဦးစားပေးကွတ်ကီးကို မသိမ်းပါ။</p>
            <p>သိမ်းထားသော ဘာသာစကားရွေးချယ်မှု မရှိပါက ကနဦးဘာသာစကား လမ်းကြောင်းရွေးရန် hosting ဝန်ဆောင်မှုက ပေးသော နိုင်ငံအဆင့် တည်နေရာအချက်အလက်ကို အသုံးပြုနိုင်ပါသည်။ ယင်းသည် တိကျသော GPS တည်နေရာ မဟုတ်သကဲ့သို့ သင့် IP လိပ်စာကို ရှာဖွေရန် ပြင်ပ IP ရှာဖွေရေးဝန်ဆောင်မှုသို့ ထပ်မံတောင်းဆိုမှုလည်း မပြုပါ။ အလိုအလျောက် လမ်းကြောင်းရွေးခြင်းတစ်ခုတည်းဖြင့် <code>site_language</code> ကို မသိမ်းပါ။ ဘာသာစကားကို အချိန်မရွေး ကိုယ်တိုင်ပြောင်းနိုင်ပြီး ကွတ်ကီးကို ဘရောက်ဇာဆက်တင်များမှ ဖျက်နိုင်ပါသည်။</p>
          </>,
        },
        {
          id: 'optional-ai',
          title: 'မိမိဆန္ဒဖြင့် အသုံးပြုနိုင်သော AI စကားပြောနှင့် သင့်ရွေးချယ်ခွင့်',
          content: <>
            <p>Loli ကို မဖြစ်မနေ အသုံးပြုရန် မလိုပါ။ စာမပို့မီ မူလက အမှန်ခြစ်မထားသော ကိုယ်ရေးအချက်အလက်ဆိုင်ရာ အသိအမှတ်ပြုမှုနှင့် သဘောတူညီမှု အကွက်ကို သင်ကိုယ်တိုင် အမှန်ခြစ်ရပါမည်။ စကားပြောတောင်းဆိုမှုများအတွက် ဆာဗာကလည်း ထိုအသိအမှတ်ပြုမှုကို လိုအပ်ပါသည်။ သင့်ရွေးချယ်မှုကို လက်ရှိ React အစိတ်အပိုင်း၏ ယာယီမှတ်ဉာဏ်ထဲတွင်သာ ထားပြီး သဘောတူညီမှုကွတ်ကီး သို့မဟုတ် ဘရောက်ဇာသိုလှောင်မှုတွင် မသိမ်းပါ။ စာမျက်နှာပြန်တင်ခြင်း သို့မဟုတ် အစိတ်အပိုင်းကို အသစ်ပြန်တင်ခြင်း ပြုလုပ်ပြီးနောက် ထပ်မံရွေးချယ်ရပါမည်။</p>
            <p>သင်စာပို့သောအခါ လက်ရှိစာနှင့် လတ်တလော လက်ထောက်အဖြေများအပါအဝင် နောက်ဆုံးစကားပြောစာ အများဆုံး ခြောက်စောင်ကို ကျွန်ုပ်တို့၏ ဆာဗာမှတစ်ဆင့် APIFree.ai နှင့် လက်ထောက်အတွက် သတ်မှတ်ထားသော နောက်ဆက်တွဲ AI မော်ဒယ်ဝန်ဆောင်မှုပေးသူထံ ပို့ပါသည်။ အဖြေထုတ်ရန် ထိုစာများနှင့် ဝက်ဘ်ဆိုက်၏ ညွှန်ကြားချက်များကို အသုံးပြုပါသည်။ သတ်မှတ်ထားသော ဝန်ဆောင်မှုပေးသူသည် ပြောင်းလဲနိုင်ပါသည်။ ၎င်း၏အမည် သို့မဟုတ် အချက်အလက်စီမံဆောင်ရွက်မှု စည်းကမ်းချက်များကို အတည်ပြုလိုပါက စကားပြောကို မသုံးမီ ကျွန်ုပ်တို့ထံ ဆက်သွယ်ပါ။</p>
            <p>စကားဝှက်၊ ငွေပေးချေမှုအချက်အလက်၊ သက်သေခံစာရွက်စာတမ်း၊ ထိရှလွယ်သော ကိုယ်ရေးအချက်အလက်၊ လျှို့ဝှက်ပရောဂျက်အကြောင်းအရာ သို့မဟုတ် အခြားသူ၏ ကိုယ်ရေးအချက်အလက်ကို မပို့ပါနှင့်။ ယင်းအစား <Link href={localizedPath(locale, '/#contact')}>တိုက်ရိုက်ဆက်သွယ်ပြီး</Link> ထိရှလွယ်သော အချက်အလက်များအတွက် သင့်လျော်သည့် ဆက်သွယ်ရေးလမ်းကြောင်းကို ဦးစွာဆွေးနွေးနိုင်ပါသည်။</p>
          </>,
        },
        {
          id: 'storage-retention',
          title: 'သိမ်းဆည်းမှု၊ မှတ်တမ်းများနှင့် သိမ်းဆည်းကာလဆိုင်ရာ ကန့်သတ်ချက်များ',
          content: <>
            <p>ပြသထားသော စကားပြောမှတ်တမ်းကို React မှတ်ဉာဏ်တွင်သာ ထားပါသည်။ ဤဝက်ဘ်ဆိုက်၏ အကောင်အထည်ဖော်ထားပုံအရ localStorage၊ sessionStorage သို့မဟုတ် စကားပြောမှတ်တမ်း ဒေတာဘေ့စ်တွင် အမြဲတမ်း မသိမ်းပါ။ စာမျက်နှာ ပြန်တင်ခြင်း သို့မဟုတ် အစိတ်အပိုင်း အသစ်ပြန်တင်ခြင်းက ထိုစက်တွင်းစကားပြောကို ပြန်လည်စတင်စေပါသည်။ စကားပြောဘောင်ကို ပိတ်လိုက်ရုံဖြင့် ယင်းမှတ်ဉာဏ် ရှင်းသွားမည်ဟု မဆိုနိုင်ပါ။</p>
            <p>မည်သည့်နေရာတွင်မျှ အချက်အလက် မသိမ်းထားဟူသော ကတိမဟုတ်ပါ။ Hosting၊ APIFree.ai၊ နောက်ဆက်တွဲ AI မော်ဒယ်ပေးသူ၊ အီးမေးလ် သို့မဟုတ် စာတိုပို့ဝန်ဆောင်မှုများသည် ၎င်းတို့၏ လက်တွေ့ပြင်ဆင်သတ်မှတ်မှုများနှင့် စည်းကမ်းချက်များအရ တောင်းဆိုမှုဆိုင်ရာ အချက်အလက်၊ စာများ သို့မဟုတ် လုပ်ငန်းလည်ပတ်မှု မှတ်တမ်းများကို သိမ်းထားနိုင်ပါသည်။ စီမံသူသည် ထိုဝန်ဆောင်မှုပေးသူတို့၏ သိမ်းဆည်းမှု၊ ဖျက်သိမ်းမှု၊ မော်ဒယ်လေ့ကျင့်ရေးအတွက် အသုံးပြုပုံနှင့် စီမံဆောင်ရွက်မှု စည်းကမ်းချက်များကို အတည်ပြုရပါမည်။ ဤနေရာတွင် ပုံသေသိမ်းဆည်းကာလ သို့မဟုတ် မော်ဒယ်လေ့ကျင့်ရေးအတွက် အသုံးမပြုမည်ဟူသော ကတိ မပေးထားပါ။ တိုက်ရိုက်ပေးပို့ဆက်သွယ်ထားသော စာများသည်လည်း စီမံသူ၏ စာပုံးနှင့် ပရောဂျက်မှတ်တမ်းများတွင် ကျန်ရှိနိုင်ပါသည်။</p>
            <p>AI အဖြေ အောင်မြင်စွာ ရရှိပြီးနောက် ဒစ်ဂျစ်တယ်လက်မှတ်ပါသော <code>loli_usage</code> ကွတ်ကီးက ကျပန်းအမှတ်အသား၊ အသုံးပြုပြီး မေးခွန်းအရေအတွက်နှင့် သက်တမ်းကုန်ချိန်ကို မှတ်သားပြီး ထိုဘရောက်ဇာအတွက် မေးခွန်း {LOLI_LIMIT} ခု ကန့်သတ်ချက်ကို ထိန်းသိမ်းပါသည်။ စကားပြောစာသား မပါဝင်ပါ။ စောစီးစွာ မဖျက်ပါက နောက်ဆုံးအောင်မြင်သော အဖြေရချိန်မှ ၃၆၅ ရက်အထိ တည်ရှိပါသည်။ <Link href={localizedPath(locale, '/cookies')}>ကွတ်ကီးစာရင်းနှင့် ထိန်းချုပ်နည်းများ</Link>ကို ကြည့်ပါ။</p>
          </>,
        },
        {
          id: 'purposes-providers',
          title: 'ရည်ရွယ်ချက်များ၊ ဝန်ဆောင်မှုပေးသူများနှင့် နိုင်ငံတကာ စီမံဆောင်ရွက်မှု',
          content: <>
            <p>ဝက်ဘ်ဆိုက်ကို ပေးပို့ပြသရန်နှင့် လုံခြုံစေရန်၊ ဘာသာစကား ရွေးချယ်ပေးရန်နှင့် သင်ကိုယ်တိုင်ရွေးထားသည့် ဘာသာစကားကို မှတ်မိရန်၊ မေးမြန်းချက်များကို ဖြေကြားရန်၊ သင်တောင်းဆိုသော စကားပြောအဖြေများ ထုတ်ပေးရန်နှင့် စကားပြောခွင့် ကန့်သတ်ချက်ကို ထိန်းသိမ်းရန် အချက်အလက်များကို ကိုင်တွယ်ပါသည်။ အမှန်ခြစ်အကွက်သည် မိမိဆန္ဒဖြင့် AI ထံ စာပို့မပို့ ရွေးချယ်ခွင့်ပေးခြင်း ဖြစ်ပါသည်။ မသက်ဆိုင်သော အသုံးပြုမှုအားလုံးကို ခွင့်ပြုသည့် သဘောတူညီမှု မဟုတ်သကဲ့သို့ စီမံဆောင်ရွက်မှုတစ်ခုချင်းစီအတွက် တရားဝင်အခြေခံကို သတ်မှတ်ရမည့် လိုအပ်ချက်ကိုလည်း အစားမထိုးပါ။</p>
            <p>Hosting၊ AI၊ အီးမေးလ်နှင့် စာတိုပို့ဝန်ဆောင်မှုများသည် မြန်မာနိုင်ငံပြင်ပအပါအဝင် သင့်နိုင်ငံပြင်ပတွင် အချက်အလက်ကို စီမံဆောင်ရွက်နိုင်ပါသည်။ စီမံသူသည် အမှန်တကယ် အသုံးပြုသော ဝန်ဆောင်မှုများနှင့် ရည်ရွယ်ထားသော ပရိသတ်အတွက် သက်ဆိုင်ရာ တရားဝင်အခြေခံများ၊ စီမံဆောင်ရွက်သည့်နေရာများ၊ စာချုပ်အရ အကာအကွယ်များနှင့် နယ်စပ်ဖြတ်ကျော်မှု လိုအပ်ချက်များကို အတည်ပြုရပါမည်။ ဤအသိပေးချက်သည် သီးခြားအသိအမှတ်ပြုလက်မှတ်၊ အချက်အလက်လွှဲပြောင်းမှု အကာအကွယ် သို့မဟုတ် နေရာတိုင်း၏ ဥပဒေအားလုံးကို လိုက်နာမှုရှိသည်ဟု မဆိုထားပါ။</p>
          </>,
        },
        {
          id: 'choices-rights',
          title: 'သဘောတူညီမှု ရုပ်သိမ်းခြင်း၊ တောင်းဆိုချက်များနှင့် သင့်အခွင့်အရေးများ',
          content: <>
            <p>နောက်ထပ်စာများ မပို့ရန် စကားပြောသဘောတူညီမှု အမှန်ခြစ်ကို ဖြုတ်ပါ။ ယင်းက ပို့ပြီးသား တောင်းဆိုမှုကို ပြန်မယူနိုင်၊ ဝန်ဆောင်မှုပေးသူ၏ မှတ်တမ်းများကို မဖျက်နိုင်သကဲ့သို့ ရှိပြီးသား အသုံးပြုမှုကွတ်ကီးကိုလည်း မဖျက်ပါ။ ထိုကွတ်ကီးကို ဖယ်ရှားရန် ဘရောက်ဇာဆက်တင်များမှ ဤဆိုက်၏ ကွတ်ကီးများကို ဖျက်ပါ။ စက်တွင်းစကားပြောမှတ်ဉာဏ်ကို ရှင်းရန် စာမျက်နှာကို ပြန်တင်ပါ သို့မဟုတ် ထွက်ခွာပါ။ သဘောတူညီမှုကို အမြဲတမ်း မသိမ်းထားသဖြင့် နောက်တစ်ကြိမ် လာရောက်ချိန်တွင် မမှတ်မိပါ။</p>
            <p>သက်ဆိုင်ရာ ဥပဒေအပေါ်မူတည်၍ သင့်အချက်အလက်ကို ကြည့်ရှုခွင့်၊ ပြင်ဆင်ခွင့်၊ ဖျက်ခွင့်၊ စီမံဆောင်ရွက်မှုကို ကန့်သတ်ခွင့် သို့မဟုတ် ကန့်ကွက်ခွင့်၊ သဘောတူညီမှုကို ရုပ်သိမ်းခွင့်၊ အချက်အလက်မိတ္တူ ရယူခွင့် သို့မဟုတ် သက်ဆိုင်ရာ အာဏာပိုင်ထံ တိုင်ကြားခွင့်တို့ ရှိနိုင်ပါသည်။ သင့်အချက်အလက်အကြောင်း မေးမြန်းရန် သို့မဟုတ် သက်ဆိုင်ရာ အခွင့်အရေးများ ကျင့်သုံးရန် ကျွန်ုပ်တို့ကို ဆက်သွယ်ပါ။ တောင်းဆိုချက်ကို အတည်ပြုရန် သင့်လျော်သော အတိုင်းအတာအတွင်း အချက်အလက် လိုအပ်နိုင်ပြီး သီးခြားဝန်ဆောင်မှုပေးသူများက သိမ်းထားသော မှတ်တမ်းများ သို့မဟုတ် ဥပဒေအရ ထိန်းသိမ်းရသော မှတ်တမ်းများအပါအဝင် သက်ဆိုင်ရာ ကန့်သတ်ချက်များကို ရှင်းပြပါမည်။ သဘောတူညီမှု ရုပ်သိမ်းခြင်းသည် တရားဝင် ဆောင်ရွက်ပြီးသား လုပ်ငန်းစဉ်များကို နောက်ကြောင်းပြန် ပယ်ဖျက်ခြင်း မဟုတ်ပါ။</p>
          </>,
        },
        {
          id: 'privacy-changes',
          title: 'ဤအသိပေးချက်ကို ပြောင်းလဲခြင်း',
          content: <p>ဝက်ဘ်ဆိုက် သို့မဟုတ် ဝန်ဆောင်မှုပေးသူများ ပြောင်းလဲသောအခါ ဤအသိပေးချက်ကို ပြင်ဆင်နိုင်ပါသည်။ အထက်ပါရက်စွဲသည် နောက်ဆုံးပြင်ဆင်မှုကို ဖော်ပြပါသည်။ အသစ်ထည့်ထားသော သို့မဟုတ် ပြောင်းလဲထားသော လုပ်ဆောင်ချက်မှတစ်ဆင့် အချက်အလက် မမျှဝေမီ ပြန်လည်ဖတ်ရှုပါ။</p>,
        },
      ] : [
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
          id: 'language-location',
          title: 'Language preference and country-level location',
          content: <>
            <p>Only after you manually select a language, a <code>site_language</code> cookie remembers your choice for one year. Its value is <code>en</code> for English or <code>my</code> for Burmese. Simply browsing or automatic language routing does not set this preference cookie.</p>
            <p>When there is no saved language preference, country-level geolocation supplied by the hosting service may be used for initial language routing. This is not precise GPS location, and we do not make an additional request to a third-party IP lookup service to locate your IP address. Automatic routing alone does not store <code>site_language</code>. You can change the language manually at any time and remove the cookie in your browser settings.</p>
          </>,
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
                Do not send passwords, payment details, identity documents, sensitive personal information, confidential project material, or someone else&apos;s personal data. You can use <Link href={localizedPath(locale, '/#contact')}>direct contact</Link> instead and discuss a suitable channel for sensitive information first.
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
                After a successful AI answer, a signed <code>loli_usage</code> cookie records a random identifier, the number of questions used, and an expiry time to enforce the {LOLI_LIMIT}-question allowance for that browser. It contains no chat text. It lasts up to 365 days from the latest successful answer, unless removed sooner. See the <Link href={localizedPath(locale, '/cookies')}>cookie inventory and controls</Link>.
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
                Information is handled to deliver and secure the website, route language and remember your manually selected language preference, answer inquiries, generate chat replies you request, and enforce the chat allowance. The checkbox gives you a choice about optional AI sending; it is not blanket consent to unrelated uses or a substitute for identifying the lawful basis for each processing activity.
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