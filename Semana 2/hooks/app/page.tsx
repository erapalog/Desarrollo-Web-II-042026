import Image from "next/image";
import Calculadora from "./componentes/Calculadora";
import Suma from "./componentes/Suma";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <h1>Trabajando con Hooks</h1>

      <Calculadora></Calculadora>
      <Suma></Suma>

    </div>
  );
}
