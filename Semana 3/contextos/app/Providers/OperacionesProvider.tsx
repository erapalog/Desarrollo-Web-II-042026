'use client'
import React, { useContext, useState } from 'react'
import { ViewReact } from '../modelos/ViewReact'
import { ContextOperaciones } from '../Contextos/ContextOperacoines'


//props -> ReactNode
//Definciones de la plantilla
//exportar contexto


export default function OperacionesProvider(props: ViewReact) {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0);
    const [resultado, setResultado] = useState(0)

    function operacionAritmetica(tipoOPeracion: number) {

        if (tipoOPeracion == 1)
            setResultado(a + b)
        else if (tipoOPeracion == 2)
            setResultado(a - b)
        else if (tipoOPeracion == 3)
            setResultado(a * b)
        else
            setResultado(a / b)
    }

    return (
        <ContextOperaciones.Provider value={{ a, b, operacionAritmetica, setA, setB, resultado }}>
            {props.children}
        </ContextOperaciones.Provider >
    )
}

export const useOperacionesAritmeticas = () => {
    return useContext(ContextOperaciones)
}
