'use client'
import React from 'react'
import { useOperacionesAritmeticas } from '../Providers/OperacionesProvider'

export default function Aritmetica2Consumidor() {

    const { a, b, operacionAritmetica } = useOperacionesAritmeticas()

    return (
        <div>

            <h2>Consumidor 2</h2> <br />
            valor a {a} <br />
            Valor b : {b}
        </div>
    )
}
