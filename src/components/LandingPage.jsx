import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-80 px-20'>
            {["We Create", "Eye-Opening", "Presentations"].map((item, index)=>{
                return <div className="masker">
                  <div className='w-fit flex items-end overflow-hidden'>
                    {index===1 && <div className="w-[9vw] mr-[1vw] h-[5.7vw] relative rounded-md -top-[1.2vw] bg-red-500"></div>}
                    <h1 className='uppercase font-["Rejouice_Headline"] text-[7.5vw] leading-[6.85vw] tracking-tighter font-medium'>
                      {item}
                    </h1>            
                  </div>
                </div>
            })}  
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-[30vh] flex justify-between items-center py-5 px-20'>
          {["For Public and Private Companies", "From the first pitch to the last pitch to IPO"].map((item, index)=>{
            return <p className='text-xl font-light tracking-tight leading-none'>
              {item}
            </p>
          })}
          <div className='Start flex items-center gap-3'>
            <div className='uppercase text-md px-5 py-2 border-[1px] border-zinc-400 font-light rounded-full'>Start the project</div>
            <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400'>
              <span className='rotate-[45deg]'>
                <FaArrowUpLong className='' />
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage