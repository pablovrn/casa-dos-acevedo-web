// TODO: sustituir por la dirección real (mejora la precisión del mapa)
const DIRECCION = "Plaza Maior, Verín, Galicia";
const LAT = 41.9414432;
const LNG = -7.4380362;
const MAPA_URL = `https://www.google.com/maps?q=Praza+Maior,+Ver%C3%ADn&output=embed`;

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-niebla py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-3xl sm:text-5xl">Ubicación</h2>
        <p className="mt-4 max-w-xl font-serif text-lg leading-8 text-piedra/90">
          Casa dos Acevedo · de Maior5 apartamentos.
        </p>
        <p className="mt-1 text-piedra/80">{DIRECCION}</p>

        <iframe
          title="Mapa con la ubicación de A casa dos Acevedo de Maior"
          src={MAPA_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="mt-8 aspect-[4/3] w-full rounded-sm border-0 sm:aspect-[16/9] lg:aspect-[16/7]"
        />
      </div>
    </section>
  );
}
