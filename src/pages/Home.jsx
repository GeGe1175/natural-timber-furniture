import { Link } from 'react-router-dom'
import RulerMark from '../components/RulerMark.jsx'
import { CATEGORIES, TIMBERS } from '../data/categories.js'
import './Home.css'

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero__img" src={`${import.meta.env.BASE_URL}images/tables.jpg`} alt="Solid-timber coffee table with a live figured grain, built in the Fairfield workshop" />
        <div className="hero__scrim" />
        <div className="wrap hero__content">
          <p className="hero__dateline">Crows Nest, Sydney — bespoke since 1995</p>
          <h1 className="hero__title">
            Furniture built to<br />the room it lives in.
          </h1>
          <p className="hero__sub">
            George and a twenty-person workshop in Fairfield hand-build
            solid-timber furniture to your exact dimensions — not the
            nearest size on a showroom floor.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="brass-btn solid">Get a quote</Link>
            <Link to="/products" className="brass-btn">See the work</Link>
          </div>
        </div>
        <div className="hero__ruler">
          <RulerMark />
          <span>made to measure, every time</span>
        </div>
      </section>

      <section className="statement">
        <div className="wrap statement__inner">
          <p className="statement__text">
            No Photoshop effect — everything here is a real piece we&rsquo;ve
            built for a real customer, over twenty-six years and counting.
          </p>
        </div>
      </section>

      <section className="rail-section">
        <div className="wrap rail-section__head">
          <h2>What we build</h2>
          <Link to="/products" className="rail-section__all">View all products</Link>
        </div>
        <div className="rail">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to="/products" className="rail__card">
              <div className="rail__img-wrap">
                <img src={c.image} alt={c.name} loading="lazy" />
              </div>
              <h3 className="rail__name">{c.name}</h3>
              <p className="dim rail__blurb">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="materials-teaser">
        <div className="wrap materials-teaser__inner">
          <div className="materials-teaser__copy">
            <h2>Five timbers, one workshop</h2>
            <p className="dim">
              Tasmanian oak, jarrah, blackwood, blackbutt, American oak — we
              work almost exclusively in solid hardwood, chosen with you at
              the showroom against your existing furniture and floors.
            </p>
            <Link to="/materials" className="brass-btn">Explore the timbers</Link>
          </div>
          <div className="materials-teaser__swatches">
            {TIMBERS.slice(0, 4).map((t) => (
              <img key={t.slug} src={t.image} alt={t.name} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="about-teaser">
        <div className="wrap about-teaser__inner">
          <img className="about-teaser__img" src={`${import.meta.env.BASE_URL}images/about-workshop.jpg`} alt="An unfinished cabinet mid-build in the Fairfield workshop" loading="lazy" />
          <div className="about-teaser__copy">
            <h2>Four people, in 1995.<br />Twenty, today.</h2>
            <p className="dim">
              We started with a clear idea: furniture designed to the
              client&rsquo;s exact specification, not the other way around.
              That&rsquo;s still the whole business — come touch the timber
              yourself at our Crows Nest showroom.
            </p>
            <div className="about-teaser__stats">
              <div><strong>1995</strong><span className="dim">workshop founded</span></div>
              <div><strong>20</strong><span className="dim">craftspeople today</span></div>
              <div><strong>26+</strong><span className="dim">years, one family business</span></div>
            </div>
            <Link to="/about" className="brass-btn">Our story</Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-band__inner">
          <div>
            <h2>Have a space that needs the right piece?</h2>
            <p className="dim">
              Tell us the room, the size, the timber you like — we reply
              within one business day.
            </p>
          </div>
          <Link to="/contact" className="brass-btn solid">Start a quote</Link>
        </div>
      </section>
    </>
  )
}
