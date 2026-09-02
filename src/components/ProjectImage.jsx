export default function ProjectImage({ project, variant = 'card' }) {
  return (
    <figure className={`image-frame image-frame-${variant}`}>
      <img src={project.image} alt={project.imageAlt} />
      <figcaption>{project.title} screenshot</figcaption>
    </figure>
  );
}
