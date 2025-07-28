"use client"

import { useState } from "react"
import Image from "next/image"
import Logo from "../assets/logo.svg"
import MenuSvg from "./MenuSvg"
import type { HeaderProps, NavigationItem } from "../app/types"
import Button from "./Button"

const navigation: NavigationItem[] = [
  { id: "0", title: "INICIO", url: "#inicio" },
  { id: "1", title: "SERVICIOS", url: "#servicios" },
  { id: "2", title: "PRECIOS", url: "#precios" },
  { id: "3", title: "FAQ", url: "#faq" },
  { id: "4", title: "CONTACTO", url: "#contacto" },
]

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [openNavigation, setOpenNavigation] = useState(false)

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation)
  }

  const handleClick = () => {
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
            {navigation.map((item) => (
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

        <div className="hidden md:flex items-center space-x-4">
          <Button href="#contacto"> 
            REALIZAR CONSULTA
          </Button>
        </div>

        <button
          className="md:hidden ml-auto relative p-0.5 z-50"
          onClick={toggleNavigation}
          aria-label="Toggle navigation"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-conic-gradient overflow-hidden p-0.5">
            <div className="absolute inset-[-100%] bg-conic-gradient animate-spin-slow opacity-100 blur-sm" />
            <div className="relative flex items-center justify-center w-full h-full bg-n-8 rounded-[10px] overflow-hidden">
              <MenuSvg openNavigation={openNavigation} />
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Header
