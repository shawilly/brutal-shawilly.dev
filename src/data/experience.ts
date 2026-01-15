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
    role: 'Senior Full-Stack Software Engineer',
    description:
      'Architecting and developing enterprise IoT energy management platforms. Building real-time monitoring systems for geothermal and EV charging infrastructure using TypeScript, Go, and modern cloud technologies.',
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
      'Architected full-stack IoT monitoring platform with real-time data visualization using Grafana and InfluxDB',
      'Built Go microservices for high-throughput alert processing and MQTT message handling',
      'Developed TypeScript/Fastify API with complex PostgreSQL queries for time-series energy data',
      'Implemented enterprise auth with Keycloak SSO across multiple applications',
      'Optimized EV smart charging algorithms, reducing energy waste by 15%',
      'Set up Turborepo monorepo with shared packages for consistent code across apps',
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
      'Collaborated with cross-functional teams to ship features used by 25M+ scientists',
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
      'Developed ponokai - Vim/Neovim color scheme with 10+ stars on GitHub',
      'Built full-stack portfolio template with Three.js, React-Redux, and TypeScript',
      'Supported 10+ small businesses with cost-effective web solutions',
    ],
  },
]

export default PAST_ROLES
