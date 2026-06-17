import React, { useRef } from 'react'
import { assets } from '../asset/assets'
import Image from 'next/image'

const Navbar = () => {

    const menuRef = useRef()

    const openMenu = () => {

        menuRef.current.style.transform = "translateX(-16rem)"
    }

    const closeMenu = () => {

        menuRef.current.style.transform = "translateX(16rem)"
    }
    return (
        <>
            <nav className='w-full py-5 px-[5%] border border-b-gray-300 flex justify-between fixed z-10 pb-2 bg-white'>
                <div className='flex items-center gap-1'>
                    <p className='rounded-full text-white text-[10px] md:text-[12px] bg-black  w-8 h-8 flex justify-center items-center font-bold '>OM</p>
                    <h1 className='font-bold text-sm md:text-sm lg:text-xl'>Onakoya Modupe</h1>
                </div>
                <ul className='md:flex items-center lg:gap-10 md:gap-4 hidden  text-gray-500 md:rounded-lg md:bg-white'>
                    <li className='cursor-pointer '><a href="#home" className='xl:text-xl '>Home</a></li>
                    <li className='cursor-pointer'><a href="#about" className=' xl:text-xl'>About me</a> </li>
                    <li className='cursor-pointer'><a href="#skill" className='xl:text-xl '>Skills</a></li>
                    <li className='cursor-pointer'><a href="#work" className='xl:text-xl '>Work</a></li>
                    <li className='cursor-pointer'><a href="#contact" className='xl:text-xl '>Contact</a></li>
                </ul>
                <div className='flex items-center gap-5'>
                    <button>  <Image src={assets.moon_icon} alt='' className='w-5 cursor-pointer' /> </button>
                    <a href="#contact" className='hidden md:block border border-gray-500 rounded-2xl text-gray-500 px-4 py-2 lg:text-xl cursor-pointer'>Contact me</a>
                    <button onClick={openMenu} >  <Image src={assets.menu_black} alt='' className='w-6 md:hidden p-2' /> </button>

                </div>

                {/* --mobile-- */}

                <ul ref={menuRef} className='flex flex-col fixed top-0 -right-64 h-screen bg-gray-500 py-10  items-center gap-5 md:hidden text-white z-10 w-45  transition duration-500'>
                    <div onClick={closeMenu} >
                        <Image src={assets.close_black} className='w-4 absolute top-7 right-6 cursor-pointer' alt='' />
                    </div>
                    <li onClick={closeMenu} className='cursor-pointer'><a href="#home" className='text-xl '>Home</a></li>
                    <li onClick={closeMenu} className='cursor-pointer'><a href="#about" className='text-xl '>About me</a> </li>
                    <li onClick={closeMenu} className='cursor-pointer'><a href="#skill" className='text-xl'>Skills </a></li>
                    <li onClick={closeMenu} className='cursor-pointer'><a href="#work" className='text-xl'>Work </a></li>
                    <li onClick={closeMenu} className='cursor-pointer'><a href="#contact" className='text-xl '>Contact</a></li>
                    <li onClick={closeMenu} className='cursor-pointer'><a href="#contact" className=' border border-white rounded-2xl  px-4 py-2  cursor-pointer'>Contact me</a></li>

                </ul>
            </nav >
        </>
    )
}

export default Navbar