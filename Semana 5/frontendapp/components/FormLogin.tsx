'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function FormLogin() {

    
  const router = useRouter();

  const [usuario,setUsuario]=useState<string>('')
  const [clave,setClave]=useState<string>('')

  const submitForm =(e:any)=>{
    e.preventDefault();

    if(usuario =='admin' && clave=='admin123')
      router.push('/presupuesto-mensual');
    else
        alert('Usuario y clave incorrecto')

  }



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">


      <form onSubmit={submitForm}>
        <h3>Mis Gastos / Inicio de Sesion</h3>
        <div className="mb-3">
          <label htmlFor="usuario" className="form-label">Usuario</label>
          <input type="text" className="form-control" id="usuario" placeholder="ingrese usuario"  value={usuario} onChange={(e)=> setUsuario(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="clave" className="form-label">Contrasena</label>
          <input className="form-control" id="clave" type="password" placeholder="ingrese Contrasena" value={clave} onChange={(e)=> setClave(e.target.value)}/>
        </div>

        <button className="btn btn-success"> Iniciar Sesion</button>
      </form>



    </main>

  </div>
  )
}
