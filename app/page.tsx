'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, Clock3, Menu, MoveRight, Phone, ShieldCheck, Sparkles, Users, X } from 'lucide-react'

const services = [
  { title: 'Weddings & Ceremonies', text: 'A graceful welcome for every guest, from the first arrival to the final farewell.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Corporate Events', text: 'Polished front-of-house support that keeps your brand experience effortless.', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Conferences & Seminars', text: 'Clear direction, smooth registration, and a warm human touch at every turn.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Galas & Awards', text: 'An immaculate presence for occasions where every detail matters.', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=85' },
]

const gallery = [
  ['The aisle', 'Wedding', 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85'],
  ['The arrival', 'Red carpet', 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85'],
  ['The room', 'Conference', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85'],
  ['The celebration', 'Private event', 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=85'],
]

function Hat({ small = false }: { small?: boolean }) {
  return <div aria-hidden="true" className={`hat ${small ? 'hat-small' : ''}`}><span className="hat-band" /><span className="hat-mark">U</span></div>
}

export default function Page() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main>
      <nav className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Main navigation">
        <a href="#top" className="brand"><span className="brand-mark"><Hat small /></span><span>usher<span className="brand-dot">.</span></span></a>
        <div className="nav-links"><a href="#services">Services</a><a href="#about">About us</a><a href="#team">Our ushers</a><a href="#events">Events</a><a href="#contact">Contact</a></div>
        <a href="#contact" className="nav-cta">Book us <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <div className="mobile-menu"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#about" onClick={() => setMenuOpen(false)}>About us</a><a href="#team" onClick={() => setMenuOpen(false)}>Our ushers</a><a href="#events" onClick={() => setMenuOpen(false)}>Events</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a><a href="#contact" className="mobile-menu-cta" onClick={() => setMenuOpen(false)}>Book us <ArrowUpRight size={15} /></a></div>}
      </nav>

      <section id="top" className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content"><p className="eyebrow light">The art of welcome</p><h1>Exceptional people.<br /><em>Exceptional events.</em></h1><p className="hero-sub">Professional ushers who create a seamless, welcoming experience from the moment your guests arrive.</p><div className="hero-actions"><a href="#contact" className="button button-red">Book our ushers <ArrowUpRight size={17} /></a><a href="#services" className="text-link light-link">View our services <MoveRight size={17} /></a></div></div>
        <div className="hero-hat"><Hat /></div><div className="hero-meta"><span>01</span><span className="meta-line" /><span>Est. 2016 / Lagos</span></div><a className="scroll-cue" href="#services">Scroll to explore <ChevronDown size={15} /></a>
      </section>

      <section className="intro section-pad" id="about"><div className="section-kicker"><span>01</span><span className="rule" /><span>Hospitality, elevated</span></div><div className="intro-grid"><h2>A warm welcome<br /><em>is everything.</em></h2><div className="intro-copy"><p className="lead">At usher, we believe the first few moments set the tone for everything that follows.</p><p>Our highly trained team brings calm confidence, genuine warmth, and an impeccable eye for detail to the moments that matter. We do more than guide guests — we make them feel expected, considered, and at home.</p><a href="#team" className="text-link dark-link">Meet the team <MoveRight size={17} /></a></div></div></section>

      <section id="services" className="services-section section-pad"><div className="section-heading"><div><p className="eyebrow">What we do</p><h2>Made for your<br /><em>moment.</em></h2></div><p className="heading-note">From intimate celebrations to large-scale productions, our presence makes every room feel considered.</p></div><div className="services-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-image" style={{ backgroundImage: `url(${service.image})` }}><span className="card-number">0{index + 1}</span></div><div className="service-info"><h3>{service.title}</h3><p>{service.text}</p><ArrowUpRight size={19} /></div></article>)}</div><div className="services-footer"><span>And every occasion in between.</span><a href="#contact" className="text-link dark-link">Discuss your event <MoveRight size={17} /></a></div></section>

      <section className="experience section-pad"><div className="experience-image"><div className="image-label">The experience / 02</div></div><div className="experience-copy"><p className="eyebrow">The usher difference</p><h2>Small details.<br /><em>Lasting impressions.</em></h2><div className="experience-list">{[['First impressions', 'Professional, gracious reception from the very first hello.'], ['Guest management', 'Thoughtful guidance through venues, seating, registration, and schedules.'], ['Event coordination', 'A seamless extension of your planning and venue teams.'], ['Professional presence', 'Well-presented, courteous, confident, and ready for anything.']].map(([title, text]) => <div className="experience-item" key={title}><span><Check size={14} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

      <section id="team" className="team-section section-pad"><div className="team-copy"><p className="eyebrow light">The people behind the presence</p><h2>More than ushers.<br /><em>The face of your event.</em></h2><p>Every member of our team is selected for their warmth, composure, and instinct for service — then trained to the highest standard. Together, we bring a consistent sense of calm and occasion to every room.</p><a href="#contact" className="text-link light-link">Work with us <MoveRight size={17} /></a></div><div className="team-image"><span className="team-caption">The usher team / Lagos, Nigeria</span></div><div className="team-stamp"><Hat /><span>Warmth<br />with<br /><em>intention.</em></span></div></section>

      <section id="events" className="events-section section-pad"><div className="section-heading"><div><p className="eyebrow">A sense of occasion</p><h2>Seen at<br /><em>every kind of event.</em></h2></div><p className="heading-note">Our work is designed to disappear into the experience — leaving only the feeling that everything flowed exactly as it should.</p></div><div className="gallery-grid">{gallery.map(([title, type, image], i) => <article className={`gallery-card gallery-${i + 1}`} key={title}><div style={{ backgroundImage: `url(${image})` }} /><div className="gallery-overlay"><span>{type}</span><h3>{title}</h3></div></article>)}</div></section>

      <section className="why-section section-pad"><div className="why-header"><p className="eyebrow">Why usher</p><h2>Quite simply,<br /><em>we care.</em></h2></div><div className="why-grid">{[['01', ShieldCheck, 'Professionally trained', 'Every usher is prepared to represent your event with poise.'], ['02', Sparkles, 'Impeccably presented', 'Consistent, polished uniforms and a professional appearance.'], ['03', Clock3, 'Reliable', 'We arrive prepared, punctual, and ready to work.'], ['04', Users, 'Guest-focused', 'Our priority is creating a warm, effortless experience for every guest.']].map(([num, Icon, title, text]) => <div className="why-item" key={title as string}><span className="why-number">{num as string}</span><Icon size={22} strokeWidth={1.3} /><h3>{title as string}</h3><p>{text as string}</p></div>)}</div></section>

      <section id="contact" className="contact-section section-pad"><div className="contact-intro"><p className="eyebrow light">Let&apos;s make an entrance</p><h2>Make your guests<br /><em>feel welcome.</em></h2><p>Tell us about your event and we&apos;ll help you create the right hospitality experience.</p><div className="contact-details"><a href="tel:+2348100000000"><Phone size={16} /> +234 810 000 0000</a><a href="mailto:hello@usher.events"><ArrowUpRight size={16} /> hello@usher.events</a></div></div><form className="inquiry-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>{submitted ? <div className="form-success"><span><Check size={22} /></span><h3>Thank you.</h3><p>Your enquiry is on its way to our team. We&apos;ll be in touch shortly.</p><button type="button" className="button button-outline" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <><div className="form-row"><label>Name<input required name="name" placeholder="Your full name" /></label><label>Phone / WhatsApp<input required name="phone" placeholder="+234 ..." /></label></div><div className="form-row"><label>Email<input required type="email" name="email" placeholder="you@email.com" /></label><label>Event type<select name="event"><option>Choose an event</option><option>Wedding</option><option>Corporate event</option><option>Conference</option><option>Gala or awards</option><option>Private event</option></select></label></div><div className="form-row"><label>Event date<input type="date" name="date" /></label><label>Number of guests<input name="guests" placeholder="e.g. 250" /></label></div><label>Location<input name="location" placeholder="Where is your event taking place?" /></label><label>Tell us more<textarea name="details" rows={3} placeholder="A few details about your event..." /></label><button className="button button-red form-submit">Send enquiry <ArrowUpRight size={17} /></button></>}</form></section>

      <footer className="footer"><div className="footer-brand"><a href="#top" className="brand"><span className="brand-mark"><Hat small /></span><span>usher<span className="brand-dot">.</span></span></a><p>The art of welcome.</p></div><div className="footer-links"><a href="#services">Services</a><a href="#about">About us</a><a href="#events">Events</a><a href="#contact">Contact</a></div><div className="footer-social"><a href="#top" aria-label="Instagram">IG</a><a href="#top" aria-label="LinkedIn">IN</a><span>© 2026 usher events</span></div></footer>
    </main>
  )
}
