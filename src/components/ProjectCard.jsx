import { Link } from 'react-router-dom';
import ProjectImage from './ProjectImage.jsx';

export default function ProjectCard({ project, featured = false, headingLevel: Heading = 'h3' }) {
  return (
    <article className={`project-card ${featured ? 'project-card-featured' : ''}`}>
      <ProjectImage project={project} />
      <div className="project-card-body">
        <p className="eyebrow">{project.context ?? project.category}</p>
        <Heading>{project.title}</Heading>
        <p>{project.description}</p>
        <dl className="project-meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Dates</dt>
            <dd>{project.dates}</dd>
          </div>
        </dl>
        <Link className="text-link" to={`/projects/${project.slug}`} aria-label={`View Project – ${project.title}`}>
          View Project
        </Link>
      </div>
    </article>
  );
}
