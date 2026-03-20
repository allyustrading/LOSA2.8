import { FullWidthHero, Section, Card } from '../components/Layout'
import heroImg from '../assets/hero-landscape.svg'
import pathwaysImg from '../assets/pathways-landscape.svg'
import researchImg from '../assets/research-landscape.svg'

export default function HomePage() {
  return (
    <>
      <FullWidthHero
        eyebrow="Liuli Society"
        title="A full-screen nonprofit website built for credibility, clarity, and community trust"
        text="Liuli Society is a U.S. 501(c)(3) nonprofit organization advancing wellness education, research-informed innovation, and community-centered support. This new version uses a full-screen visual system, wider landscape imagery, and stronger institutional content."
        image={heroImg}
        alt="Liuli Society wide hero landscape"
      >
        <div className="hero-actions">
          <a href="#/about" className="button button-gold">Explore the mission</a>
          <a href="#/contact" className="button button-paper">Start a conversation</a>
        </div>

        <div className="hero-metrics">
          <div className="metric">
            <strong>Education-led</strong>
            <span>Wellness knowledge translated into accessible public learning.</span>
          </div>
          <div className="metric">
            <strong>Research-informed</strong>
            <span>Innovation framed through reflection, exploration, and responsibility.</span>
          </div>
          <div className="metric">
            <strong>Community-centered</strong>
            <span>Programs and partnerships designed around trust and practical value.</span>
          </div>
          <div className="metric">
            <strong>Institution-ready</strong>
            <span>Built to speak clearly to universities, donors, and mission partners.</span>
          </div>
        </div>
      </FullWidthHero>

      <Section
        eyebrow="A stronger first impression"
        title="A more modern and immersive way to present the nonprofit mission"
        text="This design moves away from compact boxed layouts and instead uses larger sections, stronger typography, and wide visual storytelling to create a more premium full-screen experience."
      >
        <div className="grid-3">
          <Card>
            <h3>Clearer nonprofit positioning</h3>
            <p>Every page uses language suited to public benefit, education, and responsible innovation rather than sales or treatment claims.</p>
          </Card>
          <Card>
            <h3>Landscape-first visuals</h3>
            <p>Wide-format imagery gives the site a more professional, full-screen feel and improves visual rhythm across desktop displays.</p>
          </Card>
          <Card>
            <h3>Better structured content</h3>
            <p>The copy is more standard, institution-friendly, and aligned with grant, academic, and community-facing expectations.</p>
          </Card>
        </div>

        <div className="feature-strip">
          <div className="feature-image">
            <img src={pathwaysImg} alt="Landscape pathways section" />
          </div>
          <div className="feature-panel">
            <div className="eyebrow">Pathways preview</div>
            <h2 className="section-title">A framework organized around pathways, not products</h2>
            <p className="section-text">
              Liuli Society presents wellness support through pathways that reflect everyday
              life, educational themes, and future areas of responsible development. This
              makes the site easier to understand for donors, partners, and community audiences.
            </p>
            <a href="#/pathways" className="button button-dark">View pathways</a>
          </div>
        </div>

        <div className="feature-strip">
          <div className="feature-panel">
            <div className="eyebrow">Research and innovation</div>
            <h2 className="section-title">An institutional tone without losing warmth</h2>
            <p className="section-text">
              The new content emphasizes seriousness, calm confidence, and nonprofit legitimacy,
              while still feeling welcoming and mission-driven.
            </p>
            <a href="#/research" className="button button-dark">Learn about research</a>
          </div>
          <div className="feature-image">
            <img src={researchImg} alt="Landscape research section" />
          </div>
        </div>
      </Section>
    </>
  )
}
