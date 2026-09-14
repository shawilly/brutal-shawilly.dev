export const NAME = 'Shane Williams'
export const TITLE = 'Lead Software Engineer'

export const CONTACT = {
  location: 'Ireland (Remote Worldwide)',
  email: 'shane@shawilly.dev',
  phone: '+353 83 362 6936',
  linkedin: 'https://linkedin.com/in/shanebarrywilliams',
  github: 'https://github.com/shawilly',
}

export const SUMMARY =
  "Lead Software Engineer with 7+ years building production systems. At ResourceKraft I lead a small engineering team on an enterprise IoT energy platform, covering architecture, engineering, and production ops, while working directly with the client on what gets built. Still hands-on day to day, but also responsible for the team's output and the client relationship. Previously at BioRender, building tools that supported 4M+ scientists."

export const SKILLS_SUMMARY: Record<string, string> = {
  'Languages & Frameworks':
    'TypeScript, JavaScript, Go, React, Next.js, Node.js, Express, Fastify',
  'Databases & Storage': 'PostgreSQL, MongoDB, MySQL, Redis, InfluxDB',
  'Cloud & DevOps': 'AWS, GCP, Docker, Nginx, Turborepo, Git, CI/CD',
  Specialized: 'MQTT, Keycloak, Grafana, Real-time Systems, IoT',
}

export const OPEN_SOURCE_PROJECTS: { name?: string; description: string }[] =
  [
    {
      name: 'react-simple-devicons',
      description:
        'React library providing SVG icons for developer tools and technologies',
    },
    {
      name: 'ponokai',
      description: 'Vim/Neovim color scheme with 10+ GitHub stars',
    },
    {
      name: 'shell-quest',
      description:
        'Pirate-themed kids CLI learning game in Go (Bubble Tea TUI, SQLite, sandboxed shell, 17 real commands)',
    },
    {
      name: 'kogarashi.nvim / treescape.nvim',
      description:
        'Original Neovim colorschemes with Treesitter, LSP, and lualine support',
    },
    {
      description:
        'Supported small businesses with cost-effective full-stack web solutions',
    },
  ]

export const EDUCATION: { school: string; details: string }[] = [
  {
    school: 'Atlantic Technological University',
    details: 'BSc (Honours) Medical Biotechnology',
  },
  {
    school: 'Algonquin College of Applied Arts and Technology',
    details: 'Advanced Diploma, Biotechnology',
  },
  {
    school: 'Algonquin College of Applied Arts and Technology',
    details: 'Advanced Diploma, Computer Science Engineering',
  },
]
