import PAST_ROLES from '@/data/experience'
import { Separator } from '@/components/ui/separator'

export default function Experience() {
  return (
    <div className="mb-16 rounded-base border-2 border-border bg-white px-4 py-2 text-sm font-base shadow-light transition-all dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark sm:text-base">
      <h2 className="mb-8 font-[family-name:var(--font-press-start)] text-xl font-heading underline underline-offset-8 dark:text-green-400 sm:text-2xl">
        Experience
      </h2>

      {PAST_ROLES.map((role, id) => {
        return (
          <>
            <div className="mb-2" key={id}>
              <h3 className="text-lg font-heading sm:text-xl">
                {role.role} @ {role.company}
              </h3>

              <p className="mb-4 mt-0.5 text-sm">
                {role.startDate} - {role.endDate}
              </p>
              <p>{role.description}</p>
            </div>
            {id < PAST_ROLES.length - 1 ? (
              <Separator className="my-2 mb-8 pt-4" />
            ) : null}
          </>
        )
      })}
    </div>
  )
}
