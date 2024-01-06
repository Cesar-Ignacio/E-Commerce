import React, { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = () => {


    const [datos, setDatos] = useState();

    const listaProducto = [
        {
            id: 101,
            nombre: "Televisor Samsung",
            descripcion: "El mejor televisor del mundo",
            precio: 50,
            url: "https://i.postimg.cc/zBB5KhqV/tv.webp"
        }
    ]

    useEffect(() => {
        recuperarDatos().then(result => setDatos(result))
    }, []);

    const recuperarDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(listaProducto)
            }, 1000);
        })
    }


    return (
        <div >
            <h2>ItemList Catálogo </h2>
            <div className='grid grid-cols-3 gap-1'>
                {
                    (datos)&&(
                    datos.map(producto=>{
                     return <Item key={producto.id} producto={producto}/>
                    })
                    )
                }
            </div>
        </div>
    )
}

export default ItemList
