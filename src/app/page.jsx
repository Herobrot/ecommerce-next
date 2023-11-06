import "./Home.css";
import Navbar from "./components/Navbar";
import Carrusel from "./components/Carrusel";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home(){
    const slides = [
        {url: "/carrusel_1.png"},
        {url: "/carrusel_2.jpg"},
        {url: "/carrusel_3.jpg"},        
        {url: "/carrusel_4.jpg"},
        {url: "/carrusel_5.jpg"}
    ]
    return(
        <>
            <Navbar />
            <main>
                <Carrusel slides={slides} />
                <div className="contenidoCalzado">
                    <div>
                        <img src="/modelo_hombre_1.png" alt="calzado para hombre" />
                        <Link href={"/Venta"}>
                            Calzado para hombres
                        </Link>
                    </div>
                    <div>
                        <img src="/modelo_mujer_1.png" alt="calzado para mujer" />
                        <Link href={"/Venta"}>
                            Calzado para mujeres
                        </Link>
                    </div>
                </div> 
            </main>
        </>
    )
}