// import Logo from "./logo"
import type { NavigationItem } from "../app/types"

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

const services = [
  {
    id: "0",
    title: "Chatbots Inteligentes",
    url: "#chatbots",
  },
  {
    id: "1",
    title: "Automatización IA",
    url: "#automatizacion",
  },
  {
    id: "2",
    title: "Análisis de Datos",
    url: "#analisis",
  },
  {
    id: "3",
    title: "Consultoría AI",
    url: "#consultoria",
  },
]

const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: "/placeholder.svg?height=24&width=24&text=Li",
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: "/placeholder.svg?height=24&width=24&text=X",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: "/placeholder.svg?height=24&width=24&text=IG",
    url: "#",
  },
  {
    id: "3",
    title: "YouTube",
    iconUrl: "/placeholder.svg?height=24&width=24&text=YT",
    url: "#",
  },
  {
    id: "4",
    title: "WhatsApp",
    iconUrl: "/placeholder.svg?height=24&width=24&text=WA",
    url: "#",
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-n-8 border-t border-n-6">
      <div className="container py-10 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-10">
          {/* <div className="lg:col-span-2">
            <h1>Leonify</h1>

            <div className="flex space-x-4">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full border border-n-6 hover:border-n-4 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.iconUrl || "/placeholder.svg"} width={16} height={16} alt={item.title} />
                </a>
              ))}
            </div>
          </div> */}

          {/* Navigation Links */}
          {/* <div>
            <h6 className="h6 mb-6 text-n-1">Navegación</h6>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={item.url} className="body-2 text-n-4 hover:text-n-1 transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Services */}
          {/* <div>
            <h6 className="h6 mb-6 text-n-1">Servicios</h6>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.id}>
                  <a href={item.url} className="body-2 text-n-4 hover:text-n-1 transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Contact Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pt-10 border-t border-n-6">
          <div>
            <h6 className="h6 mb-6 text-n-1">Contacto</h6>
            <ul className="space-y-4">
              <li>
                <span className="body-2 text-n-4">Email:</span>
                <br />
                <a href="mailto:info@leonify.ai" className="body-2 text-n-2 hover:text-n-1 transition-colors">
                  info@leonify.ai
                </a>
              </li>
              <li>
                <span className="body-2 text-n-4">Teléfono:</span>
                <br />
                <a href="tel:+34900123456" className="body-2 text-n-2 hover:text-n-1 transition-colors">
                  +34 900 123 456
                </a>
              </li>
              <li>
                <span className="body-2 text-n-4">Horario:</span>
                <br />
                <span className="body-2 text-n-2">Lun - Vie: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="h6 mb-6 text-n-1">¿Listo para empezar?</h6>
            <p className="body-2 text-n-4 mb-6">
              Agenda una consulta gratuita y descubre cómo la IA puede transformar tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#consulta"
                className="button inline-flex items-center justify-center h-11 px-6 text-n-8 bg-color-1 rounded-md hover:bg-color-1/90 transition-colors"
              >
                CONSULTA GRATUITA
              </a>
              <a
                href="#demo"
                className="button inline-flex items-center justify-center h-11 px-6 text-n-1 bg-transparent border border-n-6 rounded-md hover:border-color-1 hover:text-color-1 transition-colors"
              >
                VER DEMO
              </a>
            </div>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-n-6">
          <p className="body-2 text-n-4 mb-4 md:mb-0">© 2024 Leonify AI Solutions. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#privacidad" className="body-2 text-n-4 hover:text-n-1 transition-colors">
              Política de Privacidad
            </a>
            <a href="#terminos" className="body-2 text-n-4 hover:text-n-1 transition-colors">
              Términos de Servicio
            </a>
            <a href="#cookies" className="body-2 text-n-4 hover:text-n-1 transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
