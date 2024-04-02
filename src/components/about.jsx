import React from "react";

function About() {
  return (
    <div className="w-full pt-28 pb-20 px-20 bg-[#CDEA68] rounded-t-3xl text-black">
      <h1 className='font-["Neue_Montreal"] text-6xl leading-[4vw]'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
            <h1 className="text-7xl">Our approach:</h1>
            <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
        <div className="w-1/2 h-[46vh] mb-10 bg-[#abc54e] rounded-3xl">
            <img className="justify-center w-[45vw] h-[34vw] rounded-3xl object-fill" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
