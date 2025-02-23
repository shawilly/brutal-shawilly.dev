'use client'

import TESTIMONIALS from '@/data/testimonial'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function Testimonials() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 font-[family-name:var(--font-press-start)] text-xl font-heading underline underline-offset-8 dark:text-pink-400 sm:text-2xl">
        Testimonials
      </h2>

      <div className="space-y-8">
        {TESTIMONIALS.map((testimonial, id) => (
          <div
            key={id}
            className="rounded-base border-2 border-border bg-white px-4 py-2 text-sm font-base shadow-light transition-all dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark sm:text-base"
          >
            <p className="text-lg italic">
              &quot;{testimonial.testimonial}&quot;
            </p>

            <div className="mt-4 flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div>
                <h3 className="text-base font-semibold">{testimonial.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {testimonial.designation} @ {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
