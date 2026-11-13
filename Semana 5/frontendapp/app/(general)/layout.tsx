import NavBar from "@/components/NavBar";
import ProviderProducto from "@/context/ProviderPresupuesto";
import type { Metadata } from "next";



export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
     
        <ProviderProducto>
        <NavBar></NavBar>
        {children}
        </ProviderProducto>
        
    </main>
  );
}
