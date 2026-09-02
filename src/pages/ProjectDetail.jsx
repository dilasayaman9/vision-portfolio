import { ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ProjectImage from '../components/ProjectImage.jsx';
import PageHero from '../components/PageHero.jsx';
import PageMeta from '../components/PageMeta.jsx';
import { projects } from '../data/siteData.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <PageHero eyebrow="Project" title="Project not found">
        <Link className="text-link" to="/projects">Back to all projects</Link>
      </PageHero>
    );
  }

  return (
    <>
      <PageMeta
        title={`${project.fullTitle} | Dilasa Yaman`}
        description={`${project.fullTitle} case study by Dilasa Yaman.`}
      />
      <PageHero eyebrow={project.category} title={project.fullTitle}>
        <p>{project.description}</p>
      </PageHero>

      <section className="section section-cream">
        <div className="container project-detail-layout">
          <aside className="case-meta" aria-label="Project details">
            <dl>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Dates</dt>
                <dd>{project.dates}</dd>
              </div>
            </dl>
            <div className="case-links">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
                  {link.label}
                  <ExternalLink aria-hidden="true" size={16} />
                </a>
              ))}
            </div>
          </aside>
          <div className="case-content">
            <ProjectImage project={project} variant="case-study" />
            <section>
              <h2>Overview and Goals</h2>
              <p>{project.overview}</p>
              <ul>
                {project.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>My Role and Process</h2>
              <ul>
                {project.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Challenges and Solutions</h2>
              <div className="challenge-list">
                {project.challenges.map((item) => (
                  <article key={item.challenge}>
                    <h3>{item.challenge}</h3>
                    <p>{item.solution}</p>
                  </article>
                ))}
              </div>
            </section>
            {project.outcome ? (
              <section>
                <h2>Result</h2>
                <p>{project.outcome}</p>
              </section>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
