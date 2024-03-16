import React from 'react'
import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div>
        <img src={HeroImage} alt="" />
        <MdOutlineKeyboardArrowRight/>
    </div>
  )
}

export default Home