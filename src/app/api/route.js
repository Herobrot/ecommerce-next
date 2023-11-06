import { NextResponse } from "next/server";


export async function GET(){
    return NextResponse.json([
        {        
            nombre: "Adidas Ground",
            calzado: "Calzado de hombre",
            precio: "959",
            src: "http://localhost:3000/imagen.png"
        },
        {        
            nombre: "Nike Drowned Blue",
            calzado: "Calzado de mujer",
            precio: "959",
            src: "http://localhost:3000/imagen_1.png"
        },
        {        
            nombre: "Adidas Red Snake",
            calzado: "Calzado unisex",
            precio: "1,448",
            src: "http://localhost:3000/imagen_2.png"
        },
        {        
            nombre: "Nike Blacknight",
            calzado: "Calzado de hombre",
            precio: "1,789",
            src: "http://localhost:3000/imagen_3.png"
        }
    ]);
}