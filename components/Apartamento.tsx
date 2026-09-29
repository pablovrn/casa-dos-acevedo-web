"use client";

import { useState } from "react";

interface Data {
  planta: string;
  capacidad: number;
  metros: number;
  habitaciones: number;
  banos: number;
  descripcion: string;
  imagenes: string[];
  amenities: string[];
  orientacion: string;
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function Apartamento({ data }: { data: Data }) {
  const [actual, setActual] = useState(0);

  const datos = [
    { valor: `${data.metros} m²`, etiqueta: "Superficie" },
    { valor: data.capacidad, etiqueta: "Huéspedes" },
    { valor: data.habitaciones, etiqueta: data.habitaciones === 1 ? "Habitación" : "Habitaciones" },
    { valor: data.banos, etiqueta: data.banos === 1 ? "Baño" : "Baños" },
  ];

  return (
    <section id="apartamento" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-3xl sm:text-5xl">El apartamento</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-piedra/80">{data.descripcion}</p>

        <div className="mt-10">
          <img
            src={data.imagenes[actual]}
            alt={`Foto ${actual + 1} del apartamento`}
            className="aspect-[4/3] w-full rounded-sm object-cover sm:aspect-[16/10]"
          />
          <ul className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8">
            {data.imagenes.map((src, i) => (
              <li key={src}>
                <button
                  onClick={() => setActual(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  aria-current={i === actual}
                  className={`block w-full overflow-hidden rounded-sm border-2 transition ${
                    i === actual ? "border-ria" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" className="aspect-square w-full object-cover" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-6 border-y border-piedra/15 py-8 sm:grid-cols-4">
          {datos.map((d) => (
            <div key={d.etiqueta}>
              <dt className="text-sm text-piedra/70">{d.etiqueta}</dt>
              <dd className="font-serif text-3xl sm:text-4xl">{d.valor}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-2xl">Equipamiento</h3>
            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 min-[400px]:grid-cols-2">
              {data.amenities.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-musgo" aria-hidden />
                  {cap(a)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl">Ubicación en el edificio</h3>
            <p className="mt-4 leading-relaxed text-piedra/80">
              {data.planta}, con orientación {data.orientacion}: luz natural durante casi todo el día.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
