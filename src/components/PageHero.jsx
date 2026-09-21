export default function PageHero({ eyebrow, title, children, align = 'center', variant }) {
  return (
    <section className={`page-hero page-hero-${align}${variant ? ` page-hero-${variant}` : ''}`}>
      <div className="container page-hero-content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {children ? <div className="hero-copy">{children}</div> : null}
      </div>
    </section>
  );
}
