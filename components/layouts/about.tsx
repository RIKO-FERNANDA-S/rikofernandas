import { ArrowDown, ArrowDownRight } from 'lucide-react'
import React from 'react'

function About() {
  return (
    <main className='w-full h-max'>
        <div className='w-full h-screen flex flex-col '>
            <div className='h-[67vh] w-full items-center justify-center flex'>
            <h1 className='text-[10rem] tracking-tighter font-extrabold '>ABOUT ME</h1>
            </div>
            <div className='w-full h-max justify-between px-10 flex'>
                <div>
                    <div className='flex gap-3 items-center'>
                    <p className='text-xl'>READY TO TEAM UP</p>
                    <ArrowDownRight size={20}/>
                    </div>
                    <h1 className='ml-10 underline text-2xl font-bold'>rikofsaputra000@gmail.com</h1>
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