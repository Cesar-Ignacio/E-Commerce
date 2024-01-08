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
        },
        {
            id: 102,
            nombre: "Parlante Ph",
            descripcion: "El mejor parlante del mundo",
            precio: 80,
            url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
        },
        {
            id: 102,
            nombre: "Parlante Ph",
            descripcion: "El mejor parlante del mundo, marca Samsung, con bluetton",
            precio: 80,
            url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
        },
        {
            id: 102,
            nombre: "Parlante Ph",
            descripcion: "El mejor parlante del mundo",
            precio: 80,
            url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
        },
        {
            id: 102,
            nombre: "Parlante Ph",
            descripcion: "El mejor parlante del mundo",
            precio: 80,
            url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
        },
        {
            id: 102,
            nombre: "Parlante Ph",
            descripcion: "El mejor parlante del mundo",
            precio: 80,
            url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
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
            <div className='grid gap-1  bg-slate-100 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'>
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
