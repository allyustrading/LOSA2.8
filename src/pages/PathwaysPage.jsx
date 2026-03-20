import { PageBanner, Section, Card } from '../components/Layout'
import pathwaysImg from '../assets/pathways-landscape.svg'

const pathways = [
  ['Comfort & Circulation Support', 'Supporting everyday physical comfort, ease of movement, and a greater sense of balance through gentle wellness approaches.'],
  ['Daily Natural Skin Wellness', 'Encouraging daily practices that support balanced, healthy, and well-cared-for skin through natural care principles.'],
  ['Light Balance & Clean Living', 'Promoting habits and environments that help people feel clearer, lighter, and more grounded in daily life.'],
  ['Calm & Rest Support', 'Creating supportive routines for stillness, relaxation, and more restorative daily rhythms.'],
  ['Better Living Rituals', 'Encouraging intentional daily rituals that support rhythm, wellbeing, and quality of life.'],
  ['Focus & Clarity Support', 'Supporting clearer attention, thoughtful engagement, and mental freshness through better daily patterns.'],
]

export default function PathwaysPage() {
  return (
    <>
      <PageBanner
        eyebrow="Wellness Pathways"
        title="A landscape-led page for a more visual and full-screen pathways experience"
        text="The Liuli framework is presented through pathways rather than products, making the site more coherent for nonprofit communication, community learning, and future development."
        image={pathwaysImg}
        alt="Pathways landscape banner"
      />

      <Section
        eyebrow="Framework"
        title="A pathway model that feels educational, human, and easy to navigate"
        text="Each pathway is intended to represent a theme of support, learning, and future exploration rather than a retail category."
      >
        <div className="grid-3">
          {pathways.map(([title, text]) => (
            <Card key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
