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

  const details = [
    ['Role', project.role],
    ['Dates', project.dates],
    ['Team', project.team],
    ['Tools', project.tools],
  ];

  return (
    <>
      <PageMeta
        title={`${project.fullTitle} | Dilasa Yaman`}
        description={`${project.fullTitle} case study by Dilasa Yaman.`}
      />
      <PageHero eyebrow={project.context ?? project.category} title={project.fullTitle} variant="project">
        <p>{project.intro ?? project.description}</p>
      </PageHero>

      <section className="section section-cream case-study-section">
        <div className="container">
          <Link className="text-link case-back-link" to="/projects">← Back to Work</Link>
          <div className="project-detail-layout">
            <aside className="case-meta" aria-label="Project details">
              <dl>
                {details.filter(([, value]) => value).map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="case-links">
                {project.links.map((link, index) => {
                  const noteId = link.note ? `project-link-note-${index}` : undefined;
                  return (
                    <div className="case-link" key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer noopener" aria-describedby={noteId}>
                        {link.label}
                        <ExternalLink aria-hidden="true" size={16} />
                      </a>
                      {link.note ? <p id={noteId}>{link.note}</p> : null}
                    </div>
                  );
                })}
              </div>
            </aside>
            <div className="case-content">
              {project.sections ? project.sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.figures ? (
                    <div className="case-gallery">
                      {section.figures.map((figure) => (
                        <ProjectImage key={figure.image} project={figure} variant={figure.variant ?? 'evidence'} />
                      ))}
                    </div>
                  ) : null}
                </section>
              )) : <ExistingCaseStudy project={project} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ExistingCaseStudy({ project }) {
  return (
    <>
      <ProjectImage project={project} variant="case-study" />
      <section>
        <h2>Overview and Goals</h2>
        <p>{project.overview}</p>
        <ul>
          {project.goals.map((goal) => <li key={goal}>{goal}</li>)}
        </ul>
      </section>
      <section>
        <h2>My Role and Process</h2>
        <ul>
          {project.process.map((step) => <li key={step}>{step}</li>)}
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
    </>
  );
}
