const listaProducto = [
    {
        id: "101",
        nombre: "Televisor Samsung",
        descripcion: "El mejor televisor del mundo",
        precio: "510.00",
        categoria:"Televisores",
        descuento:"20",
        url: "https://i.postimg.cc/76wnbMDY/pngwing-com-3.png"
    },
    {
        id: "102",
        nombre: "Parlante Ph",
        descripcion: "El mejor parlante del mundo",
        precio: "80.00",
        categoria:"Parlantes",
        descuento:"10",
        url: "https://i.postimg.cc/d12GY7yP/klipartz-com.png"
    },
    {
        id: "103",
        nombre: "Auricular",
        descripcion: "El mejor auricular del mundo, marca Samsung, con bluetton",
        precio: "75.00",
        categoria:"Auriculares",
        descuento:null,
        url: "https://i.postimg.cc/Qt6Wg69y/klipartz-com-2.png"
    },
    {
        id: "104",
        nombre: "Auricular",
        descripcion: "El mejor auricular del mundo, marca Samsung, con bluetton",
        precio: "50.00",
        categoria:"Auriculares",
        descuento:'5',
        url: "https://i.postimg.cc/fRgbVwN3/cisco-bang-olufsen-980-removebg.png"
    }
]

const productoPorId = (idProducto) => {
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

export { productoPorId,recuperarListaDatos};