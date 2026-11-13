'use client'
import { useContextPresupuesto } from '@/context/ProviderPresupuesto';
import React from 'react'

export default function page() {

    const {presupuestoInicial,setPresupuestoInicial} = useContextPresupuesto()

    const submitForm =(e:any)=>{
        e.preventDefault();
    
        setPresupuestoInicial(presupuestoInicial)
    
    }
    

  return (
    <div>
     <form onSubmit={submitForm}>
        <h3>Mis Gastos / Inicio de Sesion</h3>
        <div className="mb-3">
          <label htmlFor="monto" className="form-label">Monto Presupuesto</label>
          <input type="text" className="form-control" id="monto" placeholder="ingrese usuario"  value={presupuestoInicial} onChange={(e)=> setPresupuestoInicial(e.target.value)}/>
        </div>
     
        Presupuesto Asignado es: {presupuestoInicial} <br/>

        <button className="btn btn-success"> Guardar Presupuesto</button>
      </form>
    </div>
  )
}
