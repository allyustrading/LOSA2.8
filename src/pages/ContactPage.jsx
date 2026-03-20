import { PageBanner, Section, Card } from '../components/Layout'
import contactImg from '../assets/contact-landscape.svg'

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="A more refined contact page with room to invite serious conversations"
        text="We welcome inquiries related to wellness education, research, community partnership, volunteer interest, and mission-aligned collaboration."
        image={contactImg}
        alt="Contact page landscape"
      />

      <Section
        eyebrow="Get in touch"
        title="Open the next conversation"
        text="This design-ready contact page can later be connected to email, forms, or a CRM for real-world use."
      >
        <div className="grid-2">
          <Card>
            <h3>Inquiry areas</h3>
            <p>University collaboration, research conversations, community partnerships, educational programming, volunteer participation, and mission-aligned support.</p>
          </Card>
          <Card>
            <h3>Contact form preview</h3>
            <div className="form-grid">
              <input className="field" placeholder="Your name" />
              <input className="field" placeholder="Email address" />
              <input className="field" placeholder="Subject" />
              <textarea className="field" rows="6" placeholder="How would you like to connect with Liuli Society?" />
              <button className="button button-dark" style={{ width: 'fit-content' }}>Send inquiry</button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}
