'use client'
import React from 'react'
import { useOperacionesAritmeticas } from '../Providers/OperacionesProvider'

export default function AritmeticaConsumidor() {

    const { a, b, setA, setB, operacionAritmetica, resultado } = useOperacionesAritmeticas();

    function asignarValores() {
        setA(1)
        setB(2)
        operacionAritmetica(1)
    }

    return (
        <div>

            El valr de a: {a} <br />
            El valor de b: {b} <br />
            El resultado de la suma {resultado} <br />

            <button onClick={() => asignarValores()} type='button'>Sumar</button>
        </div>
    )
}
