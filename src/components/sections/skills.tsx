import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import SKILLS from '@/data/skills'

export default function Skills() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 font-[family-name:var(--font-press-start)] text-xl font-heading underline underline-offset-8 dark:text-green-400 sm:text-2xl">
        Skills
      </h2>

      {SKILLS.map((item, id) => {
        return (
          <div key={id}>
            <h3 className="mb-4 text-lg font-heading sm:text-xl">
              {item.field}
            </h3>

            <div className="mb-10 flex flex-wrap gap-5">
              {item.skills.map((skill, id) => {
                return (
                  <Popover key={id}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <PopoverTrigger asChild>
                            <div className="cursor-pointer rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-[#eee] dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base">
                              <skill.icon
                                className="h-8 w-8"
                                title=""
                                color="default"
                              />
                            </div>
                          </PopoverTrigger>
                        </TooltipTrigger>
                        <TooltipContent className="rounded-lg p-2 text-sm shadow-md">
                          {skill.skill}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <PopoverContent className="text-mtext w-80">
                      <div className="text-secondaryBlack">
                        <span className="text-lg font-bold underline">
                          {skill.skill}
                        </span>
                        : {skill.description}
                      </div>
                    </PopoverContent>
                  </Popover>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
