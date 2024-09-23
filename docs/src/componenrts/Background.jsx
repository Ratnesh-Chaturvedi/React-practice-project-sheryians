import React from 'react'

function Background() {
  return (
    <div className='w-full h-screen fixed z-[2]'>
     <div className='absolute w-full top-[5%] text-zinc-600 flex justify-center font-semibold text-xl' >Documents</div>
     <h1 className='text-[15vw]  tracking-tight leading-none absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-200'>Docs.</h1>
    </div>
  )
}

export default Background