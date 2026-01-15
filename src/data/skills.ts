import {
  SiAmazon,
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastify,
  SiFishshell,
  SiGit,
  SiGithub,
  SiGo,
  SiGooglecloud,
  SiGrafana,
  SiHtml5,
  SiJavascript,
  SiKeycloak,
  SiLinux,
  SiLua,
  SiMacos,
  SiMongodb,
  SiMqtt,
  SiMysql,
  SiNeovim,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSass,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
  SiWezterm,
  type IconType,
} from '@icons-pack/react-simple-icons'

const SKILLS: {
  field: string
  skills: { skill: string; icon: IconType; description: string }[]
}[] = [
  {
    field: 'Frontend',
    skills: [
      {
        skill: 'html',
        icon: SiHtml5,
        description: 'Markup language for structuring web content.',
      },
      {
        skill: 'css',
        icon: SiCss3,
        description: 'Stylesheet language for designing web pages.',
      },
      {
        skill: 'javascript',
        icon: SiJavascript,
        description: 'Versatile programming language for web development.',
      },
      {
        skill: 'typescript',
        icon: SiTypescript,
        description: 'Strongly typed superset of JavaScript for scalable apps.',
      },
      {
        skill: 'react',
        icon: SiReact,
        description: 'Library for building interactive user interfaces.',
      },
      {
        skill: 'sass',
        icon: SiSass,
        description: 'CSS preprocessor for enhanced styling capabilities.',
      },
      {
        skill: 'tailwind',
        icon: SiTailwindcss,
        description: 'Utility-first CSS framework for rapid UI development.',
      },
      {
        skill: 'nextjs',
        icon: SiNextdotjs,
        description:
          'React framework for server-side rendering and static site generation.',
      },
      {
        skill: 'expo',
        icon: SiExpo,
        description: 'Framework for building React Native apps efficiently.',
      },
      {
        skill: 'grafana',
        icon: SiGrafana,
        description:
          'Platform for monitoring and visualizing time-series data.',
      },
    ],
  },
  {
    field: 'Backend',
    skills: [
      {
        skill: 'nodejs',
        icon: SiNodedotjs,
        description:
          'JavaScript runtime for building scalable backend applications.',
      },
      {
        skill: 'go',
        icon: SiGo,
        description:
          'Efficient, statically typed language for backend and systems programming.',
      },
      {
        skill: 'redis',
        icon: SiRedis,
        description: 'In-memory data store for caching and message brokering.',
      },
      {
        skill: 'postgresql',
        icon: SiPostgresql,
        description: 'Powerful open-source relational database.',
      },
      {
        skill: 'mongodb',
        icon: SiMongodb,
        description: 'NoSQL database for scalable and flexible data storage.',
      },
      {
        skill: 'mysql',
        icon: SiMysql,
        description: 'Popular relational database management system.',
      },
      {
        skill: 'nginx',
        icon: SiNginx,
        description: 'High-performance web server and reverse proxy.',
      },
      {
        skill: 'aws',
        icon: SiAmazon,
        description: 'Cloud computing platform for scalable applications.',
      },
      {
        skill: 'keycloak',
        icon: SiKeycloak,
        description: 'Open-source identity and access management solution.',
      },
      {
        skill: 'mqtt',
        icon: SiMqtt,
        description: 'Lightweight messaging protocol for IoT devices.',
      },
      {
        skill: 'express',
        icon: SiExpress,
        description: 'Minimalist web framework for Node.js applications.',
      },
      {
        skill: 'fastify',
        icon: SiFastify,
        description: 'High-performance web framework for Node.js.',
      },
      {
        skill: 'google cloud platform',
        icon: SiGooglecloud,
        description: 'Cloud computing services for scalable applications.',
      },
    ],
  },
  {
    field: 'DevOps & Tools',
    skills: [
      {
        skill: 'docker',
        icon: SiDocker,
        description:
          'Platform for developing, shipping, and running containers.',
      },
      {
        skill: 'turborepo',
        icon: SiTurborepo,
        description: 'High-performance monorepo build system.',
      },
      {
        skill: 'git',
        icon: SiGit,
        description: 'Distributed version control system.',
      },
      {
        skill: 'github',
        icon: SiGithub,
        description: 'Platform for hosting and collaborating on code.',
      },
      {
        skill: 'neovim',
        icon: SiNeovim,
        description: 'Extensible and modernized version of Vim.',
      },
      {
        skill: 'linux',
        icon: SiLinux,
        description:
          'Open-source operating system used in servers and development environments.',
      },
    ],
  },
]

export default SKILLS
