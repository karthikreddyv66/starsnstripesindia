import { FadeIn, GoldDivider, Rule, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_TIGER_J, CameraIcon, ShirtIcon, CreditCardIcon, BackpackIcon } from '../components/shared'

const INSTRUCTORS = [
  {
    name: 'Himanshu Bagde',
    role: 'Co-Director & Wildlife Photography Lead',
    initials: 'HB',
    color: '#1A5030',
    website: 'https://himanshubagde.com',
    instagram: '@himanshubagde_wildlife',
    bio: "Himanshu has photographed over 700 individual tigers across more than two decades in India's national parks, and tracks individual tigers by name and territory across Pench and Tadoba. Guests consistently cite his sighting reliability and his commitment to unmanipulated, in-camera photography. Himanshu co-guides tiger photography tours with renowned wildlife photographer and tour leader Paul Goldstein, an association that has shaped Himanshu's own approach to guiding and field photography.",
    specialties: ['700+ individual tigers tracked', 'Safari vehicle positioning', 'Long-lens field craft', 'In-camera natural light technique'],
  },
  {
    name: 'P S Srinivas (“Srini”)',
    role: 'Co-Director, Astrophotography & Post-Processing Guide',
    initials: 'PS',
    color: '#A07828',
    title: 'Visiting Research Professor, National University of Singapore',
    bio: "Srini co-directs and organizes this expedition alongside Himanshu, and leads the trip's astrophotography coaching and Lightroom/Photoshop post-processing instruction throughout. An advanced astrophotography and landscape photographer with a growing interest in wildlife and bird photography, he has completed international expeditions to Lofoten and La Palma for astrophotography and to Iceland and Patagonia for landscape work, with Namibia and the Pantanal upcoming. He spent 30 years working in senior positions in international development finance, and currently combines this venture with an academic position as Visiting Research Professor at the National University of Singapore.",
    specialties: ['Astrophotography coaching', 'Lightroom & Photoshop post-processing', 'Wide-field Milky Way composition', 'Exposure stacking & noise reduction'],
  },
  {
    name: 'Abhishek Pawse',
    role: 'Astrophotography Expert (Joining us in Pench)',
    initials: 'AP',
    color: '#1A4080',
    tag: 'DarkSky International Advocate',
    bio: "Abhishek joins the expedition for four nights in Pench as our astrophotography expert. He is a DarkSky International advocate whose work with the Pench Forest Department helped secure Pench's designation as India's first Dark Sky Park in January 2024, and leads our night-sky sessions, covering star tracking, exposure stacking, and post-processing for Milky Way and star-trail imagery.",
    specialties: ['DarkSky International advocate', "Pench Dark Sky Park designation", 'Star tracking & deep sky', 'Star-trail & nightscape workflows'],
  },
]

const BRING = [
  {
    icon: <CameraIcon className="w-5 h-5 text-[#A07828]" />,
    title: 'Photography Gear',
    items: [
      'DSLR/mirrorless body and a sturdy tripod (essential for astro)',
      'A telephoto lens, 100–400mm or longer, for wildlife',
      'A wide-angle lens, such as 14–24mm, for astro and landscape',
      'A star tracker (optional but recommended for Milky Way panoramas)',
      'A red-light headlamp to protect night vision',
      'Extra batteries and memory cards (heat & long sessions drain them fast)',
      'A dust-proof camera bag (Tadoba’s tracks are dusty)',
    ],
  },
  {
    icon: <ShirtIcon className="w-5 h-5 text-[#A07828]" />,
    title: 'Clothing',
    items: [
      'Neutral/earth-tone clothing for safaris (no bright colors)',
      'Lightweight layers — warm to hot from midday, cooler at dawn and dusk',
      'Wide-brim hat, UV sunglasses, and high-SPF sunscreen',
      'April is peak heat season in central India (daytime >35°C)',
      'Closed shoes and insect repellent',
    ],
  },
  {
    icon: <CreditCardIcon className="w-5 h-5 text-[#A07828]" />,
    title: 'Money & Documentation',
    items: [
      'Indian Rupee (INR) cash for tips and small village purchases',
      'Credit/debit cards accepted at most lodges; ATMs in Nagpur',
      'Indian e-Visa or tourist visa (apply well in advance of departure)',
      'Passport with 6+ months validity from date of arrival',
      'Health/travel insurance (strongly recommended)',
    ],
  },
  {
    icon: <BackpackIcon className="w-5 h-5 text-[#A07828]" />,
    title: 'Other Recommended Items',
    items: [
      'Binoculars for spotting wildlife and birdlife',
      'Reusable water bottle and electrolyte/rehydration supplements',
      'Power bank and universal adapter (Type D/M plug standard)',
      'Basic first-aid kit and personal prescription medications',
      'Daytime heat is significant — stay hydrated throughout',
    ],
  },
]

export default function Instructors() {
  return (
    <>
      <PageHero
        eyebrow="Leadership &amp; Instructors"
        title="Your Co-Directors &amp; Experts"
        subtitle="Co-directed by wildlife specialist Himanshu Bagde and astrophotography guide P S Srinivas, joined in Pench by DarkSky advocate Abhishek Pawse."
        bg={IMG_TIGER_J}
      />

      <GoldDivider />

      {/* Instructors */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">World-Class Guiding</Eyebrow>
            <h2 className="font-serif text-4xl font-bold mb-14" style={{ color: '#0D1B2A' }}>Meet Your Expedition Leaders</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {INSTRUCTORS.map((ins, i) => (
              <FadeIn key={ins.name} delay={i * 100}
                className="rounded-sm overflow-hidden flex flex-col justify-between"
                style={{ background: '#FFFFFF', boxShadow: 'var(--shadow)', border: '1px solid rgba(13,27,42,0.07)' }}>
                <div>
                  <div className="h-2 w-full" style={{ background: ins.color }} />
                  <div className="p-7">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center font-serif text-lg font-bold mb-5 text-white shadow-sm"
                      style={{ background: ins.color }}>
                      {ins.initials}
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-1" style={{ color: '#0D1B2A' }}>{ins.name}</h3>
                    <p className="eyebrow text-[10px] mb-4" style={{ color: '#A07828' }}>{ins.role}</p>
                    
                    {ins.website && (
                      <div className="mb-4 text-xs">
                        <a href={ins.website} target="_blank" rel="noopener noreferrer" className="text-[#A07828] hover:underline font-medium mr-3">
                          {ins.website.replace('https://', '')}
                        </a>
                        <span className="text-gray-400">·</span>
                        <span className="text-gray-500 ml-3">{ins.instagram}</span>
                      </div>
                    )}

                    <p className="text-sm leading-relaxed mb-6" style={{ color: '#4A5568' }}>{ins.bio}</p>
                    
                    <p className="eyebrow text-[9px] mb-3" style={{ color: '#637282' }}>Specialties &amp; Leadership</p>
                    <div className="flex flex-wrap gap-2">
                      {ins.specialties.map(s => (
                        <span key={s} className="text-[10px] px-2.5 py-1 rounded-sm font-medium"
                          style={{ background: '#F2EDE2', color: '#7A5C1E' }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200} className="mt-8 p-6 rounded-sm"
            style={{ background: '#F2EDE2', border: '1px solid rgba(160,120,40,0.15)' }}>
            <p className="text-sm leading-relaxed" style={{ color: '#4A5568' }}>
              <strong style={{ color: '#0D1B2A' }}>Supported by Local Naturalists &amp; Drivers:</strong> Every safari jeep in Pench and Tadoba is accompanied by an experienced local naturalist guide and skilled forest driver who know every trail and waterhole, ensuring optimal positioning and respect for wildlife.
            </p>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* What to bring */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3">Expedition Preparation</Eyebrow>
            <h2 className="font-serif text-4xl font-bold mb-3" style={{ color: '#0D1B2A' }}>What to Bring</h2>
            <p className="text-sm leading-relaxed mb-14 max-w-xl" style={{ color: '#637282' }}>
              We'll send a complete packing list upon sign-up. Below is a summary of what you'll likely need for safari and dark-sky sessions.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRING.map((cat, i) => (
              <FadeIn key={cat.title} delay={i * 80}
                className="p-7 rounded-sm"
                style={{ background: '#F2EDE2', border: '1px solid rgba(13,27,42,0.07)' }}>
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="font-serif text-base font-semibold mb-5" style={{ color: '#0D1B2A' }}>{cat.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-xs flex-shrink-0 mt-px font-bold" style={{ color: '#A07828' }}>—</span>
                      <span className="text-xs leading-relaxed" style={{ color: '#4A5568' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      <section style={{ background: '#F2EDE2' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-6" style={{ color: '#0D1B2A' }}>Ready to photograph with our team?</p>
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
