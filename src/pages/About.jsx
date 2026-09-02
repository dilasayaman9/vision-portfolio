import PageHero from '../components/PageHero.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { values } from '../data/siteData.js';

export default function About() {
  return (
    <>
      <PageMeta
        title="About | Dilasa Yaman"
        description="Learn about Dilasa Yaman, a web design and development student at UA Little Rock seeking front-end internship opportunities."
      />
      <PageHero eyebrow="About Dilasa" title="A Designer and Developer Building With Care">
        <p>
          I am Dilasa Yaman, a web design and development student based in North Little Rock, Arkansas.
          I am originally from Turkey and have lived in Arkansas for approximately five years.
        </p>
      </PageHero>

      <section className="section section-cream">
        <div className="container two-column">
          <div>
            <p className="eyebrow">My Story</p>
            <h2>Where creativity and technology meet</h2>
          </div>
          <div className="copy-stack">
            <p>
              I am studying Web Design and Development at UA Little Rock with a minor in Information
              Technology, and I expect to graduate in May 2028.
            </p>
            <p>
              I have always been interested in both creativity and technology. Web development became a
              way for me to combine logical problem-solving with visual design, and that combination is
              what keeps me excited about this field.
            </p>
            <p>
              I enjoy helping organizations create and improve their presence on the web. I see myself
              equally as a web designer and developer, and I am currently seeking internship opportunities
              where I can keep learning while contributing to real projects.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="container">
          <SectionHeading eyebrow="Approach" title="The values I bring into the work">
            I care about websites that are clear, usable, and thoughtfully made.
          </SectionHeading>
          <div className="value-list">
            {values.map((value) => (
              <article key={value}>
                <h3>{value}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
