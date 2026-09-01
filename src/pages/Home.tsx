import { Link } from 'react-router-dom'
import { FadeIn, GoldDivider, Rule, CheckIcon, Eyebrow, GoldBtn, OutlineBtn, IMG_HERO, IMG_MILKY, IMG_TIGER1, IMG_TIGER2, IMG_STARS } from '../components/shared'

const STATS = [
  { value: '10', label: 'Days (9 Nights)' },
  { value: '8',  label: 'Max Photographers' },
  { value: '3',  label: 'Expert Leaders' },
  { value: '9',  label: 'Safaris (52 Hours)' },
  { value: '4',  label: 'Dark-Sky Sessions' },
]

const WHY = [
  'Two genres in one trip: astrophotography and wildlife photography.',
  'A rare dark-sky setting inside a tiger reserve at Pench (India’s first Dark Sky Park).',
  'April 6, 2027 is new moon, guaranteeing the darkest possible skies for our four nights of astrophotography — timed to central India’s dry season with 5+ hours of Milky Way core visibility.',
  'Prime dry-season timing for tiger photography in central India, when sightings around water and open habitat are at their best.',
  'Small-group access: two co-directors present throughout the trip, joined by a specialist astrophotography expert for four nights in Pench — never more than 8 guests total.',
  '7 Half-day safaris (4 hours each: 3 in Pench, 4 in Tadoba) and 2 Full-Day 12-hour safaris in Tadoba totaling 52 hours of dedicated safari time, plus 4 dark-sky sessions (4-5 hours each) in Pench.',
  'A mix of full-day and half-day safaris in Tadoba — the same format used by leading international tiger-photography operators — designed to maximize volume and diversity of sightings.',
  'Wildlife guidance from Himanshu Bagde, who has photographed over 700 individual tigers across more than two decades and tracks individual tigers by name and territory across Pench and Tadoba.',
  'Four nights of expert astrophotography guidance in Pench from Abhishek Pawse, the DarkSky International advocate whose work helped bring Pench its Dark Sky Park designation.',
  'Co-direction, astrophotography coaching, and Lightroom/Photoshop post-processing guidance throughout from P S Srinivas (“Srini”).',
]

export default function Home() {
  return (
    <>
      {/* ── Hero (cinematic photo section) ──────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ background: '#070D16' }}>
        <div className="absolute inset-x-0 bottom-0 top-[84px] bg-cover bg-center" style={{ backgroundImage: `url(${IMG_HERO})` }} />
        <div className="absolute inset-x-0 bottom-0 top-[84px]" style={{
          background: 'linear-gradient(to bottom, rgba(7,13,22,0.42) 0%, rgba(7,13,22,0.2) 30%, rgba(7,13,22,0.65) 72%, rgba(7,13,22,0.97) 100%)',
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-[130px] pb-12 flex flex-col items-center gap-5">
          <p className="hero-in eyebrow" style={{ color: '#C9A24B' }}>
            An Astrophotography + Tiger Photography Expedition
          </p>
          <h1 className="hero-in hero-in-d1 font-serif font-black text-white leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}>
            Stars, Stripes<br />&amp; Wild India
          </h1>
          <p className="hero-in hero-in-d2 font-serif text-xl md:text-2xl italic font-normal" style={{ color: '#C9A24B' }}>
            Pench National Park &amp; Tadoba-Andhari Tiger Reserve
          </p>
          <p className="hero-in hero-in-d2 eyebrow text-white/50 mt-1">April 5 – 14, 2027</p>
          <p className="hero-in hero-in-d3 text-white/75 text-base md:text-lg max-w-2xl leading-relaxed">
            Photograph the Milky Way over Bengal tiger habitat in Pench, India's first Dark Sky Park, then spend four days pursuing tigers in Tadoba-Andhari — including two full-day safaris — one of central India's most tiger-dense reserves. Designed for photographers of all levels.
          </p>

          {/* Leaders Callout Bar */}
          <div className="hero-in hero-in-d3 text-white/60 text-xs max-w-2xl text-center leading-relaxed">
            Led by Co-Directors <strong className="text-white/90">Himanshu Bagde</strong> (Wildlife Photography Lead) and <strong className="text-white/90">P S Srinivas (“Srini”)</strong> (Astrophotography &amp; Post-Processing Guide), joined in Pench by DarkSky advocate <strong className="text-white/90">Abhishek Pawse</strong>.
          </div>

          {/* Pill callout */}
          <div className="hero-in hero-in-d4 mt-2 px-7 py-5 max-w-2xl w-full text-center rounded-sm"
            style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(10px)', border: '1px solid rgba(201,162,75,0.3)' }}>
            <p className="font-serif italic text-white/90 text-sm md:text-base leading-relaxed">
              "Milky Way nights. Tiger safaris at golden light.<br />One seamless photography journey."
            </p>
            <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(201,162,75,0.35),transparent)', margin: '12px 0' }} />
            <p className="eyebrow text-white/60 text-[10px] tracking-wider">
              APRIL 5–9: ASTROPHOTOGRAPHY AND TIGER SAFARIS IN PENCH &nbsp;|&nbsp; APRIL 9–14: TIGER SAFARIS IN TADOBA
            </p>
          </div>

          <div className="hero-in hero-in-d5 flex flex-col sm:flex-row gap-4 mt-2">
            <Link to="/pricing"
              className="px-9 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm transition-all"
              style={{ background: '#A07828', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#7A5C1E')}
              onMouseLeave={e => (e.currentTarget.style.background = '#A07828')}>
              Reserve Your Spot
            </Link>
            <Link to="/itinerary"
              className="px-9 py-4 text-[11px] tracking-[0.18em] uppercase font-semibold rounded-sm border transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A24B'; e.currentTarget.style.color = '#C9A24B' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}>
              View Itinerary
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35 animate-bounce">
          <span className="eyebrow text-white/60 text-[9px]">Scroll</span>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
            <path d="M6 1v10M1 8l5 6 5-6" stroke="#C9A24B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(13,27,42,0.08)' }} className="py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 60} className="flex flex-col items-center text-center gap-1.5">
              <span className="font-serif font-bold" style={{ fontSize: 26, color: '#A07828' }}>{s.value}</span>
              <span className="eyebrow text-[10px]" style={{ color: '#637282' }}>{s.label}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      <Rule />

      {/* ── Overview ──────────────────────────────────────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <Eyebrow className="mb-4">Overview</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: '#0D1B2A' }}>
              The Experience —<br />Two Worlds. One Unforgettable Journey.
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: '#3D4F60' }}>
              This 10-day India photography tour combines two extraordinary experiences in one seamless itinerary — the inaugural edition of what we intend to run as a recurring expedition. Two of the most compelling subjects in nature photography in one trip: dark-sky astrophotography and Bengal tiger wildlife photography.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#3D4F60' }}>
              The journey opens in the pristine, internationally certified dark skies of Pench National Park, which was designated India's first Dark Sky Park in January 2024 with developed stargazing infrastructure including observatory facilities. Pench is a rare setting for night-sky photography inside a tiger landscape. The second half moves to Tadoba-Andhari Tiger Reserve, one of central India's best-known tiger destinations, where photographers work from safari vehicles in search of Bengal tigers and other wildlife during the best light of the day.
            </p>
            <div className="p-5 mb-8 rounded-sm" style={{ background: '#F2EDE2', borderLeft: '3px solid #A07828' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>
                Built for photographers of all levels, this journey balances instruction, comfort, and field time. The tone of the trip is luxury in accommodation, expedition-style in wildlife experience, and educational in photography guidance.
              </p>
            </div>

            <Eyebrow className="mb-5">Why This Tour Stands Out</Eyebrow>
            <ul className="flex flex-col gap-3.5 mb-10">
              {WHY.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <OutlineBtn to="/itinerary">See Full Itinerary</OutlineBtn>
              <GoldBtn to="/pricing">View Pricing</GoldBtn>
            </div>
          </FadeIn>

          <FadeIn delay={160} className="rounded-sm overflow-hidden" style={{ aspectRatio: '3/4', background: '#e8e0d4', boxShadow: 'var(--shadow-md)' }}>
            <img src={IMG_TIGER1} alt="Bengal tiger in golden light" className="w-full h-full object-cover" />
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* ── Destination preview ────────────────────────────────────────────── */}
      <section style={{ background: '#F2EDE2' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-14">
            <Eyebrow className="mb-3">Two Destinations</Eyebrow>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-serif text-4xl font-bold" style={{ color: '#0D1B2A' }}>Pench &amp; Tadoba</h2>
              <Link to="/destinations" className="text-sm font-medium transition-colors" style={{ color: '#A07828' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#7A5C1E')}
                onMouseLeave={e => (e.currentTarget.style.color = '#A07828')}>
                Explore all destinations →
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                title: 'Pench National Park',
                dates: 'April 5–9, 2027',
                tag: "India's First Dark Sky Park (Jan 2024)",
                desc: "Pench pairs a rare, internationally certified dark sky with a genuine tiger landscape. Set among forest, meadows and open clearings, it is built for star trails, wide-field nightscapes, twilight landscapes, and environmental wildlife imagery, all without leaving the reserve.",
                img: IMG_MILKY
              },
              {
                title: 'Tadoba-Andhari Tiger Reserve',
                dates: 'April 9–14, 2027',
                tag: 'Tiger Photography Focus · 40 Field Hours',
                desc: "Maharashtra's oldest and largest national park, and one of India's most tiger-dense reserves — a mosaic of dry deciduous forest, teak groves and shimmering lakes where sightings are among the most reliable in the world. Features two full 12-hour safaris plus four half-day drives.",
                img: IMG_TIGER2
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 100}
                className="group rounded-sm overflow-hidden"
                style={{ background: '#FFFFFF', boxShadow: 'var(--shadow)' }}>
                <div className="h-56 relative overflow-hidden" style={{ background: '#c8bfb0' }}>
                  <img src={card.img} alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,27,42,0.75) 25%, transparent 70%)' }} />
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="eyebrow text-[10px] mb-1" style={{ color: '#C9A24B' }}>{card.tag}</p>
                    <h3 className="font-serif text-lg font-bold text-white">{card.title}</h3>
                    <p className="text-white/50 text-xs mt-0.5 tracking-wide">{card.dates}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#4A5568' }}>{card.desc}</p>
                  <Link to="/destinations" className="text-xs font-semibold tracking-wide uppercase transition-colors" style={{ color: '#A07828' }}>
                    Learn more →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ── Comfort section ────────────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-14">
            <Eyebrow className="mb-3">Suitability &amp; Expectations</Eyebrow>
            <h2 className="font-serif text-4xl font-bold" style={{ color: '#0D1B2A' }}>Is This Tour the Right Trip for Me?</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Vehicle-based safaris with no strenuous hiking.',
                body: "This expedition is built around vehicle-based safaris — you'll spend your days seated in an open 4x4, not on foot, so there's no hiking fitness required to take part. Nights are spent at accessible, flat viewpoints for astrophotography, generally a short walk from the vehicle. If you've been hesitant about a wildlife trip because of physically demanding treks, or you've wanted to try astrophotography but didn't know where to start, this tour is designed for exactly that.",
              },
              {
                title: 'Early mornings, late nights, rewarding schedule.',
                body: 'Safaris run early morning and late afternoon to match the best light and highest tiger activity — with two full-day safaris in Tadoba for those who want maximum time in the field — and nights (when clear) run late for star photography, so days can be long. A basic level of alertness and flexibility around an early-and-late schedule will help you enjoy it fully.',
                tag: 'Note: Tadoba sits at low elevation, so there is no concern about altitude sickness on this trip.',
              },
            ].map(col => (
              <FadeIn key={col.title} className="p-8 rounded-sm"
                style={{ background: '#F2EDE2', border: '1px solid rgba(13,27,42,0.06)' }}>
                <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: '#0D1B2A' }}>{col.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{col.body}</p>
                {col.tag && (
                  <div className="mt-5 px-4 py-2.5 rounded-sm text-xs font-semibold inline-block"
                    style={{ background: '#A07828', color: '#fff' }}>
                    {col.tag}
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* ── Dark sky teaser (keeps dark — photo moment) ───────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG_STARS})` }} />
        <div className="absolute inset-0" style={{ background: 'rgba(5,10,18,0.82)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <Eyebrow dark className="mb-5">India's First Dark Sky Park · New Moon April 6, 2027</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Five Hours of<br />Galactic Core Visibility
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              The Milky Way, including the galactic core, is visible for over five hours on clear nights, moving from a low horizon ~5° arch before midnight to a high vertical ~70° position in pre-dawn hours. April is central India's dry season, historically the most reliable window for crystal-clear night skies.
            </p>
            <GoldBtn to="/destinations">Astrophotography Details</GoldBtn>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
              Inaugural Expedition. Limited to 8 Photographers.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#637282' }}>
              Places are strictly capped at 8 guests to guarantee intimate, high-impact guidance in the field and in post-processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/book">Reserve Your Spot</GoldBtn>
              <OutlineBtn to="/faq">Read FAQ</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
