import React from 'react'
import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (  
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-500'>
        
        <div className=' max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center h-full px-4'>
            <div className='flex flex-col  justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                <p className=' text-gray-500 px-4 mt-4 max-w-md'>
                    I am Fresher . I have done my B.tech Computer Science in 2023.
                    My Skills are Java, Html,Css, Bootstrap,RaectJs,SpringBoot, MySql.
                </p>

                  <div>
                    <button className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'></MdOutlineKeyboardArrowRight>
                        </span>
                    </button>
                  </div>
            </div>
            <div>
            <img  className=" rounded-2xl mx-auto w-2/3 md:w-full"src={HeroImage} alt=" my Image" />
            </div>
            
        </div>
    </div>
  )
}

export default Home