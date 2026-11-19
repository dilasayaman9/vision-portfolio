import wireframeDesktop from '../assets/images/projects/arkballoonsat/wireframe-desktop.png';
import wireframePhone from '../assets/images/projects/arkballoonsat/wireframe-phone.png';
import designDesktop from '../assets/images/projects/arkballoonsat/design-desktop.png';
import designPhone from '../assets/images/projects/arkballoonsat/design-phone.png';
import homeDesktop from '../assets/images/projects/arkballoonsat/wordpress-home-desktop.jpg';
import homePhone from '../assets/images/projects/arkballoonsat/wordpress-home-phone.jpg';
import programCards from '../assets/images/projects/arkballoonsat/wordpress-programs.jpg';
import footer from '../assets/images/projects/arkballoonsat/wordpress-footer.jpg';
import resources from '../assets/images/projects/arkballoonsat/wordpress-resources.jpg';
import requestPage from '../assets/images/projects/arkballoonsat/wordpress-request.jpg';

const desktopHome = {
  image: homeDesktop,
  imageAlt: 'ARKBalloonSat desktop homepage with the main navigation, a balloon launch photo, and a View Programs button',
  imageCaption: 'WordPress homepage on desktop. The shared header gives visitors direct access to programs, missions, resources, and Contact.',
  imageSize: [1250, 782],
};

export const arkBalloonSat = {
  slug: 'arkballoonsat-website',
  title: 'ARKBalloonSat Website',
  fullTitle: 'ARKBalloonSat: From Shared Wireframes to WordPress',
  context: 'University Client Project',
  role: 'WordPress Development & Collaborative Wireframing',
  dates: 'August–November 2026',
  team: 'Dilasa Yaman and Kylie Colter',
  tools: 'Figma and WordPress',
  showOnHome: false,
  ...desktopHome,
  imageCaption: 'ARKBalloonSat development homepage in WordPress.',
  description:
    'Developing a responsive WordPress website to help teachers and students explore balloon programs, find resources, and request a workshop or launch.',
  intro:
    'ARKBalloonSat needed a website where teachers and students could learn about its balloon programs, explore missions and resources, and find a way to request a workshop or launch. I worked with Kylie Colter to plan the experience and build it in WordPress, with my main focus on development, reusable patterns, and mobile layouts.',
  sections: [
    {
      title: 'What visitors came to do',
      paragraphs: [
        'The site serves teachers, students, and anyone curious about ballooning. From the homepage, visitors can choose the high-altitude or pico balloon program and then explore mission records or find teaching resources. Teachers and group organizers can reach the workshop or launch request from the homepage or Contact page.',
      ],
    },
    {
      title: 'My role and our collaboration',
      paragraphs: [
        'I developed most of the WordPress pages, built reusable patterns for adding content, and created a shared navigation and footer. I also adapted the pages for phones, resolved layout and template issues, and checked links across the site.',
        'Kylie led the logo and primary visual design choices. We worked together on wireframes, selected the theme and typography together, and collaborated on Flight Missions, Resources, and Contact.',
      ],
    },
    {
      title: 'Planning the homepage in shared wireframes',
      paragraphs: [
        'Kylie and I used desktop and phone wireframes to decide where visitors would first encounter the programs and missions. We mapped out the navigation and the main actions before developing the pages.',
        'Select a preview to open the full image.',
      ],
      figures: [
        {
          image: wireframeDesktop,
          imageAlt: 'Early desktop wireframe with a balloon photo, two orange action buttons, and gray program placeholders',
          imageCaption: 'Early desktop wireframe. The hero introduces the programs and missions, with space for program summaries below.',
          imageSize: [1104, 3200],
          variant: 'frame-desktop',
          fullImageLabel: 'Open full desktop wireframe',
        },
        {
          image: wireframePhone,
          imageAlt: 'Early phone wireframe with a compact header, gray image placeholder, and stacked action buttons',
          imageCaption: 'Early phone wireframe. The layout stacks the main actions around the hero.',
          imageSize: [402, 2637],
          variant: 'frame-phone',
          fullImageLabel: 'Open full phone wireframe',
        },
      ],
    },
    {
      title: 'Refining the homepage design',
      paragraphs: [
        'In the latest Figma design, View Programs became the primary homepage action. The desktop design places the two program cards side by side, while the phone design uses a compact menu and a single-column layout.',
      ],
      figures: [
        {
          image: designDesktop,
          imageAlt: 'Figma desktop homepage design with a balloon launch hero and two photo-led program cards',
          imageCaption: 'Latest desktop design in Figma. The hero leads into a side-by-side overview of the two programs.',
          imageSize: [1210, 3200],
          variant: 'frame-desktop',
          fullImageLabel: 'Open full desktop homepage design',
        },
        {
          image: designPhone,
          imageAlt: 'Figma phone homepage design with a compact menu, balloon launch hero, and View Programs action',
          imageCaption: 'Latest phone design in Figma. The hero and primary action fit a narrow layout.',
          imageSize: [402, 5560],
          variant: 'frame-phone',
          fullImageLabel: 'Open full phone homepage design',
        },
      ],
    },
    {
      title: 'Building the responsive WordPress site',
      paragraphs: [
        'We started with the Space Exploration theme. I replaced stock content with project material, adapted the theme layouts, and used reusable WordPress patterns to keep recurring content sections consistent.',
        'I kept the main navigation and footer shared across pages. On phones, the header collapses into a menu and the program cards stack so visitors can read each description before choosing a program.',
      ],
      figures: [
        {
          ...desktopHome,
          variant: 'evidence-desktop',
          fullImageLabel: 'Open WordPress desktop homepage screenshot',
        },
        {
          image: homePhone,
          imageAlt: 'WordPress homepage on a phone with a collapsed menu, View Programs button, and the start of a stacked program card',
          imageCaption: 'WordPress homepage on a phone. The menu collapses and the program cards stack below the hero.',
          imageSize: [360, 748],
          variant: 'evidence-phone',
          fullImageLabel: 'Open WordPress phone homepage screenshot',
        },
        {
          image: programCards,
          imageAlt: 'WordPress program cards titled Explore High-Altitude Balloons and Explore Pico Balloons with short descriptions',
          imageCaption: 'WordPress program cards. Each description helps visitors choose which program to explore.',
          imageSize: [1119, 261],
          fullImageLabel: 'Open WordPress program cards screenshot',
        },
        {
          image: footer,
          imageAlt: 'Shared WordPress footer with columns for quick links, community partners, and resources',
          imageCaption: 'Shared WordPress footer. Visitors can reach teacher materials, partner organizations, and the workshop or launch request from across the site.',
          imageSize: [1165, 573],
          fullImageLabel: 'Open WordPress footer screenshot',
        },
      ],
    },
    {
      title: 'Responding to client feedback',
      paragraphs: [
        'The client liked the theme and asked us to make key organizations and UA Little Rock resources easier to find. The Resources page now highlights partners such as the Arkansas Space Grant Consortium and UA Little Rock’s Donaghey College of STEM.',
        'The client also asked us to add a form to the Contact page. Contact now has a general message form and a link to a dedicated workshop or launch request page, which embeds a Google Form.',
      ],
      figures: [
        {
          image: resources,
          imageAlt: 'WordPress Resources page acknowledgments for the Arkansas Space Grant Consortium and UA Little Rock DCSTEM',
          imageCaption: 'WordPress Resources page. The Acknowledgments section links visitors to organizations that support the program.',
          imageSize: [1103, 549],
          fullImageLabel: 'Open WordPress Resources screenshot',
        },
        {
          image: requestPage,
          imageAlt: 'WordPress workshop or launch request page introducing the request process above the embedded form',
          imageCaption: 'WordPress request page. The page tells teachers and group organizers what to expect before they complete the form.',
          imageSize: [1103, 489],
          fullImageLabel: 'Open WordPress request page screenshot',
        },
      ],
    },
    {
      title: 'Current status',
      paragraphs: [
        'The development site is available to browse, including the responsive program pages, mission records, resources, and request flow. Our project timeline runs from August through November 2026.',
      ],
    },
  ],
  links: [
    {
      label: 'View Development Website',
      href: 'https://web-projects.net/balloon-sat/',
      note: 'Currently hosted at a WordPress development URL. The website will be transferred to a client-owned domain after the client purchases the domain.',
    },
    {
      label: 'View Wireframes & Design',
      href: 'https://www.figma.com/design/3bspXKh6atqn5qg8dmeTXP/ARKBalloonSat---Wireframe?node-id=55-4',
    },
  ],
};
