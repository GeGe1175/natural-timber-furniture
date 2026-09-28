import { Link } from 'react-router-dom'
import RulerMark from '../components/RulerMark.jsx'
import { TIMBERS } from '../data/categories.js'
import './Materials.css'

const STEPS = [
  {
    n: '1',
    title: 'You tell us the space',
    body: 'Bring a photo, a rough size, or an existing piece you want matched. Onsite measuring is available if it’s easier.',
  },
  {
    n: '2',
    title: 'We choose timber, together',
    body: 'Visit the Crows Nest showroom and hold real swatches against your floors and furniture before anything is cut.',
  },
  {
    n: '3',
    title: 'Fairfield workshop builds it',
    body: 'Hand-joined by the same twenty-person team, to the millimetre — not a factory run, one piece at a time.',
  },
  {
    n: '4',
    title: 'Delivered and fitted',
    body: 'We deliver and install across Sydney, and stand behind the joinery long after it leaves the workshop.',
  },
]

export default function Materials() {
  return (
    <div className="materials-page">
      <header className="page-head wrap">
        <p className="page-head__kicker dim">Timber &amp; process</p>
        <h1>You ask, we listen.</h1>
        <p className="page-head__lede dim">
          Tell us the design, size, finish and any detail you care about.
          We work mainly in hardwood — Tasmanian oak, blackwood, jarrah,
          spotted gum, American oak and American walnut among them.
        </p>
      </header>

      <section className="wrap timber-grid">
        {TIMBERS.map((t) => (
          <article key={t.slug} className="timber-card">
            <img src={t.image} alt={`${t.name} grain sample`} loading="lazy" />
            <h2>{t.name}</h2>
            <p className="dim">{t.note}</p>
          </article>
        ))}
        <article className="timber-card timber-card--cta">
          <RulerMark />
          <h2>Not sure which timber?</h2>
          <p className="dim">
            Most people decide by touch, not photo — come to the showroom
            and we&rsquo;ll walk the options with you.
          </p>
          <Link to="/contact" className="brass-btn">Visit the showroom</Link>
        </article>
      </section>

      <section className="process">
        <div className="wrap">
          <h2 className="process__heading">From conversation to finished piece</h2>
          <ol className="process__steps">
            {STEPS.map((s) => (
              <li key={s.n}>
                <span className="process__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p className="dim">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="workshop-band">
        <img src={`${import.meta.env.BASE_URL}images/workshop-wide.jpg`} alt="Timber stock in the Fairfield workshop" loading="lazy" />
        <div className="workshop-band__scrim" />
        <div className="wrap workshop-band__copy">
          <p>
            “We have a showroom full of timber furniture made by us — come
            and touch it yourself.”
          </p>
        </div>
      </section>
    </div>
  )
}
