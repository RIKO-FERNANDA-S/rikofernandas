import React from 'react'
import { ArrowUpLeft, ArrowUpRight, ChevronDown } from 'lucide-react'

function Navbar() {
  return (
    <nav className='fixed z-10 flex items-center justify-between w-full p-10 text-putih bg-transparant h-max mix-blend-difference'>
        <h1 className='text-2xl font-black leading-5 tracking-tight w-35 '>RIKO FERNANDA SAPUTRA</h1>
        <div className='flex gap-8 font-light text-sm'>
          <p className='flex gap-5'>{"["}<span>ABOUT</span>{"]"}</p>
          <p className='flex gap-5'>{"["}<span>PROJECTS</span>{"]"}</p>
          <p className='flex gap-5'>{"["}<span>ACHIEVEMENTS</span>{"]"}</p>
          <p className='flex gap-5'>{"["}<span>CONNECT</span>{"]"}</p>
        </div>

        <div className='flex items-center gap-3'>
        <div className='flex items-center text-sm gap-1'>
          <p>ENG</p>
          <ChevronDown size={20}/>
        </div>

        <div className='flex gap-1'>
          <p className='font-medium'>CONTACT</p>
          <ArrowUpRight/>
        </div>
        </div>
    </nav>
  )
}

export default Navbar