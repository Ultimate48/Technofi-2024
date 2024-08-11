import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Header() {

    const linkStyle = 'flex text-center font-Inter text-base font-medium leading-5 tracking-[0.16px] justify-center items-center text-white'

  return (
    <div className='flex w-full h-[80px] py-5 px-20 items-center fixed top-0 bg-opacity-50 backdrop-blur-md z-10'>
            <div className='flex justify-between items-center w-full h-fit'>
                <div className='flex items-center w-fit'>
                <div className='flex pr-2 flex-col items-start'>
                <img src='./src/assets/logo.svg' alt='logo' className='h-4 flex-1 items-center' />
                </div>
                <div className='flex flex-col items-center justify-center text-center font-bold text-lg text-white w-fit'>
                    Technofi 2024
                </div>
                </div>
                <div className='flex justify-center items-center gap-40 flex-1 ml-40'>
                        <div className={linkStyle}>
                            HOME
                        </div>
                        <div className={linkStyle}>
                            HISTORY
                        </div>
                        <div className={linkStyle}>
                            EVENTS
                        </div>
                        <div className={linkStyle}>
                            GALLERY
                        </div>
                        <div className='flex w-24 h-10 flex-col justify-center items-center border rounded bg-yellow-orange shadow-custom'>
                            Register
                        </div>
                </div>
            </div>
    </div>
  )
}