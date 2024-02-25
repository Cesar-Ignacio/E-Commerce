import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {


    const { usuario } = useContext(UserContext);

    /**El valor del carrito sera un array vacio o sera un array de objetos */
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')) || []);

    const agregarProducto = (producto) => {

        /**Verificamos que el producto no exista,  */
        const estadoPro = carrito.some(pro => (pro.email + pro.id) === (usuario.email + producto.id))

        if (estadoPro) {
            /**Si existe modificamos la cantidad del producto */
            const nuevoCarrito = carrito.map((pro) => {
                (pro.email + pro.id) === (usuario.email + producto.id) && (pro.cantidad += producto.cantidad);
                return pro;
            })
            /**Actualizamos el localStorage */
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito))
        } else {
            /**No existe lo agregamo  */
            carrito.push({ ...producto, email: usuario.email })
            /**Actualizamos el localStorage */
            localStorage.setItem('carrito', JSON.stringify(carrito))
        }
        /**Actualizamos el estado carrito con los datos del local Storage */
        setCarrito([...JSON.parse(localStorage.getItem("carrito"))])
    }

    const obtenerTotalYCantidad = () => {
        return carrito.reduce((acc, pro) => {

            if (usuario?.email === pro.email) {

                (acc['cantidad'] += pro.cantidad) || (acc['cantidad'] = pro.cantidad);

                (acc['total'] += pro.cantidad * pro.precio) || (acc['total'] = pro.cantidad * pro.precio)

                return acc;
            }

            return acc;

        }, {})
    }

    const eliminarProductoId = (idProducto) => {

        const nuevoArray = carrito.filter(pro => (pro.email + pro.id) !== (usuario.email + idProducto))

        localStorage.setItem('carrito', JSON.stringify(nuevoArray))

        setCarrito([...JSON.parse(localStorage.getItem("carrito"))])
    }

    const vaciarCarrito = () => {

        const nuevoArray = carrito.filter(pro => pro.email != usuario.email)

        localStorage.setItem('carrito', JSON.stringify(nuevoArray))

        setCarrito([...JSON.parse(localStorage.getItem("carrito"))])

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