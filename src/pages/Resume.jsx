import { Download } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import PageMeta from '../components/PageMeta.jsx';
import { achievements, experience, profile } from '../data/siteData.js';

export default function Resume() {
  return (
    <>
      <PageMeta
        title="Résumé | Dilasa Yaman"
        description="Resume page for Dilasa Yaman, including education, experience, achievements, and a PDF download."
      />
      <PageHero eyebrow="Resume" title="Résumé">
        <p>
          A scan-friendly overview of my academic path, current experience, and selected achievements.
        </p>
        <a className="button button-primary" href={profile.resumePath} download>
          <span>Download Résumé</span>
          <Download aria-hidden="true" size={18} />
        </a>
      </PageHero>

      <section className="section section-cream">
        <div className="container resume-layout">
          <section className="resume-section" aria-labelledby="education-heading">
            <p className="eyebrow">Education</p>
            <h2 id="education-heading">UA Little Rock</h2>
            <p>Bachelor's in Web Design and Development</p>
            <p>Minor in Information Technology</p>
            <p>Expected graduation: May 2028</p>
          </section>

          <section className="resume-section" aria-labelledby="experience-heading">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-heading">Professional and Campus Work</h2>
            <div className="timeline">
              {experience.map((item) => (
                <article key={`${item.title}-${item.organization}`}>
                  <p>{item.dates}</p>
                  <h3>{item.title}</h3>
                  <span>{item.organization}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section" aria-labelledby="achievements-heading">
            <p className="eyebrow">Achievements</p>
            <h2 id="achievements-heading">Recognition and Involvement</h2>
            <ul className="resume-list">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
