'use client'
import { Producto } from '@/app/modelos/Producto'
import React, { useEffect, useState } from 'react'

export default function page() {

    const [producto, setProducto] = useState<Producto[]>([])

    async function getProducto() {

        try {

            const res = await fetch('http://localhost:5000/producto')
            const data = await res.json()

            setProducto(data)

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }

    }

    useEffect(() => {
        getProducto()
    }, [])


    return (
        <div className='container'>
            <div className='row'>

                <div className='col-md-6'>

                </div>
                <div className='col-md-6'>
                    <table className='table'>

                        <tr>
                            <td>Id Producto</td>
                            <td>NOmbre Producto</td>
                            <td>Precio Producto</td>
                            <td>iSV Producto</td>
                            <td>IMG Producto</td>
                        </tr>
                        <tbody>
                            {
                                producto.map((producto: Producto) => (
                                    <tr key={producto.idProducto}>
                                        <td>{producto.idProducto}</td>
                                        <td>{producto.nombreProducto}</td>
                                        <td>{producto.precioProducto}</td>
                                        <td>{producto.isvProducto}</td>
                                        <td>{producto.imgProducto}</td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    )
}
