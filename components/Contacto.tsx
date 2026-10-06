"use client";

import { useState } from "react";

const EMAIL = "ayuda@maior5apartamentos.es";
const TELEFONO = "+34 659 11 80 06";

const ENDPOINT = "/api/contact";
const APARTAMENTO = "Casa dos Acevedo";

type Estado =
  | { tipo: "reposo" }
  | { tipo: "enviando" }
  | { tipo: "ok" }
  | { tipo: "error"; mensaje: string };

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState<Estado>({ tipo: "reposo" });

  const enviando = estado.tipo === "enviando";
  const completo = nombre.trim() && email.trim() && mensaje.trim();

  const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!completo || enviando) return;
    setEstado({ tipo: "enviando" });

    const fechas = [
      entrada && `Entrada: ${entrada}`,
      salida && `Salida: ${salida}`,
    ].filter(Boolean);
    const texto = fechas.length ? `${fechas.join("\n")}\n\n${mensaje.trim()}` : mensaje.trim();

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, apartamento: APARTAMENTO, mensaje: texto }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setEstado({ tipo: "ok" });
        setNombre("");
        setEmail("");
        setEntrada("");
        setSalida("");
        setMensaje("");
      } else {
        setEstado({
          tipo: "error",
          mensaje: data.error ?? "No se ha podido enviar el mensaje. Inténtalo de nuevo.",
        });
      }
    } catch {
      setEstado({ tipo: "error", mensaje: "No hay conexión. Comprueba tu red e inténtalo de nuevo." });
    }
  };

  const campo =
    "mt-1 block w-full min-w-0 rounded-sm border border-hueso/30 bg-hueso/10 px-3 py-2.5 text-base text-hueso placeholder:text-hueso/50";

  return (
    <section id="contacto" className="bg-piedra py-20 text-hueso sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl">Reserva tu estancia</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-hueso/80">
            Cuéntanos las fechas y cuántos sois. Te respondemos con disponibilidad y precio.
          </p>
          <ul className="mt-8 space-y-3">
            <li><a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><a className="underline underline-offset-4" href={`tel:${TELEFONO.replace(/\s/g, "")}`}>{TELEFONO}</a></li>
          </ul>
        </div>

        <form onSubmit={enviar} className="space-y-4" noValidate>
          <label className="block">Nombre
            <input
              required
              autoComplete="name"
              className={campo}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
            />
          </label>
          <label className="block">Email
            <input
              required
              type="email"
              autoComplete="email"
              className={campo}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
            />
          </label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block min-w-0">Entrada
              <input
                type="date"
                className={`${campo} min-h-11 appearance-none`}
                value={entrada}
                onChange={(e) => setEntrada(e.target.value)}
              />
            </label>
            <label className="block min-w-0">Salida
              <input
                type="date"
                className={`${campo} min-h-11 appearance-none`}
                value={salida}
                onChange={(e) => setSalida(e.target.value)}
              />
            </label>
          </div>
          <label className="block">Mensaje
            <textarea
              required
              rows={4}
              className={campo}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Número de personas, dudas…"
            />
          </label>

          <button
            type="submit"
            disabled={!completo || enviando}
            className="w-full rounded-sm bg-hueso px-6 py-3 font-medium text-piedra transition hover:bg-niebla sm:w-auto disabled:cursor-not-allowed disabled:opacity-50"
          >
            {enviando ? "Enviando…" : "Enviar consulta"}
          </button>

          <p role="status" aria-live="polite" className="min-h-6">
            {estado.tipo === "ok" && "Mensaje enviado. Te respondemos lo antes posible."}
            {estado.tipo === "error" && <span className="text-red-300">{estado.mensaje}</span>}
          </p>
        </form>
      </div>
    </section>
  );
}
