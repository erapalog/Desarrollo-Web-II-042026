import React from 'react'
import Diviones from './Diviones'

export default function Operaciones({ a, b }: any) {
    return (
        <div>
            La operacion suma {a + b}

            <Diviones a={a} b={b}></Diviones>

        </div>
    )
}
