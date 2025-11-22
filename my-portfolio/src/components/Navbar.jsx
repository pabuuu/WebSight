import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="navbar bg-transparent top-0 left-0 w-full h-[90px] z-50 px-6 absolute">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">WebSight</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="hidden md:flex"><a>Home</a></li>
            <li className="hidden md:flex"><a>Services</a></li>
            <li className="hidden md:flex"><a>About</a></li>
            <li className="hidden md:flex"><a>Contact</a></li>

            <li className="md:hidden">
              <button onClick={() => setOpen(true)} className='bg-transparent'>
                <i className="fa-solid fa-bars text-2xl " />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-screen w-screen bg-base-100 z-[60] flex flex-col items-center justify-center gap-10 text-3xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="absolute top-6 right-6 text-3xl" onClick={() => setOpen(false)}>
          <i className="fa-solid fa-xmark" />
        </button>
        <a onClick={() => setOpen(false)}>Home</a>
        <a onClick={() => setOpen(false)}>Services</a>
        <a onClick={() => setOpen(false)}>About</a>
        <a onClick={() => setOpen(false)}>Contact</a>
      </div>
    </>
  )
}
