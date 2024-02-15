
const obtenerDescuento = (valor, descuento) => {
    
    let estado=true;
    (descuento)||(estado=false)

    return {
        estado,
        precio: valor* (100 - descuento) / 100,
    }
}

export { obtenerDescuento }