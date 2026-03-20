import { PageBanner, Section, Card } from '../components/Layout'
import communityImg from '../assets/community-landscape.svg'

export default function CommunityPage() {
  return (
    <>
      <PageBanner
        eyebrow="Community"
        title="A full-screen community page designed around openness, trust, and participation"
        text="Liuli Society aims to make wellness education more accessible through group learning, public-facing dialogue, volunteer interest, and supportive community engagement."
        image={communityImg}
        alt="Community page landscape"
      />

      <Section
        eyebrow="Public-facing work"
        title="Making wellness learning more approachable for real communities"
        text="The community section is designed to communicate value beyond products by emphasizing education, conversation, participation, and long-term support."
      >
        <div className="grid-3">
          <Card>
            <h3>Educational workshops</h3>
            <p>Programs and learning experiences that help make wellness themes easier to understand and discuss in everyday contexts.</p>
          </Card>
          <Card>
            <h3>Small-group experiences</h3>
            <p>Thoughtful formats for reflection, dialogue, and supportive shared learning within trusted community settings.</p>
          </Card>
          <Card>
            <h3>Volunteer participation</h3>
            <p>Opportunities for mission-aligned contributors to support community programming, outreach, and future nonprofit growth.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
