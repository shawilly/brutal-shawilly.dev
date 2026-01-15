import PAST_ROLES from '@/data/experience'
import Marquee from 'react-fast-marquee'
import { Separator } from '@/components/ui/separator'
import SKILLS from '@/data/skills'

const skills = SKILLS.flat()
  .map((skill) => skill.skills)
  .flat()
  .map((s) => s.icon)

export default function Experience() {
  return (
    <div className="mx-auto mb-16 w-full rounded-base border-2 border-border bg-white px-4 py-4 text-sm font-base shadow-light transition-all dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark sm:px-6 sm:text-base md:text-lg">
      <h2 className="shimmer-text mb-4 font-[family-name:var(--font-press-start)] text-xl font-heading underline-offset-8 sm:text-2xl">
        Experience
      </h2>

      <div className="w-full overflow-hidden">
        <Marquee
          className="mb-6 w-full max-w-full border-y-2 border-y-border bg-white py-3 font-base dark:border-darkBorder dark:border-y-darkBorder dark:bg-secondaryBlack sm:py-5"
          direction="left"
        >
          {skills.map((Icon) => (
            <div key={Icon.displayName} className="mr-5">
              <Icon />
            </div>
          ))}
        </Marquee>
      </div>

      {PAST_ROLES.map((role, id) => {
        return (
          <div key={id}>
            <div className="mb-4">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="text-lg font-heading sm:text-xl">
                  {role.role} @ {role.company}
                </h3>
                <span className="text-sm text-mainAccent dark:text-main">
                  {role.startDate} - {role.endDate}
                </span>
              </div>

              <p className="mt-2 font-[family-name:var(--font-darker-grotesque)] text-base font-semibold tracking-wide sm:text-lg">
                {role.description}
              </p>

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

              <ul className="mt-4 list-inside list-disc space-y-1 text-sm sm:text-base">
                {role.accomplishments.map((accomplishment, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {accomplishment}
                  </li>
                ))}
              </ul>
            </div>
            {id < PAST_ROLES.length - 1 ? (
              <Separator key={`${id}-separator`} className="my-8" />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
