import PageHero from '../components/PageHero.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/siteData.js';

export default function Projects() {
  return (
    <>
      <PageMeta
        title="Projects | Dilasa Yaman"
        description="Explore web design and development case studies by Dilasa Yaman."
      />
      <PageHero eyebrow="Projects" title="Case Studies in Design and Development">
        <p>
          These projects show my work across WordPress development, collaborative front-end interfaces,
          and earlier individual website design.
        </p>
      </PageHero>
      <section className="section section-cream">
        <div className="container project-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
