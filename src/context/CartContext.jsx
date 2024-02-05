import { createContext, useState } from "react";

const CartContext=createContext();

const CartProvider=({children})=>{


    const [carrito,setCarrito]=useState([]);

    const agregarProducto=(producto)=>{
        setCarrito([...carrito,producto])
    }

    const obtenerTotalYCantidad=()=>
    {
        return carrito.reduce((acc, pro) => {
            (acc['cantidad'] += pro.cantidad) || (acc['cantidad'] = pro.cantidad);
        
            (acc['total'] += pro.cantidad * pro.precio) || (acc['total'] = pro.cantidad * pro.precio)
        
            return acc;
          }, {})
    }

    const eliminarProductoId=(idProducto)=>{
      setCarrito([...carrito.filter(pro=>pro.id!=idProducto)]);
    }

    const vaciarCarrito=()=>{
        setCarrito([]);
    }

    return (

        <CartContext.Provider value={{carrito,agregarProducto,obtenerTotalYCantidad,eliminarProductoId,vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )

}


export {CartContext,CartProvider};