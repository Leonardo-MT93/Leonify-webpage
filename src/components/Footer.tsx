import Logo from "../assets/logo.svg"
import type { NavigationItem } from "../app/types"
import Image from "next/image"
import whatsapp from "../assets/icons/whatsapp.webp"
import instagram from "../assets/icons/instagram.webp"
import gmail from "../assets/icons/gmail.webp"
import tiktok from "../assets/icons/tiktok.webp"

const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "Inicio",
    url: "#inicio",
  },
  {
    id: "1",
    title: "Servicios",
    url: "#servicios",
  },
  {
    id: "2",
    title: "Portfolio",
    url: "#portfolio",
  },
  {
    id: "3",
    title: "Nosotros",
    url: "#nosotros",
  },
  {
    id: "4",
    title: "Contacto",
    url: "#contacto",
  },
]

const socials = [
  {
    id: "0",
    title: "Whatsapp",
    iconUrl: whatsapp,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "2",
    title: "Gmail",
    iconUrl: gmail,
    url: "#",
  },
  {
    id: "3",
    title: "Tiktok",
    iconUrl: tiktok,
    url: "#",
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-n-8 border-t border-n-6">
      <div className="container py-10 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Image src={Logo} alt="Logo" className="w-40 md:w-40 lg:w-50 h-auto " />

            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {socials.map((item) => (
                <Image key={item.id} src={item.iconUrl} width={32} height={32} alt={item.title} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h6 className="h6 mb-4 text-n-1">Navegación</h6>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={item.url} className="body-2 text-n-4 hover:text-n-1 transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h6 className="h6 mb-4 text-n-1">Legales</h6>
            <ul className="space-y-2">
              <li>
                <a href="#privacidad" className="body-2 text-n-4 hover:text-n-1 transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#terminos" className="body-2 text-n-4 hover:text-n-1 transition-colors">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#cookies" className="body-2 text-n-4 hover:text-n-1 transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-n-6 text-center">
          <p className="body-2 text-n-4">
            ©2025 Leonify. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
