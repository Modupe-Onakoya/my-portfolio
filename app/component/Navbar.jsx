import React, { useRef } from 'react'
import { assets } from '../asset/assets'
import Image from 'next/image'

const Navbar = () => {

    const menuRef = useRef()

    const openMenu = () => {

        menuRef.current.style.transform = "translatex(-16rem)"
    }

    const closeMenu = () => {

        menuRef.current.style.transform = "translatex(16rem)"
    }
    return (
        <>
            <nav className='w-full py-5 px-[5%] border border-b-gray-300 flex justify-between fixed z-10 pb-2 bg-white'>
                <div className='flex items-center gap-1'>
                    <p className='rounded-full text-white text-[10px] md:text-[12px] bg-black  w-8 h-8 flex justify-center items-center font-bold '>OM</p>
                    <h1 className='font-bold text-sm md:text-xl'>Onakoya Modupe</h1>
                </div>
                <ul className='md:flex items-center lg:gap-10 md:gap-4 hidden text-gray-500 md:rounded-lg md:bg-white'>
                    <li className='cursor-pointer'><a href="#home" className='text-xl '></a>Home</li>
                    <li className='cursor-pointer'><a href="#about" className='text-xl'></a>About me </li>
                    <li className='cursor-pointer'><a href="#skils" className='text-xl '></a>Skills</li>
                    <li className='cursor-pointer'><a href="#skils" className='text-xl '></a>Work</li>
                    <li className='cursor-pointer'><a href="#contact" className='text-xl '></a>Contact</li>
                </ul>
                <div className='flex items-center gap-5'>
                    <button>  <Image src={assets.moon_icon} alt='' className='w-5 cursor-pointer' /> </button>
                    <a href="#contact" className='hidden md:block border border-gray-500 rounded-2xl text-gray-500 px-4 py-2 md:text-xl cursor-pointer'>Contact me</a>
                    <button>  <Image src={assets.menu_black} alt='' className='w-5 md:hidden cursor-pointer' onClick={openMenu} /> </button>

                </div>

                {/* --mobile-- */}

                <ul ref={menuRef} className='flex flex-col fixed top-0 -right-64 h-screen bg-pink-200 py-10  items-center gap-5 md:hidden text-gray-500 z-10 w-45  transition duration-500'>
                    <div onClick={closeMenu} >
                        <Image src={assets.close_black} className='w-4 absolute top-7 right-6 cursor-pointer' alt='' />
                    </div>
                    <li onClick={closeMenu} className='cursor-pointer'><a href="#home" className='text-xl '></a>Home</li>
                    <li onClick={closeMenu} className='cursor-pointer'><a href="#about" className='text-xl '></a>About me </li>
                    <li onClick={closeMenu} className='cursor-pointer'><a href="#skils" className='text-xl'> </a>Skills</li>
                    <li onClick={closeMenu} className='cursor-pointer'><a href="#work" className='text-xl'> </a>Work</li>
                    <li onClick={closeMenu} className='cursor-pointer'><a href="#contact" className='text-xl '></a>Contact</li>
                    <li onClick={closeMenu} className='cursor-pointer'><a href="#contact" className=' border border-gray-500 rounded-2xl text-gray-500 px-4 py-2 md:text-xl cursor-pointer'>Contact me</a></li>

                </ul>
            </nav >
        </>
    )
}

export default Navbar