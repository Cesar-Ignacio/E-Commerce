import { Link } from "react-router-dom"

const Categorias = () => {


    return (
        <>
            <ol className='flex sm:flex-row sm:h-auto justify-evenly flex-col items-center h-svh '>
                <li className=" hover:underline"><Link to="categoria/Parlantes" >Parlantes</Link></li>
                <li className="hover:underline " ><Link to="categoria/Auriculares">Auriculares</Link></li>
                <li className="hover:underline "><Link to="categoria/VideoJuegos">Video Juegos</Link></li>
                <li className="hover:underline "><Link to="categoria/Otros">Otros</Link></li> 
            </ol>

        </>
    )
}

export default Categorias
