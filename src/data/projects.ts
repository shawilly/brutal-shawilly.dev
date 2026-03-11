const PROJECTS: {
  name: string
  description: string
  technologies: string[]
  repoUrl: string
  liveLink?: string
  stars?: number
}[] = [
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
      'A straightforward React implementation providing access to SVG dev icons from devicon.dev, with customizable color, size, and styling.',
    technologies: ['TypeScript', 'React', 'SVG'],
    repoUrl: 'https://github.com/shawilly/react-simple-devicons',
    stars: 2,
  },
  {
    name: 'fallout.nvim',
    description:
      'A Fallout-inspired Neovim color scheme built in Lua.',
    technologies: ['Lua', 'Neovim'],
    repoUrl: 'https://github.com/shawilly/fallout.nvim',
    stars: 3,
  },
  {
    name: 'brutal-shawilly.dev',
    description:
      'This portfolio — a minimal neobrutal personal site built with Next.js, Tailwind, and React PDF.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    repoUrl: 'https://github.com/shawilly/brutal-shawilly.dev',
    liveLink: 'https://shawilly.dev',
    stars: 1,
  },
  {
    name: 'shell-quest',
    description:
      'Pirate-themed CLI learning game for kids (ages 3–10) that teaches real shell commands through a sandboxed Bubble Tea TUI. Single Go binary with SQLite progress tracking and 17 real shell commands across 3 difficulty tiers.',
    technologies: ['Go', 'Bubble Tea', 'SQLite', 'Lip Gloss'],
    repoUrl: 'https://github.com/shawilly/shell-quest',
  },
]

export default PROJECTS
