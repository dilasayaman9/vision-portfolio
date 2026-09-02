import ButtonLink from '../components/ButtonLink.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import SkillGroups from '../components/SkillGroups.jsx';
import { experience, projects, services } from '../data/siteData.js';
import { Link } from 'react-router-dom';

// Add the final photo at src/assets/images/dilasa-working-at-laptop.jpg.
// Until that file exists, the homepage renders the intentional placeholder below.
const laptopPhotoModules = import.meta.glob('../assets/images/dilasa-working-at-laptop.jpg', {
  eager: true,
  import: 'default',
  query: '?url',
});
const laptopPhoto = laptopPhotoModules['../assets/images/dilasa-working-at-laptop.jpg'];

export default function Home() {
  return (
    <>
      <PageMeta />
      <section className="home-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Web Design + Development</p>
            <h1>Designing Your Place on the Web</h1>
            <p className="hero-summary">
              I combine thoughtful design and front-end development to build attractive, responsive,
              and user-friendly websites for organizations, teams, and people with something to share.
            </p>
            <div className="hero-actions">
              <ButtonLink to="/projects">View My Work</ButtonLink>
              <ButtonLink to="/book" variant="secondary">
                Book a Call
              </ButtonLink>
            </div>
          </div>
          <div className="hero-note" aria-label="Portfolio focus">
            <p>Student portfolio</p>
            <strong>Web designer and developer seeking front-end internship opportunities.</strong>
          </div>
        </div>
      </section>

      <section className="section section-cream home-story-section">
        <div className="container home-story">
          <div className="story-image-wrap">
            {laptopPhoto ? (
              <img
                className="story-image"
                src={laptopPhoto}
                alt="Dilasa working at a laptop."
              />
            ) : (
              <div className="story-image story-image-placeholder" role="img" aria-label="Dilasa working at a laptop image placeholder">
                <span>Dilasa working at a laptop</span>
              </div>
            )}
          </div>
          <div className="story-content">
            <p className="eyebrow">My Story</p>
            <h2>Where creativity and technology meet</h2>
            <p>
              I found my place in web development by combining two things I have always enjoyed:
              creative design and logical problem-solving. Now, I create thoughtful digital
              experiences while studying Web Design and Development at UA Little Rock and growing
              through real-world projects.
            </p>
            <dl className="quick-facts" aria-label="Quick facts">
              <div>
                <dt>Study</dt>
                <dd>Web Design & Development</dd>
              </div>
              <div>
                <dt>Minor</dt>
                <dd>Information Technology</dd>
              </div>
              <div>
                <dt>Graduation</dt>
                <dd>May 2028</dd>
              </div>
            </dl>
            <Link className="story-link" to="/about">
              More About Me →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="container">
          <SectionHeading eyebrow="Featured Projects" title="Selected work and case studies">
            Three projects showing WordPress development, UI/UX leadership, responsive interfaces, and earlier individual work.
          </SectionHeading>
          <div className="featured-projects">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <SectionHeading eyebrow="Skills" title="Practical skills across design, development, and website care" />
          <SkillGroups />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-column">
          <SectionHeading eyebrow="Experience + Education" title="Current experience and academic path" />
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.title}-${item.organization}`}>
                <p>{item.dates}</p>
                <h3>{item.title}</h3>
                <span>{item.organization}</span>
              </article>
            ))}
            <article>
              <p>Expected graduation: May 2028</p>
              <h3>Bachelor's in Web Design and Development</h3>
              <span>UA Little Rock, Minor in Information Technology</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container services-band">
          <div>
            <p className="eyebrow">Services</p>
            <h2>Small-scale website support for clear, useful online presence</h2>
            <p>
              Alongside my portfolio and internship search, I can help small businesses, nonprofits,
              university or research organizations, and individuals with focused website needs.
            </p>
          </div>
          <ul>
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <ButtonLink to="/book" variant="secondary">
            Book a Call
          </ButtonLink>
        </div>
      </section>

      <section className="section section-blush final-cta">
        <div className="container">
          <p className="eyebrow">Next Step</p>
          <h2>Interested in working together or talking about an internship?</h2>
          <div className="hero-actions centered-actions">
            <ButtonLink to="/contact">Contact Me</ButtonLink>
            <ButtonLink to="/projects" variant="secondary">
              Explore Projects
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
