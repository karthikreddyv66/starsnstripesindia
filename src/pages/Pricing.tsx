import { useState } from 'react'
import { FadeIn, GoldDivider, Rule, CheckIcon, XIcon, Eyebrow, PageHero, IMG_TIGER1, CreditCardIcon } from '../components/shared'
import PaymentModal from '../components/PaymentModal'

const WHATS_INCLUDED = [
  'Airport pick-up and drop-off at Nagpur (NAG)',
  'All transportation throughout the programme in private 4x4 Innova vehicles, plus dedicated safari vehicles (4 vehicles for most safaris; 3 vehicles, per park regulation, on our two full-day Tadoba safaris)',
  'All safari jeep and park permit fees for Pench and Tadoba-Andhari, core and buffer zones (9 safaris total)',
  'Twin-share accommodation at Saj in the Forest (Pench) and Tathastu Tadoba, each room with a private bathroom',
  'All meals (breakfast, lunch, and dinner) throughout the stay',
  'Hot beverages and snacks on all safaris; packed lunches in the park on our two full-day Tadoba safaris',
  'Four dedicated astrophotography sessions in Pench',
  'Guided photo review and post-processing sessions (Lightroom/Photoshop) with Srini, throughout the trip',
  'Pre-tour online planning call',
  'Co-direction throughout from Himanshu Bagde and P S Srinivas, joined in Pench by astrophotography expert Abhishek Pawse',
  'All prices inclusive of applicable Indian taxes',
]

const WHATS_NOT_INCLUDED = [
  'Flights to/from Nagpur Airport',
  'Single room upgrade — USD 1,500 per person, subject to availability',
  'Visa fees',
  'Health/travel insurance (strongly recommended — see booking terms)',
  'Camera gear rental (e.g., star tracker, telephoto lens)',
  'Tips, personal expenses, and anything not listed above',
]

const CANCELLATION_POLICY = [
  '120+ days before tour: 10% administrative fee',
  '90-75 days before tour: 50% cancellation fee',
  '75-60 days before tour: 75% cancellation fee',
  'Under 60 days or No Show: 100% cancellation fee',
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
        eyebrow="Inaugural Expedition · April 5–14, 2027"
        title="Pricing &amp; What's Included"
        subtitle="USD 6,900 per person (double occupancy — inaugural expedition, limited to 8 photographers)"
        bg={IMG_TIGER1}
      />

      <GoldDivider />

      {/* ── Page 15: Main Pricing Card ────────────────────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="rounded-sm overflow-hidden bg-white" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow-md)' }}>
            
            {/* Header Box */}
            <div className="px-8 py-10 text-center" style={{ background: '#0D1B2A', borderBottom: '3px solid #A07828' }}>
              <h2 className="font-serif text-3xl md:text-5xl font-black text-[#C9A24B] mb-2 tracking-tight">
                USD 6,900 per person
              </h2>
              <p className="text-white/80 text-sm md:text-base italic mb-6">
                (double occupancy — inaugural expedition, limited to 8 photographers)
              </p>

              {/* Dynamic Member Counter Selector */}
              <div className="mb-6 inline-flex items-center gap-4 bg-white/10 px-5 py-2.5 rounded-full border border-white/15">
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

              <div className="p-4 rounded-sm bg-white/10 max-w-xl mx-auto border border-white/15 text-center">
                <p className="text-white/95 text-sm md:text-base font-medium">
                  Deposit: USD 2,000 — required to reserve your spot. Remaining balance of USD 4,900 due by October 15, 2026.
                </p>
                {members > 1 && (
                  <p className="text-[#C9A24B] text-xs font-semibold mt-2">
                    Total for {members} guests: ${totalPrice.toLocaleString()} USD (Deposit: ${totalDeposit.toLocaleString()} USD)
                  </p>
                )}
              </div>

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

            {/* What's included & What's not included */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10" style={{ borderRight: '1px solid rgba(13,27,42,0.08)' }}>
                <h3 className="font-serif text-xl font-bold mb-6" style={{ color: '#0D1B2A' }}>What's included</h3>
                <ul className="flex flex-col gap-3.5">
                  {WHATS_INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 md:p-10 bg-[#FAFAF7]">
                <h3 className="font-serif text-xl font-bold mb-6" style={{ color: '#637282' }}>What's not included</h3>
                <ul className="flex flex-col gap-3.5">
                  {WHATS_NOT_INCLUDED.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XIcon dark />
                      <span className="text-sm leading-relaxed" style={{ color: '#637282' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs italic text-[#637282]">
                  See booking terms and conditions for our full refund and cancellation policy.
                </p>
              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* ── ACCOMMODATION & TRANSPORTATION ───────────────────────── */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3 text-xs">Jungle Lodges &amp; 4x4 Safaris</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-8 uppercase tracking-wide" style={{ color: '#0D1B2A' }}>
              ACCOMMODATION &amp; TRANSPORTATION
            </h2>

            <div className="p-8 rounded-sm bg-[#F2EDE2] mb-8" style={{ border: '1px solid rgba(13,27,42,0.08)' }}>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: '#0D1B2A' }}>
                Accommodation is in twin-share airconditioned rooms, each room with a private bathroom, at jungle lodges close to the reserve gates. Single occupancy is available on request for an additional $1,500 per person, subject to availability.
              </p>
              
              <div className="flex flex-col gap-3 mb-6">
                <div className="p-4 bg-white rounded-sm border border-black/[0.05]">
                  <p className="text-sm font-semibold" style={{ color: '#7A5C1E' }}>
                    Nights 1–4: Saj in the Forest, a boutique resort set across 32 acres adjoining Pench's buffer zone, near Turia Gate
                  </p>
                </div>
                <div className="p-4 bg-white rounded-sm border border-black/[0.05]">
                  <p className="text-sm font-semibold" style={{ color: '#1A5030' }}>
                    Nights 5–9: Tathastu Tadoba (The Tiger Village Resort), just over a kilometer from Tadoba-Andhari's Moharli Gate
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                All transportation is included: private 4x4 Innova vehicles for transfers, and safari vehicles throughout both parks — 4 vehicles (2 guests each) for all Pench safaris and for two of the four Tadoba days, and 3 vehicles (the park regulation limit for full-day safaris) on our two full-day Tadoba days. Co-directors Himanshu and Srini rotate between vehicles throughout to ensure every guest spends time with both.
              </p>
            </div>

            {/* Safari & park rules */}
            <div className="p-8 rounded-sm bg-[#FAFAF7]" style={{ border: '1px solid rgba(13,27,42,0.08)' }}>
              <h3 className="font-serif text-xl font-bold mb-5" style={{ color: '#0D1B2A' }}>
                Safari &amp; park rules
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                  <strong>Gate rotation:</strong> Indian tiger reserves assign safari zones by permit, so we'll rotate gates daily to maximize sighting variety — this also means the exact schedule may shift based on permit availability.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
                  <strong>Drones:</strong> Please note that India's import regulations make it very difficult for tourists to bring personal drones into the country, and drones are not permitted inside either reserve in any case. We recommend leaving drones at home for this trip.
                </p>
              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* ── Cancellation Policy ──────────────────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3 text-xs">Terms &amp; Refund Schedule</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-6 uppercase tracking-wide" style={{ color: '#0D1B2A' }}>
              Cancellation Policy
            </h2>

            <div className="p-8 rounded-sm bg-white mb-6" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
              <ul className="flex flex-col gap-3.5 mb-6">
                {CANCELLATION_POLICY.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#A07828] font-bold text-base leading-tight mt-0.5">•</span>
                    <span className="text-sm md:text-base font-semibold" style={{ color: '#0D1B2A' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-5 border-t border-black/[0.06]">
                <p className="text-sm leading-relaxed text-[#4A5568]">
                  Two of our four Tadoba days are dedicated full-day safaris — the same format used by leading international tiger-photography operators — maximizing time in the field across the full arc of daylight, from first light through the midday lull and into evening color.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        itemTitle={payTitle}
        amountUSD={payAmount}
      />
    </>
  )
}
