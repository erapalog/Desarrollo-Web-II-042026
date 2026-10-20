import Image from "next/image";
import Saludo from "./componentes/Saludo";
import SaludoClase from "./componentes/SaludoClase";
import Boton from "./componentes/Boton";
import SaludoProps from "./componentes/SaludoProps";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Trabajo con componentes</h1>

      <Saludo nombre="Juan" appellido="Perez" edad={20} />

      <SaludoClase />

      <SaludoProps nombre="Juan" appellido="Perez" edad={20} />
      <SaludoProps nombre="Juan" appellido="Garcia" edad={20} isMayorDeEdad={true} />
      <SaludoProps nombre="Juan" appellido="Gomez" edad={20} isMayorDeEdad={false} />


      <Boton texto="Click me 2" />

    </div>
  );
}
