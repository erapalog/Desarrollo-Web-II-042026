import React from 'react'
import { Persona } from '../modelos/Persona'

export default function SaludoProps(props: Persona) {
    return (
        <div>SaludoProps {props.nombre} {props.appellido} Edad: {props.edad} {props.esMayorDeEdad ? 'Es mayor de edad' : 'No es mayor de edad'}</div>
    )
}
