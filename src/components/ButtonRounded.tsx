import React from 'react'

interface ButtonRoundedProps {
  className?: string
  href?: string
  onClick?: () => void
  children: React.ReactNode
  px?: string
  variant?: 'gradient' | 'outline' | 'solid'
  type?: 'button' | 'submit' | 'reset'
}

const ButtonRounded: React.FC<ButtonRoundedProps> = ({
  className,
  href,
  onClick,
  children,
  px,
  variant = 'gradient',
  type = 'button'
}) => {
  const baseClasses = `button relative inline-flex items-center justify-center h-11 rounded-lg transition-all duration-300 ${
    px || "px-7"
  } text-n-1 hover:text-color-1 ${className || ""}`
 
  const variantClasses = {
    gradient: 'bg-gradient-to-r from-color-1 via-color-2 to-color-4 hover:shadow-lg hover:shadow-color-1/25 hover:scale-105 hover:brightness-110',
    outline: 'relative overflow-hidden p-[2px] hover:shadow-md hover:shadow-color-1/20',
    solid: 'bg-color-1 hover:bg-color-1/90 hover:shadow-lg hover:shadow-color-1/25 hover:brightness-110'
  }
 
  const classes = `${baseClasses} ${variantClasses[variant]}`
 
  const renderButton = () => (
    variant === 'outline' ? (
      <button
        className={`group ${baseClasses} ${variantClasses[variant]} bg-gradient-to-r from-color-1 via-color-2 to-color-4`}
        onClick={onClick}
        type={type}
      >
        <div className="relative bg-n-8 hover:bg-n-7 rounded-[calc(0.5rem-2px)] px-7 h-[calc(44px-4px)] flex items-center justify-center transition-all duration-300 group-hover:bg-n-7">
          <span className="relative z-10 transition-colors duration-300">{children}</span>
        </div>
      </button>
    ) : (
      <button className={classes} onClick={onClick} type={type}>
        <span className="relative z-10">{children}</span>
      </button>
    )
  )
 
  const renderLink = () => (
    variant === 'outline' ? (
      <a
        href={href}
        className={`group ${baseClasses} ${variantClasses[variant]} bg-gradient-to-r from-color-1 via-color-2 to-color-4`}
      >
        <div className="relative bg-n-8 hover:bg-n-7 rounded-[calc(0.5rem-2px)] px-7 h-[calc(44px-4px)] flex items-center justify-center transition-colors">
          <span className="relative z-10">{children}</span>
        </div>
      </a>
    ) : (
      <a href={href} className={classes}>
        <span className="relative z-10">{children}</span>
      </a>
    )
  )
 
  return href ? renderLink() : renderButton()
}

export default ButtonRounded