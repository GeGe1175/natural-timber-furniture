import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data/categories.js'
import './Products.css'

export default function Products() {
  return (
    <div className="products-page">
      <header className="page-head wrap">
        <p className="page-head__kicker dim">Products</p>
        <h1>Every piece is unique.</h1>
        <p className="page-head__lede dim">
          Nothing here is a render. Every photo is a real piece built for a
          real customer, over twenty-six years of work in the Fairfield
          workshop — shown at the size it was built for, not a standard one.
        </p>
      </header>

      <div className="wrap products-grid">
        {CATEGORIES.map((c, i) => (
          <article key={c.slug} className="product-card" style={{ '--i': i }}>
            <div className="product-card__img">
              <img src={c.image} alt={c.name} loading="lazy" />
            </div>
            <div className="product-card__body">
              <h2>{c.name}</h2>
              <p className="dim">{c.blurb}</p>
              <Link to="/contact" className="brass-btn">Enquire about this</Link>
            </div>
          </article>
        ))}
      </div>

      <section className="products-cta">
        <div className="wrap products-cta__inner">
          <h2>Don&rsquo;t see quite what you need?</h2>
          <p className="dim">
            Most of what we build starts as a conversation, not a catalogue
            number — refurbishing jobs and one-off commissions welcome.
          </p>
          <Link to="/contact" className="brass-btn solid">Talk to George</Link>
        </div>
      </section>
    </div>
  )
}
