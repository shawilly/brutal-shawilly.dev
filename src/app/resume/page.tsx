import Link from 'next/link'
import { Download, Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Button } from '@/components/ui/button'
import PAST_ROLES from '@/data/experience'
import {
  NAME,
  TITLE,
  CONTACT,
  SUMMARY,
  SKILLS_SUMMARY,
  OPEN_SOURCE_PROJECTS,
  EDUCATION,
} from '@/data/resume'

const cardClassName =
  'w-full rounded-base border-2 border-border bg-white p-6 shadow-light dark:border-darkBorder dark:bg-secondaryBlack dark:shadow-dark sm:p-8'

export default function Resume() {
  return (
    <div className="flex w-full flex-col items-center px-4">
      <div className="flex w-full max-w-3xl flex-col gap-6 lg:max-w-4xl">
        {/* Header */}
        <div className={cardClassName}>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {NAME}
              </h1>
              <p className="mt-1 text-lg font-semibold text-mainAccent dark:text-main">
                {TITLE}
              </p>
            </div>
            <Link href="/shane-williams-cv.pdf" target="_blank">
              <Button className="cursor-pointer rounded-base border-2 border-border bg-main px-6 py-3 text-white shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:shadow-dark dark:hover:shadow-none">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-80">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {CONTACT.location}
            </span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-mainAccent dark:hover:text-main"
            >
              <Mail className="h-4 w-4" />
              {CONTACT.email}
            </a>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {CONTACT.phone}
            </span>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-mainAccent dark:hover:text-main"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-mainAccent dark:hover:text-main"
            >
              <SiGithub className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className={cardClassName}>
          <h2 className="mb-3 text-lg font-bold uppercase tracking-wide text-mainAccent dark:text-main">
            Professional Summary
          </h2>
          <p className="leading-relaxed opacity-90">{SUMMARY}</p>
        </div>

        {/* Skills */}
        <div className={cardClassName}>
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wide text-mainAccent dark:text-main">
            Technical Skills
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(SKILLS_SUMMARY).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="font-semibold">{category}</h3>
                <p className="mt-1 text-sm opacity-80">{skillList}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className={cardClassName}>
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wide text-mainAccent dark:text-main">
            Professional Experience
          </h2>
          <div className="flex flex-col gap-8">
            {PAST_ROLES.filter(
              (role) => role.company !== 'Open Source & Freelance',
            ).map((role, index) => (
              <div key={index}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-bold">{role.company}</h3>
                    <p className="text-sm font-semibold text-mainAccent dark:text-main">
                      {role.role}
                    </p>
                  </div>
                  <span className="text-sm opacity-70">
                    {role.startDate} – {role.endDate}
                  </span>
                </div>
                <p className="mt-2 text-sm opacity-90">{role.description}</p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm">
                  {role.accomplishments.map((accomplishment, i) => (
                    <li key={i} className="leading-relaxed">
                      {accomplishment}
                    </li>
                  ))}
                </ul>
                {role.technologies && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-base border border-border bg-bg px-2 py-0.5 text-xs dark:border-darkBorder dark:bg-darkBg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Open Source & Projects */}
        <div className={cardClassName}>
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wide text-mainAccent dark:text-main">
            Open Source & Side Projects
          </h2>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {OPEN_SOURCE_PROJECTS.map((project, i) => (
              <li key={i} className="leading-relaxed">
                {project.name && (
                  <span className="font-semibold">{project.name} – </span>
                )}
                {project.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className={cardClassName}>
          <h2 className="mb-4 text-lg font-bold uppercase tracking-wide text-mainAccent dark:text-main">
            Education
          </h2>
          <div className="flex flex-col gap-3">
            {EDUCATION.map((edu, i) => (
              <div key={i}>
                <p className="font-semibold">{edu.school}</p>
                <p className="text-sm opacity-80">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
