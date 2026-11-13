'use client'
import { Gasto } from '@/app/Modelos/Gasto'
import { useContextPresupuesto } from '@/context/ProviderPresupuesto'
import { tree } from 'next/dist/build/templates/app-page'
import React, { useEffect, useState } from 'react'

export default function TablaDato() {

    const [gastoTotal, setGastoTotal] = useState<number>(0)
    const {presupuestoInicial,handleDelete,handleEditar,listaGasto} = useContextPresupuesto()
    const [mostrarBotones, setMostrarBotones]=useState(true)

    function calcularGasto(){
      console.log(listaGasto)
      let gasto=0;
      for(let x of listaGasto)
        gasto+= x.monto

      console.log(gasto)
      setGastoTotal(gasto)

    };


    useEffect(()=>{
        calcularGasto()
    }, [listaGasto]);
    
    return (
        <div>
               <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Categoria</th>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
    
              listaGasto.map((gasto:Gasto) =>(
    
                <tr key={gasto.idgasto}>
                  <td>{gasto.idgasto}</td>
                  <td>{gasto.categoria}</td>
                  <td>{gasto.monto}</td>
                  <td>{gasto.fecha}</td>
                  <td>

                  {
                    mostrarBotones && (
                      <>
                     
                      <button type="button" className="btn btn-warning" onClick={()=> handleEditar(gasto)}>Editar</button>
                      <button type="button" className="btn btn-danger" onClick={()=> handleDelete(gasto.idgasto)}>Eliminar</button>
                      </>
                   
                    )
                  }
                 </td>
    
                </tr>
              ))
            }
          </tbody>
    
        </table>

        {
        

            <>
              <div className='card'>
            <div className='card-body'>
              
             <p> Presupuesto Mensual: {presupuestoInicial} </p>
              <p> Gasto Mensual: {gastoTotal} </p>
              <p> Presupuesto Restante: {parseFloat(presupuestoInicial) - gastoTotal} </p>
  
            </div>
          </div>
            </>
          
        
        }
      
        </div>
      )
}
