import { CalendarDays, CheckCircle2 } from 'lucide-react';
import ButtonLink from '../components/ButtonLink.jsx';
import PageHero from '../components/PageHero.jsx';
import PageMeta from '../components/PageMeta.jsx';
import { profile } from '../data/siteData.js';

const consultationItems = [
  "A conversation about your website goals and current needs",
  "A review of your ideas, content, desired features, and general timeline",
  "An honest conversation about whether my services are a good fit",
  "Recommended next steps for the website project",
  "A no-pressure consultation",
];

export default function Book() {
  return (
    <>
      <PageMeta
        title="Book a Call | Dilasa Yaman"
        description="Schedule a 30-minute website consultation with Dilasa Yaman."
      />
      <PageHero eyebrow="30-Minute Consultation" title="Let's Talk About Your Website">
        <p>
          If you are thinking about a new website, a redesign, or help improving an existing presence,
          this call is a calm place to talk through what you need.
        </p>
      </PageHero>

      <section className="section section-cream">
        <div className="container booking-layout">
          <aside className="booking-info" aria-labelledby="booking-info-heading">
            <div className="icon-mark" aria-hidden="true">
              <CalendarDays size={28} strokeWidth={1.7} />
            </div>
            <h2 id="booking-info-heading">What the call includes</h2>
            <ul className="check-list">
              {consultationItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" size={18} strokeWidth={1.8} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href={profile.calendly} variant="secondary">
              Open Calendly
            </ButtonLink>
          </aside>
          <div className="calendly-panel">
            <iframe
              title="Schedule a 30-minute call with Dilasa Yaman"
              src={`${profile.calendly}?hide_gdpr_banner=1&background_color=f7efe7&text_color=251817&primary_color=72504f`}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
