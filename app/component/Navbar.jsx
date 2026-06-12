import React from 'react'
import { assets } from '../asset/assets'
import Image from 'next/image'

const Navbar = () => {
    return (
        <>
            <nav className='w-full pt-5 px-[6%] md:px-[12%] border border-b-gray-300 flex justify-between fixed z-10 pb-2'>
                <div className='flex items-center gap-1'>
                    <p className='rounded-full text-white text-[10px] md:text-[12px] bg-black  w-8 h-8 flex justify-center items-center font-bold '>OM</p>
                    <h1 className='font-bold text-sm md:text-xl'>Onakoya Modupe</h1>
                </div>
                <ul className='md:flex items-center gap-10 hidden text-gray-500'>
                    <li ><a href="#home" className='md:text-xl'></a>Home</li>
                    <li><a href="#about" className='md:text-xl'></a>About me </li>
                    <li><a href="#skils" className='md:text-xl'></a>Skills</li>
                    <li><a href="#contact" className='md:text-xl'></a>Contact</li>
                </ul>
                <div className='flex items-center gap-5'>
                    <button>  <Image src={assets.moon_icon} alt='' className='w-5' /> </button>
                    <a href="#contact" className='hidden md:block border border-gray-500 rounded-2xl text-gray-500 px-4 py-2 md:text-xl'>contact me</a>
                    <button>  <Image src={assets.menu_black} alt='' className='w-5' /> </button>

                </div>

                {/* --mobile-- */}

                <ul className='flex flex-col fixed top-0 -right-64 h-screen bg-pink-200 py-10 px-8 items-center gap-5 md:hidden text-gray-500 z-10 w-45  transition duration-500'>
                    <div>
                        <Image src={assets.close_black} className='w-4 absolute top-7 right-6 cursor-pointer' />
                    </div>
                    <li ><a href="#home" className='md:text-xl'></a>Home</li>
                    <li><a href="#about" className='md:text-xl'></a>About me </li>
                    <li><a href="#skils" className='md:text-xl'></a>Skills</li>
                    <li><a href="#contact" className='md:text-xl'></a>Contact</li>
                    <li><a href="#contact" className=' border border-gray-500 rounded-2xl text-gray-500 px-4 py-2 md:text-xl'>contact me</a></li>

                </ul>
            </nav >
        </>
    )
}

export default Navbar