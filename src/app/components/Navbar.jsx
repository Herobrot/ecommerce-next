"use client"

import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({carrito}){
    return(
        <header>
            <nav>
                <div className="logoContenedor" onClick={() => {
                    window.location="/"
                }}>
                    <img src="/logo_colibri_1.png" alt="logoUPSnearers" />
                    <h5>UP Snearers</h5>
                </div>
                <div className="buscador">
                    <div className="filtros">
                        <a href="/Venta">Hombres</a>
                        <a href="/Venta">Mujeres</a>    
                    </div> 
                    <div className="contenedorBuscador">
                        <label htmlFor="Buscador">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </label>                        
                        <input type="text" placeholder="Buscar..." name="Buscador" id="Buscador" />
                    </div>
                </div>
                <div className="usuario">
                    <FontAwesomeIcon icon={faCartShopping} onClick={() => {
                        if(carrito !== undefined){
                            carrito();
                        }
                        else{
                            
                        }
                    }} />
                    <button type="button">Iniciar sesión</button> 
                </div>
            </nav>
        </header>
    )
}