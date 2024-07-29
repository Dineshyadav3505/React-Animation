import React, { useState } from 'react'

const MenuIcon = () => {

    const [hover , setHover] = useState(false)
    const [click , setClick] = useState(false)

  return (
    <div 
        className="p-2 w-16 flex flex-col gap-2 justify-center item-center"
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
        onClick={() => { setClick(!click), setHover(false)} }
    >
        <span 
            className={`w-[${hover ? '80%' : '70%'}] duration-300 rounded-full h-[2px] bg-zinc-100 block`}
            style={{ transform: `rotate(${click ? '45deg' : '0deg'})` }}
        ></span>
        <span 
            className={`w-[${hover ? '50%' : '60%'}] duration-300 rounded-full h-[2px] bg-zinc-100 block`}
            style={{ transform: `rotate(${click ? '-45deg' : '0deg'})` }}
        ></span>
    </div>
  )
}

export default MenuIcon