import { Link } from "react-router-dom"
import { obtenerDescuento } from "../utilities/utilidades"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { LikedProductsContext } from "../context/LikedProductsContext";

const Item = ({ producto }) => {

  const { estado, precio } = obtenerDescuento(producto.precio, producto.descuento);

  const { agregarProducto, validarProducto } = useContext(CartContext);

  const { addProducto } = useContext(LikedProductsContext);

  const { usuario } = useContext(UserContext);

  const handleClickAddPro = () => {
    if(usuario){
      const estadoVerificacion = validarProducto({ ...producto, cantidad: 1 });
      (estadoVerificacion) ? agregarProducto({ ...producto, precio, cantidad: 1 }) : console.log("Cantidad > Stock")
    }
    
  }


  
  return (
    <div className=' bg-white  p-[0.5em] group drop-shadow-[0_0px_8px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_0px_8px_#0087d4] dark:bg-transparent dark:border-curious-blue-700 dark:border-[2px] transition-colors duration-300 ease-in-out rounded-md w-[100%] overflow-hidden flex flex-col  justify-between relative'>

      <div className='relative overflow-hidden xl:p-3' >
        <img src={producto.url} alt="imgProducto" className=" sm:group-hover:scale-[1]   transition-opacity duration-1000 ease-in-out " />
      </div>

      <div className="text-center flex  flex-col gap-1">
        <strong className="font-normal dark:text-white">{producto.nombre}</strong>
        <div className="flex  items-center justify-center gap-2  ">
          <span className="text-gray-300 line-through text-sm	 ">{estado && (`$${producto.precio}`)}</span>
          <strong className="text-curious-blue-400 " >${precio}</strong>
        </div>
      </div>
      <div className="absolute opacity-0  right-[-20px] p-2 group-hover:opacity-100 group-hover:right-2 transition-all ease-in-out duration-300 backdrop-blur-sm  xl:top-[20%] ">
        <ul className="flex flex-col gap-0 transition-all duration-300 ease-in-out group-hover:gap-5  ">
          <li><Link to={usuario?.email ? ("/carrito") : ("/login")}onClick={handleClickAddPro} className="bg-slate-200 block p-2  rounded-[50%] hover:bg-curious-blue-400 group/item" >
            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover/item:fill-white w-[16px] bi bi-bag-fill transition-colors" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
            </svg>
          </Link>
          </li>
          <li><Link to={usuario?.email ? (`/perfil/${usuario?.uid}`) : ("/login")} onClick={()=>addProducto({ email: usuario?.email, ...producto })} className="bg-slate-200  p-2  block rounded-[50%] hover:bg-curious-blue-400 group/item"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="group-hover/item:fill-white bi bi-suit-heart-fill w-[16px]" viewBox="0 0 16 16">
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
          </svg></Link>
          </li>

          <li>
            <Link to={`/detail/${producto.id}`} className="bg-slate-200  block p-2  rounded-[50%] hover:bg-curious-blue-400 group/item ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="group-hover/item:fill-white bi bi-eye-fill w-[16px]" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-amber-500 absolute p-1 py-0 rounded-md " >
        <span className="text-white text-[12px] tracking-[1.5px]" >{(!producto.descuento) || (`-${producto.descuento}%`)}</span>
      </div>

    </div >
  )
}

export default Item
