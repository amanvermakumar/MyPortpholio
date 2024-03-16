import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";


function Navbar() {
    const[nav ,setNav]=useState(false)

    const link=[{
        id:1,
        link:"home"
    },
    {
        id:2,
        link:"About"
    },
    {
        id:3,
        link:"Portfolio"
    },
    {
        id:4,
        link:"Experience"
    },
    {
        id:5,
        link:"contact"
    },




]
    return <>

        <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed'>
             <div>
                <h1 className=' text-5xl font-signature ml-2'>Aman</h1>
             </div>
             <ul className=' hidden md:flex'>
                {link.map((e)=> <li key={e.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{e.link}</li>)}
             
             </ul>

             <div onClick={()=>setNav(!nav)} className='md:hidden   cursor-pointer pr-4 z-10 text-gray-500' >
               {nav?<FaTimes size={30}></FaTimes>:<FaBars size={30}></FaBars>}
             </div>
             {nav&&
                   <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b
                   from-black  to-gray-500'>
                                      {link.map((e)=> <li key={e.id} className='px-4 cursor-pointer capitalize  text-4xl py-6'>{e.link}</li>)}
                 
                 </ul>
             }
            
        </div>
    </>


}

export default Navbar