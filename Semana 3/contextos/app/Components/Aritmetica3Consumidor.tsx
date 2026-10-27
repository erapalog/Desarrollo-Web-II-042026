'use client'
import React from 'react'
import { useOperacionesAritmeticas } from '../Providers/OperacionesProvider'

export default function Aritmetica3Consumidor() {

    const { setA, setB, operacionAritmetica } = useOperacionesAritmeticas()

    function asignar() {
        setA(6)
        setB(9)
    }
    return (
        <div>
            <h2>Tercer componente</h2>
            <button type='button' onClick={asignar}>Cambiar Valores</button>
        </div>
    )
}
