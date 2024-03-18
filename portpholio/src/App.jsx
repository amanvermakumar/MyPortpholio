import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import SocialList from './component/SocialList'

function App() {
  

  return (
    <>
 <Navbar></Navbar>
 <Home></Home>
 <SocialList></SocialList>
    </>
  )
}

export default App
