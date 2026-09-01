import { useState } from 'react'
import { FadeIn, GoldDivider, Rule, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_MILKY } from '../components/shared'

const DAYS = [
  {
    id: 'd1',
    label: 'Day 1 — April 5',
    title: 'Arrival in Nagpur → Transfer to Pench Tiger Reserve',
    phase: 'Pench',
    summary: 'Airport meetup, drive to Pench, lunch, gear briefing, first group dinner, and lodge-based astrophotography.',
    content: "Arrive at Nagpur Airport (NAG) by 9:30 AM or earlier (we can arrange room(s) at the Radisson Blu Hotel, 2 miles from Nagpur airport, at an extra charge, if you plan to arrive the previous day). We'll meet the group in the lobby of the Radisson Blu post breakfast at 10:00 AM and drive roughly 2.5–3 hours to our jungle lodge (Saj in the Forest) on the edge of Pench Tiger Reserve. Lunch is served on arrival at the lodge. After settling in, we will hold a welcome briefing and full gear review — camera settings, lens choice for wildlife vs. astro, and a look at the week's weather and moon phase. First group dinner in the evening, followed by our first astrophotography session at night led by Abhishek Pawse at the lodge's dedicated astrophotography space, a short walk away."
  },
  {
    id: 'd2',
    label: 'Days 2–4 — April 6 to April 8',
    title: 'Pench: Core Safaris & Dark-Sky Observation Sessions (New Moon)',
    phase: 'Pench',
    summary: 'Afternoon core zone safaris (2:30–7:00 PM), dinners, 10 PM–2 AM dark-sky sessions at Pench observatory, and midday Lightroom workshops.',
    content: "Rest in the morning. After a relaxed morning and lunch, we leave the lodge around 2:30 PM for the day's wildlife safari with Himanshu and Srini into the core reserve zone, tracking tigers, leopards, bears, and Indian gaur, among others, along forest trails and waterholes. We return to the lodge by around 7:00 PM for dinner. We leave around 9:00 PM after dinner for the 45-minute drive to Pench's main dark-sky observation site for the day's astrophotography session with Abhishek, returning around 2–3 AM. (April 6 is new moon day, guaranteeing the darkest possible skies with the galactic core visible for over 5 hours!). On April 7 and 8, between 11:30 AM and 1:00 PM, for interested guests, we will have sessions at the lodge reviewing photos, going over post-processing techniques in Adobe Lightroom and Photoshop, and discussing all things photography. Total: Three 4-hour safaris and three 4-hour dark-sky sessions across three nights."
  },
  {
    id: 'd3',
    label: 'Day 5 — April 9',
    title: 'Travel Day: Pench → Tadoba-Andhari Tiger Reserve',
    phase: 'Transfer',
    summary: 'Scenic 5-hour private Innova transfer to Tadoba, lunch en route, rest & memory card backup day.',
    content: "After breakfast, around 9:30 AM, we bid farewell to Pench and take comfortable Toyota Innova vehicles for the approximately 5-hour drive to Tadoba-Andhari Tiger Reserve. Lunch en route. No safari today on either end of the journey — a dedicated rest day for gear, memory card backups, and recovery from the late Pench nights. We arrive at our Tadoba lodge (Tathastu Tadoba) in the afternoon, settle in, and have dinner and rest, ready for the first full safari day tomorrow."
  },
  {
    id: 'd4',
    label: 'Day 6 — April 10',
    title: 'Tadoba: Two Half-Day Safaris (Morning & Afternoon)',
    phase: 'Tadoba',
    summary: '5 AM dawn safari with breakfast in the reserve, 12:30 PM photo analysis/editing session, 2:30 PM afternoon safari.',
    content: "We start in Tadoba with a morning-and-evening rhythm: leave the lodge around 5:00 AM, return to the lodge around 10:30 AM (breakfast served at a scenic location inside the reserve, with hot tea, coffee, and snacks on hand), rest and have lunch, then head out again around 2:30 PM for the afternoon safari, returning 7:00–7:30 PM for dinner. These days run across 4 vehicles — a comfortable two guests per vehicle — with Himanshu and Srini rotating between vehicles through the day. For interested guests, we have a photo review, analysis, and post-processing session with Srini from 12:30–1:30 PM."
  },
  {
    id: 'd5',
    label: 'Day 7 — April 11',
    title: 'Tadoba: 12-Hour Full-Day Safari (Dawn to Dusk)',
    phase: 'Tadoba',
    summary: 'Full 12-hour continuous safari inside the park across daylight arc, packed lunch, 3 vehicles per park regulations.',
    content: "Today is a long 12-hour full-day safari, maximizing time in the field across the full arc of daylight, from first light through the midday lull and into evening color. We enter the park at dawn and remain inside until dusk, with a packed lunch and plenty of snacks, tea, and coffee provided in the park throughout the day. Park regulations limit full-day safaris to 3 vehicles; co-directors Himanshu and Srini rotate between vehicles to ensure every guest gets direct time with both."
  },
  {
    id: 'd6',
    label: 'Day 8 — April 12',
    title: 'Tadoba: Two Half-Day Safaris (Different Gates & Territories)',
    phase: 'Tadoba',
    summary: 'Second split safari day (5 AM and 2:30 PM) exploring new zones and waterholes, 4 vehicles (2 guests/jeep).',
    content: "Our second day with a morning-and-evening rhythm; same as on Day 6, April 10th. We will enter from a different gate to explore a different part and territory of Tadoba. Morning safari from 5:00 AM to 10:30 AM with breakfast in the reserve, followed by midday rest and photo review, and afternoon safari from 2:30 PM to 7:30 PM."
  },
  {
    id: 'd7',
    label: 'Day 9 — April 13',
    title: 'Tadoba: 12-Hour Full-Day Safari (Dawn to Dusk)',
    phase: 'Tadoba',
    summary: 'Final 12-hour full-day safari maximizing tiger encounters at peak dry season waterholes, packed lunch in reserve.',
    content: "Our final 12-hour full-day safari, following the same rhythm as April 11. Entering at dawn and exiting at dusk with packed lunch and refreshments in the park. This completes 6 safaris across four days in Tadoba — 40 hours of dedicated safari time, including two full 12-hour days, matching the format used by top international wildlife operators."
  },
  {
    id: 'd8',
    label: 'Day 10 — April 14',
    title: 'Farewell Breakfast → Nagpur Airport Drop-Off',
    phase: 'Departure',
    summary: 'Farewell lodge breakfast, transfer to Nagpur Airport (NAG) / hotel. Schedule flights for 2 PM or later.',
    content: "Farewell breakfast at the lodge. Drop-off to Nagpur airport and/or hotel (depending on guests' preference). Please arrange to book flights departing at or after 2:00 PM. End of tour with an unmatched dual-genre portfolio of Milky Way nightscapes and Bengal tiger action."
  },
]

const GLANCE = [
  { date: 'Apr 5 (Day 1)', location: 'Pench', morning: 'Meet at Radisson Blu Nagpur (10:00 AM)', afternoon: 'Transfer (2.5-3h), Lunch, Gear Review', evening: 'Dinner & First Astro Session at lodge' },
  { date: 'Apr 6 (Day 2)', location: 'Pench', morning: 'Rest & Lunch', afternoon: '2:30 PM Safari (Core Reserve)', evening: 'Dinner & Astro Session at Pench Dark Sky Site (New Moon)' },
  { date: 'Apr 7 (Day 3)', location: 'Pench', morning: 'Photo Review & Lightroom (11:30 AM)', afternoon: '2:30 PM Safari (Core Reserve)', evening: 'Dinner & Astro Session at Main Dark-Sky Site (10 PM–2 AM)' },
  { date: 'Apr 8 (Day 4)', location: 'Pench', morning: 'Photo Review & Photoshop (11:30 AM)', afternoon: '2:30 PM Safari (Core Reserve)', evening: 'Dinner & Astro Session at Main Dark-Sky Site (10 PM–2 AM)' },
  { date: 'Apr 9 (Day 5)', location: 'Transfer', morning: 'Breakfast & 9:30 AM Departure', afternoon: '~5-hr Innova Drive to Tadoba (Lunch en route)', evening: 'Check-in Tathastu Lodge, Card Backups, Dinner' },
  { date: 'Apr 10 (Day 6)', location: 'Tadoba', morning: '5:00 AM Safari (Breakfast in Park)', afternoon: 'Post-Processing (12:30) & 2:30 PM Safari', evening: 'Dinner & Evening Discussion (4 vehicles)' },
  { date: 'Apr 11 (Day 7)', location: 'Tadoba', morning: 'Dawn Entry: 12-HR FULL-DAY SAFARI', afternoon: 'Packed Lunch inside park, Continuous Tracking', evening: 'Dusk Exit, Dinner & Rest (3 vehicles)' },
  { date: 'Apr 12 (Day 8)', location: 'Tadoba', morning: '5:00 AM Safari (New Gate / Zone)', afternoon: '12:30 Photo Review & 2:30 PM Safari', evening: 'Dinner & Portfolio Feedback (4 vehicles)' },
  { date: 'Apr 13 (Day 9)', location: 'Tadoba', morning: 'Dawn Entry: 12-HR FULL-DAY SAFARI', afternoon: 'Packed Lunch inside park, Golden Hour Safari', evening: 'Dusk Exit, Farewell Group Dinner (3 vehicles)' },
  { date: 'Apr 14 (Day 10)', location: 'Departure', morning: 'Farewell Breakfast at Lodge', afternoon: 'Transfer to Nagpur Airport (Flights ≥ 2 PM)', evening: 'End of Tour' },
]

const PHASE_PILL: Record<string, { bg: string; text: string }> = {
  Pench: { bg: '#EAF0F8', text: '#1A4080' },
  Transfer: { bg: '#FBF3E0', text: '#7A5000' },
  Tadoba: { bg: '#E8F5EE', text: '#1A5030' },
  Departure: { bg: '#F0F0F0', text: '#444' },
}

export default function Itinerary() {
  const [open, setOpen] = useState<string | null>('d1')

  return (
    <>
      <PageHero
        eyebrow="April 5 – 14, 2027 · 9 Nights / 10 Days"
        title="Day-by-Day Itinerary"
        subtitle="The itinerary is flexible to ensure the best photography and viewing conditions for both astro- and wildlife photography. April is the driest part of the year in central India, giving us the best odds of clear skies throughout your stay."
        bg={IMG_MILKY}
      />

      <GoldDivider />

      {/* Safari & Session Summary Stats */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(13,27,42,0.08)' }} className="py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-sm" style={{ background: '#FAFAF7' }}>
            <p className="font-serif font-bold text-2xl" style={{ color: '#A07828' }}>52 Hours</p>
            <p className="eyebrow text-[10px]" style={{ color: '#637282' }}>Dedicated Safari Time (9 Safaris)</p>
          </div>
          <div className="p-4 rounded-sm" style={{ background: '#FAFAF7' }}>
            <p className="font-serif font-bold text-2xl" style={{ color: '#A07828' }}>4 Sessions</p>
            <p className="eyebrow text-[10px]" style={{ color: '#637282' }}>Dark-Sky Astrophotography (Pench)</p>
          </div>
          <div className="p-4 rounded-sm" style={{ background: '#FAFAF7' }}>
            <p className="font-serif font-bold text-2xl" style={{ color: '#A07828' }}>2 Full Days</p>
            <p className="eyebrow text-[10px]" style={{ color: '#637282' }}>12-Hour Safaris in Tadoba</p>
          </div>
          <div className="p-4 rounded-sm" style={{ background: '#FAFAF7' }}>
            <p className="font-serif font-bold text-2xl" style={{ color: '#A07828' }}>2 Guests / Jeep</p>
            <p className="eyebrow text-[10px]" style={{ color: '#637282' }}>Comfort on Half-Day Drives</p>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section style={{ background: '#FAFAF7' }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Schedule Overview</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-10" style={{ color: '#0D1B2A' }}>At a Glance</h2>
          </FadeIn>
          <FadeIn delay={80} className="overflow-x-auto rounded-sm"
            style={{ boxShadow: 'var(--shadow)', border: '1px solid rgba(13,27,42,0.08)', background: '#fff' }}>
            <table className="w-full text-sm" style={{ minWidth: 680 }}>
              <thead>
                <tr style={{ background: '#F2EDE2', borderBottom: '1px solid rgba(13,27,42,0.08)' }}>
                  {['Day & Date', 'Location', 'Morning', 'Afternoon', 'Evening'].map(h => (
                    <th key={h} className="text-left px-5 py-3.5 eyebrow text-[10px]" style={{ color: '#A07828' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {GLANCE.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < GLANCE.length - 1 ? '1px solid rgba(13,27,42,0.06)' : 'none' }}>
                    <td className="px-5 py-3.5 font-semibold text-xs whitespace-nowrap" style={{ color: '#A07828' }}>{row.date}</td>
                    <td className="px-5 py-3.5">
                      <span className="text-[10px] px-2.5 py-1 rounded-full font-semibold"
                        style={{ background: PHASE_PILL[row.location]?.bg, color: PHASE_PILL[row.location]?.text }}>
                        {row.location}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-xs" style={{ color: '#637282' }}>{row.morning}</td>
                    <td className="px-5 py-3.5 text-xs font-medium" style={{ color: '#3D4F60' }}>{row.afternoon}</td>
                    <td className="px-5 py-3.5 text-xs" style={{ color: '#3D4F60' }}>{row.evening}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* Accordion */}
      <section style={{ background: '#FFFFFF' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Full Breakdown</Eyebrow>
            <h2 className="font-serif text-3xl font-bold mb-10" style={{ color: '#0D1B2A' }}>Detailed Day-by-Day Itinerary</h2>
          </FadeIn>
          <FadeIn delay={80} className="rounded-sm overflow-hidden"
            style={{ border: '1px solid rgba(13,27,42,0.1)', boxShadow: 'var(--shadow)' }}>
            {DAYS.map((day, idx) => (
              <div key={day.id} style={{ borderBottom: idx < DAYS.length - 1 ? '1px solid rgba(13,27,42,0.08)' : 'none' }}>
                <button
                  className="w-full flex items-start justify-between px-7 py-6 text-left transition-colors hover:bg-amber-50/30"
                  onClick={() => setOpen(o => o === day.id ? null : day.id)}>
                  <div className="flex items-start gap-4 min-w-0">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ background: PHASE_PILL[day.phase]?.bg, color: PHASE_PILL[day.phase]?.text }}>
                      {idx + 1}
                    </span>
                    <div>
                      <p className="eyebrow text-[10px] mb-1" style={{ color: '#A07828' }}>{day.label}</p>
                      <p className="font-serif text-lg font-semibold leading-snug mb-1" style={{ color: '#0D1B2A' }}>{day.title}</p>
                      <p className="text-xs text-[#637282] leading-relaxed hidden sm:block">{day.summary}</p>
                    </div>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="mt-2 flex-shrink-0 ml-4"
                    style={{ transform: open === day.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                    <path d="M5 7.5l5 5 5-5" stroke="#A07828" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div style={{ maxHeight: open === day.id ? '600px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                  <div className="px-7 pb-7 pt-1 border-t border-black/[0.04]">
                    <p className="text-sm leading-[1.9]" style={{ color: '#4A5568' }}>{day.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      <section style={{ background: '#F2EDE2' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-6" style={{ color: '#0D1B2A' }}>Ready to join the expedition?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/book">Reserve Your Spot</GoldBtn>
              <OutlineBtn to="/pricing">View Pricing</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
