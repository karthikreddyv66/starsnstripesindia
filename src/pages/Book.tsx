import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FadeIn, GoldDivider, Rule, Eyebrow, OutlineBtn, PageHero, IMG_TIGER1, CreditCardIcon } from '../components/shared'
import PaymentModal from '../components/PaymentModal'

export default function Book() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    occupancy: 'Twin-share ($6,900 USD)',
    experience: 'Intermediate',
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
        eyebrow="Reserve Your Place · April 5–14, 2027"
        title="HOW TO BOOK?"
        subtitle="This inaugural expedition is limited to 8 photographers. A USD 2,000 deposit reserves your spot; the remaining balance is due by October 15, 2026."
        bg={IMG_TIGER1}
      />

      <GoldDivider />

      {/* ── HOW TO BOOK? Form & Details ──────────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          
          {/* Left Column: Verbatim PDF terms & quick summary */}
          <FadeIn className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-8 rounded-sm bg-white" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
              <Eyebrow className="mb-2 text-xs">Reservation Policy</Eyebrow>
              <h2 className="font-serif text-2xl font-bold mb-4 uppercase tracking-wide" style={{ color: '#0D1B2A' }}>
                HOW TO BOOK?
              </h2>
              
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#3D4F60' }}>
                This inaugural expedition is limited to 8 photographers. To secure your place, please fill in the form.
              </p>
              
              <p className="text-sm font-semibold leading-relaxed mb-4" style={{ color: '#7A5C1E' }}>
                A USD 2,000 deposit reserves your spot; the remaining balance is due by October 15, 2026.
              </p>

              <p className="text-xs italic leading-relaxed text-[#637282] pt-4 border-t border-black/[0.06]">
                This tour is governed by our Terms and Conditions, including cancellation policy, weather/wildlife disclaimer, and payment terms.
              </p>
            </div>

            <Link
              to="/pricing#cancellation-policy"
              className="w-full py-3.5 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all flex items-center justify-center gap-2 border border-[#A07828] text-[#A07828] hover:bg-[#A07828] hover:text-white text-center"
            >
              Terms and Conditions
            </Link>
            <OutlineBtn to="/pricing">Review Full Pricing Details</OutlineBtn>
          </FadeIn>

          {/* Right Column: Form */}
          <FadeIn delay={100} className="lg:col-span-3 rounded-sm overflow-hidden bg-white"
            style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow-md)' }}>
            {submitted ? (
              <div className="p-12 text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ background: '#E8F5EE' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#1A5030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: '#0D1B2A' }}>Reservation Received</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#637282' }}>
                  Thank you, {form.name}. We have received your booking request for the inaugural expedition (April 5–14, 2027). A confirmation email has been sent to {form.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="p-8 md:p-10 flex flex-col gap-5">
                <h3 className="font-serif text-xl font-bold mb-2" style={{ color: '#0D1B2A' }}>
                  Expedition Reservation Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handle}
                      placeholder="Your Full Name"
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
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handle}
                      placeholder="+1 (555) 000-0000"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A07828')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Country</label>
                    <input name="country" value={form.country} onChange={handle}
                      placeholder="Country of residence"
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = '#A07828')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Occupancy Option</label>
                    <select name="occupancy" value={form.occupancy} onChange={handle}
                      style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="Twin-share ($6,900 USD)">Twin-Share Room (USD 6,900)</option>
                      <option value="Single Room Upgrade (+$1,500 USD)">Single Room Upgrade (+USD 1,500)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Photography Experience</label>
                    <select name="experience" value={form.experience} onChange={handle}
                      style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="Beginner">Beginner / All Levels</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced / Semi-Pro">Advanced / Semi-Pro</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="eyebrow text-[10px]" style={{ color: '#637282' }}>Message / Inquiries</label>
                  <textarea name="message" rows={3} value={form.message} onChange={handle}
                    placeholder="Any questions regarding gear, diet, or arrival arrangements..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.target.style.borderColor = '#A07828')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(13,27,42,0.18)')} />
                </div>

                <button type="submit"
                  className="w-full py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all mt-2"
                  style={{ background: '#A07828', color: '#fff' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#7A5C1E')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#A07828')}>
                  Submit Reservation &amp; Proceed to Deposit
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
        itemTitle="Expedition Reserve Deposit (USD 2,000)"
        amountUSD={2000}
        onSuccess={() => {
          setShowPayModal(false)
          setSubmitted(true)
        }}
      />
    </>
  )
}
