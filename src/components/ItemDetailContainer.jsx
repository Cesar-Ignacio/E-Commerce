import React, { useEffect, useState } from 'react'

const ItemDetailContainer = () => {

    const [datos, setDatos] = useState({});

    const listaProducto = [
        {
            id: 101,
            nombre: "Televisor Samsung",
            descripcion: "El mejor televisor del mundo",
            precio: "510.00",
            url: "https://i.postimg.cc/zBB5KhqV/tv.webp"
        },
        {
            id: 102,
            nombre: "Parlante Ph",
            descripcion: "El mejor parlante del mundo",
            precio: "80.00",
            url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
        }
    ]

    useEffect(() => {

        recuperarDatos(102).then(data => setDatos(data)).catch(erro=>console.log(erro));

    }, [])


    const recuperarDatos = (idProducto) => {
        return new Promise((resolve, reject) => {
            const indiceProducto=listaProducto.findIndex(producto=>producto.id===idProducto);
            if(indiceProducto!=-1){
                setTimeout(() => {
                    resolve(listaProducto.find(producto=> producto.id===idProducto));
                }, 2000);
            }
            else {
                reject("Error no se encontro el producto");
            }
        })
    }


    return (
        <div className='container mx-auto'>
            <h3>ItemDetailContainer</h3>
            <p>{ (datos.descripcion)||"No se encontro el producto"}</p>
        </div>
    )
}

export default ItemDetailContainer
