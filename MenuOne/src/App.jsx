import React, { useState } from 'react'
import MenuIcon from './Components/MenuIcon'
import Navbar from './Components/Navlink'

const App = () => {

  return (
    <div className="h-screen w-full bg-[#000000] overflow-x-hidden">
      <Navbar/>
      <div className="w-full h-full bg-[#000000] flex justify-center items-center ">
        <h1 className='text-zinc-700 font-bold text-[200px]'>Menu Effect</h1>
      </div>


    </div>
  )
}

export default App