const PAST_ROLES: {
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
  accomplishments: string[]
  technologies?: string[]
}[] = [
  {
    company: 'ResourceKraft & Full Stack Energy',
    role: 'Lead Software Engineer',
    description:
      'Leading a small engineering team on an enterprise IoT energy management platform for geothermal and EV charging infrastructure, sold to commercial clients at six-figure annual contract values. I own the architecture, the delivery, and production ops, and work directly with the client on what gets built and when.',
    startDate: 'April 2024',
    endDate: 'Present',
    technologies: [
      'TypeScript',
      'Go',
      'React',
      'Next.js',
      'Fastify',
      'PostgreSQL',
      'InfluxDB',
      'MQTT',
      'Docker',
      'Keycloak',
      'Grafana',
    ],
    accomplishments: [
      'Lead a team of 2 developers, handling sprint planning, code review, and technical mentorship',
      'Work directly with the client as the main technical point of contact, turning their priorities into actual architecture and roadmap decisions',
      'Own full-stack delivery of the platform (Next.js apps, Go microservices, infrastructure), sold to commercial clients at six-figure annual contract values',
      'Architected Go microservices for high-throughput MQTT/Sparkplug B ingestion and alert processing, plus a TypeScript/Fastify API handling complex time-series queries',
      'Run production across staging, demo, and prod environments, and drive capacity and staffing conversations directly with the business',
      'Optimized EV smart charging algorithms, cutting energy waste by 15%',
    ],
  },
  {
    company: 'BioRender',
    role: 'Software Engineer',
    description:
      'Full-stack development for a leading scientific illustration platform. Built internal tools and microservices to support rapid growth from startup to enterprise scale.',
    startDate: 'January 2021',
    endDate: 'June 2024',
    technologies: [
      'TypeScript',
      'React',
      'Node.js',
      'GCP',
      'MongoDB',
      'Redis',
      'Express',
    ],
    accomplishments: [
      'Developed 40+ internal tools and features, streamlining operations across multiple teams',
      'Automated core business processes, reducing manual workload by 30%',
      'Implemented microservices using GCP and RESTful APIs, enhancing system scalability',
      'Collaborated with cross-functional teams to ship features used by 4M+ scientists',
    ],
  },
  {
    company: 'Open Source & Freelance',
    role: 'Software Engineer',
    description:
      'Contributing to open-source projects and building solutions for small businesses. Creating developer tools and maintaining personal projects.',
    startDate: 'January 2021',
    endDate: 'Present',
    technologies: ['TypeScript', 'React', 'Vim Script', 'Lua', 'Node.js'],
    accomplishments: [
      'Created react-simple-devicons - React library for SVG developer icons',
      'Published multiple Neovim colorschemes (ponokai, kogarashi.nvim, treescape.nvim, fallout.nvim) with combined 10+ GitHub stars',
      'Built shell-quest - pirate-themed CLI learning game for kids using Go and Bubble Tea TUI',
      'Supported small businesses with cost-effective web solutions',
    ],
  },
  {
    company: 'Innovapost',
    role: 'Technical Support Analyst',
    description:
      'Technical support and automation for a large enterprise client in the Ottawa area, including scripted tooling for team workflows and night-shift French-language support.',
    startDate: 'May 2013',
    endDate: 'June 2015',
    technologies: ['JavaScript', 'MySQL'],
    accomplishments: [
      'Wrote JavaScript and MySQL scripts to automate team workflows and handle data',
      'Primary French-speaking agent on night shifts for a large client base',
      'Ran outage mapping and issue trend studies, and reported findings to management',
    ],
  },
]

export default PAST_ROLES
