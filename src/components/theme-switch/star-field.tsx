import React from 'react'

const StarField = ({ density = 600, width = 500, height = 500 }) => {
  const stars = Array.from({ length: density }, (_, i) => {
    const top = Math.random() * height
    const left = Math.random() * width
    return (
      <div
        key={i}
        className="absolute h-[2px] w-[2px] rounded-full bg-white transition-all dark:opacity-0"
        style={{ top: `${top}px`, left: `${left}px` }}
      />
    )
  })

  return <>{stars}</>
}

export default StarField
