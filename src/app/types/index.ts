
export interface ServicesItem {
  id: string
  title: string
  text: string
  iconUrl: string
  light?: boolean
  color?: string
}

export interface PricingPlan {
  id: string
  title: string
  description: string
  price: string
  period: string
  features: string[]
  popular: boolean
  buttonText: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface SectionProps {
  className?: string
  id?: string
  crosses?: boolean
  crossesOffset?: string
  customPaddings?: string
  children: React.ReactNode
}

export interface HeadingProps {
  className?: string
  title?: string
  text?: string
  tag?: string
}

export interface TagLineProps {
  className?: string
  children: React.ReactNode
}

export interface SvgProps {
  cardNumber: number
}

export interface GradientLightProps {
  className?: string
}

export interface ArrowProps {
  className?: string
}

export interface PlusSvgProps {
  className?: string
}

export interface SectionSvgProps {
  crossesOffset?: string
}

export interface ClipPathProps {
  id?: string
}

export interface HeaderProps {
  className?: string
}

export interface NavigationItem {
  id: string
  title: string
  url: string
}

export interface LogoProps {
  className?: string
}
