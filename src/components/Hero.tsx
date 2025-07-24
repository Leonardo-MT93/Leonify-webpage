"use client"

import Section from "./Section"
import { GradientLight } from "./GradientLight"
import Image from "next/image"
import neonSphere from "../assets/neon-sphere.png"

const Hero = () => {
    return (
        <div className="bg-n-8">
            <Section className="pt-[12rem] -mt-[5.25rem]" crosses={true} crossesOffset="lg:translate-y-[5.25rem]" customPaddings="true">
                <div className="container relative">
                    {/* Background neon elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-20">
                            <Image src={neonSphere} alt="" className="w-full h-full" />
                        </div>
                        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 opacity-15">
                            <Image src={neonSphere} alt="" className="w-full h-full" />
                        </div>
                        <div className="absolute top-1/2 right-1/3 w-16 h-16 opacity-10">
                            <Image src={neonSphere} alt="" className="w-full h-full" />
                        </div>
                    </div>

                    <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] px-4">
                        <h1 className="h1 mb-6 text-n-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                            Transforma Tu Negocio con&nbsp;Automatización&nbsp;Inteligente{" "}
                            <span className="inline-block relative">
                                con Leonify{" "}
                                <svg
                                    className="hidden sm:block absolute top-full left-0 w-full xl:-mt-2"
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
                        <p className="body-2 max-w-3xl mx-auto mb-6 text-n-4 lg:mb-8 text-sm sm:text-base">
                            Liberamos a tu equipo de tareas repetitivas mientras nuestros agentes de IA atienden a tus clientes 24/7.
                            Más productividad, menos estrés.
                        </p>
                        <button className="button relative inline-flex items-center justify-center h-11 px-7 text-n-1 bg-transparent border border-n-6 rounded-md hover:border-color-1 hover:text-color-1 transition-all duration-300 group text-xs sm:text-sm">
                            <span className="relative z-10">CONSULTA GRATUITA</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-color-1/20 to-color-2/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>

                    {/* Chat mockup - OCULTO EN MOBILE y tablets pequeñas */}
                    <div className="hidden lg:block relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                            <div className="relative bg-n-8 rounded-[1rem]">
                                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] bg-gradient-to-br from-n-7 to-n-8">
                                    <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
                                        <div className="w-full max-w-md space-y-3 md:space-y-4">
                                            <div className="flex justify-end">
                                                <div className="bg-color-1/20 border border-color-1/30 rounded-lg p-2 md:p-3 max-w-xs">
                                                    <p className="text-n-2 text-xs md:text-sm">¿Pueden automatizar mi proceso de ventas?</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-start">
                                                <div className="bg-n-6 border border-n-5 rounded-lg p-2 md:p-3 max-w-xs">
                                                    <p className="text-n-1 text-xs md:text-sm">
                                                        ¡Absolutamente! Podemos automatizar desde la captura de leads hasta el seguimiento
                                                        post-venta, incluyendo agentes para WhatsApp, programación de citas y workflows
                                                        personalizados...
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <div className="bg-color-2/20 border border-color-2/30 rounded-lg p-2 md:p-3 max-w-xs">
                                                    <p className="text-n-2 text-xs md:text-sm">¿Cuánto tiempo toma implementarlo?</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-start">
                                                <div className="bg-n-6 border border-n-5 rounded-lg p-2 md:p-3 max-w-xs">
                                                    <p className="text-n-1 text-xs md:text-sm">
                                                        Típicamente entre 2-4 semanas dependiendo la complejidad. Comenzamos con una auditoría
                                                        gratuita de tus procesos actuales para diseñar la solución perfecta para tu negocio.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-start">
                                                <div className="bg-n-6 border border-n-5 rounded-lg p-2 md:p-3">
                                                    <div className="flex space-x-1">
                                                        <div className="w-2 h-2 bg-color-1 rounded-full animate-pulse"></div>
                                                        <div
                                                            className="w-2 h-2 bg-color-2 rounded-full animate-pulse"
                                                            style={{ animationDelay: "0.2s" }}
                                                        ></div>
                                                        <div
                                                            className="w-2 h-2 bg-color-4 rounded-full animate-pulse"
                                                            style={{ animationDelay: "0.4s" }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <GradientLight />
                        </div>

                        {/* Large background neon sphere - responsive mejorado */}
                        <div className="absolute top-1/2 left-1/2 w-[100%] sm:w-[110%] md:w-[105%] lg:w-[105%] -translate-x-1/2 -translate-y-1/2 opacity-30">
                            <Image src={neonSphere} className="w-full" width={1440} height={1800} alt="" />
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Hero