export default function ImagePlaceholder({ project }) {
  return (
    <figure className="image-frame">
      <img src={project.image} alt={project.imageAlt} />
      <figcaption>{project.title} image placeholder</figcaption>
    </figure>
  );
}
