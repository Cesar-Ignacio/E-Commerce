
const Item = ({ producto }) => {
  return (
    <div className='bg-slate-400  w-[100%] flex flex-col  justify-between '>
      <div className='bg-red-500 '>
        <img src={producto.url} alt="imgProducto" />
      </div>
      <div className="text-center p-2 bg-red-500">
        <strong>{producto.nombre}</strong>
        <p className="text-start line-clamp-2 break-words"  >{producto.descripcion}</p>
        <strong >${producto.precio}</strong>
      </div>
      <div className="flex justify-between items-center p-2 bg-green-800">
        <strong>Stock</strong>
        <button className="bg-slate-800 text-white p-1 px-3 rounded-[5px]">Comprar</button>
      </div>
    </div >
  )
}

export default Item
