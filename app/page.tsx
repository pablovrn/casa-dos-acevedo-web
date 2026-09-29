import { apartamento } from "@/app/lib/apartamento";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Apartamento from "@/components/Apartamento";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import Ubicacion from "@/components/Ubicacion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero imagen={apartamento.imagen} />
        <Historia />
        <Apartamento data={apartamento} />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
