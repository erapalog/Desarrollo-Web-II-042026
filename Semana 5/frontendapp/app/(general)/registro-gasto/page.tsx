'use client'
import { Gasto } from '@/app/Modelos/Gasto';
import TablaDato from '@/components/TablaDato';
import { useContextPresupuesto } from '@/context/ProviderPresupuesto'
import React, { useEffect, useState } from 'react'

export default function page() {

  const {presupuestoInicial,
     listaGasto,
     setListaGasto,
     idgasto,
     monto,
     categoria,
     fecha,
     setMonto,
     setIdgasto,
     setCategoria,
     setFecha,
    handleDelete,
handleEditar,
cargarGastos} = useContextPresupuesto()


  
  

  useEffect(()=>{
    cargarGastos()
  }, []);

  const submitForm = async (e:any) =>{
    e.preventDefault();

    try {
      
      let res ;
      
      if(idgasto!=0){
         res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gasto/${idgasto}`,{
          method:'PUT',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({idgasto,categoria,monto,fecha})
        })
      }
      else{
         res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gasto`,{
          method:'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({categoria,monto,fecha})
        })
      }
      

      if(res.ok){
        alert("registro creado exitosamen");
        setIdgasto(0)
        setMonto(0);
        setCategoria("");
        setFecha("");
        cargarGastos()  
      }
      else{
        alert("Ocurrio un error al invocar el servicio")
      }
    } catch (error) {
      console.error(error)
    }

  }


  
return (
    <> 
    <form className="max-w-sm mx-auto" onSubmit={submitForm}>

        <div className="mb-5">
            <label htmlFor="categoria" className="form-label">Categoria</label>
            <input type="text" className="form-control" 
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="correo" className="form-label">Monto</label>
            <input type="text" className="form-control"
             value={monto}
             onChange={(e)=> setMonto((e.target.value=='') ? 0 : parseFloat(e.target.value))}
             />
        </div>
        <div className="mb-5">
            <label htmlFor="fecha" className="form-label">Fecha</label>
            <input className="form-control" type='date'
             value={fecha}
             onChange={(e)=>setFecha(e.target.value)}
             />
        </div>

        <button type="submit" className="btn btn-primary">Guardar Gasto</button>
    </form>

  
    <TablaDato ></TablaDato>
    </>
  )
}
