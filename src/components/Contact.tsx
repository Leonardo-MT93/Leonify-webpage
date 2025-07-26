"use client"

import React from 'react';
import Section from './Section';
import Heading from './Heading';
import { GradientLight } from './GradientLight';
import { MessageCircle, Calendar, ArrowRight, Zap, Mail, User, Building } from 'lucide-react';

const ContactCardSvg = ({ cardNumber }: { cardNumber: number }) => {
  const gradients = ["#AC6AFF", "#FFC876"];
  const gradientId = `contact_card_${cardNumber}`;
  const stopColor = gradients[cardNumber] || "#AC6AFF";

  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      fill="none"
      className="absolute inset-0"
    >
      <rect
        vectorEffect="non-scaling-stroke"
        x="1" y="1"
        width="98" height="98"
        rx="8"
        stroke="white"
        strokeOpacity="0.15"
        strokeWidth="1"
        fill="none"
      />
      <rect
        vectorEffect="non-scaling-stroke"
        x="1" y="1"
        width="98" height="98"
        rx="8"
        stroke={`url(#${gradientId})`}
        strokeOpacity="0.8"
        strokeWidth="2"
        fill="none"
      />
      <defs>
        <linearGradient id={gradientId} x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor={stopColor} />
          <stop offset="0.562842" stopColor="#D633FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const contactOptions = [
  {
    id: "0",
    title: "Agenda Tu Consulta",
    description: "Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.",
    badge: "CONSULTA GRATUITA",
    icon: Calendar,
    primaryButton: "ENVIAR CONSULTA",
    light: false,
    type: "form"
  },
  {
    id: "1", 
    title: "¿Prefieres WhatsApp?",
    description: "Chatea directamente con nuestro equipo y recibe atención personalizada al instante.",
    badge: "RESPUESTA INMEDIATA",
    icon: MessageCircle,
    primaryButton: "CHATEAR POR WHATSAPP",
    light: true,
    type: "whatsapp"
  }
];

const ContactCTA = () => {
  return (
    <Section id="contacto">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="¿Listo Para Transformar Tu Negocio?"
          text="Comienza tu automatización hoy y libera el potencial de tu equipo con IA."
        />
        
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 xl:gap-12 mb-10 max-w-7xl mx-auto">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            
            return (
              <div
                className="block relative p-0.5 w-full max-w-[24rem] transition-all duration-300 flex-shrink-0"
                key={option.id}
                style={{ minHeight: "28rem" }}
              >
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
                  <ContactCardSvg cardNumber={index} />
                </div>

                {/* Content Container */}
                <div 
                  className="relative flex flex-col h-full p-8 lg:p-10" 
                  style={{ zIndex: 10 }}
                >
                  {/* Header Section */}
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      <div className={`flex items-center gap-2 bg-gradient-to-r ${index === 0 ? 'from-color-1/20 to-color-1/10 border-color-1/30' : 'from-color-2/20 to-color-2/10 border-color-2/30'} border rounded-full px-4 py-2`}>
                        <Zap size={18} className={index === 0 ? 'text-color-1' : 'text-color-2'} />
                        <span className="text-n-2 text-xs font-medium tracking-wider">{option.badge}</span>
                      </div>
                    </div>
                    
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
                      {option.title}
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
                      {option.description}
                    </div>
                  </div>

                  {/* Form or Features Section */}
                  <div className="flex-1 mb-6">
                    {option.type === "form" ? (
                      <form className="space-y-4">
                        <div>
                          <div className="relative">
                            <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-4" />
                            <input
                              type="text"
                              placeholder="Nombre completo"
                              className="w-full pl-10 pr-4 py-3 bg-n-7 border border-n-6 rounded-lg text-n-1 placeholder-n-4 focus:border-color-1 focus:outline-none transition-colors text-sm"
                              style={{ zIndex: 20, position: "relative" }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="relative">
                            <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-4" />
                            <input
                              type="email"
                              placeholder="Email empresarial"
                              className="w-full pl-10 pr-4 py-3 bg-n-7 border border-n-6 rounded-lg text-n-1 placeholder-n-4 focus:border-color-1 focus:outline-none transition-colors text-sm"
                              style={{ zIndex: 20, position: "relative" }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="relative">
                            <Building size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-4" />
                            <input
                              type="text"
                              placeholder="Empresa"
                              className="w-full pl-10 pr-4 py-3 bg-n-7 border border-n-6 rounded-lg text-n-1 placeholder-n-4 focus:border-color-1 focus:outline-none transition-colors text-sm"
                              style={{ zIndex: 20, position: "relative" }}
                            />
                          </div>
                        </div>
                        <div>
                          <textarea
                            placeholder="Cuéntanos sobre tu negocio y qué procesos quieres automatizar..."
                            rows={3}
                            className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-lg text-n-1 placeholder-n-4 focus:border-color-1 focus:outline-none transition-colors text-sm resize-none"
                            style={{ zIndex: 20, position: "relative" }}
                          />
                        </div>
                      </form>
                    ) : (
                      <div className="space-y-4" style={{ zIndex: 20, position: "relative" }}>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-color-2 rounded-full"></div>
                          <span className="text-n-3 text-sm">Respuesta en menos de 5 minutos</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-color-2 rounded-full"></div>
                          <span className="text-n-3 text-sm">Asesoramiento personalizado</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-color-2 rounded-full"></div>
                          <span className="text-n-3 text-sm">Sin compromiso</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-color-2 rounded-full"></div>
                          <span className="text-n-3 text-sm">Disponible 24/7</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Button Section */}
                  <div className="space-y-3">
                    <button
                      style={{
                        width: "100%",
                        padding: "12px 24px",
                        backgroundColor: index === 0 ? "#AC6AFF" : "#FFC876",
                        color: "#0E0C15",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "14px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        zIndex: 20,
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px"
                      }}
                    >
                      {index === 0 ? <Calendar size={18} /> : <MessageCircle size={18} />}
                      {option.primaryButton}
                      {index === 1 && <ArrowRight size={16} />}
                    </button>
                    
                  </div>
                </div>

                {/* GradientLight para destacar */}
                {option.light && <GradientLight />}

                {/* Background overlay */}
                <div
                  className="absolute inset-0.5"
                  style={{ 
                    backgroundColor: "#0E0C15", 
                    zIndex: 2,
                    borderRadius: "0.5rem"
                  }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-5">
                    <div
                      className="w-full h-full"
                      style={{
                        background: `radial-gradient(circle at center, ${index === 0 ? "#AC6AFF" : "#FFC876"} 0%, transparent 70%)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ContactCTA;