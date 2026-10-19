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
    locale === 'my' ? 'အသုံးပြုမှု စည်းကမ်းချက်များ' : 'Terms of Use',
    locale === 'my'
      ? 'စာဖြင့်ရေးသားထားသော ပရောဂျက်သဘောတူညီချက်များနှင့် ဥပဒေအရ မဖြစ်မနေ ရရှိသော အခွင့်အရေးများကို မထိခိုက်စေဘဲ Winter Arc Myanmar ဝက်ဘ်ဆိုက်နှင့် ရွေးချယ်အသုံးပြုနိုင်သော AI လက်ထောက်ကို အသုံးပြုရန် စည်းကမ်းချက်များ။'
      : 'Terms for using the Winter Arc Myanmar website and optional AI assistant, separate from written project agreements and mandatory legal rights.',
    '/terms',
    locale
  )
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <PolicyPage
      locale={locale}
      title={locale === 'my' ? 'အသုံးပြုမှု စည်းကမ်းချက်များ' : 'Terms of use'}
      summary={locale === 'my' ? 'ဤစည်းကမ်းချက်များသည် ဝက်ဘ်ဆိုက်နှင့် ရွေးချယ်အသုံးပြုနိုင်သော AI အကူအညီပေးသူကို အသုံးပြုခြင်းအတွက် ဖြစ်ပါသည်။ အခကြေးငွေပေး၍ အလုပ်အပ်နှံလိုပါက ပရောဂျက်သဘောတူညီချက်ကို စာဖြင့် သီးခြားချုပ်ဆိုရန် လိုအပ်ပါသည်။' : 'These terms cover this website and its optional assistant. Paid work needs a separate written project agreement.'}
      path="/terms"
      sections={locale === 'my' ? [
        {
          id: 'website-scope',
          title: 'ဝက်ဘ်ဆိုက်အချက်အလက်သာဖြစ်ပြီး ပရောဂျက်စာချုပ် မဟုတ်ပါ',
          content: <>
            <p>ဤစည်းကမ်းချက်များသည် {siteName} ဝက်ဘ်ဆိုက်ကို သင့်လျော်စွာ အသုံးပြုရန် ဖော်ပြထားခြင်း ဖြစ်ပါသည်။ သင်သဘောမတူပါက အပြန်အလှန် တုံ့ပြန်အသုံးပြုရသော လုပ်ဆောင်ချက်များကို မသုံးပါနှင့်။ ဤစည်းကမ်းချက်များ မည်သို့ပင်ရှိစေကာမူ သက်ဆိုင်ရာဥပဒေက ပေးအပ်ထားသော သင့်အခွင့်အရေးများကို ဤနေရာရှိ မည်သည့်အကြောင်းအရာကမျှ ဖယ်ရှားခြင်း မရှိပါ။</p>
            <p>ဝန်ဆောင်မှုဖော်ပြချက်များ၊ နမူနာများနှင့် AI အဖြေများသည် ယေဘုယျအချက်အလက်များသာ ဖြစ်ပြီး လိုက်နာရန် တာဝန်ရှိသော ဈေးနှုန်းတင်ပြချက်၊ ကမ်းလှမ်းချက်၊ ပြီးစီးမည့်အချိန်အတွက် ကတိ သို့မဟုတ် ဥပဒေ၊ ငွေကြေး၊ လုံခြုံရေးဆိုင်ရာ ကျွမ်းကျင်အကြံဉာဏ် မဟုတ်ပါ။ ဝက်ဘ်ဆိုက်ကြည့်ခြင်း၊ ကျွန်ုပ်တို့ကို ဆက်သွယ်ခြင်း သို့မဟုတ် Loli နှင့် စကားပြောခြင်းတစ်ခုတည်းကြောင့် အခကြေးငွေပေးရသော အလုပ်အပ်နှံမှု မဖြစ်ပေါ်ပါ။ အချက်အလက်များကို အားမကိုးမီ လက်ရှိအသေးစိတ်များကို ကျွန်ုပ်တို့နှင့် အတည်ပြုပါ။</p>
          </>,
        },
        {
          id: 'project-agreements',
          title: 'အခကြေးငွေပေးရသော ပရောဂျက်များအတွက် စာဖြင့်သဘောတူညီချက် လိုအပ်ပါသည်',
          content: <>
            <p>အခကြေးငွေပေးရသော အလုပ် မစတင်မီ နှစ်ဖက်က အောက်ပါတို့ကို စာဖြင့် သဘောတူထားသင့်ပါသည် —</p>
            <ul>
              <li>စာချုပ်ချုပ်ဆိုမည့် နှစ်ဖက်၏ အချက်အလက်၊ အလုပ်အတိုင်းအတာ၊ ပေးအပ်ရမည့် ရလဒ်များ၊ ဆက်စပ်လိုအပ်ချက်များ၊ လုပ်ငန်းအဆင့်မှတ်တိုင်များ၊ လက်ခံရန် စံသတ်မှတ်ချက်များနှင့် ပြောင်းလဲမှုတောင်းဆိုသည့် လုပ်ငန်းစဉ်။</li>
              <li>အခကြေးငွေ၊ ငွေကြေးအမျိုးအစား၊ သက်ဆိုင်ရာ အခွန်များ၊ ငွေတောင်းခံလွှာများ၊ ပေးချေရက်များ၊ ကြိုတင်ငွေနှင့် ပြင်ပဝန်ဆောင်မှု ကုန်ကျစရိတ်များ။</li>
              <li>ဖျက်သိမ်းခြင်း၊ ရပ်စဲခြင်း၊ ငွေပြန်အမ်းခြင်းနှင့် လုပ်ဆောင်ပြီးသော အလုပ် သို့မဟုတ် ပေးချေရန် ကတိပြုထားပြီးသော ကုန်ကျစရိတ်များအတွက် ငွေပေးချေမှု။</li>
              <li>ပေးအပ်ရမည့် ရလဒ်များ၊ ရှိပြီးသား ကိရိယာများ၊ ဖောက်သည်က ပံ့ပိုးသော ဖိုင်နှင့် အကြောင်းအရာများနှင့် ပြင်ပအစိတ်အပိုင်းများ၏ ပိုင်ဆိုင်မှုနှင့် အသုံးပြုခွင့်လိုင်စင်များ၊ အခွင့်အရေးများ မည်သည့်အချိန် လွှဲပြောင်းမည်ဆိုသည်။</li>
              <li>လျှို့ဝှက်ထိန်းသိမ်းမှု၊ ကိုယ်ရေးအချက်အလက်ဆိုင်ရာ တာဝန်များ၊ hosting နှင့် အကောင့်ဝင်ရောက်ခွင့်၊ လွှဲပြောင်းပေးအပ်မှု၊ ပြုပြင်ထိန်းသိမ်းမှု၊ အကူအညီပေးမည့် အတိုင်းအတာနှင့် ကာလ၊ ဝန်ဆောင်မှုအဆင့် သတ်မှတ်ချက်များ။</li>
              <li>ထိုအလုပ်အပ်နှံမှုအတွက် သင့်လျော်သည့် အာမခံချက်များ၊ တာဝန်ခံမှု၊ သက်ဆိုင်ရာဥပဒေနှင့် အငြင်းပွားမှု ဖြေရှင်းရေး အစီအစဉ်များ။</li>
            </ul>
            <p>ဤဝက်ဘ်ဆိုက်စည်းကမ်းချက်များသည် အားလုံးအတွက် တစ်မျိုးတည်းသော ငွေပြန်အမ်းစည်းမျဉ်း မသတ်မှတ်ပါ။ ပရောဂျက်၏ ဉာဏပစ္စည်းဆိုင်ရာ အခွင့်အရေးကို လွှဲပြောင်းပေးခြင်း၊ ဆက်လက်အကူအညီပေးခြင်းကို ထည့်သွင်းပေးခြင်း သို့မဟုတ် ပရောဂျက်အတွက် တရားစီရင်ပိုင်ခွင့်နယ်မြေ သတ်မှတ်ခြင်း မပြုပါ။ မဖြစ်မနေလိုက်နာရသော ဥပဒေနှင့်အညီ စာဖြင့်ရေးသားထားသော ပရောဂျက်သဘောတူညီချက်က အလုပ်အပ်နှံမှုကို သဘောတူထားသည့် စည်းကမ်းချက်များအတိုင်း အုပ်ချုပ်ပါသည်။ အလုပ်စရန် ခွင့်မပြုမီ သို့မဟုတ် ငွေမပေးမီ မရှင်းလင်းသည်များကို မေးမြန်းပါ။</p>
          </>,
        },
        {
          id: 'acceptable-use',
          title: 'ဆိုက်ကို တာဝန်ယူမှုရှိစွာ အသုံးပြုပါ',
          content: <ul>
            <li>ဥပဒေနှင့်မညီသော လုပ်ရပ်၊ နှောင့်ယှက်မှု၊ အခြားသူအဖြစ် အယောင်ဆောင်မှု သို့မဟုတ် မိမိတွင် ထုတ်ဖော်ခွင့်မရှိသော အကြောင်းအရာများ မျှဝေမှုအတွက် ဤဆိုက်ကို မသုံးပါနှင့်။</li>
            <li>အန္တရာယ်ရှိသော ကုဒ်မထည့်ပါနှင့်၊ ဝန်ဆောင်မှုများကို ဝန်ပိအောင် မလုပ်ပါနှင့်၊ ခွင့်ပြုချက်မရှိဘဲ ဝင်ရောက်နိုင်ရန် မစမ်းသပ်ပါနှင့်၊ လျှို့ဝှက်အချက်အလက်များ မထုတ်ယူပါနှင့်၊ အခြားဝင်ရောက်သူများကို မနှောင့်ယှက်ပါနှင့်။</li>
            <li>အသုံးပြုမှုထိန်းချုပ်ချက်များကို မကျော်လွှားပါနှင့်၊ အလိုအလျောက် တောင်းဆိုချက်များပို့၍ အလွဲသုံးစား မပြုပါနှင့်၊ လက်ထောက်၏ မေးခွန်းအရေအတွက် ကန့်သတ်ချက်ကို ရှောင်လွှဲရန် မကြိုးစားပါနှင့်။</li>
            <li>မေးမြန်းချက်အတွက် လိုအပ်သော အချက်အလက်များကိုသာ မျှဝေပါ။ လျှို့ဝှက် သို့မဟုတ် အထူးကာကွယ်ရန်လိုသော အကြောင်းအရာများ မပို့မီ သင့်လျော်သည့် ဆက်သွယ်ရေးလမ်းကြောင်းကို စီစဉ်ပါ။</li>
          </ul>,
        },
        {
          id: 'ai-terms',
          title: 'Loli သည် မိမိဆန္ဒဖြင့် အသုံးပြုနိုင်သော AI အကူအညီ ဖြစ်ပါသည်',
          content: <>
            <p>Loli သည် APIFree.ai နှင့် သတ်မှတ်ထားသော နောက်ဆက်တွဲ AI မော်ဒယ်ကို အသုံးပြု၍ အဖြေထုတ်ပါသည်။ အဖြေများသည် မမှန်ကန်ခြင်း၊ မပြည့်စုံခြင်း သို့မဟုတ် ခေတ်မမီခြင်း ဖြစ်နိုင်ပြီး ဈေးနှုန်း၊ နောက်ဆုံးရက်၊ စာချုပ် သို့မဟုတ် ရလဒ်များအတွက် ကတိများ မဟုတ်ပါ။ ပရောဂျက်အသေးစိတ်ကို လူတစ်ဦးက အတည်ပြုရပါမည်။ အမြဲရရှိနိုင်မည်ဟု အာမမခံပါ။ လက်ရှိအခမဲ့ အသုံးပြုခွင့်မှာ ဘရောက်ဇာအသုံးပြုမှု မှတ်တမ်းတစ်ခုလျှင် အဖြေကို အောင်မြင်စွာ ရရှိသည့် မေးခွန်း {LOLI_LIMIT} ခု ဖြစ်ပါသည်။</p>
            <p>စာမပို့မီ ကိုယ်ရေးအချက်အလက်ဆိုင်ရာ အသိပေးချက်ကို ဖတ်ရှုလက်ခံကြောင်းနှင့် သဘောတူညီမှု အကွက်ကို ကိုယ်တိုင် အမှန်ခြစ်ပါ။ နောက်ဆုံး စကားပြောမှတ်တမ်း အများဆုံး ခြောက်ခုကို AI ဖြင့် စီမံဆောင်ရွက်ရန် ကျွန်ုပ်တို့၏ ဆာဗာမှတစ်ဆင့် ပို့ပါသည်။ နောက်ထပ်စာပို့မှု ရပ်ရန် အမှန်ခြစ်ဖြုတ်နိုင်သလို တိုက်ရိုက်ဆက်သွယ်မှုကိုလည်း အသုံးပြုနိုင်ပါသည်။ <Link href={localizedPath(locale, '/privacy')}>ကိုယ်ရေးအချက်အလက် မူဝါဒ</Link>နှင့် <Link href={localizedPath(locale, '/cookies')}>ကွတ်ကီး မူဝါဒ</Link>တို့တွင် အသုံးပြုမှုကွတ်ကီး၊ ယာယီမှတ်ဉာဏ်၊ ဝန်ဆောင်မှုပေးသူ၏ စီမံဆောင်ရွက်မှုနှင့် ဖျက်သိမ်းမှုဆိုင်ရာ ကန့်သတ်ချက်များကို ရှင်းပြထားပါသည်။ AI စကားပြောကို ဖောက်သည်၏ လျှို့ဝှက်လုပ်ငန်းအချက်အလက်များ ဆွေးနွေးရာနေရာအဖြစ် မယူဆပါနှင့်၊ အထူးကာကွယ်ရန်လိုသော အချက်အလက်များလည်း မပို့ပါနှင့်။</p>
          </>,
        },
        {
          id: 'website-materials',
          title: 'ဝက်ဘ်ဆိုက်အကြောင်းအရာများနှင့် ပြင်ပဝန်ဆောင်မှုများ',
          content: <>
            <p>ဝက်ဘ်ဆိုက်စာသား၊ ရုပ်ပုံ၊ ကုဒ်နှင့် အမှတ်တံဆိပ်ဆိုင်ရာ အကြောင်းအရာများသည် သက်ဆိုင်ရာ ပိုင်ရှင်တို့၏ ဉာဏပစ္စည်းဆိုင်ရာ အခွင့်အရေးများနှင့် သက်ဆိုင်သော လိုင်စင်များအောက်တွင် ဆက်လက်ရှိနေပါသည်။ တရားဝင် ကိုးကားရန် ဆိုက်ကို ကြည့်ရှုပြီး လင့်ခ်များ မျှဝေနိုင်ပါသည်။ ပိုင်ဆိုင်မှု သို့မဟုတ် ယေဘုယျ ပြန်လည်ဖြန့်ဝေခွင့်လိုင်စင် ပေးထားခြင်း မရှိပါ။ ဥပဒေက ခွင့်ပြုထားသော အသုံးပြုမှုများကို ဆက်လက်ခွင့်ပြုပါသည်။ ဖောက်သည်အမည်၊ လိုဂိုနှင့် ပြင်ပအမှတ်တံဆိပ်များသည် သက်ဆိုင်ရာပိုင်ရှင်တို့၏ ပစ္စည်းဖြစ်ပြီး ဤဆိုက်တွင် ဖော်ပြထားရုံဖြင့် ထောက်ခံမှု သို့မဟုတ် မိတ်ဖက်ဖြစ်မှုကို မသတ်မှတ်ပါ။</p>
            <p>ပြင်ပဝက်ဘ်ဆိုက်၊ အီးမေးလ်နှင့် စာတိုပို့ဝန်ဆောင်မှုများ၌ ကိုယ်ပိုင်စည်းကမ်းချက်များနှင့် ကိုယ်ရေးအချက်အလက်ဆိုင်ရာ လုပ်ထုံးလုပ်နည်းများ ရှိပါသည်။ ၎င်းတို့၏ ရရှိနိုင်မှုနှင့် အကြောင်းအရာကို ကျွန်ုပ်တို့ မထိန်းချုပ်ပါ။ ဝန်ဆောင်မှုတစ်ခုသို့ လင့်ခ်ပေးထားခြင်းသည် ထိုဝန်ဆောင်မှုကို အာမခံခြင်း မဟုတ်ပါ။</p>
          </>,
        },
        {
          id: 'availability-rights',
          title: 'ရရှိနိုင်မှု၊ တာဝန်ခံမှုနှင့် ဥပဒေအရ မဖြစ်မနေ ရရှိသော အခွင့်အရေးများ',
          content: <>
            <p>ဝက်ဘ်ဆိုက်အချက်အလက်များ အသုံးဝင်နေစေရန် ရည်ရွယ်သော်လည်း အဆက်မပြတ် ဝင်ရောက်နိုင်မှု၊ အမှားကင်းသော အကြောင်းအရာ၊ ခြိမ်းခြောက်မှုအားလုံးကို တားဆီးနိုင်သည့် လုံခြုံရေး သို့မဟုတ် စီးပွားရေးနှင့် ရှာဖွေရေးအဆင့် ရလဒ်တစ်ခုခုကို အာမမခံပါ။ ပြုပြင်ထိန်းသိမ်းမှု၊ လုံခြုံရေး၊ အလွဲသုံးစားပြုမှု သို့မဟုတ် ဝန်ဆောင်မှုပေးသူ၏ ရရှိနိုင်မှုနှင့် သက်ဆိုင်သော အကြောင်းရင်းများကြောင့် လုပ်ဆောင်ချက်များကို ပြောင်းလဲခြင်း သို့မဟုတ် ရပ်ဆိုင်းခြင်း ပြုလုပ်နိုင်ပါသည်။ သင့်အတွက် အရေးကြီးသော အချက်အလက်များ၏ မိတ္တူကို ကိုယ်တိုင်သိမ်းထားပါ။</p>
            <p>သက်ဆိုင်ရာဥပဒေက ခွင့်ပြုသည့် အတိုင်းအတာအတွင်း ဝက်ဘ်ဆိုက်အချက်အလက်နှင့် ရွေးချယ်အသုံးပြုနိုင်သော လက်ထောက်ကို ရရှိနိုင်သည့်အတိုင်းသာ ပေးထားပြီး မှန်ကန်မှု၊ ရည်ရွယ်ချက်နှင့် ကိုက်ညီမှု သို့မဟုတ် ရရှိနိုင်မှုအတွက် ထပ်ဆောင်းအာမခံချက် မပေးပါ။ ဆုံးရှုံးမှုတစ်ခုအတွက် တာဝန်ရှိမှုသည် သက်ဆိုင်ရာဥပဒေနှင့် သက်ဆိုင်သော စာဖြင့်သဘောတူညီချက်အပေါ် မူတည်ပါသည်။ ဤစည်းကမ်းချက်များက တာဝန်ခံမှုအားလုံးကို ခြုံငုံဖယ်ရှားခြင်း သို့မဟုတ် လျော်ကြေးတာဝန်အတွက် ပုံသေအများဆုံးပမာဏ သတ်မှတ်ခြင်း မပြုပါ။</p>
            <p>ဥပဒေအရ ဖယ်ရှား၍မရသော သို့မဟုတ် ကန့်သတ်၍မရသော တာဝန်ခံမှုကို ဤနေရာရှိ မည်သည့်အကြောင်းအရာကမျှ ဖယ်ရှားခြင်း၊ ကန့်သတ်ခြင်း မပြုပါ။ မဖြစ်မနေ ရရှိသော စားသုံးသူအကာအကွယ်၊ ကုစားခွင့်နှင့် စွန့်လွှတ်၍မရသော အခြားအခွင့်အရေးများကိုလည်း မပယ်ဖျက်ပါ။ စိုးရိမ်ပူပန်မှုရှိပါက အောက်ပါ ဆက်သွယ်ရန်အချက်အလက်များမှတစ်ဆင့် ပြောပြပါ။ ထိုသို့ဆက်သွယ်ခြင်းက သင်အသုံးပြုနိုင်သော တရားဝင်ကုစားခွင့် သို့မဟုတ် အာဏာပိုင်ထံ ဆက်သွယ်ခွင့်ကို မတားဆီးပါ။ ဤဝက်ဘ်ဆိုက်စည်းကမ်းချက်များက သီးသန့်တရားရုံး သို့မဟုတ် သက်ဆိုင်မည့် တရားစီရင်ပိုင်ခွင့်နယ်မြေကို မရွေးချယ်ထားပါ။</p>
          </>,
        },
        {
          id: 'terms-changes',
          title: 'ပြောင်းလဲမှုများနှင့် မေးခွန်းများ',
          content: <p>ဆိုက်ပြောင်းလဲမှုနှင့်အညီ ဤဝက်ဘ်ဆိုက်စည်းကမ်းချက်များကို ပြင်ဆင်ပြီး အထက်ပါရက်စွဲကို ပြောင်းနိုင်ပါသည်။ ပြင်ဆင်ချက်များသည် လက်ရှိစာဖြင့်ရေးသားထားသော ပရောဂျက်သဘောတူညီချက်ကို ထိုစာချုပ်နှင့် သက်ဆိုင်ရာဥပဒေက လိုအပ်သော သဘောတူညီမှုလုပ်ငန်းစဉ် မရှိဘဲ ပြန်ရေးခြင်း မပြုပါ။ ဝက်ဘ်ဆိုက်ဖော်ပြချက်ကို အားမကိုးမီ သို့မဟုတ် ပရောဂျက်မစတင်မီ မရှင်းလင်းသည့် အချက်ရှိပါက ကျွန်ုပ်တို့ကို ဆက်သွယ်ပါ။</p>,
        },
      ] : [
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
                Before sending, actively check the privacy acknowledgment and consent checkbox. Up to the last six messages are sent through our server for AI processing. You may uncheck it to stop future sending or use direct contact instead. The <Link href={localizedPath(locale, '/privacy')}>privacy policy</Link> and <Link href={localizedPath(locale, '/cookies')}>cookie policy</Link> explain the usage cookie, temporary memory, provider processing, and deletion limits. Do not treat AI chat as a confidential client workspace or submit sensitive information.
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