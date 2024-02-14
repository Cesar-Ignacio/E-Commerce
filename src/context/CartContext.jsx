import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {


    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
       
        const estadoPro = carrito.some(pro => pro.id === producto.id)
       
        if (estadoPro) {
            const nuevoCarrito = carrito.map((pro) => {
                (pro.id === producto.id) && (pro.cantidad += producto.cantidad);
                return pro;
            })
            setCarrito(nuevoCarrito);
        } else {
            setCarrito([...carrito, producto])
        }

    }

    const obtenerTotalYCantidad = () => {
        return carrito.reduce((acc, pro) => {
            (acc['cantidad'] += pro.cantidad) || (acc['cantidad'] = pro.cantidad);

            (acc['total'] += pro.cantidad * pro.precio) || (acc['total'] = pro.cantidad * pro.precio)

            return acc;
        }, {})
    }

    const eliminarProductoId = (idProducto) => {
        setCarrito([...carrito.filter(pro => pro.id != idProducto)]);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const validarProducto = ({ id, stock, cantidad }) => {
        const producto = carrito.find(p => p.id === id);

        const cantidadBuy = cantidad + (producto?.cantidad || 0);

        if (cantidadBuy <= stock)
            return true;

        return false;
    }


    return (

        <CartContext.Provider value={{ carrito, agregarProducto, obtenerTotalYCantidad, eliminarProductoId, vaciarCarrito, validarProducto }}>
            {children}
        </CartContext.Provider>
    )

}


export { CartContext, CartProvider };