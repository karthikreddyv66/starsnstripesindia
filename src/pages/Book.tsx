import { useState } from 'react'
import { FadeIn, GoldDivider, Rule, Eyebrow, OutlineBtn, PageHero, IMG_TIGER1, CreditCardIcon } from '../components/shared'
import PaymentModal from '../components/PaymentModal'

const STEPS = [
  {
    n: '01',
    title: 'Submit Your Enquiry',
    body: 'Complete the form below with your details and camera setup. We will review availability and confirm your reservation within 48 hours.'
  },
  {
    n: '02',
    title: 'Pay $2,000 USD Deposit',
    body: 'A deposit of $2,000 USD per person secures your spot on this inaugural expedition. The remaining balance of $4,900 USD is due by October 15, 2026.'
  },
  {
    n: '03',
    title: 'Pre-Tour Video Call',
    body: 'Join a dedicated online planning and gear-review video call with Co-Directors Himanshu Bagde and Srini to ensure you are 100% prepared.'
  },
  {
    n: '04',
    title: 'Meet in Nagpur (April 5)',
    body: 'Arrive at Nagpur Airport (NAG) by 9:30 AM on April 5, 2027. Group meetup at 10:00 AM at the Radisson Blu Hotel for our private 4x4 transfer to Pench.'
  },
]

export default function Book() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    occupancy: 'Double Occupancy (Twin-Share)',
    experience: 'Intermediate',
    cameraGear: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [showPayModal, setShowPayModal] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPayModal(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px', border: '1px solid rgba(13,27,42,0.18)',
    borderRadius: 2, fontSize: 14, color: '#0D1B2A', background: '#FFFFFF',
    outline: 'none', transition: 'border-color 0.2s',
  }

  return (
    <>
      <PageHero
        eyebrow="Reserve Your Spot"
        title="Book the Expedition"
        subtitle="Inaugural edition limited to 8 photographers. April 5–14, 2027. Secure your place with a $2,000 USD deposit."
        bg={IMG_TIGER1}
      />

      <GoldDivider />

      {/* How it works */}
      <section style={{ background: '#FAFAF7' }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Reservation Steps</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-12" style={{ color: '#0D1B2A' }}>How to Book</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <FadeIn key={step.n} delay={i * 80} className="p-7 rounded-sm flex flex-col justify-between"
                style={{ background: '#FFFFFF', border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
                <div>
                  <p className="font-serif font-black mb-4" style={{ fontSize: 36, color: 'rgba(160,120,40,0.22)', lineHeight: 1 }}>{step.n}</p>
                  <h3 className="font-serif text-base font-semibold mb-3" style={{ color: '#0D1B2A' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* Form & Facts */}
      <section style={{ background: '#FFFFFF' }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

          {/* Sidebar */}
          <FadeIn className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <Eyebrow className="mb-3">Expedition Summary</Eyebrow>
              <h2 className="font-serif text-3xl font-bold mb-5" style={{ color: '#0D1B2A' }}>Booking Enquiry</h2>
              <p className="text-sm leading-relaxed" style={{ color: '#637282' }}>
                Fill in your details below to reserve your place. Our co-directors will follow up within 48 hours to confirm availability and share payment documentation.
              </p>
            </div>
            <div className="p-6 rounded-sm" style={{ background: '#FBF3E0', border: '1px solid rgba(160,120,40,0.18)' }}>
              <p className="eyebrow text-[10px] mb-4" style={{ color: '#A07828' }}>Key Expedition Facts</p>
              {[
                ['Tour dates', 'April 5–14, 2027 (10 Days / 9 Nights)'],
                ['Total Price', '$6,900 USD per person'],
                ['Deposit Required', '$2,000 USD per person'],
                ['Balance Due', 'October 15, 2026 ($4,900 USD)'],
                ['Single Room Upgrade', '$1,500 USD per person'],
                ['Group Size', 'Maximum 8 photographers'],
                ['Arrival / Departure', 'Nagpur Airport (NAG)'],
                ['Tiger Safaris', '9 Safaris (52 Hours total)'],
                ['Dark-Sky Sessions', '4 Nights in Pench (New Moon)'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-start py-2.5" style={{ borderBottom: '1px solid rgba(13,27,42,0.07)' }}>
                  <span className="text-xs" style={{ color: '#637282' }}>{label}</span>
                  <span className="text-xs font-semibold text-right ml-4" style={{ color: '#0D1B2A' }}>{value}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowPayModal(true)}
              className="w-full py-3.5 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all flex items-center justify-center gap-2 border border-[#A07828] text-[#A07828] hover:bg-[#A07828] hover:text-white"
            >
              <CreditCardIcon className="w-4 h-4" /> Pay Deposit Directly ($2,000 USD)
            </button>
            <OutlineBtn to="/pricing">Review Full Pricing Details</OutlineBtn>
          </FadeIn>

          {/* Form card */}
          <FadeIn delay={100} className="lg:col-span-3 rounded-sm overflow-hidden"
            style={{ background: '#FAFAF7', border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow-md)' }}>
            {submitted ? (
              <div className="p-12 text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ background: '#E8F5EE' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#1A5030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: '#0D1B2A' }}>Enquiry Received</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#637282' }}>
                  Thank you, {form.name}. We have received your booking request for Stars, Stripes &amp; Wild India (April 5–14, 2027). We will follow up via email at {form.email} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="p-8 md:p-10 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handle}
                      placeholder="e.g. David Richardson"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A07828')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Email Address *</label>
                    <input name="email" type="email" required value={form.email} onChange={handle}
                      placeholder="you@example.com"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A07828')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Phone / WhatsApp</label>
                    <input name="phone" value={form.phone} onChange={handle}
                      placeholder="+1 (555) 000-0000"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A07828')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Country of Residence</label>
                    <input name="country" value={form.country} onChange={handle}
                      placeholder="e.g. United Kingdom, USA"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A07828')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Room Occupancy</label>
                    <select name="occupancy" value={form.occupancy} onChange={handle}
                      style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="Double Occupancy (Twin-Share)">Double Occupancy ($6,900 USD)</option>
                      <option value="Single Room Upgrade (+$1,500)">Single Room Upgrade ($8,400 USD)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Photography Level</label>
                    <select name="experience" value={form.experience} onChange={handle}
                      style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="Beginner">Beginner / Enthusiast</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced / Semi-Pro">Advanced / Semi-Pro</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Camera Equipment &amp; Lenses (Optional)</label>
                  <input name="cameraGear" value={form.cameraGear} onChange={handle}
                    placeholder="e.g. Sony A7IV, 200-600mm, 14mm f/1.8"
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = '#A07828')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Message / Questions</label>
                  <textarea name="message" rows={3} value={form.message} onChange={handle}
                    placeholder="Tell us about any specific interests, dietary needs, or questions..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.target.style.borderColor = '#A07828')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                </div>

                <button type="submit"
                  className="w-full py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all mt-2"
                  style={{ background: '#A07828', color: '#fff' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#7A5C1E')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#A07828')}>
                  Submit Enquiry &amp; Proceed to Deposit
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPayModal}
        onClose={() => setShowPayModal(false)}
        itemTitle="Expedition Reserve Deposit (April 5–14, 2027)"
        amountUSD={2000}
        onSuccess={() => {
          setShowPayModal(false)
          setSubmitted(true)
        }}
      />
    </>
  )
}
