import { ArrowDown, ArrowDownRight } from 'lucide-react'
import React from 'react'

function About() {
  return (
    <main className='w-full bg-putih h-max'>
        <div className='flex flex-col w-full h-screen '>
            <div className='h-[67vh] w-full items-center justify-center flex'>
            <h1 className='text-[10rem] tracking-tighter font-extrabold text-hitam'>ABOUT ME</h1>
            </div>
            <div className='flex justify-between w-full px-10 h-max'>
                <div>
                    <div className='flex items-center gap-3'>
                    <p className='text-xl'>READY TO TEAM UP</p>
                    <ArrowDownRight size={20}/>
                    </div>
                    <h1 className='ml-10 text-2xl font-bold underline'>rikofsaputra000@gmail.com</h1>
                </div>
                <div>
                    <div className='flex gap-3'>
                    <p className='text-md'>ACTIVE DEVELOPMENT</p>
                    <ArrowDownRight size={20}/>
                    </div>
                    <h1 className='text-5xl font-extrabold'>VALIDNESIA</h1>
                </div>
            </div>
        </div>
    </main>
  )
}

export default About