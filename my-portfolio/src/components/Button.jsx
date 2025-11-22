import React from 'react'

export default function Button({height,width,className,children}) {
  return (
    <button className={`btn  h-[${height}px] w-[${width}px] ${className}`}>{children}</button>
  )
}
