'use client'
import TablaDato from '@/components/TablaDato'
import { useContextPresupuesto } from '@/context/ProviderPresupuesto'
import React, { useEffect } from 'react'

export default function page() {

    const { cargarGastos } = useContextPresupuesto()

    useEffect(() => {
        cargarGastos()
    }, [])

  return (
    <div>
           <TablaDato ></TablaDato>
    </div>
  )
}
