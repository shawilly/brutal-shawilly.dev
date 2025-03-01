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
    <div className="mx-auto mb-16 w-full rounded-base border-2 border-border bg-white px-4 py-2 text-sm font-base shadow-light transition-all dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark sm:text-base md:text-lg lg:text-xl">
      <h2 className="mb-2 font-[family-name:var(--font-press-start)] text-xl font-heading underline-offset-8 dark:text-green-400 sm:text-2xl">
        Experience
      </h2>

      <div className="w-full overflow-hidden">
        <Marquee
          className="mb-4 w-full max-w-full border-y-2 border-y-border bg-white py-3 font-base dark:border-darkBorder dark:border-y-darkBorder dark:bg-secondaryBlack sm:py-5"
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
            <div className="mb-2">
              <h3 className="text-lg font-heading sm:text-xl">
                {role.role} @ {role.company}
              </h3>

              <p className="mb-4 mt-0.5 text-sm">
                {role.startDate} - {role.endDate}
              </p>
              <p className="font-[family-name:var(--font-darker-grotesque)] text-base font-semibold tracking-wide sm:text-xl">
                {role.description}
              </p>
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
