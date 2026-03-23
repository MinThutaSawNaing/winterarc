import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faFacebookMessenger,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import LocalizedText from '@/components/LocalizedText'

const contactMethods = [
  {
    enLabel: 'WhatsApp',
    myLabel: 'WhatsApp',
    value: '+95 9 977 144 320',
    href: 'https://wa.me/959977144320',
    icon: faWhatsapp,
    iconClass: 'text-emerald-400',
  },
  {
    enLabel: 'Email',
    myLabel: 'အီးမေးလ်',
    value: 'winterarcmyanmar@yahoo.com',
    href: 'mailto:winterarcmyanmar@yahoo.com?subject=Inquiry%20from%20Website&body=Hello%20Winter%20Arc%20Myanmar,',
    icon: faEnvelope,
    iconClass: 'text-blue-200',
  },
  {
    enLabel: 'Phone',
    myLabel: 'ဖုန်း',
    value: '+95 9 977 144 320',
    href: 'tel:+959977144320',
    icon: faPhone,
    iconClass: 'text-blue-300',
  },
  {
    enLabel: 'Facebook',
    myLabel: 'Facebook',
    value: 'Winter Arc Myanmar',
    href: 'https://www.facebook.com/share/1Hjr6iVb7q/',
    icon: faFacebook,
    iconClass: 'text-sky-300',
  },
  {
    enLabel: 'Messenger',
    myLabel: 'Messenger',
    enValue: 'Chat with our team',
    myValue: 'ကျွန်ုပ်တို့အဖွဲ့နှင့် စကားပြောရန်',
    href: 'https://www.facebook.com/share/1Hjr6iVb7q/',
    icon: faFacebookMessenger,
    iconClass: 'text-indigo-300',
  },
  {
    enLabel: 'Location',
    myLabel: 'တည်နေရာ',
    enValue: 'Insein, Yangon, Myanmar 11011',
    myValue: 'အင်းစိန်၊ ရန်ကုန်၊ မြန်မာ 11011',
    href: 'https://maps.google.com/?q=Insein,Yangon,Myanmar',
    icon: faLocationDot,
    iconClass: 'text-slate-200',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-[linear-gradient(180deg,#020617_0%,#000000_100%)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="inline-block rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-1.5 text-sm font-medium text-slate-100">
              <LocalizedText en="Contact" my="ဆက်သွယ်ရန်" />
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              <LocalizedText
                en="Start the conversation with a team that values clear communication."
                my="ရှင်းလင်းသော ဆက်သွယ်မှုကို အလေးထားသောအဖွဲ့နှင့် စတင်ဆက်သွယ်လိုက်ပါ"
              />
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              <LocalizedText
                en="Reach out for project inquiries, product discussions, or support planning. We respond with practical next steps and a realistic path forward."
                my="ပရောဂျက်အကြောင်း မေးမြန်းရန်၊ product အကြောင်း ဆွေးနွေးရန် သို့မဟုတ် support အစီအစဉ်အတွက် ဆက်သွယ်နိုင်ပါသည်။ ကျွန်ုပ်တို့သည် လက်တွေ့ကျသော နောက်တစ်ဆင့်များနှင့် ရှင်းလင်းသောလမ်းကြောင်းကို ပေးဆောင်ပါသည်။"
              />
            </p>

            <div className="mt-8 rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-slate-100">
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <div>
                  <p className="text-sm text-slate-300">
                    <LocalizedText en="Company" my="ကုမ္ပဏီ" />
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    <LocalizedText
                      en="Winter Arc Myanmar"
                      my="ဝင်းတာအာ့ခ် မြန်မာ"
                    />
                  </p>
                  <div className="mt-4 flex items-start gap-3 text-sm leading-7 text-slate-200">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mt-1 text-blue-200"
                    />
                    <span>
                      <LocalizedText
                        en="Monday - Friday, 9:00 AM - 6:00 PM"
                        my="တနင်္လာ မှ သောကြာ၊ မနက် ၉:၀၀ မှ ညနေ ၆:၀၀"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((item) => (
              <a
                key={item.enLabel}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-5 transition hover:border-blue-700/40 hover:bg-slate-900"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ${item.iconClass}`}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <p className="mt-4 text-sm text-slate-300">
                  <LocalizedText en={item.enLabel} my={item.myLabel} />
                </p>
                <p className="mt-1 text-base font-semibold leading-7 text-white">
                  <LocalizedText
                    en={item.enValue ?? item.value}
                    my={item.myValue ?? item.value}
                  />
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
