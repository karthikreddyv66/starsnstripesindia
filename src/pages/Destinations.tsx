import { FadeIn, GoldDivider, Rule, CheckIcon, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_MILKY, IMG_TIGER2, IMG_TIGER3, IMG_STARS } from '../components/shared'

const PENCH_THEMES = [
  'Milky Way landscapes & star-field compositions',
  'Night-sky storytelling with foreground trees, watchtowers & silhouettes',
  'Night photography workflow: focus, long exposure, deep sky & star trackers',
  'Daylight wildlife: tiger, leopard, gaur, sloth bear, dhole, sambar & chital',
  'Over 300 bird species: raptors, Kingfishers, Drongos, Orioles & Brown Fish Owl',
  'Peak dry-season sightings around forest waterholes and open clearings',
]

const TADOBA_THEMES = [
  'Tiger portraits & environmental wildlife compositions',
  'Behavior, movement, dust, backlight & low-angle safari imagery',
  '250 bird species & storytelling subjects (deer, langurs, wetland birds)',
  'Workflow for fast wildlife settings, long-lens technique & harsh-light editing',
  'Two 12-hour full-day safaris from first light through midday to golden hour',
  'Buffer & core gate rotation to maximize sighting diversity',
]

const PHOTOGRAPH = [
  'Star-filled landscapes in Pench, including dark-sky scenes and celestial compositions.',
  'Bengal tigers in Pench and Tadoba, plus a wide range of other wildlife — leopard, Indian gaur (bison), sloth bear, dhole (Indian wild dog), sambar, chital, langur, and over 300 recorded bird species across both reserves.',
  'The dramatic contrast between two visual worlds: still nightscapes and dynamic wildlife action.',
]

const LEARN = [
  'How to plan and expose wide-field nightscapes and deep-sky astro, with Abhishek and Srini.',
  'Techniques for focus and sharp images after dark.',
  'Image stacking, noise control, and clean foreground rendering in post-processing.',
  'Fast-response settings for wildlife encounters and long-lens field craft from a safari vehicle, with Himanshu.',
  'Working with golden-hour light, dust, and background separation.',
  'Post-processing in Adobe Lightroom and Photoshop with Srini, in guided sessions throughout the trip.',
  'Building a cohesive travel story across landscape, wildlife, and night imagery.',
]

const Tag = ({ children }: { children: string }) => (
  <span className="text-xs px-3 py-1.5 rounded-full font-medium"
    style={{ background: 'rgba(160,120,40,0.1)', color: '#7A5C1E', border: '1px solid rgba(160,120,40,0.2)' }}>
    {children}
  </span>
)

export default function Destinations() {
  return (
    <>
      <PageHero
        eyebrow="Two Iconic Indian Reserves"
        title={<>Pench &amp;<br />Tadoba-Andhari</>}
        subtitle="Two pristine ecosystems, two photographic genres — one seamlessly coordinated 10-day expedition."
        bg={IMG_MILKY}
      />

      <GoldDivider />

      {/* Pench Section */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <Eyebrow className="mb-3">April 5–9, 2027 · 4 Nights</Eyebrow>
            <h2 className="font-serif text-4xl font-bold mb-4 leading-tight" style={{ color: '#0D1B2A' }}>Pench National Park</h2>
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full font-semibold mb-6"
              style={{ background: '#E8F0FA', color: '#1A4080', border: '1px solid rgba(26,64,128,0.15)' }}>
              India's First Dark Sky Park · Designated January 2024
            </div>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#3D4F60' }}>
              Pench Tiger Reserve became India's first Dark Sky Park in January 2024, recognizing successful conservation efforts to reduce light pollution and protect the pristine quality of the night sky. Set among dense forest, meadows, and open clearings, Pench pairs an internationally certified dark sky with a genuine tiger landscape.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#637282' }}>
              Four nights in India's first Dark Sky Park include: 3 afternoon safaris with 2 photographers per vehicle for maximum shooting comfort (co-directed by Himanshu and Srini), and 4 astrophotography sessions guided by Abhishek Pawse, joined by Srini. The reserve also hosts over 300 bird species, including Stork-billed Kingfishers, White-rumped Vultures, and the rare Brown Fish Owl.
            </p>
            <Eyebrow className="mb-4">Photography Themes</Eyebrow>
            <div className="flex flex-wrap gap-2">{PENCH_THEMES.map(t => <Tag key={t}>{t}</Tag>)}</div>
          </FadeIn>

          <FadeIn delay={150} className="rounded-sm overflow-hidden"
            style={{ aspectRatio: '3/4', background: '#c8bfb0', boxShadow: 'var(--shadow-md)' }}>
            <img src={IMG_MILKY} alt="Milky Way over Pench National Park" className="w-full h-full object-cover" />
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* Astro deep dive */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG_STARS})` }} />
        <div className="absolute inset-0" style={{ background: 'rgba(5,10,18,0.86)' }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <Eyebrow dark className="mb-4">Astrophotography Program</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Certified Dark Skies,<br />New Moon April 6, 2027
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-3xl">
              April 6, 2027 is new moon day, guaranteeing the darkest possible skies for our four nights of astrophotography. The Milky Way, including the galactic core, is visible for <strong className="text-white">over five hours each clear night</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {[
                { time: 'Before Midnight (~10 PM)', title: 'Low Horizon Arch', desc: 'Milky Way rises as a low 5° arch — ideal for wide panoramas anchored by forest watchtowers and tree silhouettes.' },
                { time: 'Mid-Night (~12–1 AM)', title: 'Mid-Sky Arch', desc: 'Galactic core climbs to 30–40° — magnificent wide-angle compositions and deep-sky exposures.' },
                { time: 'Pre-Dawn (~2–3 AM)', title: 'High Vertical Position', desc: 'Core ascends to approximately 70° vertical — striking ground-to-zenith single-frame and stacked images.' },
              ].map(item => (
                <div key={item.title} className="p-5 rounded-sm"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,162,75,0.25)' }}>
                  <p className="eyebrow text-[10px] mb-1" style={{ color: '#C9A24B' }}>{item.time}</p>
                  <p className="text-white font-semibold text-sm mb-2">{item.title}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-3xl">
              Night 1 session is held at the lodge’s own dedicated astrophotography space, a short walk away. Nights 2–4 move to Pench’s main dark-sky observation site, roughly a 45-minute drive from the lodge, led by Abhishek Pawse and supported by Srini.
            </p>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* Tadoba Section */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn delay={150} className="order-2 lg:order-1 rounded-sm overflow-hidden"
            style={{ aspectRatio: '3/4', background: '#c8bfb0', boxShadow: 'var(--shadow-md)' }}>
            <img src={IMG_TIGER3} alt="Bengal Tiger at Tadoba-Andhari Tiger Reserve" className="w-full h-full object-cover" />
          </FadeIn>

          <FadeIn className="order-1 lg:order-2">
            <Eyebrow className="mb-3">April 9–14, 2027 · 5 Nights</Eyebrow>
            <h2 className="font-serif text-4xl font-bold mb-4 leading-tight" style={{ color: '#0D1B2A' }}>Tadoba-Andhari Tiger Reserve</h2>
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full font-semibold mb-6"
              style={{ background: '#E8F5EE', color: '#1A5030', border: '1px solid rgba(26,80,48,0.15)' }}>
              Maharashtra's Oldest &amp; Largest Park · Peak Tiger Encounters
            </div>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#3D4F60' }}>
              Tadoba-Andhari is widely recognized by international wildlife photography operators as one of the finest destinations in India for Bengal tiger safaris. A mosaic of dry deciduous forest, teak groves, and shimmering permanent lakes, its remote buffer villages sit far from major light pollution.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#637282' }}>
              Five nights at Tadoba include a mix of full-day and half-day safaris across four days: <strong style={{ color: '#0D1B2A' }}>6 safaris totaling 40 hours in the field</strong>, including <strong style={{ color: '#0D1B2A' }}>two full 12-hour days (April 11 &amp; 13)</strong>. April’s peak dry season draws tigers and prey to shrinking waterholes, making this the golden window for sightings. The park is also home to up to 250 bird species including the Oriental Darter, Tickell's Blue Flycatcher, and the endangered Lesser Adjutant Stork.
            </p>
            <Eyebrow className="mb-4">Photography Themes</Eyebrow>
            <div className="flex flex-wrap gap-2">{TADOBA_THEMES.map(t => <Tag key={t}>{t}</Tag>)}</div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* Photo & Learn */}
      <section style={{ background: '#F2EDE2' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Comprehensive Curriculum</Eyebrow>
            <h2 className="font-serif text-4xl font-bold mb-14" style={{ color: '#0D1B2A' }}>What Guests Will Photograph &amp; Learn</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { heading: "What Guests Will Photograph", items: PHOTOGRAPH },
              { heading: "What Guests Will Learn", items: LEARN },
            ].map((col, i) => (
              <FadeIn key={col.heading} delay={i * 100}>
                <div className="p-8 rounded-sm h-full" style={{ background: '#FFFFFF', boxShadow: 'var(--shadow)', border: '1px solid rgba(13,27,42,0.06)' }}>
                  <h3 className="font-serif text-xl font-semibold mb-6" style={{ color: '#0D1B2A' }}>{col.heading}</h3>
                  <ul className="flex flex-col gap-3.5">
                    {col.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Hands-on support highlight box */}
          <FadeIn delay={200} className="mt-12 p-8 rounded-sm"
            style={{ background: '#FFFFFF', borderLeft: '4px solid #A07828', boxShadow: 'var(--shadow)' }}>
            <h4 className="font-serif text-lg font-bold mb-2" style={{ color: '#0D1B2A' }}>Hands-on Support Throughout</h4>
            <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
              Two co-directors present for the full trip, joined by a specialist astrophotography expert for four nights in Pench — help is always close at hand, whether you're troubleshooting a star tracker at 1 AM or repositioning for a tiger's next move.
            </p>
          </FadeIn>
        </div>
      </section>

      <Rule />

      <section style={{ background: '#FAFAF7' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-6" style={{ color: '#0D1B2A' }}>Ready to photograph with us?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/book">Reserve Your Spot</GoldBtn>
              <OutlineBtn to="/itinerary">View Itinerary</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
