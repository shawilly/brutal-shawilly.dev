const PROJECTS: {
  name: string
  description: string
  technologies: string[]
  repoUrl: string
  liveLink?: string
  stars?: number
}[] = [
  {
    name: 'dev-portfolio',
    description:
      'Full-stack portfolio application with Vite, Node.js backend, Three.js 3D graphics, TypeScript, React-Redux, and React-Router.',
    technologies: ['TypeScript', 'React', 'Three.js', 'Node.js', 'Vite'],
    repoUrl: 'https://github.com/shawilly/dev-portfolio',
  },
  {
    name: 'ponokai',
    description:
      'A pastelly Monokai-esque color scheme for Vim and Neovim. Easy on the eyes with vibrant syntax highlighting.',
    technologies: ['Vim Script', 'Lua'],
    repoUrl: 'https://github.com/shawilly/ponokai',
    stars: 10,
  },
  {
    name: 'react-simple-devicons',
    description:
      'React library providing SVG developer icons with customizable color, size, and styling options.',
    technologies: ['TypeScript', 'React', 'SVG'],
    repoUrl: 'https://github.com/shawilly/react-simple-devicons',
    stars: 2,
  },
  {
    name: 'zendesk-authorization-base64-encoder',
    description:
      'Utility to simplify basic authentication string encoding for Zendesk API integration in low-code/no-code platforms.',
    technologies: ['TypeScript', 'Node.js'],
    repoUrl: 'https://github.com/shawilly/zendesk-authorization-base64-encoder',
  },
]

export default PROJECTS
