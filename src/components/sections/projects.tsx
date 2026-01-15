import PROJECTS from '@/data/projects'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Star } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className="mx-auto mb-16 w-full">
      <h2 className="mb-6 font-[family-name:var(--font-press-start)] text-xl font-heading dark:text-green-400 sm:text-2xl">
        Open Source
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <Link
            key={project.name}
            href={project.repoUrl}
            target="_blank"
            className="group"
          >
            <div className="h-full rounded-base border-2 border-border bg-white p-4 shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark dark:hover:shadow-none">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-heading text-base group-hover:text-mainAccent dark:group-hover:text-main sm:text-lg">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2">
                  {project.stars && (
                    <span className="flex items-center gap-1 text-sm text-mainAccent dark:text-main">
                      <Star className="h-4 w-4" />
                      {project.stars}
                    </span>
                  )}
                  <SiGithub className="h-5 w-5" />
                </div>
              </div>

              <p className="mb-3 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-base border border-border bg-bg px-2 py-0.5 text-xs dark:border-darkBorder dark:bg-darkBg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="https://github.com/shawilly"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm text-mainAccent hover:underline dark:text-main"
        >
          <SiGithub className="h-4 w-4" />
          View all repositories on GitHub
        </Link>
      </div>
    </div>
  )
}
