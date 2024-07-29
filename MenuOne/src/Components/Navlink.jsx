import React, { useState } from 'react';

const Navlink = () => {
    const [click, setClick] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hovered, setHovered] = useState(false);

    const data = [
        { label: 'Home',      image: '' },
        { label: 'Work',      image: '' },
        { label: 'About',     image: '' },
        { label: 'Instagram', image: '' },
        { label: 'Facebook',  image: '' },
        { label: 'LinkedIn',  image: '' },
    ];

    return (
        <div className='flex items-center justify-between bg-[#000000] w-full relative'>
            <div className="flex items-center justify-center">
                <h1 className='px-5 py-3 text-white text-2xl'>Logo</h1>
                <div className="absolute z-50 right-0">
                    <div 
                        className={`p-2 w-16 flex flex-col gap-2 justify-center items-start`}
                        onMouseEnter={() => setHovered(true)} 
                        onMouseLeave={() => setHovered(false)}
                        onClick={() => setClick(!click)}
                    >
                        <span 
                            className={`duration-300 rounded-full h-[2px] bg-zinc-100 block`}
                            style={{ width: hovered == true ? '80%' : '70%', transform: `rotate(${click ? '45deg' : '0deg'})` }}
                        ></span>
                        <span 
                            className={`duration-300 rounded-full h-[2px] bg-zinc-100 block`}
                            style={{ width: hovered === true ? '50%' : '60%', transform: `rotate(${click ? '-45deg' : '0deg'})` }}
                        ></span>
                    </div>
                </div>
            </div>

            <div className={`h-screen w-full bg-[#000000] mt-14 absolute top-0 transition-transform duration-500 ${click ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="px-5">
                    {data.map((item, index) => (
                        <button 
                            key={index} 
                            className={`flex items-center py-3 ${ hoveredIndex === index ? 'gap-3': 'gap-0'}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div
                                className={`bg-red-500 ${ hoveredIndex === index ? 'w-56': 'w-0'}  h-[130px] overflow-hidden rounded transition-all duration-500`} 
                                // style={{ width: hoveredIndex === index ? '200px' : '0' }}
                            >
                                <img 
                                    className='w-full h-full object-cover'
                                    src={item.image}
                                    alt={`${item.label} image`}
                                />
                            </div>

                            <h5 
                                className={`py-0 text-[170px] leading-[130px] inline-block uppercase font-black ${hoveredIndex === index ? 'text-white' : 'text-zinc-600'} duration-200`}
                            >
                                {item.label}
                            </h5>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navlink;