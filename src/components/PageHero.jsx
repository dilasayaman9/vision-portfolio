export default function PageHero({ eyebrow, title, children, align = 'center' }) {
  return (
    <section className={`page-hero page-hero-${align}`}>
      <div className="container">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {children ? <div className="hero-copy">{children}</div> : null}
      </div>
    </section>
  );
}
