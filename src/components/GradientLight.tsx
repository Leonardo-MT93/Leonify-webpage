import type React from "react"
import type { GradientLightProps } from "../app/types"

export const GradientLight: React.FC<GradientLightProps> = ({ className }) => {
  return (
    <div
      className={`absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none ${className || ""}`}
    />
  )
}
