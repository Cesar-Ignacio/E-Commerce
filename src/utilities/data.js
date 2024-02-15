const listaProducto = [
    {
        "id":"1",
        "nombre": "98'' QLED 4K Q80C Smart TV",
        "descripcion": "Experimenta la calidad visual excepcional con el televisor Samsung, líder en tecnología de pantalla. Disfruta de imágenes nítidas y colores vibrantes para una experiencia de visualización inigualable.",
        "precio": 510,
        "categoria": "Otros",
        "stock": 4,
        "descuento": 20,
        "url": "https://samsungar.vtexassets.com/arquivos/ids/193339-800-auto?width=800&height=auto&aspect=true"
    },
    {
        "id":"2",
        "nombre": "JBL Charge 5",
        "descripcion": "Sumérgete en el mundo del sonido con el parlante JBL, reconocido por su calidad de audio excepcional. Disfruta de la claridad y potencia de tu música favorita con este dispositivo de última generación.",
        "precio": 150,
        "categoria": "Parlantes",
        "stock": 7,
        "descuento": 0,
        "url": "https://i.postimg.cc/mgb8k45J/original-11786-Photo-Room-png-Photo-Room.png"
    },
    {
        "id":"3",
        "nombre": "JBL Tune 770NC",
        "descripcion": "Sumérgete en tu mundo musical con los auriculares Samsung equipados con Bluetooth. Experimenta un sonido envolvente y cómodo diseño para largas sesiones de escucha. ¡La libertad sin cables!",
        "precio": 75,
        "categoria": "Auriculares",
        "stock": 15,
        "descuento": 5,
        "url": "https://i.postimg.cc/XvGKGPNw/Auriculares-JBL-BT-710-Negro-min-9478241572.webp"
    },
    {
        "id":"4",
        "nombre": "BEOPLAY H95",
        "descripcion": "El movimiento, la maestría, la maravilla. Sumérjase en su música con auriculares dotados de cancelación de ruido ajustable que revolucionan su experiencia de escucha portátil",
        "precio": 50.00,
        "categoria": "Auriculares",
        "stock": 10,
        "descuento": 0,
        "url": "https://images.ctfassets.net/8cd2csgvqd3m/26XtRwxmomi69pWKqcuyS8/3a5285a2e0b4a5cb29484bcbe0763258/Packshot-Beoplay-H95-Gold-Tone-0006-Perspective-1200x1200px.png?q=85&fm=webp&w=720&h=720&fit=fill"
    },
    {
        "id":"5",
        "nombre": "LinkBuds S ",
        "descripcion": "No te desconectes con los auriculares inalámbricos LinkBuds S de Sony. Los LinkBuds S tienen optimización del sonido ambiente y noise cancelling, además de ser pequeños y ligeros para llevarlos cómodamente todo el día.",
        "precio": 90.00,
        "categoria": "Auriculares",
        "descuento": 0,
        "url": "https://i.postimg.cc/8CnBXScJ/kisspng-ipod-shuffle-microphone-headphones-beats-electroni-hifi-headphones-5a6bcd2fdcf207-9142307315.png"
    },
    {
        "id":"6",
        "nombre": "Nintendo Switch",
        "descripcion": "Sumérgete en el mundo de los videojuegos con la consola Nintendo Switch. Experimenta la versatilidad de jugar en casa o en movimiento. Diviértete con tus juegos favoritos en una plataforma líder en innovación.",
        "precio": 50.00,
        "categoria": "VideoJuegos",
        "stock": 5,
        "descuento": 0,
        "url": "https://i.postimg.cc/pdpCQTC5/Nintendo-Switch-Zelda.webp"
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