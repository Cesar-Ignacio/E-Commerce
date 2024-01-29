const listaProducto = [
    {
        id: "101",
        nombre: "Televisor Samsung",
        descripcion: "El mejor televisor del mundo",
        precio: "510.00",
        categoria:"Otros",
        stock:4,
        descuento:"20",
        url: "https://i.postimg.cc/76wnbMDY/pngwing-com-3.png"
    },
    {
        id: "102",
        nombre: "Parlante JBL",
        descripcion: "El mejor parlante del mundo",
        precio: "150.00",
        categoria:"Parlantes",
        stock:7,
        descuento:"10",
        url: "https://i.postimg.cc/mgb8k45J/original-11786-Photo-Room-png-Photo-Room.png"
    },
    {
        id: "103",
        nombre: "Auricular",
        descripcion: "El mejor auricular del mundo, marca Samsung, con bluetton",
        precio: "75.00",
        categoria:"Auriculares",
        stock:15,
        descuento:'',
        url: "https://i.postimg.cc/XvGKGPNw/Auriculares-JBL-BT-710-Negro-min-9478241572.webp"
    },
    {
        id: "104",
        nombre: "Auricular",
        descripcion: "El mejor auricular del mundo, marca Samsung, con bluetton",
        precio: "50.00",
        categoria:"Auriculares",
        stock:10,
        descuento:'5',
        url: "https://i.postimg.cc/jCVf0qY2/shopping-Photo-Room-png-Photo-Room.png"
    },
    {
        id: "105",
        nombre: "Auricular",
        descripcion: "El mejor auricular del mundo, marca Samsung, con bluetton",
        precio: "90.00",
        categoria:"Auriculares",
        descuento:'5',
        url: "https://i.postimg.cc/8CnBXScJ/kisspng-ipod-shuffle-microphone-headphones-beats-electroni-hifi-headphones-5a6bcd2fdcf207-9142307315.png"
        // url:"https://images.ctfassets.net/8cd2csgvqd3m/7jE3WBXZnUTNnuLtmg5d2i/f7255e73788cb8b0e69a988225122242/h9-argilla-bright-hero-1000x1000.png?q=90&fm=webp&w=720&h=720&fit=fill"
    },
    {
        id: "106",
        nombre: "nitento switch",
        descripcion: "El mejor auricular del mundo, marca Samsung, con bluetton",
        precio: "50.00",
        categoria:"VideoJuegos",
        stock:5,
        descuento:'',
        url: "https://i.postimg.cc/pdpCQTC5/Nintendo-Switch-Zelda.webp"
        // url:"https://images.ctfassets.net/8cd2csgvqd3m/7jE3WBXZnUTNnuLtmg5d2i/f7255e73788cb8b0e69a988225122242/h9-argilla-bright-hero-1000x1000.png?q=90&fm=webp&w=720&h=720&fit=fill"
    }
    
]
// https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTC3rYQ5r7ecxiKyiCapQg-wff5bmPMwid_dsJ6R1Pe3gWH1M4eeDcjFZcosf1jAMTb5eVpAN4oGdnfRu4diUvlz-2X-Ot2inIu53SfsXDRJmleijjQBfdd&usqp=CAE
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