import { cn } from '@/lib/utils'

function Cloud() {
  return (
    <div className="absolute">
      <div className="relative h-[25px] w-[50px]">
        <div className="absolute h-[20px] w-[50px] rounded-full bg-white shadow-md" />
        <div className="absolute -top-[5px] left-[10px] h-[25px] w-[30px] rounded-full bg-white" />
      </div>
    </div>
  )
}

export function RandomClouds() {
  const numberOfClouds = 3
  const clouds = []
  const scale = ['75', '100', '85']

  for (let i = 0; i < numberOfClouds; i++) {
    const top = Math.random() * 80
    const left = Math.random() * 80
    const key = `cloud-${i}`

    clouds.push(
      <div
        key={key}
        className={cn('absolute', `scale-${scale[i]}`)}
        style={{ top: `${top}%`, left: `${left}%` }}
      >
        <Cloud />
      </div>,
    )
  }

  return <>{clouds}</>
}
