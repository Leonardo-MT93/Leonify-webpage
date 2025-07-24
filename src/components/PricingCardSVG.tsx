import type React from "react"
import type { SvgProps } from "../app/types"

export const PricingCardSvg: React.FC<SvgProps> = ({ cardNumber }) => {
  const gradients: string[] = ["#AC6AFF", "#FFC876", "#7ADB78"]
  const gradientId: string = `paint0_linear_pricing_${cardNumber}`
  const stopColor: string = gradients[cardNumber] || "#AC6AFF"
  
  return (
    <svg 
      width="100%" 
      height="100%" 
      preserveAspectRatio="none" 
      viewBox="0 0 384 450" 
      fill="none"
      className="absolute inset-0"
    >
      <path
        vectorEffect="non-scaling-stroke"
        d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V418C383 435.121 369.121 449 352 449H32C14.8792 449 1 435.121 1 418V32C1 14.8792 14.8792 1 32 1Z"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="2"
      />
      <path
        vectorEffect="non-scaling-stroke"
        d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V418C383 435.121 369.121 449 352 449H32C14.8792 449 1 435.121 1 418V32C1 14.8792 14.8792 1 32 1Z"
        stroke={`url(#${gradientId})`}
        strokeOpacity="0.85"
        strokeWidth="2"
      />
      <defs>
        <linearGradient id={gradientId} x1="192" y1="0" x2="192" y2="450" gradientUnits="userSpaceOnUse">
          <stop stopColor={stopColor} />
          <stop offset="0.562842" stopColor="#D633FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}