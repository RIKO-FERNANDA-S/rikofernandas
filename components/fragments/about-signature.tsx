import React from 'react'
import Signature from './signature'

function AboutCard() {
  return (
    <div className='h-max w-full flex flex-col justify-center items-center'>
      <div className='h-screen w-full flex flex-col justify-center items-center'>
        <p className='text-4xl w-[80%] uppercase mix-blend-difference text-putih text-center'>As a growing software developer, I design and build with intention — removing what’s unnecessary so what remains feels clear, strong, and usable.</p>
        <Signature/>
      </div>
        <div className='w-full flex justify-end'>
          <p className="text-putih font-light">PR0002</p>
        </div>
      
    </div>
  )
}

export default AboutCard