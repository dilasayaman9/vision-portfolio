import buffaloRiverScreenshot from '../assets/images/projects/buffalo-river-ui-screenshot.png';
import cmddScreenshot from '../assets/images/projects/cmdd-ui-screenshot.png';
import insuraMatchScreenshot from '../assets/images/projects/insura-match-ui.png';

export const profile = {
  name: 'Dilasa Yaman',
  initials: 'DY',
  title: 'Web Designer & Developer',
  location: 'North Little Rock, Arkansas',
  email: 'dilasayaman1@gmail.com',
  emailLink: 'mailto:dilasayaman1@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/dilasay',
  github: 'https://github.com/Dyaman99',
  calendly: 'https://calendly.com/dilasayaman1/30min',
  resumePath: '/documents/Dilasa_Yaman_resume_2026_v1.pdf',
};

export const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Résumé', to: '/resume' },
  { label: 'Contact', to: '/contact' },
];

export const projects = [
  {
    slug: 'cmdd-wordpress-website',
    title: 'CMDD WordPress Website',
    fullTitle: 'Center for Molecular Design and Development Website',
    dates: 'June 2026-Present',
    role: 'Web Developer',
    category: 'WordPress, responsive web, content organization',
    image: cmddScreenshot,
    imageAlt: 'Center for Molecular Design and Development website homepage',
    description:
      'A university-affiliated research organization website focused on clear content structure, responsive pages, and a professional web presence.',
    overview:
      'The Center for Molecular Design and Development is a research organization at UA Little Rock. My work supports the organization through WordPress development, responsive page design, content organization, hosting and domain coordination, and technical troubleshooting.',
    goals: [
      'Build and maintain a clear WordPress website for a scientific organization.',
      'Organize research and organizational information so visitors can understand it quickly.',
      'Improve usability while working within existing UA Little Rock branding requirements.',
    ],
    process: [
      'Structured pages around the needs of researchers, university partners, and visitors.',
      'Created responsive layouts that keep scientific content readable on different screen sizes.',
      'Handled domain, hosting, and technical troubleshooting tasks to support a reliable presence.',
    ],
    challenges: [
      {
        challenge: 'Scientific content can become dense for general visitors.',
        solution:
          'I focused on clear page hierarchy, concise sections, and practical navigation so the organization remains approachable.',
      },
      {
        challenge: 'The website needed to feel professional while fitting university requirements.',
        solution:
          'I worked within existing institutional branding instead of creating a separate visual identity.',
      },
    ],
    links: [{ label: 'Visit Live Website', href: 'https://cmdd.ualr.edu/' }],
  },
  {
    slug: 'insuramatch-web-application',
    title: 'InsuraMatch Web Application',
    fullTitle: 'InsuraMatch',
    dates: 'June 8-12, 2026',
    role: 'UI/UX Designer and Front-End Lead',
    category: 'UI/UX, React interface, hackathon collaboration',
    image: insuraMatchScreenshot,
    imageAlt: 'InsuraMatch health insurance platform homepage',
    description:
      'A collaborative hackathon project that helps users explore insurance-plan matches, comparisons, educational content, and an assistant experience.',
    overview:
      'InsuraMatch was built during a hackathon as a team project. I contributed as the UI/UX designer and front-end lead, helping shape the interface, responsive experience, and user flow for insurance-plan discovery and comparison.',
    goals: [
      'Create a clearer, more accessible way to discover and compare insurance plans.',
      'Design responsive screens that made dense plan information easier to understand.',
      'Collaborate quickly with the team during a short competition timeline.',
    ],
    process: [
      'Led interface direction and front-end improvements while coordinating with teammates.',
      'Refined layouts for plan matching, comparison, educational content, and the InsuraBot experience.',
      'Balanced speed with usability so the project could be presented effectively during the hackathon.',
    ],
    challenges: [
      {
        challenge: 'Insurance information can feel overwhelming and hard to compare.',
        solution:
          'I emphasized scannable layouts, clear grouping, and interface patterns that helped users compare options with less friction.',
      },
      {
        challenge: 'The project had a short hackathon timeline.',
        solution:
          'I prioritized the most visible user flows and collaborated closely with the team to keep the front end cohesive.',
      },
    ],
    outcome: 'The collaborative project earned second place in the competition.',
    links: [
      { label: 'Visit Live Website', href: 'https://fancy-moonbeam-077919.netlify.app/' },
      { label: 'View GitHub Repository', href: 'https://github.com/Ishmam97/Coverage_compass' },
    ],
  },
  {
    slug: 'buffalo-river-getaway',
    title: 'Buffalo River Getaway',
    fullTitle: 'Buffalo River Getaway',
    dates: 'Earlier individual project',
    role: 'Designer and Developer',
    category: 'Travel UX, visual design, front-end development',
    image: buffaloRiverScreenshot,
    imageAlt: 'Buffalo River Getaway website homepage',
    description:
      'An earlier individual project exploring travel and lodging content, visual identity, destination information, and responsive presentation.',
    overview:
      'Buffalo River Getaway is an earlier individual portfolio project focused on travel and lodging user experience. I use it as an honest example of my growth as a designer and developer.',
    goals: [
      'Create a welcoming travel website experience around destination and lodging information.',
      'Practice visual design, branding decisions, and page organization.',
      'Build confidence connecting design choices with front-end implementation.',
    ],
    process: [
      'Organized destination information around what a visitor would want to know first.',
      'Designed a warm visual direction that fit the travel subject matter.',
      'Built the pages as an individual project while strengthening layout and responsive skills.',
    ],
    challenges: [
      {
        challenge: 'The project needed to feel polished without presenting itself as a real commercial company.',
        solution:
          'I frame it as academic and portfolio work, focusing on the design and development process rather than business claims.',
      },
    ],
    links: [
      {
        label: 'Visit Live Website',
        href: 'https://dyaman99.github.io/it-indigo/buffalo-river-getaway/index.html',
      },
      {
        label: 'View GitHub Repository',
        href: 'https://github.com/Dyaman99/it-indigo/tree/main/buffalo-river-getaway',
      },
    ],
  },
];

export const skills = [
  {
    title: 'Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'Git', 'GitHub', 'Responsive web development'],
  },
  {
    title: 'Design',
    items: ['Figma', 'UI/UX design', 'Responsive interface design', 'Visual hierarchy', 'Website layout and prototyping'],
  },
  {
    title: 'Website Management',
    items: ['Domain management', 'Hosting management', 'Website maintenance', 'Content updates', 'Technical troubleshooting'],
  },
];

export const experience = [
  {
    title: 'Web Developer',
    organization: 'Center for Molecular Design and Development',
    dates: 'June 2026-Present',
  },
  {
    title: 'UI/UX Designer and Front-End Lead',
    organization: 'InsuraMatch',
    dates: 'June 8-12, 2026',
  },
  {
    title: 'Secretary and Co-Founder',
    organization: 'Girls Who Code College Loop',
    dates: 'November 2024-Present',
  },
];

export const achievements = [
  'Second Place - InsuraMatch hackathon project',
  'Secretary and Co-Founder - Girls Who Code College Loop',
  "UA Little Rock Chancellor's List: Fall 2024, Spring 2025, Fall 2025, Spring 2026",
];

export const services = [
  'Website design and development',
  'Website redesign',
  'WordPress development',
  'Website maintenance and content updates',
];

export const values = [
  'Thoughtful design',
  'Responsive development',
  'Clear communication',
  'User-centered decisions',
  'Continuous learning',
];
