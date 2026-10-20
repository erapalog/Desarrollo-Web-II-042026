import React from 'react'

export default function Boton({ texto }: { texto: string }) {
    return (
        <button className='bg-blue-500 text-white p-2 rounded-md'>{texto}</button>
    )
}
