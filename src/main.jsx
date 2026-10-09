import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const Arrow=()=> <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>;
const Check=()=> <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>;
const Spark=()=> <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>;

function App(){
 const [menu,setMenu]=useState(false);
 const [sent,setSent]=useState(false);
 const go=(id)=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'});};
 return <div className="app">
  <nav className="nav">
   <button className="brand" onClick={()=>go('home')}><span className="brandMark">N</span><span>NOVA</span></button>
   <div className={`navLinks ${menu?'open':''}`}><button onClick={()=>go('home')}>Home</button><button onClick={()=>go('services')}>Services</button><button onClick={()=>go('work')}>Work</button><button onClick={()=>go('about')}>About</button><button onClick={()=>go('contact')} className="navCta">Let's talk <Arrow/></button></div>
   <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu"><span/><span/></button>
  </nav>

  <main id="home">
   <section className="hero sectionWrap">
    <div className="heroCopy">
      <div className="eyebrow"><span className="dot"/> DIGITAL STUDIO · ALEXANDRIA</div>
      <h1>Websites that make your <em>business</em> look its best.</h1>
      <p>We design and build fast, modern digital experiences that help ambitious businesses turn visitors into customers.</p>
      <div className="heroActions"><button className="primary" onClick={()=>go('contact')}>Start a project <Arrow/></button><button className="textBtn" onClick={()=>go('work')}>View selected work <Arrow/></button></div>
      <div className="proof"><div className="avatars"><span>AM</span><span>RK</span><span>MS</span></div><div><strong>Built for growing brands</strong><small>Strategy · Design · Development</small></div></div>
    </div>
    <div className="heroVisual">
      <div className="orb orb1"/><div className="orb orb2"/>
      <div className="browser"><div className="browserTop"><div className="windowDots"><i/><i/><i/></div><span>nova.studio</span><b>↗</b></div><div className="browserBody"><div className="miniNav"><strong>NOVA</strong><span>Studio</span><span>Work</span><span>Contact</span></div><div className="miniHero"><span>CREATE / BUILD / GROW</span><h2>Make your next<br/><i>move memorable.</i></h2><div className="miniLine"/><div className="miniCards"><div/><div/><div/></div></div></div></div>
      <div className="floating stat"><strong>+38%</strong><span>conversion potential</span></div><div className="floating tag"><Spark/> Built to perform</div>
    </div>
   </section>

   <section className="marquee"><div>WEB DESIGN <span>✦</span> DEVELOPMENT <span>✦</span> BRAND EXPERIENCES <span>✦</span> WEB DESIGN <span>✦</span> DEVELOPMENT <span>✦</span></div></section>

   <section id="services" className="sectionWrap section">
    <div className="sectionHead"><div><span className="kicker">WHAT WE DO</span><h2>Everything your website<br/><em>needs to win.</em></h2></div><p>From first idea to final launch, we combine thoughtful design with clean development to create websites that feel as good as they perform.</p></div>
    <div className="serviceGrid">
      {[['01','Strategy & UX','Clear structure, user journeys and conversion-focused experiences.'],['02','Web Design','Premium interfaces shaped around your brand and audience.'],['03','Development','Responsive, accessible and fast websites built for every screen.']].map(([n,t,d])=><article className="service" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><button onClick={()=>go('contact')}>Explore service <Arrow/></button></article>)}
    </div>
   </section>

   <section id="work" className="sectionWrap section workSection"><div className="sectionHead"><div><span className="kicker">SELECTED CONCEPT</span><h2>A digital presence<br/><em>with personality.</em></h2></div><span className="caseLabel">CASE STUDY · 2026</span></div>
    <div className="case"><div className="caseVisual"><div className="caseGlow"/><div className="casePanel"><small>NOVA / 01</small><h3>Bold ideas.<br/><i>Beautifully built.</i></h3><div className="casePills"><span>Strategy</span><span>UI Design</span><span>Development</span></div></div></div><div className="caseInfo"><span className="kicker">PROJECT NOVA</span><h3>A conversion-focused landing page for a modern service brand.</h3><p>We created a visual system that balances confidence and clarity, with strong typography, focused calls-to-action and a responsive layout that works beautifully across devices.</p><ul><li><Check/> Responsive design</li><li><Check/> Conversion-focused sections</li><li><Check/> Clean, scalable code</li></ul><button className="primary" onClick={()=>go('contact')}>Build something similar <Arrow/></button></div></div>
   </section>

   <section id="about" className="about sectionWrap section"><div className="aboutCard"><div><span className="kicker">WHY NOVA</span><h2>Small team.<br/><em>Big attention to detail.</em></h2></div><p>We believe a great website should do more than look good. It should explain what you do, build trust quickly, and make the next step obvious.</p><div className="numbers"><div><strong>01</strong><span>Strategy first</span></div><div><strong>02</strong><span>Design with purpose</span></div><div><strong>03</strong><span>Built to grow</span></div></div></div></section>

   <section id="contact" className="contact sectionWrap section"><div className="contactInner"><div><span className="kicker">HAVE A PROJECT?</span><h2>Let's make your<br/><em>next move.</em></h2><p>Tell us what you're building and we'll get back to you with the next steps.</p></div><form onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success"><strong>Thanks — you're on the list.</strong><span>We'll be in touch soon.</span></div>:<><label>Name<input required placeholder="Your name"/></label><label>Email<input required type="email" placeholder="you@company.com"/></label><label>What can we build? <textarea required placeholder="Tell us a little about your project..."/></label><button className="primary" type="submit">Send inquiry <Arrow/></button></>}</form></div></section>
  </main>
  <footer><div className="sectionWrap footerInner"><div><button className="brand footerBrand" onClick={()=>go('home')}><span className="brandMark">N</span><span>NOVA</span></button><p>Digital experiences for ambitious businesses.</p></div><div className="footerLinks"><button onClick={()=>go('services')}>Services</button><button onClick={()=>go('work')}>Work</button><button onClick={()=>go('about')}>About</button><button onClick={()=>go('contact')}>Contact</button></div><span>© 2026 NOVA Studio</span></div></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
