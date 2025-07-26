"use client"
import type React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Logo from "../assets/logo.svg"
import type { HeaderProps, NavigationItem } from "../app/types"
import Image from "next/image"

const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "INICIO",
    url: "#inicio",
  },
  {
    id: "1",
    title: "SERVICIOS",
    url: "#servicios",
  },
  {
    id: "2",
    title: "PRECIOS",
    url: "#precios",
  },
  {
    id: "3",
    title: "FAQ",
    url: "#faq",
  },
  {
    id: "4",
    title: "CONTACTO",
    url: "#contacto",
  },
]

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false)

  const toggleNavigation = (): void => {
    setOpenNavigation(!openNavigation)
  }

  const handleClick = (): void => {
    if (!openNavigation) return
    setOpenNavigation(false)
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 md:bg-n-8/90 md:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      } ${className || ""}`}
    >
      <div className="flex items-center justify-between px-5 md:px-7.5 xl:px-10 py-4 md:py-0">
        <Image src={Logo} alt="Logo" className="w-30 h-auto" />
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4.5rem] left-0 right-0 bottom-0 bg-n-8 md:static md:flex md:mx-auto md:bg-transparent md:top-auto`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto md:flex-row">
            {navigation.map((item: NavigationItem) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className="block relative font-code text-xl uppercase text-n-1 transition-colors hover:text-color-1 px-4 py-6 sm:py-8 md:text-xs md:font-semibold md:leading-5 md:hover:text-n-1 xl:px-6 md:py-6"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="absolute inset-0 pointer-events-none md:hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-color-1/20 via-color-2/20 to-color-4/20" />
            </div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-color-1/10 rounded-full blur-xl" />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-color-2/10 rounded-full blur-xl" />
            <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-color-4/10 rounded-full blur-xl" />
          </div>
        </nav>

        {/* Right side buttons - Desktop only */}
        <div className="hidden md:flex items-center space-x-4">
          {/* CONSULTA GRATUITA ocultado */}
          <button className="button relative inline-flex items-center justify-center h-11 px-7 text-n-1 transition-colors hover:text-color-1 border border-n-6 rounded-md hover:border-color-1">
            VER DEMO
          </button>
        </div>

        {/* Mobile menu button - Only visible on mobile/tablet */}
        <button
          className="md:hidden p-2 -mr-2 z-50 relative"
          onClick={toggleNavigation}
          aria-label="Toggle navigation"
        >
          {openNavigation ? (
            <X className="w-6 h-6 text-n-1" />
          ) : (
            <Menu className="w-6 h-6 text-n-1" />
          )}
        </button>
      </div>
    </div>
  )
}

export default Header
