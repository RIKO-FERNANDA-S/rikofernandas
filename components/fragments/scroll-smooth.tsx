"use client"
import ReactLenis from "lenis/react"

function scrollSmooth({children}: {children: any}) {
  return (
    <ReactLenis root>{children}</ReactLenis>
  )
}

export default scrollSmooth