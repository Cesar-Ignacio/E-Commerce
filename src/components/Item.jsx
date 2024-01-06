
const Item = ({producto}) => {
  return (
    <div className='bg-slate-400'>
      <div className=''>
            <img src="" alt="imgProducto" />
      </div>
      <div>
        <strong>{producto.nombre}</strong>
        <p>{producto.descripcion}</p>
        <strong>${producto.precio}</strong>
      </div>
      <div>
        <strong>Stock</strong>
        <button>Comprar</button>
      </div>
    </div>
  )
}

export default Item
