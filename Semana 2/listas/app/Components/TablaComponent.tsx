import React from 'react'
import { ListaAnimal } from '../Modelos/ListaAnimal'
import { Animal } from '../Modelos/Animal'
import BotonEliminar from './BotonEliminar'

export default function TablaComponent({ lista }: ListaAnimal) {
    return (
        <div>
            <table className='table'>
                <thead>
                    <th>Id</th>
                    <th>Especie</th>
                    <th>Fecha de creacion</th>
                    <th>Eliminar</th>
                </thead>
                <tbody>
                    {
                        lista.map((animal: Animal) => (
                            <tr key={animal.id}>
                                <td>{animal.id}</td>
                                <td>{animal.especie}</td>
                                <td>{animal.fechaRegistro}</td>
                                <td><BotonEliminar /></td>
                            </tr>

                        ))

                    }
                </tbody>

            </table>
        </div>
    )
}
