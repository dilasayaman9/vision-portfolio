export default function ProjectImage({ project, variant = 'card' }) {
  const { image, imageAlt, imageCaption, imageSize = [], fullImageLabel } = project;
  const [width, height] = imageSize;
  const screenshot = (
    <img src={image} alt={imageAlt} width={width} height={height} loading={fullImageLabel ? 'lazy' : undefined} />
  );

  return (
    <figure className={`image-frame image-frame-${variant}`}>
      {fullImageLabel ? (
        <a href={image} target="_blank" rel="noopener noreferrer" aria-label={`${fullImageLabel} (opens in a new tab)`}>
          {screenshot}
        </a>
      ) : screenshot}
      <figcaption>{imageCaption ?? `${project.title} screenshot`}</figcaption>
    </figure>
  );
}
