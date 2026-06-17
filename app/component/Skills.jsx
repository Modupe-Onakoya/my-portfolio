import React from 'react'

const Skills = () => {
    return (
        <div className='px-[5%] space-y-2  scroll-mt-30 ' id='skill'>
            <h3 className='text-gray-500 xl:text-xl '>Tech Stack & Tools</h3>
            <h2 className='font-bold mb-3 xl:text-2xl mb-7'>Technologies i work with</h2>
            <ul className='flex flex-wrap gap-2 pointer-events-none'>
                <li className="w-fit px-4 py-1 rounded-lg border border-gray-300 hover:-translate-y-2 duration-200 transition-transform shadow-sm">Html5</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300 shadow-sm'>Css3</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300 shadow-sm'>JavaScript</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300 shadow-sm'>Tailswind</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300 shadow-sm'>React</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300 shadow-sm'>Next js</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300 shadow-sm'>TypeScript</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300 shadow-sm'>Git and Github</li>

            </ul>
        </div>
    )
}

export default Skills