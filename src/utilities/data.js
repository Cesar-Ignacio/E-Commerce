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
        id: 103,
        nombre: "Parlante Ph",
        descripcion: "El mejor parlante del mundo, marca Samsung, con bluetton",
        precio: "80.00",
        url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
    },
    {
        id: 104,
        nombre: "Parlante Ph",
        descripcion: "El mejor parlante del mundo",
        precio: "80.00",
        url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
    },
    {
        id: 105,
        nombre: "Parlante Ph",
        descripcion: "El mejor parlante del mundo",
        precio: "80.00",
        url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
    },
    {
        id: 106,
        nombre: "Parlante Ph",
        descripcion: "El mejor parlante del mundo",
        precio: "50.00",
        url: "https://i.postimg.cc/HksyS8Q4/parlante.webp"
    }
]

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

const recuperarListaDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaProducto)
        }, 1000);
    })
}

export { recuperarDatos,recuperarListaDatos};