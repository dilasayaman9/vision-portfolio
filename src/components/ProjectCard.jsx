import { Link } from 'react-router-dom';
import ProjectImage from './ProjectImage.jsx';

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? 'project-card-featured' : ''}`}>
      <ProjectImage project={project} />
      <div className="project-card-body">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
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
        <Link className="text-link" to={`/projects/${project.slug}`}>
          View Case Study
        </Link>
      </div>
    </article>
  );
}
