import { PageBanner, Section, Card } from '../components/Layout'
import supportImg from '../assets/support-landscape.svg'

export default function SupportPage() {
  return (
    <>
      <PageBanner
        eyebrow="Support the Mission"
        title="A support page that looks more premium, more spacious, and more future-ready"
        text="Even when donations are not the immediate priority, this page helps establish nonprofit credibility and prepares the organization for future giving, partnership, and collaboration."
        image={supportImg}
        alt="Support page landscape"
      />

      <Section
        eyebrow="Why support matters"
        title="Preparing the organization for sustainable mission growth"
        text="Support can include partnership, educational collaboration, volunteer contribution, and future tax-deductible giving."
      >
        <div className="grid-2">
          <Card>
            <h3>Mission-aligned partnership</h3>
            <p>Liuli Society welcomes relationships with institutions, community organizations, and supporters who value thoughtful, public-serving wellness education.</p>
          </Card>
          <Card>
            <h3>Future giving readiness</h3>
            <p>Liuli Society is a registered 501(c)(3) nonprofit organization in the United States. Contributions may be tax-deductible to the extent permitted by law.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
