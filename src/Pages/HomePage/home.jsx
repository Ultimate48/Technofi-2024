import React from 'react'
import './home.css'

export default function home() {

  return (
    <div className='home-page'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Audiowide&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Orbitron:wght@400..900&display=swap');
      </style>
      <header className='w-full'>
      <div className="relative w-full h-screen flex items-center justify-center bg-fiery-eruption">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <h1
          className="text-5xl font-bold font-[Orbitron] tracking-[10px] leading-tight drop-shadow-lg text-white"
        >
          WELCOME TO
        </h1>
        <div className='flex justify-center items-center'>
        <h2 className="text-[80px] font-[Audiowide] text-yellow-400 drop-shadow-lg tracking-[50px]">
          TECHN
        </h2>
        <img src='./src/assets/Rotate.png' className='w-20 h-20 mr-10 rotate-animation'/>
        <h2 className="text-[80px] font-[Audiowide] text-yellow-400 drop-shadow-lg tracking-[50px]">
          FI
        </h2>
        </div>
      </div>
    </div>
      </header>
    </div>
  )
}
