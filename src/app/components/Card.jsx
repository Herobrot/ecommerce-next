import "./Card.css";

export default function Card({producto, clickeadoDatos}){
    return(
        <div>
            {producto.map(objeto => {
                return(
                    <div 
                        key={objeto}
                        className="contenedorCard" onClick={() =>{
                        clickeadoDatos(objeto);
                    }}>
                        <div className="imagen">
                            <img src={objeto.src} />
                        </div>
                        <div className="texto">
                            <h2>{objeto.nombre}</h2>
                            <p>{objeto.calzado}</p>
                            <div className="footerCard">
                                <div className="colores">

                                </div>
                                <div className="precio">
                                    ${objeto.precio}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}