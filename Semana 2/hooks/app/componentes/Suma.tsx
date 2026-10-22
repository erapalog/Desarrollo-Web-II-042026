'use client'
import React, { useState } from 'react'

export default function Suma() {
    const [contador, setContador] = useState<number>(0);
    let contador2 = 0

    function SumarContador() {
        setContador(contador + 1)
        contador2 = contador2 + 1;
        console.log(contador2)
    }
    function restarContador() {
        setContador(contador - 1)
        contador2 = contador2 - 1
        console.log(contador2)
    }

    return (
        <div>
            Suma {contador} <br />
            Suma {contador2} <br />

            <button onClick={SumarContador} >Sumar</button> <br />
            <button onClick={restarContador}> Restar</button>

        </div>
    )
}
