'use client'

import React, { useEffect, useState } from 'react'
import { Usuario } from '../modelos/Usuario';
//cliente, servidr
export default function Calculadora() {

    let usuario: number[] = []

    const [usuarioLista, setUsuarioLista] = useState<Usuario[]>([]);




    useEffect(() => {
        //alert('Componente Cargado');

        //mostrarUsuarios()

        setUsuarioLista([{
            id: 1,
            nombre: 'Ana',
            rol: 'Admin'
        },
        {
            id: 2,
            nombre: 'Pedor',
            rol: 'Gestor'
        }
        ])

    }, []);


    /*function mostrarUsuarios() {
        for (let x = 0; x < 10; x++)
            usuario.push(x)

        console.log(usuario)
    }*/



    return (
        <div>
            {
                usuario.map((x) => (
                    <p>x</p>
                ))
            }

            {
                usuarioLista.map((usuario: Usuario) => (
                    <div key={usuario.id}>
                        <p> Nombre : {usuario.nombre}</p>
                        <p> Rol: {usuario.rol}</p>
                    </div>

                ))
            }
        </div>
    )
}
