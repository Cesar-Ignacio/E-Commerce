import "./Categorias.css";
const Categorias = () => {


    return (
        <>
            <ol className='flex sm:flex-row sm:h-auto justify-evenly flex-col items-center h-svh '>
                <li className=" hover:font-bold hover:scale-[1.12] transition-all ease-in-out"><a href="#" >Mujeres</a></li>
                <li className="hover:font-bold hover:scale-[1.12] transition-all ease-linear" ><a href="#">Hombres</a></li>
                <li className="hover:font-bold hover:scale-[1.12] transition-all ease-in "><a href="#">Niños</a></li>
            </ol>

        </>
    )
}

export default Categorias
