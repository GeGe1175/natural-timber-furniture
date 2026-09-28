import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <header className="page-head wrap">
        <p className="page-head__kicker dim">About</p>
        <h1>North Shore&rsquo;s bespoke furniture maker.</h1>
        <p className="page-head__lede dim">
          Twenty-six years of building furniture designed around the
          client&rsquo;s exact specification — because we&rsquo;ve never
          believed in one-size-fits-all.
        </p>
      </header>

      <section className="wrap about-split">
        <img className="about-split__img" src={`${import.meta.env.BASE_URL}images/about-workshop.jpg`} alt="A cabinet mid-build in the Fairfield workshop" loading="lazy" />
        <div className="about-split__copy">
          <p>
            We began with just four people in 1995. Today we&rsquo;re a team
            of twenty, working out of our own workshop in Fairfield, Sydney.
          </p>
          <p>
            When we started the business over twenty-five years ago, we had
            a clear vision: to create high-quality, bespoke, handcrafted
            furniture designed to the client&rsquo;s exact specification.
            We&rsquo;re here because we don&rsquo;t believe in
            &lsquo;one-size-fits-all&rsquo;.
          </p>
          <p>
            We have a showroom in Crows Nest — come and visit, and let&rsquo;s
            work together on your ideal piece.
          </p>
          <div className="about-split__stats">
            <div><strong>1995</strong><span className="dim">the workshop began</span></div>
            <div><strong>20</strong><span className="dim">craftspeople today</span></div>
            <div><strong>26+</strong><span className="dim">years building on request</span></div>
          </div>
          <Link to="/contact" className="brass-btn solid">Visit the showroom</Link>
        </div>
      </section>

      <section className="about-values">
        <div className="wrap about-values__grid">
          <div>
            <h2>Built to order</h2>
            <p className="dim">
              Every unit is built to customised sizes — we don&rsquo;t stock
              a catalogue, we build to your room.
            </p>
          </div>
          <div>
            <h2>Only solid timber</h2>
            <p className="dim">
              Tasmanian oak, blackwood, jarrah, spotted gum, American oak
              and walnut — no veneers pretending to be something else.
            </p>
          </div>
          <div>
            <h2>Nothing outsourced</h2>
            <p className="dim">
              The same twenty people who greet you at the showroom build
              the piece in Fairfield.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
