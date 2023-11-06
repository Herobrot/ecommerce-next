"use client"

import "./Venta.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";

config.autoAddCss = false;

export default function Venta(){
    const [datos, setDatos] = useState([]);
    const [carro, setCarro] = useState([]);

    const clickeadoDatos = (objeto) =>{
        Swal.fire({
            title: '¿Desea agregar al carrito?',
            showConfirmButton: true,
        }).then((result) => {
            if(result.isConfirmed){
                const existe = localStorage.getItem(objeto.nombre);
                try{
                    if(!existe || data !== undefined){
                        localStorage.setItem(objeto.nombre, JSON.stringify(objeto));
                        setCarro(...data, objeto.nombre);
                    }
                    else{
                        Swal.fire({
                            title: '¡Ya tiene el producto en el carrito!',
                            showCloseButton: true
                        })
                    }
                }
                catch(err){}
            }
        })
    }

    useEffect(() =>{
        async function getDatos(){
            const res = await fetch('/api');
            const data = await res.json();
            setDatos(data);
        }

        getDatos();

        if(localStorage.getItem(datos.nombre) !== null){
            localStorage.removeItem("Empresa");
          }
    }, []);

    return(
        <>
            <Navbar /> 
            <main>
                <div className="filtros">
                    <h2>Filtros</h2>
                    <br />
                    <div className="rango">
                        <div className="rangoSlider">
                            <label htmlFor="TallaFiltro">
                            <h3>Talla</h3>
                        </label>
                            <input type="range" name="TallaFiltro" id="TallaFiltro"
                                min={23} max={30} />
                            <div className="rangoTicks">
                                <span>23</span>
                                <span>24</span>
                                <span>25</span>
                                <span>26</span>
                                <span>27</span>
                                <span>28</span>
                                <span>29</span>
                                <span>30</span>
                            </div>
                        </div>
                    </div>
                    <div className="separador" />
                    <div className="genero">
                        <h3>Género</h3>
                    </div>
                </div>
                <div className="contenedorContenido">
                    <div className="cabeceraContenido">
                        <div>Catálogo de:</div>
                        <div className="radiosButtons">
                            <input type="radio" name="radio" id="radio1" />
                            <label htmlFor="radio1" id="label1" >Primavera</label>
                            <input type="radio" name="radio" id="radio2" />
                            <label htmlFor="radio2" id="label2" >Verano</label>
                            <input type="radio" name="radio" id="radio3" />
                            <label htmlFor="radio3" id="label3" >Otoño</label>
                            <input type="radio" name="radio" id="radio4" />
                            <label htmlFor="radio4" id="label4" >Invierno</label>
                        </div>
                    </div>
                    <div className="contenido">
                        <Card producto={datos} clickeadoDatos={clickeadoDatos} />
                    </div>
                </div>
            </main>
        </>
    )
}