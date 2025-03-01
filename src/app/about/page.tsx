import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex max-w-[750px] flex-col items-center justify-start">
        <div className="mb-10 font-[family-name:var(--font-darker-grotesque)] text-base font-semibold tracking-wide sm:text-xl">
          <h1 className="mb-8 font-[family-name:var(--font-press-start)] text-2xl font-heading tracking-widest sm:text-4xl">
            Whoami
          </h1>
          <p>
            Hi, my name is{' '}
            <span className="font-bold italic">Shane Williams</span>. I am an
            experienced software engineer well versed in creating scalable
            solutions for you and and your business needs.
            <br />
            <br />I am a terminal fanatic that loves coding, solving problems,
            and making life easier for people. I’m all about smart, scalable
            solutions and always leveling up through learning. To me, teamwork
            and communication matter just as much as the code itself.
          </p>
        </div>

        <Skills />
        <div>
          <p>
            I spend my non-tech time chess ♟️, writing music 🎸, Olympic
            weightlifting 🏋️, and, of course, being terrorized/terrorizing my
            partner &amp; children; they are my world 🌎
          </p>
        </div>
      </div>
    </div>
  )
}
