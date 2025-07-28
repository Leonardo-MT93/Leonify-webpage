// app/components/HamburgerButton.tsx
"use client";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const HamburgerButton = ({ isOpen, toggle }: Props) => {
  return (
    <button
      className="md:hidden ml-auto relative p-0.5 z-50 hamburger-button"
      onClick={toggle}
      aria-label="Toggle navigation"
    >
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-conic-gradient overflow-hidden p-0.5">
        {/* Gradiente animado de fondo */}
        <div className="absolute inset-[-100%] bg-conic-gradient animate-spin-slow opacity-100 blur-sm" />
        {/* Fondo interior */}
        <div className="relative flex items-center justify-center w-full h-full bg-n-8 rounded-[10px] overflow-hidden">
          <div className="relative w-5 h-5">
            {/* Línea superior */}
            <span
              className={`absolute top-0 left-0 h-0.5 w-full bg-n-1 transform transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 top-2.5" : ""
              }`}
            />
            {/* Línea media */}
            <span
              className={`absolute top-2.5 left-0 h-0.5 w-full bg-n-1 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Línea inferior */}
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-full bg-n-1 transform transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 bottom-2.5" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </button>
  );
};
