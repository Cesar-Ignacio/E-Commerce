import React, { useEffect, useState } from 'react'
import Item from './Item'


const ItemList = () => {

    const [datos, setDatos] = useState();

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
        },
        {
            id: 102,
            nombre: "Parlante Ph",
            descripcion: "El mejor parlante del mundo, marca Samsung, con bluetton",
            precio: "80.00",
            url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
        },
        {
            id: 102,
            nombre: "Parlante Ph",
            descripcion: "El mejor parlante del mundo",
            precio: "80.00",
            url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
        },
        {
            id: 102,
            nombre: "Parlante Ph",
            descripcion: "El mejor parlante del mundo",
            precio: "80.00",
            url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
        },
        {
            id: 102,
            nombre: "Parlante Ph",
            descripcion: "El mejor parlante del mundo",
            precio: "50.00",
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
            <div className='p-2 rounded-md grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 '>
                {
                    (datos) && (
                        datos.map(producto => (
                            <Item key={producto.id} producto={producto} />
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default ItemList
