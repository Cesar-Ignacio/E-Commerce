import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext=createContext();

const CartProvider=({children})=>{


    const navegacion=useNavigate();

    const [carrito,setCarrito]=useState([]);

    const agregarProducto=(producto)=>{
        const estadoPro=carrito.some(pro=>pro.id===producto.id)
        if(estadoPro){
            
            
            const nuevoCarrito=carrito.map((pro)=>{
            

                const nuevCa=pro.cantidad+producto.cantidad;
                if(nuevCa>pro.stock){
                    console.log("Supero el stock")
                    
                }

                (pro.id===producto.id)&&(pro.cantidad+=producto.cantidad);
                 return pro;
            })
            setCarrito(nuevoCarrito);
        }else{
            setCarrito([...carrito,producto])
        }

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