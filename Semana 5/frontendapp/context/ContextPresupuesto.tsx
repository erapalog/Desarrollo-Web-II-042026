'use client'

import { Gasto } from "@/app/Modelos/Gasto"
import { createContext } from "react"

export const ContextPresupuesto =createContext({
    presupuestoInicial:"",
    setPresupuestoInicial: (monto:string)=>{},
    listaGasto: [] as Gasto[],
    setListaGasto: (gasto:Gasto[] ) =>{},
    handleDelete : async (id:number) =>{},
    handleEditar : (gasto: Gasto) =>{},
    cargarGastos:()=>{},
    idgasto: 0,
    categoria: '',
    monto:0,
    fecha:'',
    setIdgasto :(idGasto:number)=>{},
    setCategoria :(categoria:string)=>{},
    setMonto :(monto:number)=>{},
    setFecha :(fecha:string)=>{}





})