import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-t-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 gap-10 flex overflow-hidden whitespace-nowrap'>
            <h1 className='text-[20vw] leading-none font-["Rejouice_Headline"] uppercase pt-10 font-semibold'>We are ochi</h1>
            <h1 className='text-[20vw] leading-none font-["Rejouice_Headline"] uppercase pt-10 font-semibold'>We are ochi</h1>
        </div>
    </div>
  )
}

export default Marquee