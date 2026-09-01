import { useState } from 'react'
import { FadeIn, GoldDivider, Rule, CheckIcon, XIcon, Eyebrow, PageHero, IMG_TIGER1, CreditCardIcon, UsersIcon, GradCapIcon, CompassIcon, TentIcon, UtensilsIcon } from '../components/shared'
import PaymentModal from '../components/PaymentModal'

const INCLUDED = [
  'Airport pick-up and drop-off at Nagpur (NAG)',
  'All transportation throughout the programme in private 4x4 Innova vehicles, plus dedicated safari vehicles',
  'All safari jeep and park permit fees for Pench and Tadoba-Andhari, core and buffer zones (7 Half day and 2 Full day safaris, 9 safaris total)',
  'Twin-share accommodation at Saj in the Forest Resort (Pench) and Tathastu Tadoba Resort, each airconditioned room with a private bathroom',
  'All meals (breakfast, lunch, and dinner) throughout the stay',
  'Hot beverages and snacks on all safaris; packed lunches in the park on our two full-day Tadoba safaris (April 11 & 13)',
  "Four dedicated astrophotography sessions in Pench, including three at Pench's main dark-sky observation site",
  'Guided photo review and post-processing sessions (Lightroom/Photoshop) with Srini throughout the trip',
  'Pre-tour online planning video call with Himanshu and Srini',
  'Co-direction throughout from Himanshu Bagde and P S Srinivas, joined in Pench by astrophotography expert Abhishek Pawse',
  'All prices inclusive of all applicable Indian taxes',
]

const NOT_INCLUDED = [
  'Flights to/from Nagpur Airport (NAG)',
  'Single room upgrade — $1,500 USD per person, subject to availability',
  'Visa fees (Indian e-Visa or tourist visa)',
  'Health/travel insurance (strongly recommended — see booking terms)',
  'Camera gear rental (e.g., star tracker, telephoto lens)',
  'Tips, personal expenses, and anything not listed above',
]

const GROUP = [
  { icon: <UsersIcon className="w-5 h-5 text-[#A07828]" />, value: 'Max 8', label: 'Photographers' },
  { icon: <GradCapIcon className="w-5 h-5 text-[#A07828]" />, value: '2 + 1', label: 'Co-Directors + Astro Expert' },
  { icon: <CompassIcon className="w-5 h-5 text-[#A07828]" />, value: '9 Safaris', label: '52 Field Hours Total' },
  { icon: <TentIcon className="w-5 h-5 text-[#A07828]" />, value: 'Luxury Lodges', label: 'Saj in Forest & Tathastu' },
  { icon: <UtensilsIcon className="w-5 h-5 text-[#A07828]" />, value: 'All Meals', label: 'Breakfast, Lunch & Dinner' },
]

const CANCELLATION_TIERS = [
  { time: '120+ days before tour', fee: '10% administrative fee', desc: 'Full refund minus 10% administrative charge' },
  { time: '90–75 days before tour', fee: '50% cancellation fee', desc: '50% of total tour cost retained' },
  { time: '75–60 days before tour', fee: '75% cancellation fee', desc: '75% of total tour cost retained' },
  { time: 'Under 60 days or No Show', fee: '100% cancellation fee', desc: 'Non-refundable' },
]

export default function Pricing() {
  const [members, setMembers] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [payAmount, setPayAmount] = useState(2000)
  const [payTitle, setPayTitle] = useState('Expedition Deposit')

  const pricePerPerson = 6900
  const depositPerPerson = 2000
  const totalPrice = members * pricePerPerson
  const totalDeposit = members * depositPerPerson

  const openCheckout = (amount: number, title: string) => {
    setPayAmount(amount)
    setPayTitle(title)
    setShowModal(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Investment &amp; Inclusions"
        title={<>Pricing &amp;<br />What's Included</>}
        subtitle="Transparent pricing for our inaugural 10-day expedition. All-inclusive luxury safari lodges, permits, vehicles, and expert coaching."
        bg={IMG_TIGER1}
      />

      <GoldDivider />

      {/* Main card */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="rounded-sm overflow-hidden" style={{ background: '#FFFFFF', boxShadow: 'var(--shadow-md)', border: '1px solid rgba(13,27,42,0.08)' }}>

            {/* Price header */}
            <div className="px-10 py-12 text-center" style={{ background: '#0D1B2A', borderBottom: '3px solid #A07828' }}>
              <p className="eyebrow text-[10px] mb-2" style={{ color: '#C9A24B' }}>Inaugural Expedition · Limited to 8 Photographers · Double Occupancy</p>

              {/* Dynamic Member Counter Selector */}
              <div className="my-5 inline-flex items-center gap-4 bg-white/10 px-5 py-2.5 rounded-full border border-white/15">
                <span className="text-xs text-white/80 font-medium">Select Photographers / Guests:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMembers(m => Math.max(1, m - 1))}
                    className="w-7 h-7 rounded-full bg-white/20 hover:bg-[#A07828] text-white flex items-center justify-center text-sm font-bold transition-all"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-[#C9A24B] min-w-[75px] text-center">
                    {members} {members === 1 ? 'Guest' : 'Guests'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMembers(m => Math.min(8, m + 1))}
                    className="w-7 h-7 rounded-full bg-white/20 hover:bg-[#A07828] text-white flex items-center justify-center text-sm font-bold transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-baseline justify-center gap-1.5 font-serif text-[#C9A24B] tabular-nums my-3">
                <span className="text-3xl sm:text-4xl font-bold">$</span>
                <span className="text-5xl sm:text-6xl font-black tracking-tight">{totalPrice.toLocaleString()}</span>
                <span className="text-lg sm:text-xl font-semibold tracking-wider text-white/70 ml-1">USD</span>
              </div>
              <p className="text-white/70 text-xs mt-3 max-w-md mx-auto leading-relaxed">
                ($6,900 USD per person × {members} {members === 1 ? 'photographer' : 'photographers'})
              </p>
              <p className="text-white/60 text-xs mt-1">
                Deposit required now: <strong className="text-[#C9A24B]">${totalDeposit.toLocaleString()} USD</strong> ($2,000 × {members}) · Remaining balance due by <strong className="text-white/90">October 15, 2026</strong>.
              </p>
              <p className="text-white/40 text-[11px] mt-1">
                Single room upgrade available: $1,500 USD per person (subject to availability).
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openCheckout(totalDeposit, `Expedition Deposit (${members} ${members === 1 ? 'Guest' : 'Guests'})`)}
                  className="inline-flex items-center justify-center px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all gap-2"
                  style={{ background: '#A07828', color: '#fff' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#7A5C1E')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#A07828')}>
                  <CreditCardIcon className="w-4 h-4" /> Pay Deposit (${totalDeposit.toLocaleString()} USD)
                </button>
                <button
                  onClick={() => openCheckout(totalPrice, `Full Expedition Payment (${members} ${members === 1 ? 'Guest' : 'Guests'})`)}
                  className="inline-flex items-center justify-center px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm border transition-colors gap-2"
                  style={{ borderColor: 'rgba(201,162,75,0.4)', color: '#C9A24B' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A24B' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,162,75,0.4)' }}>
                  Pay Full (${totalPrice.toLocaleString()} USD)
                </button>
              </div>
            </div>

            {/* Included / Not included */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="px-9 py-10" style={{ borderRight: '1px solid rgba(13,27,42,0.08)' }}>
                <p className="eyebrow text-[10px] mb-6" style={{ color: '#A07828' }}>What's Included</p>
                <ul className="flex flex-col gap-3.5">
                  {INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-9 py-10" style={{ background: '#FAFAF7' }}>
                <p className="eyebrow text-[10px] mb-6" style={{ color: '#637282' }}>What's Not Included</p>
                <ul className="flex flex-col gap-3.5">
                  {NOT_INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XIcon dark />
                      <span className="text-sm leading-relaxed" style={{ color: '#637282' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* Group stats */}
      <section style={{ background: '#F2EDE2', borderTop: '1px solid rgba(13,27,42,0.07)', borderBottom: '1px solid rgba(13,27,42,0.07)' }} className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {GROUP.map((s, i) => (
            <FadeIn key={s.label} delay={i * 60} className="flex flex-col items-center text-center gap-2">
              <span className="text-2xl">{s.icon}</span>
              <p className="font-semibold text-sm" style={{ color: '#0D1B2A' }}>{s.value}</p>
              <p className="eyebrow text-[10px]" style={{ color: '#637282' }}>{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <Rule />

      {/* Logistics & Lodges */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Logistics &amp; Infrastructure</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-10" style={{ color: '#0D1B2A' }}>Accommodation &amp; Transportation</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Saj in the Forest (Pench)',
                label: 'Nights 1–4 · Pench',
                body: 'A boutique luxury resort set across 32 acres adjoining Pench’s buffer zone, near Turia Gate. Twin-share airconditioned rooms with private en-suite bathrooms, serene natural surroundings, and on-site stargazing space.'
              },
              {
                title: 'Tathastu Tadoba Resort',
                label: 'Nights 5–9 · Tadoba',
                body: 'The Tiger Village Resort, located just over a kilometer from Tadoba-Andhari’s Moharli Gate. Airconditioned rooms, exceptional hospitality, and immediate proximity to core safari access.'
              },
              {
                title: 'Private 4x4 Innova Transfers',
                label: 'Intercity Travel',
                body: 'All road transfers (Nagpur–Pench, Pench–Tadoba, and Tadoba–Nagpur) conducted in private, airconditioned 4x4 Toyota Innova vehicles with ample space for luggage and delicate camera gear.'
              },
              {
                title: 'Dedicated Safari Jeeps & Vehicle Rotation',
                label: 'In-Park Photography',
                body: '4 safari vehicles (comfortable 2 guests each) for all Pench safaris and two Tadoba days. 3 vehicles on our two 12-hour full-day Tadoba safaris per park regulations. Co-directors Himanshu and Srini rotate between vehicles daily.'
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80} className="p-8 rounded-sm"
                style={{ background: '#F2EDE2', border: '1px solid rgba(13,27,42,0.07)' }}>
                <p className="eyebrow text-[10px] mb-3" style={{ color: '#A07828' }}>{item.label}</p>
                <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: '#0D1B2A' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{item.body}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={150} className="mt-8 p-7 rounded-sm"
            style={{ background: '#FBF3E0', border: '1px solid rgba(160,120,40,0.18)' }}>
            <p className="eyebrow text-[10px] mb-4" style={{ color: '#A07828' }}>Safari &amp; Park Regulations</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                <strong style={{ color: '#0D1B2A' }}>Gate rotation:</strong> Indian tiger reserves assign safari zones by permit, so we will rotate gates daily to maximize sighting variety — this also means the exact schedule may shift based on permit availability.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                <strong style={{ color: '#0D1B2A' }}>Drone Policy:</strong> Please note that India's import regulations make it very difficult for tourists to bring personal drones into the country, and drones are not permitted inside either reserve in any case. We recommend leaving drones at home for this trip.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* Cancellation Policy Section */}
      <section style={{ background: '#FAFAF7' }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Terms &amp; Policies</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-8" style={{ color: '#0D1B2A' }}>Cancellation Policy</h2>
          </FadeIn>
          <FadeIn delay={80} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CANCELLATION_TIERS.map((tier, i) => (
              <div key={i} className="p-6 rounded-sm bg-white" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
                <p className="eyebrow text-[10px] mb-2" style={{ color: '#A07828' }}>{tier.time}</p>
                <h4 className="font-serif font-bold text-lg mb-2" style={{ color: '#0D1B2A' }}>{tier.fee}</h4>
                <p className="text-xs text-[#637282] leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </FadeIn>
          <FadeIn delay={120} className="mt-8 text-center">
            <p className="text-xs text-[#637282]">
              Deposit: $2,000 USD required to reserve your spot. Remaining balance of $4,900 USD due by October 15, 2026. Health &amp; travel insurance is strongly recommended.
            </p>
          </FadeIn>
        </div>
      </section>

      <Rule />

      <section style={{ background: '#FFFFFF' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-2" style={{ color: '#0D1B2A' }}>Ready to secure your place?</p>
            <p className="text-sm mb-8" style={{ color: '#637282' }}>Limited to 8 photographers. A $2,000 USD deposit reserves your spot.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openCheckout(2000, 'Expedition Reserve Deposit')}
                className="inline-flex items-center justify-center px-8 py-3.5 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all"
                style={{ background: '#A07828', color: '#fff' }}>
                <span className="flex items-center gap-2"><CreditCardIcon className="w-4 h-4" /> Pay Deposit ($2,000 USD)</span>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Payment Gateway Modal */}
      <PaymentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        itemTitle={payTitle}
        amountUSD={payAmount}
      />
    </>
  )
}
