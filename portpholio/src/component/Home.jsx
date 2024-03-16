import React from 'react'
import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div>
        
        <div>
            <div>
                <h2>I'm a Full Stack Developer</h2>
                <p>
                    I am Fresher . I have done my B.tech Computer Science in 2023.
                    My Skills are Java, Html,Css, Bootstrap,RaectJs,SpringBoot, MySql.
                </p>

                  <div>
                    <button>
                        Portfolio
                        <span>
                            <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                        </span>
                    </button>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Home