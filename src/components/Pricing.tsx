"use client"

import Section from "./Section"
import Heading from "@/components/Heading"
import { GradientLight } from "./GradientLight"
import ClipPath from "./ClipPath"
import { PricingCardSvg } from "./PricingCardSVG"
import { Check } from "lucide-react"
import type { PricingPlan } from "../app/types"
import Button from "./Button"

const pricingPlans: PricingPlan[] = [
  {
    "id": "0",
    "title": "Automatización Básica",
    "description": "Ideal para pequeños negocios que inician con IA",
    "price": "299U$D",
    "period": "/mes",
    "features": [
      "1 agente de atención básico",
      "Automatización de hasta 3 procesos",
      "Chatbot para WhatsApp Web",
      "Soporte por email",
      "Reportes mensuales básicos",
      "Configuración inicial incluida"
    ],
    "popular": false,
    "buttonText": "Comenzar Ahora"
  },
  {
    "id": "1",
    "title": "Automatización Pro",
    "description": "Perfecto para empresas en crecimiento",
    "price": "699U$D",
    "period": "/mes",
    "features": [
      "Hasta 3 agentes especializados",
      "Automatización de hasta 8 procesos",
      "WhatsApp Business API completa",
      "Sistema de citas automatizado",
      "Agente de llamadas básico",
      "Integraciones con CRM",
      "Soporte prioritario",
      "Reportes semanales detallados"
    ],
    "popular": true,
    "buttonText": "Consulta Gratuita"
  },
  {
    "id": "2",
    "title": "Automatización Enterprise",
    "description": "Solución completa para grandes empresas",
    "price": "Personalizado",
    "period": "",
    "features": [
      "Agentes ilimitados y especializados",
      "Automatización completa de procesos",
      "Múltiples canales (WhatsApp, Web, Llamadas)",
      "Workflows personalizados con n8n",
      "Integraciones avanzadas",
      "Soporte 24/7 dedicado",
      "Analíticas avanzadas y BI",
      "Implementación y capacitación incluida"
    ],
    "popular": false,
    "buttonText": "Contactar Ventas"
  }
]

const Pricing = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, index: number): void => {
    const colors = ["rgba(172, 106, 255, 0.3)", "rgba(255, 200, 118, 0.3)", "rgba(122, 219, 120, 0.3)"]
    e.currentTarget.style.filter = `drop-shadow(0 0 20px ${colors[index]})`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.currentTarget.style.filter = "drop-shadow(0 0 0 transparent)"
  }

  const handleButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>, plan: PricingPlan, index: number): void => {
    if (!plan.popular) {
      const colors = ["#AC6AFF", "#FFC876", "#7ADB78"]
      e.currentTarget.style.borderColor = colors[index]
      e.currentTarget.style.color = colors[index]
    }
  }

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>, plan: PricingPlan): void => {
    if (!plan.popular) {
      e.currentTarget.style.borderColor = "#252134"
      e.currentTarget.style.color = "white"
    }
  }

  return (
    <Section id="precios" className="scroll-mt-16 lg:scroll-mt-0">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Elige Tu Plan Ideal"
          text="Encuentra la solución de automatización perfecta para tu negocio."
        />
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 xl:gap-12 mb-10 max-w-7xl mx-auto">
          {pricingPlans.map((plan: PricingPlan, index: number) => (
            <div
              className="block relative p-0.5 w-full max-w-[24rem] transition-all duration-300 flex-shrink-0"
              key={plan.id}
              style={{
                filter: "drop-shadow(0 0 0 transparent)",
                transition: "all 0.3s ease",
                minHeight: "28rem"
              }}
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
                <PricingCardSvg cardNumber={index} />
              </div>

              <div
                className="relative flex flex-col h-full p-8 lg:p-10"
                style={{
                  zIndex: 10,
                  clipPath: "url(#benefits)"
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" style={{ zIndex: 30 }}>
                    <div
                      style={{
                        backgroundColor: "#FFC876",
                        color: "#0E0C15",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div
                    style={{
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "600",
                      marginBottom: "8px",
                      zIndex: 20,
                      position: "relative",
                    }}
                  >
                    {plan.title}
                  </div>
                  <div
                    style={{
                      color: "#ADA8C3",
                      fontSize: "14px",
                      fontWeight: "300",
                      lineHeight: "1.5",
                      marginBottom: "16px",
                      zIndex: 20,
                      position: "relative",
                    }}
                  >
                    {plan.description}
                  </div>
                  <div className="flex items-baseline justify-center">
                    <div
                      style={{ color: "white", fontSize: "32px", fontWeight: "700", zIndex: 20, position: "relative" }}
                    >
                      {plan.price}
                    </div>
                    <div
                      style={{
                        color: "#ADA8C3",
                        fontSize: "14px",
                        marginLeft: "4px",
                        zIndex: 20,
                        position: "relative",
                      }}
                    >
                      {plan.period}
                    </div>
                  </div>
                </div>

                <div className="flex-1 mb-6">
                  <div style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    {plan.features.map((feature: string, featureIndex: number) => (
                      <div
                        key={featureIndex}
                        className="flex items-start"
                        style={{ marginBottom: "10px", zIndex: 20, position: "relative" }}
                      >
                        <Check
                          size={16}
                          style={{ color: "#7ADB78", marginRight: "10px", marginTop: "2px", flexShrink: 0 }}
                        />
                        <div style={{ color: "#CAC6DD", fontSize: "13px", lineHeight: "1.4" }}>{feature}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <button
                  style={{
                    width: "100%",
                    padding: "12px 24px",
                    backgroundColor: plan.popular ? "#FFC876" : "transparent",
                    color: plan.popular ? "#0E0C15" : "white",
                    border: plan.popular ? "none" : "1px solid #252134",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    zIndex: 20,
                    position: "relative",
                  }}
                  onMouseEnter={(e) => handleButtonMouseEnter(e, plan, index)}
                  onMouseLeave={(e) => handleButtonMouseLeave(e, plan)}
                >
                  {plan.buttonText}
                </button> */}
                <Button href="#contacto">
                  {plan.buttonText}
                </Button>
              </div>

              {plan.popular && <GradientLight />}

              <div
                className="absolute inset-0.5"
                style={{
                  backgroundColor: "#0E0C15",
                  zIndex: 2,
                  clipPath: "url(#benefits)"
                }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      background: `radial-gradient(circle at center, ${index === 0 ? "#AC6AFF" : index === 1 ? "#FFC876" : "#7ADB78"} 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Pricing