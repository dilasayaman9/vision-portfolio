import { useRef, useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/siteData.js';

const tabs = [
  { id: 'professional', label: 'Professional Projects' },
  { id: 'university', label: 'University Projects' },
];

const universityCategories = [
  'Web Design & Development',
  'Graphic & Visual Design',
  'Data & Spreadsheets',
  'Writing & Communication',
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);
  const tabButtons = useRef([]);

  function handleTabKey(event, index) {
    const lastTab = tabs.length - 1;
    const destination = {
      ArrowLeft: index === 0 ? lastTab : index - 1,
      ArrowRight: index === lastTab ? 0 : index + 1,
      Home: 0,
      End: lastTab,
    }[event.key];

    if (destination === undefined) return;

    event.preventDefault();
    setActiveTab(destination);
    tabButtons.current[destination].focus();
  }

  return (
    <>
      <PageMeta
        title="Work | Dilasa Yaman"
        description="Explore web design and development case studies by Dilasa Yaman."
      />
      <PageHero eyebrow="Work" title="Case Studies in Design and Development" variant="interior">
        <p>Selected work in WordPress development, responsive design, and collaborative front-end development.</p>
      </PageHero>
      <section className="section section-cream work-projects-section">
        <div className="container">
          <div className="project-tabs" role="tablist" aria-label="Project categories">
            {tabs.map(({ id, label }, index) => (
              <button
                key={id}
                ref={(button) => { tabButtons.current[index] = button; }}
                type="button"
                role="tab"
                id={`${id}-tab`}
                aria-controls={`${id}-panel`}
                aria-selected={activeTab === index}
                tabIndex={activeTab === index ? 0 : -1}
                onClick={() => setActiveTab(index)}
                onKeyDown={(event) => handleTabKey(event, index)}
              >
                {label}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id="professional-panel"
            aria-labelledby="professional-tab"
            tabIndex={0}
            hidden={activeTab !== 0}
          >
            <div className="project-list">
              {projects.filter((project) => project.showOnWork !== false).map((project) => (
                <ProjectCard key={project.slug} project={project} headingLevel="h2" />
              ))}
            </div>
          </div>

          <div
            role="tabpanel"
            id="university-panel"
            aria-labelledby="university-tab"
            tabIndex={0}
            hidden={activeTab !== 1}
          >
            <div className="university-projects">
              <p>Selected university projects will be added soon.</p>
              <ul className="university-categories">
                {universityCategories.map((category) => <li key={category}>{category}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
