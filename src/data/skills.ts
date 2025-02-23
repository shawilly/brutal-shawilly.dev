import {
  SiAmazon,
  SiCss3,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFastify,
  SiFishshell,
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
  SiTypescript,
  SiWezterm,
  type IconType,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'tyopescript', icon: SiTypescript },
        { skill: 'react', icon: SiReact },
        { skill: 'sass', icon: SiSass },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'expo', icon: SiExpo },
        {
          skill: 'keycloak',
          icon: SiKeycloak,
        },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'go',
          icon: SiGo,
        },
        {
          skill: 'redis',
          icon: SiRedis,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        },
        {
          skill: 'mongodb',
          icon: SiMongodb,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'nginx',
          icon: SiNginx,
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
        {
          skill: 'aws',
          icon: SiAmazon,
        },
        {
          skill: 'grafana',
          icon: SiGrafana,
        },
        {
          skill: 'mqtt',
          icon: SiMqtt,
        },
        {
          skill: 'express',
          icon: SiExpress,
        },
        {
          skill: 'fastify',
          icon: SiFastify,
        },
        {
          skill: 'google cloud platform',
          icon: SiGooglecloud,
        },
      ],
    },
    {
      field: 'Setup',
      skills: [
        {
          skill: 'neovim',
          icon: SiNeovim,
        },
        {
          skill: 'wezterm',
          icon: SiWezterm,
        },
        {
          skill: 'fish',
          icon: SiFishshell,
        },
        {
          skill: 'lua',
          icon: SiLua,
        },
        {
          skill: 'macos',
          icon: SiMacos,
        },
        {
          skill: 'linux',
          icon: SiLinux,
        },
      ],
    },
  ]

export default SKILLS
