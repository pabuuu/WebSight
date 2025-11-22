import React from 'react'
import Button from '../components/Button.jsx'
export default function Home() {
  return (
    // wag galawin h-auto and width
    // feel free to outline sa class para alam ung dimension. tanggalin lang before deployment
    <div className="w-screen h-auto flex flex-col items-center justify-center">
      {/* HERO SECTION TO */}
      <div className=" container h-[80vh] flex flex-col items-center justify-center text-black">
          <h1 className='text-5xl md:text-7xl font-bold text-center'>Bringing Vision to the Web.</h1>
          <span className='my-5 w-[80%] text-sm md:text-lg text-center'>Delivering fast, thoughtful, and beautifully built web experiences <br/>from start to finish.</span>
          <Button children={'Start a Project'} className={"mt-5 text-base-100 h-12 w-42 rounded-full bg-neutral md:h-14  shadow-sm font-medium hover:bg-neutral-950 animate-pulse"}/>
      </div>
      {/* DITO TULOY */}
      rest of code pababa
    </div>
  )
}
