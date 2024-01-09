
const Item = ({ producto }) => {
  return (
    <div className='bg-white p-[0.5em] drop-shadow-[0_0px_8px_rgba(0,0,0,0.25)] rounded-md w-[100%] overflow-hidden flex flex-col  justify-between '>
      <div className='bg-red-500 '>
        <img src={producto.url} alt="imgProducto" />
      </div>
      <div className="text-center flex flex-col ">
        <strong  className="font-normal">{producto.nombre}</strong>
        {/* <p className="text-start line-clamp-2 break-words"  >{producto.descripcion}</p> */}
        <strong className="text-blue-600 " >${producto.precio}</strong>
      </div>
      <div className="flex justify-between items-center">
        <strong>Stock</strong>
        <button className="bg-slate-800 text-white p-1 px-3 rounded-[5px]">Comprar</button>
      </div>
    </div >
  )
}

export default Item
