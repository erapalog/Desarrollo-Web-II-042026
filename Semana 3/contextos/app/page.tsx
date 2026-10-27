import Image from "next/image";
import Operaciones from "./Components/props/Operaciones";
import AritmeticaConsumidor from "./Components/AritmeticaConsumidor";
import OperacionesProvider from "./Providers/OperacionesProvider";
import Aritmetica2Consumidor from "./Components/Aritmetica2Consumidor";
import Aritmetica3Consumidor from "./Components/Aritmetica3Consumidor";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Trabajando con contexto</h1>
      <Operaciones a={5} b={9}></Operaciones>


      <OperacionesProvider>
        <AritmeticaConsumidor></AritmeticaConsumidor>
        <Aritmetica2Consumidor></Aritmetica2Consumidor>
        <Aritmetica3Consumidor></Aritmetica3Consumidor>
      </OperacionesProvider>


    </div>
  );
}
