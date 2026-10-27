import { createContext } from "react";

//sumar, restat, dividir, multiplicar
export const ContextOperaciones = createContext({
    a: 0,
    b: 0,
    setA: (a: number) => { },
    setB: (b: number) => { },
    resultado: 0,
    operacionAritmetica: (tipoOPeracion: number) => { }
})