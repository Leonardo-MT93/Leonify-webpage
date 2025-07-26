import Section from "./Section"
import Heading from "./Heading"
import { GradientLight } from "./GradientLight"
import ClipPath from "./ClipPath"
import { Zap, Bot, MessageCircle, Calendar, Phone, Puzzle } from 'lucide-react'
import type { ServicesItem } from "../app/types"

const services: ServicesItem[] = [
  {
    id: "0",
    title: "Elimina Tareas Repetitivas",
    text: "Automatizamos procesos manuales que consumen tiempo  valioso de tu equipo, liberándolos para tareas estratégicas que realmente importan.",
    iconUrl: "Zap",
  },
  {
    id: "1",
    title: "Atención Cliente Inteligente",
    text: "Agentes de IA que responden consultas, resuelven problemas y brindan soporte a tus clientes las 24 horas, los 7 días de la semana.",
    iconUrl: "Bot",
    light: true,
  },
  {
    id: "2",
    title: "Conecta Por WhatsApp",
    text: "Chatbots inteligentes para WhatsApp que gestionan consultas, procesan pedidos y mantienen conversaciones naturales con tus clientes.",
    iconUrl: "MessageCircle",
  },
  {
    id: "3",
    title: "Agenda Automática",
    text: "Automatiza la programación de citas, envía recordatorios y gestiona calendarios sin intervención manual, reduciendo cancelaciones.",
    iconUrl: "Calendar",
    light: true,
  },
  {
    id: "4",
    title: "Gestiona Llamadas",
    text: "Agentes de voz que atienden llamadas, califican leads, agendan citas y derivan consultas complejas al equipo humano apropiado.",
    iconUrl: "Phone",
  },
  {
    id: "5",
    title: "Soluciones a Medida",
    text: "Desarrollamos workflows únicos con n8n que conectan todas tus herramientas y automatizan procesos específicos de tu industria.",
    iconUrl: "Puzzle",
  },
]

const iconMap = {
  Zap,
  Bot,
  MessageCircle,
  Calendar,
  Phone,
  Puzzle,
}

const cardColors = ["#00D4FF", "#FF6B6B", "#9B59B6", "#F39C12", "#2ECC71", "#E74C3C"]

const Services = () => {
  return (
    <Section id="servicios" className="scroll-mt-16 lg:scroll-mt-0">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="¿Por qué elegir la IA para hacer crecer tu negocio?" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-10 max-w-7xl mx-auto">
          {services.map((item, index) => {
            const IconComponent = iconMap[item.iconUrl as keyof typeof iconMap]
            const iconColor = cardColors[index % cardColors.length]
            
            return (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full max-w-sm mx-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                key={item.id}
              >
                <div className="absolute inset-0 pointer-events-none">
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
                      stroke={`url(#gradient-${index})`}
                      strokeOpacity="0.85"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="192" y1="0" x2="192" y2="450" gradientUnits="userSpaceOnUse">
                        <stop stopColor={iconColor} />
                        <stop offset="0.562842" stopColor="#D633FF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="relative flex flex-col min-h-[22rem] p-6 lg:p-[2.4rem]" style={{ zIndex: 10 }}>
                  <div
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "16px",
                      lineHeight: "1.5",
                      zIndex: 20,
                      position: "relative",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      color: "#ADA8C3",
                      fontSize: "14px",
                      fontWeight: "300",
                      lineHeight: "1.6",
                      marginBottom: "24px",
                      zIndex: 20,
                      position: "relative",
                    }}
                  >
                    {item.text}
                  </div>
                  <div className="flex items-center mt-auto" style={{ zIndex: 20, position: "relative" }}>
                    {IconComponent && (
                      <IconComponent 
                        size={48} 
                        color={iconColor}
                        strokeWidth={1.5}
                      />
                    )}
                    <div
                      style={{
                        marginLeft: "auto",
                        color: iconColor,
                        fontSize: "12px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        zIndex: 20,
                        position: "relative",
                      }}
                    >
                      VER MÁS
                    </div>
                  </div>
                </div>
                {item.light && <GradientLight />}
                <div
                  className="absolute inset-0.5"
                  style={{ backgroundColor: "#0E0C15", clipPath: "url(#benefits)", zIndex: 1 }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    <img
                      src="/placeholder.svg?height=362&width=380"
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <ClipPath />
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Services