import React from 'react'
import Header from '../header'
import { useEffect, useState } from 'react';

const overview = 'Technofi is an annual tech fest organized by the students of St. Peter\'s College, Agra. It is a platform for students to showcase their talents and innovations in technology. Technofi was born out of the passion of a few students who wanted to create a space for their peers to explore technology and its potential. Over the years, it has evolved into a vibrant community of tech enthusiasts.'

const history = 'Technofi began as a small event with a handful of participants. In 2013, we hosted our fist edition. Since then, we have grown exponentially. This, we would host over 400 participants from 20 different schools. We have expanded our event to include a wider range of activities, such as coding competitions, film making and robotics. Our mission is to provide a platform for students to learn, create, and share their passion for technology.'

const mission = 'Our mission is to inspire and empower the next generation of innovators. We believe that technology has the power to change the world, and we want to help students develop the skills and confidence they need to make a positive impact. We aim to create a supportive and inclusive community where students can learn from each other, collaborate on projects, and explore new ideas. Ultimately, we hope to foster a love of learning and a spirit of curiosity that will stay with our participants long after Technofi ends.'

const vision = 'Our vision is to create an event that students look forward to every year. We want Technofi to be a place where students can connect with others who share their interests, learn from industry professionals, and gain hands-on experience with the latest tools and technologies. We also want to provide opportunities for students to showcase their work and receive recognition for their achievements. By fostering a sense of community and celebrating the diverse talents of our participants, we hope to make Technofi a highlight of the school year and a source of inspiration for all who attend.'

const headCoverStyles = 'flex h-[60px] px-4 pt-5 pb-3 flex-col self-stretch'

const headTextStyles = 'text-white font-dlig-on font-[Lexend] text-[22px] not-italic font-bold leading-7'

const paraHeaderStyles = 'flex px-4 pt-1 pb-3 flex-col self-stretch item-stretch' 

const paraTextStyles = 'text-white text-[16px] font-dlig-on font-[Lexend] leading-6 font-normal'

 
const Hero = () => {
    return(
        <section className='w-full'>
        <div className='flex flex-col items-start self-stretch h-fit p-4'>
          <div className='flex h-[480px] min-h-[480px] pt-[170px] pb-[138px] pl-[169px] pr-[137px] flex-col justify-end items-center gap-4 self-stretch rounded-xl bg-hero-pattern-2 bg-no-repeat bg-cover bg-bottom'>
            <div className='flex flex-col items-center gap-2 justify-center'>
              <div className='text-white text-center font-dlig-on font-[Lexend] text-5xl not-italic font-black leading-[60px] tracking-[-2px]'>
              Technofi 2024
              </div>
              <div className='text-white text-center font-dlig-on font-[Lexend] text-[16px] not-italic font-normal leading-6'>
              Where science meets technology
              </div>
            </div>
            <button className='flex h-16 min-w-[84px] max-w-[480px] px-5 justify-center items-center rounded-xl shadow-lg bg-button transform hover:scale-105 transition-transform duration-200'>
              <div className='flex items-center overflow-hidden text-white text-center font-dlig-on text-ellipsis font-[Lexend] text-[16px] not-italic font-bold leading-6'>
                View event details
              </div>
            </button>
          </div>
        </div>
            </section>
    )
}  

const Overview = () => {
    return(
        <section className='w-full'>
                <div className={headCoverStyles}>
                    <div className={headTextStyles}>Overview</div>
                </div>
                <div className={paraHeaderStyles}>
                    <div className={paraTextStyles}>
                        {overview}
                    </div>
                </div>
            </section>
    )
}

const History = () => {
    return(
        <section className='w-full'>
                <div className={headCoverStyles}>
                    <div className={headTextStyles}>Over the years</div>
                </div>
                <div className={paraHeaderStyles}>
                    <div className={paraTextStyles}>
                        {history}
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-10 mt-5 p-4'>
                <div className='bg-center flex flex-col rounded-xl justify-end p-4 bg-broch2016 bg-contain bg-no-repeat transform hover:scale-105 transition-transform duration-200 cursor-pointer' style={{ aspectRatio: '724 / 1024'}}>
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2 flex items-end">Technofi 2016</p>
        </div>
        <div className='bg-center flex flex-col rounded-xl justify-end p-4 bg-broch2017 bg-contain bg-no-repeat transform hover:scale-105 transition-transform duration-200 cursor-pointer' style={{ aspectRatio: '724 / 1024'}}>
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2 flex items-end">Technofi 2017</p>
        </div>
        <div className='bg-center flex flex-col rounded-xl justify-end p-4 bg-broch2018 bg-contain bg-no-repeat transform hover:scale-105 transition-transform duration-200 cursor-pointer' style={{ aspectRatio: '724 / 1024'}}>
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2 flex items-end">Technofi 2018</p>
        </div>
        <div className='bg-center flex flex-col rounded-xl justify-end p-4 bg-broch2019 bg-contain bg-no-repeat transform hover:scale-105 transition-transform duration-200 cursor-pointer' style={{ aspectRatio: '724 / 1024'}}>
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2 flex items-end">Technofi 2019</p>
        </div>
        <div className='bg-center flex flex-col rounded-xl justify-end p-4 bg-broch2022 bg-contain bg-no-repeat transform hover:scale-105 transition-transform duration-200 cursor-pointer' style={{ aspectRatio: '724 / 1024'}}>
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2 flex items-end">Technofi 2022</p>
        </div>
                </div>
            </section>
    )
}

const Mission = () => {
    return(
        <section className='w-full'>
                <div className={headCoverStyles}>
                    <div className={headTextStyles}>Our Mission</div>
                </div>
                <div className={paraHeaderStyles}>
                    <div className={paraTextStyles}>
                        {mission}
                    </div>
                </div>
            </section>
    )
}

const Vision = () => {
    return(
        <section className='w-full'>
                <div className={headCoverStyles}>
                    <div className={headTextStyles}>Our Vision</div>
                </div>
                <div className={paraHeaderStyles}>
                    <div className={paraTextStyles}>
                        {vision}
                    </div>
                </div>
            </section>
    )
}

const Organize = () => {
    return(
        <section className='w-full'>
            <div className={headCoverStyles}>
                <div className={headTextStyles}>Organizing Team</div>
            </div>
            <div className='flex p-4 items-start gap-3 self-stretch justify-evenly flex-col lg:flex-row'>
                <div className='flex w-[458px] pb-3 flex-col items-start gap-3 self-stretch'>
                    <img src="./src/assets/People/per1.png" className='h-[611px] self-stretch rounded-xl' />
                    <div>
                    <div className='self-stretch text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6'>Mr. Rakshit John</div>
                    <div className='self-stretch text-[#CCA18F] font-dlig-on font-[Lexend] text-sm not-italic font-normal leading-5'>Event Coordinator</div>
                    </div>
                </div>
                <div className='flex w-[458px] pb-3 flex-col items-start gap-3 self-stretch'>
                    <img src="./src/assets/People/per1.png" className='h-[611px] self-stretch rounded-xl' />
                    <div>
                    <div className='self-stretch text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6'>Mr. Rakshit John</div>
                    <div className='self-stretch text-[#CCA18F] font-dlig-on font-[Lexend] text-sm not-italic font-normal leading-5'>Event Coordinator</div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mt-5 p-4'>
                <div className='flex w-[223px] pb-3 flex-col items-start gap-3 self-stretch'>
                    <img src="./src/assets/People/per1.png" className='h-[297px] self-stretch rounded-xl' />
                    <div>
                    <div className='self-stretch text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 h-fit'>Mr. Rakshit John</div>
                    <div className='self-stretch text-[#CCA18F] font-dlig-on font-[Lexend] text-sm not-italic font-normal leading-5 h-fit'>Event Coordinator</div>
                    </div>
                </div>
                <div className='flex w-[223px] pb-3 flex-col items-start gap-3 self-stretch'>
                    <img src="./src/assets/People/per1.png" className='h-[297px] self-stretch rounded-xl' />
                    <div>
                    <div className='self-stretch text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 h-fit'>Mr. Rakshit John</div>
                    <div className='self-stretch text-[#CCA18F] font-dlig-on font-[Lexend] text-sm not-italic font-normal leading-5 h-fit'>Event Coordinator</div>
                    </div>
                </div>
                <div className='flex w-[223px] pb-3 flex-col items-start gap-3 self-stretch'>
                    <img src="./src/assets/People/per1.png" className='h-[297px] self-stretch rounded-xl' />
                    <div>
                    <div className='self-stretch text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 h-fit'>Mr. Rakshit John</div>
                    <div className='self-stretch text-[#CCA18F] font-dlig-on font-[Lexend] text-sm not-italic font-normal leading-5 h-fit'>Event Coordinator</div>
                    </div>
                </div>
                <div className='flex w-[223px] pb-3 flex-col items-start gap-3 self-stretch'>
                    <img src="./src/assets/People/per1.png" className='h-[297px] self-stretch rounded-xl' />
                    <div>
                    <div className='self-stretch text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 h-fit'>Mr. Rakshit John</div>
                    <div className='self-stretch text-[#CCA18F] font-dlig-on font-[Lexend] text-sm not-italic font-normal leading-5 h-fit'>Event Coordinator</div>
                    </div>
                </div>
                <div className='flex w-[223px] pb-3 flex-col items-start gap-3 self-stretch'>
                    <img src="./src/assets/People/per1.png" className='h-[297px] self-stretch rounded-xl' />
                    <div>
                    <div className='self-stretch text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 h-fit'>Mr. Rakshit John</div>
                    <div className='self-stretch text-[#CCA18F] font-dlig-on font-[Lexend] text-sm not-italic font-normal leading-5 h-fit'>Event Coordinator</div>
                    </div>
                </div>
                <div className='flex w-[223px] pb-3 flex-col items-start gap-3 self-stretch'>
                    <img src="./src/assets/People/per1.png" className='h-[297px] self-stretch rounded-xl' />
                    <div>
                    <div className='self-stretch text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 h-fit'>Mr. Rakshit John</div>
                    <div className='self-stretch text-[#CCA18F] font-dlig-on font-[Lexend] text-sm not-italic font-normal leading-5 h-fit'>Event Coordinator</div>
                    </div>
                </div>
                <div className='flex w-[223px] pb-3 flex-col items-start gap-3 self-stretch'>
                    <img src="./src/assets/People/per1.png" className='h-[297px] self-stretch rounded-xl' />
                    <div>
                    <div className='self-stretch text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 h-fit'>Mr. Rakshit John</div>
                    <div className='self-stretch text-[#CCA18F] font-dlig-on font-[Lexend] text-sm not-italic font-normal leading-5 h-fit'>Event Coordinator</div>
                    </div>
                </div>
                <div className='flex w-[223px] pb-3 flex-col items-start gap-3 self-stretch'>
                    <img src="./src/assets/People/per1.png" className='h-[297px] self-stretch rounded-xl' />
                    <div>
                    <div className='self-stretch text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 h-fit'>Mr. Rakshit John</div>
                    <div className='self-stretch text-[#CCA18F] font-dlig-on font-[Lexend] text-sm not-italic font-normal leading-5 h-fit'>Event Coordinator</div>
                    </div>
                </div>
                <div className='flex w-[223px] pb-3 flex-col items-start gap-3 self-stretch'>
                    <img src="./src/assets/People/per1.png" className='h-[297px] self-stretch rounded-xl' />
                    <div>
                    <div className='self-stretch text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 h-fit'>Mr. Rakshit John</div>
                    <div className='self-stretch text-[#CCA18F] font-dlig-on font-[Lexend] text-sm not-italic font-normal leading-5 h-fit'>Event Coordinator</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Body = () => {
    return(
        <body className='bg-background flex px-40 py-5 justify-center items-start flex-1 self-stretch h-fit flex-col'>
            <Hero />
            <Overview />
            <History />
            <Mission />
            <Vision />
            <Organize />
        </body>
    )
}

const Footer = () => {
    return(
      <footer className='flex h-20 bg-footerBg items-center justify-center p-4 bg-background'>
          <div className='text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 flex items-center'>
              © 2024 Technofi. All rights reserved.
          </div>
        </footer>
    )
  }

export default function About() {

  return (
    <>
        {/* Header */}
        <Header />
        {/* Body */}
        <Body />
        {/* Footer */}
        <Footer />
    </>
  )
}
