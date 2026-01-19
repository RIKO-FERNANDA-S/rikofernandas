import React from 'react'
import { ArrowUpLeft, ArrowUpRight, ChevronDown } from 'lucide-react'

function Navbar() {
  return (
    <nav className='fixed w-full h-max p-10 flex justify-between items-center'>
        <h1 className='w-35 text-2xl font-black tracking-tighter leading-5'>RIKO FERNANDA SAPUTRA</h1>
        <div className='flex gap-8 font-medium'>
          <p className='flex gap-5'>{"["}<span>ABOUT</span>{"]"}</p>
          <p className='flex gap-5'>{"["}<span>PROJECT</span>{"]"}</p>
          <p className='flex gap-5'>{"["}<span>SERVICE</span>{"]"}</p>
          <p className='flex gap-5'>{"["}<span>CONNECT</span>{"]"}</p>
        </div>

        <div className='flex items-center gap-3'>
        <div className='flex items-center'>
          <p>ENG</p>
          <ChevronDown/>
        </div>

        <div className='flex gap-1'>
          <p className='font-bold'>CONTACT</p>
          <ArrowUpRight/>
        </div>
        </div>
    </nav>
  )
}

export default Navbar