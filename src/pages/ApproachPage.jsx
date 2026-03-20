import { PageBanner, Section, Card } from '../components/Layout'
import pathwaysImg from '../assets/pathways-landscape.svg'

export default function ApproachPage() {
  const steps = [
    ['Knowledge first', 'Our approach begins with understanding. Education comes before recommendation, and clarity comes before action.'],
    ['From learning to design', 'We explore how insights can be translated into more useful frameworks, materials, and supportive daily practices.'],
    ['From design to support', 'Support becomes meaningful when it is sustained through learning, community context, and thoughtful follow-through.'],
    ['Long-term trust', 'The organization values calm communication, responsible positioning, and trust built over time rather than short-term attention.'],
  ]

  return (
    <>
      <PageBanner
        eyebrow="Our Approach"
        title="A professional framework rooted in understanding rather than promotion"
        text="Liuli Society presents its methodology in a way that is nonprofit-friendly, research-aware, and easy for institutional audiences to understand."
        image={pathwaysImg}
        alt="Approach page landscape"
      />

      <Section
        eyebrow="How the model works"
        title="A standard and well-structured explanation of the Liuli approach"
        text="This page explains the logic of the organization in clear, professional language that remains aligned with nonprofit positioning."
      >
        <div className="grid-4">
          {steps.map(([title, text]) => (
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
