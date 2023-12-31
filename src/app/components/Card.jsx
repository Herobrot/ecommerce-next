import "./Card.css";

export default function Card({producto, clickeadoDatos}){
    return(
        <div className="contenidoCard">
            {producto.map((objeto, index) => {
                return(
                    <div 
                        key={index}
                        className="contenedorCard" onClick={() =>{
                        clickeadoDatos(objeto);
                    }}>
                        <div className="imagen">
                            <img src={objeto.src} />
                        </div>
                        <div className="texto">
                            <h2>{objeto.nombre}</h2>
                            <div className="precio">
                                <p>{objeto.calzado}</p>
                                <p>${objeto.precio}</p>
                            </div>
                        </div>
                        <div>
                            <button type="button">Comprar</button>
                        </div> 
                    </div>
                );
            })}
        </div>
    )
}

export function CardCompras({productos}){
    return(
        <div className="contenidoCompras">
            {productos.map((objeto, index) => {
                return(
                    <div key={index} className="contenedorCompras">
                        <div className="imagenCompras">
                            <img src={objeto.src} />
                        </div>
                        <div className="textoCompras">
                            <h2>{objeto.nombre}</h2>
                            <div className="precioCompras">
                                <p>{objeto.calzado}</p>
                                <p>${objeto.precio}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}