import React from 'react';


const SearchWidget = () => {
    return (
        <div className='flex group gap-1 dark:fill-bunker-50'>
            <input type="search" name="" id="" placeholder='Qué buscas?' className='p-[0.3em] pl-2 border-transparent border-2 w-0 rounded-md border-red-950 invisible group-hover-[:nth-of-type(3)_&]:visible group-hover-[:nth-of-type(3)_&]:w-36 group-hover-[:nth-of-type(3)_&]:border-black  transition-all ease-out duration-[0.8s]'/>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-[1.2rem]  ' viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
        </div>
    )
}

export default SearchWidget
