'use client'
import React, { useEffect, useState } from 'react'
import { Animal } from '../Modelos/Animal'
import TablaComponent from './TablaComponent'

export default function FormularioRegistro() {

    const [id, setId] = useState<number>(0)
    const [especie, setEspecie] = useState<string>('')
    const [fechaRegistro, setFechaRegistro] = useState<string>('')

    const [listaAnimal, setListaAnimal] = useState<Animal[]>([]);
    const [msj, setMsj] = useState<string>('')


    function almacenarAnimales() {

        let animal: Animal = {
            id: listaAnimal.length + 1,
            especie: especie,
            fechaRegistro: fechaRegistro
        }

        //listaAnimal.push(animal)
        setListaAnimal([...listaAnimal, animal]);
        console.log(listaAnimal)
        setMsj('Almacenado correctamente')
        setEspecie('')
        setFechaRegistro('')

    }

    useEffect(() => {

        console.log(listaAnimal)

    }, [listaAnimal])


    return (
        <div>

            Formulario Registro

            <form className='form'>

                <input type="text"
                    placeholder='Ingrese la especie'
                    className='form-control'
                    value={especie}
                    onChange={(e) => setEspecie(e.target.value)}

                /> <br />
                <input type="date"
                    placeholder='Ingrese la fecha de registro'
                    className='form-control'
                    value={fechaRegistro}
                    onChange={(e) => setFechaRegistro(e.target.value)}
                /> <br />
                <button type='button' className='btn btn-success' onClick={almacenarAnimales}> Guardar</button>

                <div className='alert alert-success' >{msj}</div>


                <TablaComponent lista={listaAnimal}></TablaComponent>

            </form>
        </div>
    )
}
