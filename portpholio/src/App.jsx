import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import SocialList from './component/SocialList'
import About from './component/About'
import Portfolio from './component/Portfolio'

function App() {
  

  return (
    <>
 <Navbar></Navbar>
 <Home></Home>
 <About></About>
 <Portfolio></Portfolio>
 <SocialList></SocialList>

    </>
  )

}

export default App
