"use client";

import { useState } from "react";

const links = [
  { href: "#historia", label: "Historia" },
  { href: "#apartamento", label: "El apartamento" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-30 bg-piedra/95 text-hueso backdrop-blur"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5" aria-label="Principal">
        <a href="#inicio" onClick={() => setAbierto(false)} className="font-serif text-lg">
          A casa dos Acevedo
        </a>

        <ul className="hidden gap-6 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="underline-offset-4 hover:underline">{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            {abierto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {abierto && (
        <ul id="menu-movil" className="border-t border-hueso/15 px-5 pb-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setAbierto(false)}
                className="block py-3 text-base"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
