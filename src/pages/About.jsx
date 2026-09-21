import PageHero from '../components/PageHero.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import dilasaPortrait from '../assets/images/dilasa-portrait.jpg';
import { values } from '../data/siteData.js';

export default function About() {
  return (
    <>
      <PageMeta
        title="About | Dilasa Yaman"
        description="Learn about Dilasa Yaman, a web design and development student at UA Little Rock seeking front-end internship opportunities."
      />
      <PageHero eyebrow="About Dilasa" title="A Designer and Developer Building With Care" variant="about">
        <p>
          I am Dilasa Yaman, a Web Design and Development student based in North Little Rock,
          Arkansas. I’m originally from Turkey, and I will never turn down good food or the chance
          to pet a cat.
        </p>
      </PageHero>

      <section className="section section-cream">
        <div className="container about-story">
          <figure className="about-story-media">
            <img
              className="about-story-image"
              src={dilasaPortrait}
              alt="Dilasa Yaman"
            />
          </figure>
          <div className="about-story-content">
            <p className="eyebrow">My Story</p>
            <h2>Where creativity and technology meet</h2>
            <div className="copy-stack">
              <p>
                I am studying Web Design and Development at UA Little Rock with a minor in Information
                Technology, and I expect to graduate in May 2028.
              </p>
              <p>
                Art and creativity have always been an important part of my life. When I discovered my
                interest in technology in high school, I began looking for a path that could bring the two
                together. Web development became that path, allowing me to combine visual design with logical
                problem-solving—and that balance is what continues to excite me about the field.
              </p>
              <p>
                My coursework and projects gave me a strong foundation that I now apply in a professional
                setting. I currently work as the Web Developer for the Center for Molecular Design and
                Development, where I have gained experience building and maintaining a professional website. I
                am also seeking internship opportunities where I can continue learning while contributing to
                meaningful projects.
              </p>
              <p>
                Outside of web design and development, I am a big cat lover who enjoys taking nature photos
                and trying different cuisines.
              </p>
            </div>
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
