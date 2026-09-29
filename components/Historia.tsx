export default function Historia() {
  return (
    <section id="historia" className="bg-niebla py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1.4fr]">
        <h2 className="font-serif text-3xl leading-tight sm:text-5xl">
          Una casa con historia
        </h2>
        <div className="space-y-5 font-serif text-lg leading-8 text-piedra/90">
          <p>
            Esta casa lleva el apellido de quienes la habitaron durante generaciones. La familia Acevedo, vinculada a la nobleza gallega
            y en especial al condado de Monterrei. 
          </p>
          <p>
            Cuenta la tradición que en ella mantuvieron un encuentro el Cardenal Cisneros 
            y Felipe el Hermoso allá por 1506 en un momento de disputa entre este último y 
            Fernando el Católico por el trono de Castilla.
          </p>
          <p>
            La planta baja tiene un pórtico con tres arcos de medio punto entre cuyos pilares 
            se conserva un fragmento de un miliario romano. En la planta superior, destaca el llamativo 
            escudo de armas de los Acevedo y de los Feijoo. 
          </p>
          <p>
            Hoy la hemos reformado para que conserve ese espíritu: un lugar tranquilo, luminoso
            y con todo lo necesario para que te sientas como en casa, la tuya o la nuestra.
          </p>
          <p className="text-musgo">— Jorge</p>
        </div>
      </div>
    </section>
  );
}
