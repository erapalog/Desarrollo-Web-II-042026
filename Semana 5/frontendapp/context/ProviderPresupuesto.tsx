
'use client'
import React, { ReactNode, useContext, useState } from 'react'
import { ContextPresupuesto } from './ContextPresupuesto';
import { Gasto } from '@/app/Modelos/Gasto';

interface VistaComponete{
    children: ReactNode
}

export default function ProviderProducto({children}:VistaComponete) {

  const [presupuestoInicial,setPresupuestoInicial] = useState("");
  const [listaGasto,setListaGasto] = useState<Gasto[]>([]);

  const [idgasto, setIdgasto]= useState<number>(0);
  const [categoria, setCategoria]= useState<string>('');
  const [monto, setMonto] = useState<number> (0)
  const [fecha, setFecha]= useState<string>('');



  const handleEditar = (gasto: Gasto) =>{

    setIdgasto(gasto.idgasto)
    setMonto(gasto.monto);
    setCategoria(gasto.categoria);
    setFecha(gasto.fecha);

  }

  async function cargarGastos(){

    try {
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gasto`)
      const data = await res.json()

      setListaGasto(data)

      console.log(data)

    } catch (error) {
      console.error("Ocurrio un error en la invocacion del servicio", error)
    }

  }


  const handleDelete = async (id:number) => {
    if (confirm('¿Estás seguro de que deseas eliminar este gasto?')) {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gasto/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                cargarGastos()
            } else {
                alert('Error al eliminar gasto');
            }
        } catch (error) {
            console.error("Error al eliminar gasto:", error);
        }
    }
};

  return (
   
    <ContextPresupuesto.Provider value={{presupuestoInicial,
            setPresupuestoInicial,
            listaGasto,
            setListaGasto,
            handleDelete,
            handleEditar,
            cargarGastos,
            idgasto,
            monto,
            categoria,
            fecha,
            setMonto,
            setIdgasto,
            setCategoria,
            setFecha
            
            }}>
        {children}
    </ContextPresupuesto.Provider>
)
}

export function useContextPresupuesto(){
    return useContext(ContextPresupuesto)
}
