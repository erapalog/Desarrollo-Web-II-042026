import React from 'react'
import Boton from './Boton'

export default function Saludo({ nombre, appellido, edad }: { nombre: string, appellido: string, edad: number }) {
    return (
        <>
            <div>Saludo {nombre} {appellido} Edad: {edad}</div>
            <Boton texto="Click me" />
        </>

    )
}
