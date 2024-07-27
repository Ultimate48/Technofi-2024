import React from 'react'

export default function Header() {

  const linkStlyes = 'text-white font-[Lexend] font-dlig-on text-[14px] not-italic font-medium leading-[21px] flex items-center self-stretch transform hover:scale-105 transition-transform duration-200 cursor-pointer'

  return (
    <>
    <header className='flex py-3 px-10 justify-between items-center self-stretch border-b border-solid border-borderColor bg-background h-[65px]'>
      <div className='flex items-center gap-2 cursor-pointer'>
        <img src='./src/assets/logo.svg' alt='logo' className='w-4 flex-1 items-center' />
        <div className='self-stretch text-white font-[Lexend] font-dlig-on text-[18px] not-italic font-bold leading-[23px] flex items-center'>
          Technofi
        </div>
      </div>
      <div className='flex justify-end items-start gap-8 flex-1'>
        <div className='flex h-10 items-center gap-9'>
          <div className={linkStlyes}>Home</div>
          <div className={linkStlyes}>About</div>
          <div className={linkStlyes}>Events</div>
          <div className={linkStlyes}>Gallery</div>
          <button className='flex h-10 min-w-[84px] max-w-[480px] px-4 justify-center items-center rounded-xl bg-button transform hover:scale-105 transition-transform duration-200 shadow-lg'>
          <div className="flex-col justify-start items-center inline-flex">
            <div className="flex items-center text-white text-sm font-bold font-[Lexend] leading-[21px]">Register</div>
          </div>
          </button>
        </div>
      </div>
    </header>
    </>
  )
}
