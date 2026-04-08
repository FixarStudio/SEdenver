import { useState, useEffect, useRef } from 'react'
const heroImg = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=85'

function useInView(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in-view'); observer.disconnect() }
    }, { threshold: 0.12, ...options })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconHardHat = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M2 18h20v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2z"/><path d="M12 3C8 3 5 6 5 10v8h14v-8c0-4-3-7-7-7z"/><path d="M2 18c0-2 1.5-3 3-3h14c1.5 0 3 1 3 3"/><path d="M12 3v7"/><path d="M5 10h14"/></svg>)
const IconPin = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z"/><circle cx="12" cy="8" r="2"/></svg>)
const IconHandshake = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M9 11l3-3 3 3"/><path d="M3 7l4 4 2-2 4 4 2-2 4 4"/><path d="M3 17l4-4"/><path d="M17 13l4 4"/></svg>)
const IconMedal = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="14" r="6"/><path d="M9 2l1.5 4h3L15 2"/><path d="M9 2H6l3 6"/><path d="M15 2h3l-3 6"/><path d="M12 11v6"/><path d="M9 14h6"/></svg>)
const IconStar = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)
const IconShield = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/><polyline points="9 12 11 14 15 10"/></svg>)
const IconLeaf = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M17 8C8 10 5.9 16.17 3.82 19.34A1 1 0 004.64 21C7.27 19.34 10 17 12 14c1 3 .5 6-.5 8"/><path d="M17 8c0-4-3-6-6-6 0 4 2 7 6 6z"/></svg>)
const IconMail = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>)
const IconMapPin = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z"/><circle cx="12" cy="8" r="2"/></svg>)
const IconCheck = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>)
const IconBolt = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 inline-block mr-1 align-middle"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>)
const IconArrow = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 inline-block ml-1"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>)
const IconPhone = ({ className = 'w-5 h-5' }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>)
const IconChevron = ({ open }) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"/></svg>)
const IconClose = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>)
const StarFilled = () => (<svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)

// ── Navbar (modern transparent → solid on scroll) ─────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navLinks = ['About', 'Services', 'Process', 'Portfolio', 'FAQ', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Brand */}
        <a href="#hero" className={`font-bold text-lg tracking-tight transition-colors duration-300 ${scrolled ? 'text-[#1d2147]' : 'text-white'}`}>
          SE Denver Construction
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/10 ${
                  scrolled ? 'text-gray-600 hover:text-[#1d2147] hover:bg-gray-100' : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+17205550000"
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-gray-600 hover:text-[#1d2147]' : 'text-white/80 hover:text-white'}`}
          >
            <IconPhone className="w-4 h-4" /> (720) 555-0000
          </a>
          <a
            href="#contact"
            className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-[#1d2147] text-white hover:bg-[#2a3070]'
                : 'bg-white text-[#1d2147] hover:bg-white/90'
            }`}
          >
            Discuss Your Project
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden transition-colors ${scrolled ? 'text-[#1d2147]' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-3 text-sm font-medium text-gray-700 shadow-xl">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}
              className="py-2 border-b border-gray-50 hover:text-[#1d2147] transition-colors">{item}</a>
          ))}
          <a href="tel:+17205550000" className="flex items-center gap-2 py-2 text-[#1d2147] font-semibold">
            <IconPhone className="w-4 h-4" /> (720) 555-0000
          </a>
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-1 bg-[#1d2147] text-white text-center py-3 rounded-full font-semibold">
            Discuss Your Project
          </a>
        </div>
      )}
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end justify-start text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Construction site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d2147]/90 via-[#1d2147]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d2147]/70 via-transparent to-transparent" />
      </div>

      {/* Content - bottom left aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-40 w-full">
        <div className="max-w-2xl">
          <div className="animate-fade-in in-view flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue-300" />
            <p className="text-sm uppercase tracking-widest text-blue-200 font-medium">Denver's Premier Builder</p>
          </div>
          <h1 className="animate-fade-up in-view delay-100 text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Building Your<br />
            <span className="text-blue-200">Construction</span><br />
            Dreams
          </h1>
          <p className="animate-fade-up in-view delay-200 text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
            Custom home builds in Denver with expert craftsmanship and seamless communication from day one.
          </p>
          <div className="animate-fade-up in-view delay-300 flex flex-wrap gap-4">
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#1d2147] font-bold px-8 py-4 rounded-full text-sm hover:bg-blue-50 transition-colors shadow-xl">
              Discuss Your Project <IconArrow />
            </a>
            <a href="#portfolio"
              className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-full text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs uppercase tracking-widest rotate-90 origin-center">Scroll</span>
        <div className="w-px h-12 bg-white/30" />
      </div>
    </section>
  )
}

// ── About ─────────────────────────────────────────────────────────────────────
const differentiators = [
  { Icon: IconHardHat, title: 'Custom Home Builds', desc: 'From foundation to finish, we bring your vision to life with precision and care.' },
  { Icon: IconPin, title: 'Local Denver Expertise', desc: 'Deep knowledge of Denver codes, climate, and neighborhoods - built into every project.' },
  { Icon: IconHandshake, title: 'Client-First Approach', desc: 'Transparent communication and dedicated project management from day one.' },
]

function About() {
  const leftRef = useInView()
  const rightRef = useInView()
  const c0 = useInView(); const c1 = useInView(); const c2 = useInView()
  const cardRefs = [c0, c1, c2]
  const delays = ['', 'delay-200', 'delay-400']

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div ref={leftRef} className="animate-slide-left">
            <p className="text-xs uppercase tracking-widest text-[#1d2147] font-semibold mb-4">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d2147] mb-6 leading-tight">
              Expert Construction Management with Seamless Communication.
            </h2>
          </div>
          <div ref={rightRef} className="animate-slide-right">
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              SE Denver Construction, LLC has been transforming Denver homes for over a decade. We combine skilled craftsmanship with proactive communication so you always know where your project stands.
            </p>
            <div className="flex gap-8">
              {[['50+', 'Projects'], ['10+', 'Years'], ['100%', 'Satisfaction']].map(([v, l]) => (
                <div key={l}>
                  <div className="text-3xl font-bold text-[#1d2147]">{v}</div>
                  <div className="text-gray-400 text-sm">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map(({ Icon, title, desc }, i) => (
            <div key={title} ref={cardRefs[i]}
              className={`animate-fade-up ${delays[i]} group bg-[#efefef] hover:bg-[#1d2147] rounded-2xl p-8 transition-colors duration-300 cursor-default`}>
              <div className="text-[#1d2147] group-hover:text-white mb-5 transition-colors duration-300"><Icon /></div>
              <h3 className="text-[#1d2147] group-hover:text-white font-bold text-lg mb-2 transition-colors duration-300">{title}</h3>
              <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors duration-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────
const services = [
  { title: 'Custom Home Builds', desc: 'Full-service new construction tailored to your lifestyle, budget, and vision - built to last.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
  { title: 'Renovations', desc: 'Kitchen, bath, basement, or whole-home - we modernize your space without the headaches.', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
  { title: 'Project Management', desc: 'End-to-end oversight of your build: scheduling, subcontractors, budgets, and quality control.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
]

function Services() {
  const titleRef = useInView()
  const c0 = useInView(); const c1 = useInView(); const c2 = useInView()
  const cardRefs = [c0, c1, c2]
  const delays = ['', 'delay-200', 'delay-400']

  return (
    <section id="services" className="py-28 bg-[#efefef]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="animate-fade-up flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#1d2147] font-semibold mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d2147]">Our Services</h2>
          </div>
          <p className="text-gray-500 text-base max-w-sm">Transform your space with our expert craftsmanship.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} ref={cardRefs[i]}
              className={`animate-fade-up ${delays[i]} group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <div className="overflow-hidden h-56">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <h3 className="text-[#1d2147] font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <a href="#contact" className="inline-flex items-center text-[#1d2147] font-semibold text-sm group-hover:gap-2 transition-all">
                  Get a quote <IconArrow />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Process ───────────────────────────────────────────────────────────────────
const steps = [
  { num: '01', title: 'Free Consultation', desc: 'We meet to understand your vision, timeline, and budget. No commitment required.' },
  { num: '02', title: 'Design & Planning', desc: 'We develop detailed plans, select materials, and lock in a transparent fixed-price quote.' },
  { num: '03', title: 'Build Phase', desc: 'Our crew gets to work with weekly updates and full site access for you at any time.' },
  { num: '04', title: 'Final Walkthrough', desc: 'We walk every inch together. Nothing is closed out until you are 100% satisfied.' },
]

function Process() {
  const titleRef = useInView()
  const s0 = useInView(); const s1 = useInView(); const s2 = useInView(); const s3 = useInView()
  const stepRefs = [s0, s1, s2, s3]
  const delays = ['', 'delay-100', 'delay-200', 'delay-300']

  return (
    <section id="process" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="animate-fade-up text-center mb-20">
          <p className="text-xs uppercase tracking-widest text-[#1d2147] font-semibold mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2147] mb-4">Simple. Transparent. Stress-Free.</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">From first call to final walkthrough, we keep you informed and in control.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-7 left-[14%] right-[14%] h-px bg-gray-200 z-0" />
          {steps.map(({ num, title, desc }, i) => (
            <div key={num} ref={stepRefs[i]} className={`animate-fade-up ${delays[i]} relative z-10 text-center`}>
              <div className="w-14 h-14 rounded-full bg-[#1d2147] text-white font-bold text-base flex items-center justify-center mx-auto mb-6 shadow-lg ring-4 ring-white">
                {num}
              </div>
              <h3 className="text-[#1d2147] font-bold text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Portfolio with filters ────────────────────────────────────────────────────
const allProjects = [
  { id: 1, label: 'Custom Home - Cherry Creek',    type: 'New Build',    neighborhood: 'Cherry Creek',  img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: 2, label: 'Kitchen Renovation - Wash Park', type: 'Renovation',   neighborhood: 'Wash Park',     img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80' },
  { id: 3, label: 'New Build - Highlands',          type: 'New Build',    neighborhood: 'Highlands',     img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
  { id: 4, label: 'Basement Finish - Capitol Hill', type: 'Renovation',   neighborhood: 'Capitol Hill',  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
  { id: 5, label: 'Master Suite - Stapleton',       type: 'Renovation',   neighborhood: 'Stapleton',     img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80' },
  { id: 6, label: 'Full Remodel - Park Hill',       type: 'Full Remodel', neighborhood: 'Park Hill',     img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80' },
  { id: 7, label: 'Custom Home - Highlands',        type: 'New Build',    neighborhood: 'Highlands',     img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80' },
  { id: 8, label: 'Full Remodel - Cherry Creek',    type: 'Full Remodel', neighborhood: 'Cherry Creek',  img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80' },
  { id: 9, label: 'Addition - Wash Park',           type: 'Renovation',   neighborhood: 'Wash Park',     img: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80' },
]

const typeOptions = ['All', 'New Build', 'Renovation', 'Full Remodel']
const neighborhoodOptions = ['All', 'Cherry Creek', 'Wash Park', 'Highlands', 'Capitol Hill', 'Stapleton', 'Park Hill']

function Portfolio() {
  const [activeType, setActiveType] = useState('All')
  const [activeNeighborhood, setActiveNeighborhood] = useState('All')
  const [selected, setSelected] = useState(null)
  const titleRef = useInView()

  const filtered = allProjects.filter(p =>
    (activeType === 'All' || p.type === activeType) &&
    (activeNeighborhood === 'All' || p.neighborhood === activeNeighborhood)
  )

  return (
    <section id="portfolio" className="py-28 bg-[#efefef]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={titleRef} className="animate-fade-up mb-10">
          <p className="text-xs uppercase tracking-widest text-[#1d2147] font-semibold mb-3">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2147]">Recent Projects</h2>
        </div>

        <div className="flex gap-8 items-start">

          {/* Sidebar — sticky: scrolls with page until it hits top, then stays */}
          <aside className="hidden md:flex flex-col w-80 flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto portfolio-scroll">
            <span className="font-bold text-[#1d2147] text-2xl mb-8">Filter by:</span>

            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Project Type</p>
            <div className="space-y-4 mb-10">
              {typeOptions.map(opt => (
                <label key={opt} onClick={() => setActiveType(opt)} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                    activeType === opt ? 'bg-[#1d2147] border-[#1d2147]' : 'border-gray-300 group-hover:border-[#1d2147]'
                  }`}>
                    {activeType === opt && <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  <span className={`text-base transition-colors ${activeType === opt ? 'text-[#1d2147] font-semibold' : 'text-gray-600 group-hover:text-[#1d2147]'}`}>{opt}</span>
                </label>
              ))}
            </div>

            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Neighborhood</p>
            <div className="space-y-4">
              {neighborhoodOptions.map(opt => (
                <label key={opt} onClick={() => setActiveNeighborhood(opt)} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                    activeNeighborhood === opt ? 'bg-[#1d2147] border-[#1d2147]' : 'border-gray-300 group-hover:border-[#1d2147]'
                  }`}>
                    {activeNeighborhood === opt && <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  <span className={`text-base transition-colors ${activeNeighborhood === opt ? 'text-[#1d2147] font-semibold' : 'text-gray-600 group-hover:text-[#1d2147]'}`}>{opt}</span>
                </label>
              ))}
            </div>
          </aside>

          {/* Projects — natural flow, page scroll drives everything */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p className="text-lg font-medium mb-2">No projects match your filters.</p>
                <button onClick={() => { setActiveType('All'); setActiveNeighborhood('All') }}
                  className="text-[#1d2147] font-semibold underline text-sm">Clear filters</button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {filtered.map(({ id, label, type, neighborhood, img }) => (
                  <div
                    key={id}
                    onClick={() => setSelected({ label, type, neighborhood, img })}
                    className="group relative overflow-hidden rounded-2xl aspect-[16/9] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <img src={img} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1d2147]/85 via-[#1d2147]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs text-blue-200 font-medium uppercase tracking-wider">{type} - {neighborhood}</span>
                      <p className="text-white font-semibold text-sm mt-1">{label}</p>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-[#1d2147] text-xs font-semibold px-3 py-1 rounded-full">{type}</span>
                    </div>
                  </div>
                ))}
                <div className="text-center py-6">
                  <a href="#contact"
                    className="inline-flex items-center gap-2 border-2 border-[#1d2147] text-[#1d2147] font-bold px-8 py-3 rounded-full hover:bg-[#1d2147] hover:text-white transition-colors text-sm">
                    Start Your Project <IconArrow />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"><IconClose /></button>
            <img src={selected.img} alt={selected.label} className="w-full rounded-2xl shadow-2xl" />
            <div className="mt-4 text-white">
              <span className="text-blue-300 text-xs font-medium uppercase tracking-wider">{selected.type} - {selected.neighborhood}</span>
              <p className="font-semibold text-lg mt-1">{selected.label}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// ── Social Proof ──────────────────────────────────────────────────────────────
const testimonials = [
  { name: 'Sarah M.', location: 'Cherry Creek, Denver', quote: "SE Denver Construction built our dream home on time and on budget. Mike and his team were communicative every step of the way. We couldn't be happier." },
  { name: 'James & Linda T.', location: 'Wash Park, Denver', quote: 'Our kitchen renovation exceeded every expectation. The craftsmanship is outstanding and the process was completely stress-free.' },
  { name: 'Carlos R.', location: 'Highlands, Denver', quote: "Professional, reliable, and genuinely invested in the outcome. I've recommended SE Denver Construction to three neighbors already." },
]

function SocialProof() {
  const titleRef = useInView()
  const t0 = useInView(); const t1 = useInView(); const t2 = useInView()
  const testRefs = [t0, t1, t2]
  const delays = ['', 'delay-200', 'delay-400']

  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="animate-fade-up text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#1d2147] font-semibold mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2147]">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} ref={testRefs[i]}
              className={`animate-fade-up ${delays[i]} bg-[#efefef] rounded-2xl p-8 flex flex-col justify-between`}>
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => <StarFilled key={j} />)}
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-9 h-9 rounded-full bg-[#1d2147] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-[#1d2147] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Authority ─────────────────────────────────────────────────────────────────
const authorityItems = [
  { Icon: IconMedal, label: 'Licensed & Insured', sub: 'Colorado State Certified' },
  { Icon: IconStar, label: 'Award-Winning', sub: 'Denver Home Builder Awards' },
  { Icon: IconShield, label: 'Bonded & Guaranteed', sub: 'Full workmanship warranty' },
  { Icon: IconLeaf, label: 'Eco-Conscious', sub: 'Sustainable build practices' },
]

function Authority() {
  const titleRef = useInView()
  const a0 = useInView(); const a1 = useInView(); const a2 = useInView(); const a3 = useInView()
  const authRefs = [a0, a1, a2, a3]
  const delays = ['', 'delay-100', 'delay-200', 'delay-300']

  return (
    <section className="py-24 bg-[#1d2147] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="animate-fade-up grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-blue-300 text-xs uppercase tracking-widest font-semibold mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Trusted by Homeowners Across Denver</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            We hold ourselves to the highest standards - from licensing and insurance to the quality of every nail and beam.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {authorityItems.map(({ Icon, label, sub }, i) => (
            <div key={label} ref={authRefs[i]}
              className={`animate-fade-up ${delays[i]} bg-white/8 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300`}>
              <div className="text-blue-300 mb-4"><Icon /></div>
              <div className="font-bold text-white text-sm mb-1">{label}</div>
              <div className="text-gray-400 text-xs">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  const ref = useInView()
  return (
    <section className="py-24 bg-[#efefef]">
      <div ref={ref} className="animate-fade-up max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1d2147] mb-5 leading-tight">
          Ready to Build Something Great?
        </h2>
        <p className="text-gray-500 text-lg mb-3">Contact us today to start your journey.</p>
        <p className="text-[#1d2147] font-semibold text-sm mb-10 flex items-center justify-center gap-1">
          <IconBolt /> Limited slots available for 2025 projects - don't wait.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#contact"
            className="inline-flex items-center gap-2 bg-[#1d2147] text-white font-bold px-10 py-4 rounded-full hover:bg-[#2a3070] transition-colors text-sm shadow-lg">
            Discuss Your Project <IconArrow />
          </a>
          <a href="tel:+17205550000"
            className="inline-flex items-center gap-2 border-2 border-[#1d2147] text-[#1d2147] font-bold px-10 py-4 rounded-full hover:bg-[#1d2147] hover:text-white transition-colors text-sm">
            <IconPhone className="w-4 h-4" /> Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'How long does a custom home build take?', a: 'Most custom builds in Denver take 10-14 months from permit approval to move-in. We provide a detailed timeline at the start of every project and update it weekly.' },
  { q: 'Do you handle permits and inspections?', a: 'Yes - we manage all permits, inspections, and city approvals from start to finish. You never have to deal with the city directly.' },
  { q: 'What is your payment structure?', a: 'We work on a milestone-based payment schedule tied to project phases. No large upfront payments - you pay as work is completed and verified.' },
  { q: 'Can I make changes during the build?', a: 'Yes. We have a clear change-order process that documents scope, cost, and timeline impact before any change is made. No surprises.' },
  { q: 'Are you licensed and insured in Colorado?', a: 'Absolutely. SE Denver Construction holds a Colorado General Contractor license and carries full general liability and workers compensation insurance.' },
  { q: 'What areas of Denver do you serve?', a: 'We serve the greater Denver metro area including Cherry Creek, Wash Park, Highlands, Capitol Hill, Stapleton, Park Hill, and surrounding neighborhoods.' },
]

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  const titleRef = useInView()
  const listRef = useInView()

  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={titleRef} className="animate-fade-up text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#1d2147] font-semibold mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2147] mb-4">Common Questions</h2>
          <p className="text-gray-500 text-lg">Everything you need to know before getting started.</p>
        </div>
        <div ref={listRef} className="animate-fade-up space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${openIdx === i ? 'border-[#1d2147]/30 bg-[#efefef]' : 'border-gray-200 bg-white'}`}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-[#1d2147] font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                <span>{q}</span>
                <IconChevron open={openIdx === i} />
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">{a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', details: '' })
  const [submitted, setSubmitted] = useState(false)
  const leftRef = useInView()
  const rightRef = useInView()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <section id="contact" className="py-28 bg-[#efefef]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div ref={leftRef} className="animate-slide-left">
          <p className="text-xs uppercase tracking-widest text-[#1d2147] font-semibold mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d2147] mb-6 leading-tight">
            Let's Build Something Together
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Tell us about your project and we'll get back to you within one business day. No pressure, just a conversation.
          </p>
          <div className="space-y-5">
            {[
              { Icon: IconMail, text: 'mike@sedenverconstruction.com', href: 'mailto:mike@sedenverconstruction.com' },
              { Icon: IconPhone, text: '(720) 555-0000', href: 'tel:+17205550000' },
              { Icon: IconMapPin, text: 'Denver, CO', href: null },
            ].map(({ Icon, text, href }) => (
              <div key={text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1d2147]/8 flex items-center justify-center text-[#1d2147] flex-shrink-0">
                  <Icon />
                </div>
                {href
                  ? <a href={href} className="text-gray-600 text-sm hover:text-[#1d2147] transition-colors">{text}</a>
                  : <span className="text-gray-600 text-sm">{text}</span>}
              </div>
            ))}
          </div>
        </div>

        <div ref={rightRef} className="animate-slide-right bg-white rounded-3xl p-8 shadow-sm">
          {submitted ? (
            <div className="animate-fade-in in-view text-center py-16">
              <div className="text-[#1d2147] flex justify-center mb-4"><IconCheck /></div>
              <h3 className="text-[#1d2147] font-bold text-xl mb-2">Message Received!</h3>
              <p className="text-gray-500 text-sm">We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name', required: true },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
                { id: 'phone', label: 'Phone', type: 'tel', placeholder: '(720) 000-0000', required: false },
              ].map(({ id, label, type, placeholder, required }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-xs font-semibold text-[#1d2147] uppercase tracking-wider mb-2">{label}</label>
                  <input id={id} name={id} type={type} required={required} placeholder={placeholder}
                    value={form[id]} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d2147]/30 focus:border-[#1d2147] bg-[#efefef] transition-all" />
                </div>
              ))}
              <div>
                <label htmlFor="details" className="block text-xs font-semibold text-[#1d2147] uppercase tracking-wider mb-2">Project Details</label>
                <textarea id="details" name="details" rows={4} required placeholder="Tell us about your project..."
                  value={form.details} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d2147]/30 focus:border-[#1d2147] bg-[#efefef] resize-none transition-all" />
              </div>
              <button type="submit"
                className="w-full bg-[#1d2147] text-white font-bold py-4 rounded-xl hover:bg-[#2a3070] active:scale-95 transition-all text-sm tracking-wide">
                Let's Connect
              </button>
              <p className="text-center text-xs text-gray-400">We respect your privacy. No spam, ever.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#1d2147] text-gray-400 py-14">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-sm">
        <div className="text-center md:text-left">
          <div className="text-white font-bold text-base mb-2">SE Denver Construction, LLC</div>
          <div>Denver, CO</div>
          <a href="tel:+17205550000" className="hover:text-white transition-colors block">(720) 555-0000</a>
          <a href="mailto:mike@sedenverconstruction.com" className="hover:text-white transition-colors">mike@sedenverconstruction.com</a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs">
          {['About', 'Services', 'Process', 'Portfolio', 'FAQ', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
          ))}
        </div>
        <div className="text-xs text-center md:text-right">
          SE Denver Construction &copy; 2025.<br />All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

// ── Sticky Mobile CTA ─────────────────────────────────────────────────────────
function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-gray-200 shadow-2xl">
      <a href="tel:+17205550000" className="flex-1 flex items-center justify-center gap-2 bg-white text-[#1d2147] font-bold py-4 text-sm">
        <IconPhone className="w-4 h-4" /> Call Now
      </a>
      <a href="#contact" className="flex-1 flex items-center justify-center gap-2 bg-[#1d2147] text-white font-bold py-4 text-sm">
        Get a Quote
      </a>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <SocialProof />
        <Authority />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
