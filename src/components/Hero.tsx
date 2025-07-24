"use client"

import Section from "./Section"
import { GradientLight } from "./GradientLight"
import Image from "next/image"
import heroBackground from "../assets/4.png"

const Hero = () => {
    return (
        <div className="bg-n-8 min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-n-8 via-n-7 to-n-8"></div>
                
                <Image 
                    src={heroBackground} 
                    alt="AI Technology Background" 
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
               
                
                <div className="absolute inset-0 bg-gradient-to-r from-n-8/90 via-n-8/80 to-n-8/90"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-n-8/60 via-n-8/40 to-n-8/70"></div>
                <div className="absolute inset-0 bg-n-8/20"></div>
            </div>

            <Section className="pt-[5rem] min-h-screen flex items-center relative z-10" crosses={true} crossesOffset="lg:translate-y-[5.25rem]" customPaddings="true">
                <div className="container relative h-full">
                    {/* Main Content - Full Height Layout */}
                    <div className="relative z-10 min-h-screen flex items-center py-8">
                        
                        {/* Mobile Layout - Stack Vertically */}
                        <div className="lg:hidden w-full flex flex-col justify-center items-center text-center space-y-8 min-h-[80vh]">
                            <div className="space-y-6">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-n-1 leading-tight px-4">
                                    Transforma Tu Negocio con Automatización Inteligente{" "}
                                    <span className="inline-block relative">
                                        con Leonify
                                        <svg
                                            className="hidden sm:block absolute top-full left-0 w-full"
                                            width="624"
                                            height="28"
                                            viewBox="0 0 624 28"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 26.5C43.5 1.5 123.5 -4.5 312 26.5C500.5 57.5 580.5 1.5 623 26.5"
                                                stroke="url(#gradient)"
                                                strokeWidth="2"
                                            />
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#AC6AFF" />
                                                    <stop offset="50%" stopColor="#FFC876" />
                                                    <stop offset="100%" stopColor="#7ADB78" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                </h1>
                                
                                <p className="text-sm sm:text-base text-n-3 max-w-md mx-auto leading-relaxed px-4">
                                    Liberamos a tu equipo de tareas repetitivas mientras nuestros agentes de IA atienden a tus clientes 24/7.
                                    Más productividad, menos estrés.
                                </p>
                                
                                <button className="button relative inline-flex items-center justify-center h-11 px-7 text-n-1 bg-transparent border border-n-6 rounded-md hover:border-color-1 hover:text-color-1 transition-all duration-300 group text-xs sm:text-sm">
                                    <span className="relative z-10">CONSULTA GRATUITA</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-color-1/20 to-color-2/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </div>
                        </div>

                        {/* Desktop Layout - Side by Side */}
                        <div className="hidden lg:flex w-full items-center justify-between min-h-[85vh] gap-12 xl:gap-16">
                            
                            {/* Left Content */}
                            <div className="flex-1 max-w-2xl space-y-8">
                                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-n-1 leading-tight">
                                    Transforma Tu Negocio con Automatización Inteligente{" "}
                                    <span className="inline-block relative">
                                        con Leonify
                                        <svg
                                            className="absolute top-full left-0 w-full xl:-mt-2"
                                            width="624"
                                            height="28"
                                            viewBox="0 0 624 28"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 26.5C43.5 1.5 123.5 -4.5 312 26.5C500.5 57.5 580.5 1.5 623 26.5"
                                                stroke="url(#gradient)"
                                                strokeWidth="2"
                                            />
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#AC6AFF" />
                                                    <stop offset="50%" stopColor="#FFC876" />
                                                    <stop offset="100%" stopColor="#7ADB78" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                </h1>
                                
                                <p className="text-lg xl:text-xl text-n-3 leading-relaxed max-w-xl">
                                    Liberamos a tu equipo de tareas repetitivas mientras nuestros agentes de IA atienden a tus clientes 24/7.
                                    Más productividad, menos estrés.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="button relative inline-flex items-center justify-center h-12 px-8 text-n-1 bg-transparent border border-n-6 rounded-md hover:border-color-1 hover:text-color-1 transition-all duration-300 group">
                                        <span className="relative z-10">CONSULTA GRATUITA</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-color-1/20 to-color-2/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                </div>
                            </div>

                            {/* Right Content - Chat Mockup */}
                            <div className="flex-shrink-0 w-full max-w-md xl:max-w-lg">
                                <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient shadow-2xl">
                                    <div className="relative bg-n-8 rounded-[1rem]">
                                        <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem] flex items-center px-3">
                                            <div className="flex gap-1.5">
                                                <div className="w-2 h-2 bg-color-3 rounded-full"></div>
                                                <div className="w-2 h-2 bg-color-2 rounded-full"></div>
                                                <div className="w-2 h-2 bg-color-4 rounded-full"></div>
                                            </div>
                                        </div>
                                        
                                        <div className="aspect-[3/4] xl:aspect-[4/5] rounded-b-[0.9rem] overflow-hidden bg-gradient-to-br from-n-7 to-n-8 p-6">
                                            <div className="h-full flex flex-col">
                                                {/* Header */}
                                                <div className="flex items-center gap-2 mb-6">
                                                    <div className="w-2 h-2 bg-color-4 rounded-full animate-pulse"></div>
                                                    <span className="text-n-2 text-sm font-medium">Agente IA Activo</span>
                                                </div>

                                                {/* Chat messages */}
                                                <div className="flex-1 space-y-4 overflow-hidden">
                                                    <div className="flex justify-end">
                                                        <div className="bg-color-1/20 border border-color-1/30 rounded-xl rounded-br-md p-3 max-w-[200px]">
                                                            <p className="text-n-2 text-sm">¿Pueden automatizar mi proceso de ventas?</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex justify-start">
                                                        <div className="bg-n-6 border border-n-5 rounded-xl rounded-bl-md p-3 max-w-[220px]">
                                                            <p className="text-n-1 text-sm leading-relaxed">
                                                                ¡Absolutamente! Podemos automatizar desde la captura de leads hasta el seguimiento post-venta...
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex justify-end">
                                                        <div className="bg-color-2/20 border border-color-2/30 rounded-xl rounded-br-md p-3 max-w-[200px]">
                                                            <p className="text-n-2 text-sm">¿Cuánto tiempo toma implementarlo?</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex justify-start">
                                                        <div className="bg-n-6 border border-n-5 rounded-xl rounded-bl-md p-3 max-w-[220px]">
                                                            <p className="text-n-1 text-sm leading-relaxed">
                                                                Entre 2-4 semanas. Comenzamos con una auditoría gratuita...
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Typing indicator */}
                                                    <div className="flex justify-start">
                                                        <div className="bg-n-6 border border-n-5 rounded-xl rounded-bl-md p-3">
                                                            <div className="flex space-x-1">
                                                                <div className="w-2 h-2 bg-color-1 rounded-full animate-bounce"></div>
                                                                <div className="w-2 h-2 bg-color-2 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                                <div className="w-2 h-2 bg-color-4 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <GradientLight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Hero