import { skills } from '../data/siteData.js';

export default function SkillGroups() {
  return (
    <div className="skill-grid">
      {skills.map((group) => (
        <section className="skill-panel" key={group.title} aria-labelledby={`${group.title}-skills`}>
          <h3 id={`${group.title}-skills`}>{group.title}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
