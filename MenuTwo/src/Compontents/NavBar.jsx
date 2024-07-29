import React from 'react'

const NavBar = () => {

    const [menu, setMenu] = useState(false)
  return (
    <>
    <div className="h-36 bg-transparent ">
        <div className="h-[80%] bg-red-900"></div>
        <div 
            className="h-[20%] bg-slate-100"
            onMouseEnter={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}
        >
        </div>
    </div>
    </>
  )
}

export default NavBar