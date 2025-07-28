"use client"

import { useState } from "react"
import Section from "./Section"
import Heading from "./Heading"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { FAQItem } from "../app/types"
import Button from "./Button"

const faqData: FAQItem[] = [
  {
    id: "0",
    question: "¿Cuánto tiempo toma implementar la automatización?",
    answer: "El tiempo de implementación varía según la complejidad del proyecto. Para automatizaciones básicas, entre 1-2 semanas. Para soluciones empresariales completas, entre 3-6 semanas. Siempre comenzamos con una auditoría gratuita para definir tiempos exactos."
  },
  {
    id: "1",
    question: "¿Los agentes de IA pueden reemplazar completamente a mi equipo humano?",
    answer: "No, nuestros agentes de IA están diseñados para complementar y potenciar a tu equipo humano, no reemplazarlo. Se encargan de tareas repetitivas y consultas básicas, liberando a tu equipo para actividades estratégicas y casos complejos que requieren el toque humano."
  },
  {
    id: "2", 
    question: "¿Qué pasa si mis clientes prefieren hablar con humanos?",
    answer: "Nuestro sistema incluye escalamiento inteligente. Los agentes de IA pueden detectar cuando una consulta requiere atención humana y transferir la conversación automáticamente al miembro apropiado de tu equipo, manteniendo todo el contexto de la conversación."
  },
  {
    id: "3",
    question: "¿Cómo se integra con mis sistemas actuales?",
    answer: "Trabajamos con APIs y conectores para integrar con CRM (Salesforce, HubSpot), herramientas de comunicación (WhatsApp Business, Slack), calendarios (Google Calendar, Outlook) y sistemas de gestión existentes. La mayoría de integraciones estándar están incluidas."
  },
  {
    id: "4",
    question: "¿Qué nivel de personalización ofrecen?",
    answer: "Ofrecemos personalización completa adaptada a tus necesidades específicas. Desde la personalidad y tono de voz de los agentes de IA, hasta workflows únicos de tu industria. Utilizamos herramientas no-code como n8n para automatizaciones estándar, y cuando la solución lo requiere, desarrollamos código personalizado para funcionalidades avanzadas que se integren perfectamente con tus procesos de negocio existentes."
  },
  {
    id: "5",
    question: "¿Cómo garantizan la seguridad y privacidad de los datos?",
    answer: "Utilizamos encriptación end-to-end, cumplimos con GDPR y almacenamos datos en servidores seguros. Los agentes de IA solo acceden a la información necesaria para su función, y implementamos auditorías regulares de seguridad."
  },
  {
    id: "6",
    question: "¿Ofrecen soporte técnico continuo?",
    answer: "Sí, todos nuestros planes incluyen soporte técnico. El plan Básico incluye soporte por email, el Pro incluye soporte prioritario, y el Enterprise incluye soporte 24/7 dedicado con un manager de cuenta asignado."
  },
  {
    id: "7",
    question: "¿Puedo cancelar el servicio en cualquier momento?",
    answer: "Sí, ofrecemos contratos flexibles sin permanencia forzosa. Puedes cancelar con 30 días de aviso. También proporcionamos exportación completa de datos y documentación para que mantengas control total de tu información."
  }
]

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <Section id="faq" className="scroll-mt-16 lg:scroll-mt-0">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Preguntas Frecuentes"
          text="Resolvemos las dudas más comunes sobre nuestra automatización con IA."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item) => {
              const isOpen = openItem === item.id
              
              return (
                <div 
                  key={item.id}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-n-7 rounded-2xl border border-n-6 group-hover:border-n-5 transition-colors duration-300" />
                  
                  <div className="relative z-10">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left p-6 lg:p-8 flex items-center justify-between group-hover:bg-n-6/20 rounded-2xl transition-colors duration-300"
                    >
                      <h3 className="text-n-1 text-lg lg:text-xl font-semibold leading-tight pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        {isOpen ? (
                          <ChevronUp 
                            size={24} 
                            className="text-color-1 transition-colors duration-300" 
                          />
                        ) : (
                          <ChevronDown 
                            size={24} 
                            className="text-n-4 group-hover:text-color-1 transition-colors duration-300" 
                          />
                        )}
                      </div>
                    </button>

                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                        <div className="border-t border-n-6 pt-6">
                          <p className="text-n-3 text-base lg:text-lg leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl bg-gradient-to-r from-color-1/20 via-color-2/20 to-color-4/20 pointer-events-none" />
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-color-1/10 via-color-2/10 to-color-4/10 rounded-2xl" />
              <div className="relative bg-n-7 border border-n-6 rounded-2xl p-8 lg:p-10">
                <h3 className="text-n-1 text-2xl lg:text-3xl font-semibold mb-4">
                  ¿Tienes más preguntas?
                </h3>
                <p className="text-n-3 text-lg mb-6 max-w-2xl mx-auto">
                  Nuestro equipo está aquí para ayudarte. Agenda una consulta gratuita y resolvemos todas tus dudas.
                </p>
                <Button>
                  <span className="relative z-10 text-white">CONSULTA GRATUITA</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FAQ