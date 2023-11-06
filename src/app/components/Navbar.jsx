"use client"

import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { CardCompras } from "./Card";
import { useEffect } from "react";
import Swal from "sweetalert2";

const modalStyles = {
    paddingTop: "3.5%",
    borderRadius: "8px",
    position: "absolute",
    width: "35%",
    background: "var(--secondary-bg-color)",
    top: "0",
    right: "1%"
}

const modalBodyStyles = {
    background: "var(--primary-bg-color)",
    border: "4px solid rgb(0,0,0)", 
    borderRadius: "5px"
}

const delay = ms => new Promise(res => setTimeout(res, ms));

export default function Navbar(){
    const [showModal, setShowModal] = useState(false);
    const [existeObjetos, setExisteObjetos] = useState(false);
    const [compras, setCompras] = useState([]);

    const handleModelOpen = () => {
        setCompras(carrito());
        setShowModal(!showModal);
    }

    const handleModelClose = () => {
        setShowModal(false)
        
    }

    useEffect(() =>{
        if(localStorage.length !== undefined && localStorage.length > 1){
            setExisteObjetos(true);
        }
        else{
            setExisteObjetos(false);
        }
    })

    const Compra = () => {
        if(existeObjetos){
            Swal.fire({
                title: '¿Desea comprar todo?',
                showConfirmButton: true,
            }).then(async (result) => {
                if(result.isConfirmed || result.isDismissed){
                    Swal.fire({
                        title: "¡Compra adquirida!",
                        showConfirmButton: true,
                        confirmButtonText: "¡Si!"
                    });
                    localStorage.clear();
                    setExisteObjetos(false);
                    handleModelClose();
                    await delay(1000);
                    window.location="/Venta"
                }
            })
        }
    }

    const carrito = () => {
        const llavesLength = localStorage.length
        if(llavesLength !== undefined){
            setExisteObjetos(true);
            let llaves = [];
            for (let i = 0; i < llavesLength; i++) {
                let llave = localStorage.key(i);
                llaves.push(llave);
            }
            let productos = [{}];
            for (let i = 0; i < llaves.length; i++) {
                productos.push(JSON.parse(localStorage.getItem(llaves[i])))
            }

            productos = productos.slice(1,productos.length);
            console.log(productos);
            return productos;
        }
    }
    

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
                <div className="usuario" style={{position: "relative"}}>
                    <FontAwesomeIcon icon={existeObjetos ? faCartArrowDown : faCartShopping} onClick={() => {
                        /*
                            if(carrito !== undefined){
                            carrito();
                            }
                            else{
                                
                            }
                        */
                       handleModelOpen();
                    }} />
                    <button type="button">Iniciar sesión</button> 
                    <Modal show={showModal} onHide={handleModelClose}
                        style={modalStyles}>
                        <Modal.Header>
                            
                        </Modal.Header>
                        <Modal.Body style={modalBodyStyles}>
                            <h1>Lista de compras</h1>
                            <CardCompras productos={compras} />
                            <button type="button"
                                onClick={() => {
                                    Compra();
                                }}
                            >Comprar</button>
                        </Modal.Body>
                    </Modal>
                </div>
            </nav>
        </header>
    )
}