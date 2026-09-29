interface Props {
  imagen: string;
  capacidad: number;
  metros: number;
}

export default function Hero({ imagen}: Props) {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end text-hueso">
      <img src={imagen} alt="Salón del apartamento en A casa dos Acevedo de Maior" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-piedra/90 via-piedra/40 to-piedra/10" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-[calc(3rem+env(safe-area-inset-bottom))] pt-28 sm:pb-24">
        <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] min-[400px]:text-5xl sm:text-6xl lg:text-7xl">
          A casa dos Acevedo
        </h1>
        <h2 className="mt-5 max-w-xl text-lg leading-relaxed text-hueso/80 sm:text-xl sm:leading-relaxed">
          de Maior5 apartamentos
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-hueso/90 sm:text-lg">
          Apartamento en pleno corazón de la villa de Verín, en un edificio histórico rehabilitado, y con todas las comodidades para disfrutar de una estancia inolvidable.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#contacto" className="rounded-sm bg-hueso px-6 py-3 text-center font-medium text-piedra transition hover:bg-niebla">
            Consultar disponibilidad
          </a>
          <a href="#apartamento" className="rounded-sm border border-hueso/60 px-6 py-3 text-center transition hover:bg-hueso/10">
            Ver el apartamento
          </a>
        </div>
      </div>
    </section>
  );
}
