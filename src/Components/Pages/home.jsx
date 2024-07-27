import React from 'react'
import Header from '../header'
import competitionsImage from '../../assets/key/competitions.png'

const Highlight = ({key, name, imageUrl}) =>{
  return(
  <div className='flex min-w-60 h-fit flex-col items-start gap-4 flex-1'>
    <div className='h-60 self-stretch rounded-xl bg-cover bg-no-repeat' style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className=' text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6'>{name}</div>
  </div>
  )
}

const News = ({name, imageUrl}) => {
  return(
    <>
    <div className='flex min-w-60 h-fit flex-col items-start gap-4 flex-1 bg-newBg rounded-2xl'>
    <div className='h-60 self-stretch rounded-xl bg-cover bg-no-repeat' style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className=' text-white font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 ml-5'>{name}</div>
    <div className='h-10 flex justify-center items-center w-full mb-5 px-5'>
    <button className='text-white bg-readMore rounded-lg flex justify-center items-center w-full font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 hover:bg-button transform hover:scale-105 transition-transform duration-200 shadow-lg'>Read More</button>
    </div>
    </div>
    </>
  )
}

export default function home() {

  const about = "Technofi is an annual technical festival organized by St. Peter's College. It is one of the largest technical festivals in India. The festival is a platform for students to showcase their technical prowess. With a variety of competitions and quizzes, the festival is a haven for tech enthusiasts. The festival also hosts a number of workshops and seminars that provide students with the opportunity to learn from experts in the field. Technofi aims to inspire and engage the next generation of technologists."

  const headCoverStyles = 'flex h-[60px] px-4 pt-5 pb-3 flex-col self-stretch'

  const headTextStyles = 'text-white font-dlig-on font-[Lexend] text-[22px] not-italic font-bold leading-7'

  const highlights = [
    { name: 'Great Competitions', imageUrl: competitionsImage },
    { name: 'Exciting Workshops', imageUrl: competitionsImage },
    { name: 'Inspiring Seminars', imageUrl: competitionsImage },
    { name: 'Great Competitions', imageUrl: competitionsImage },
  ]
  return (
    <>
      <Header />
      <body className='flex flex-col py-5 px-40 items-start flex-1 self-stretch bg-background h-fit'>
        <div className='flex flex-col items-start self-stretch h-fit p-4'>
          <div className='flex h-[480px] min-h-[480px] pt-[170px] pb-[138px] pl-[169px] pr-[137px] flex-col justify-end items-center gap-4 self-stretch rounded-xl bg-hero-pattern bg-no-repeat bg-cover'>
            <div className='flex flex-col items-center gap-2 justify-center'>
              <div className='text-white text-center font-dlig-on font-[Lexend] text-5xl not-italic font-black leading-[60px] tracking-[-2px]'>
              Welcome to Technofi 2024
              </div>
              <div className='text-white text-center font-dlig-on font-[Lexend] text-[16px] not-italic font-normal leading-6'>
              Where science meets technology
              </div>
            </div>
            <button className='flex h-16 min-w-[84px] max-w-[480px] px-5 justify-center items-center rounded-xl shadow-lg bg-button transform hover:scale-105 transition-transform duration-200'>
              <div className='flex items-center overflow-hidden text-white text-center font-dlig-on text-ellipsis font-[Lexend] text-[16px] not-italic font-bold leading-6'>
                Know More
              </div>
            </button>
          </div>
        </div>
        <div className={headCoverStyles}>
          <div className={headTextStyles}>About Technofi</div>
        </div>
        <div className='flex px-4 pt-1 pb-3 flex-col items-start self-stretch h-fit'>
          <div className='self-stretch text-white font-dlig-on font-[Lexend] text-[16px] not-italic font-normal leading-6'>
            {about}
          </div>
        </div>
        <div className={headCoverStyles}>
          <div className={headTextStyles}>Key Highlights</div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mt-5 p-4'>
            {highlights.map((highlight, index) => (
              <Highlight key={index} name={highlight.name} imageUrl={highlight.imageUrl} />
            ))}
        </div>
        <div className={headCoverStyles}>
          <div className={headTextStyles}>News and Updates</div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mt-5 p-4'>
            {highlights.map((highlight, index) => (
              <News key={index} name={highlight.name} imageUrl={highlight.imageUrl} />
            ))}
            
        </div>
      </body>
    </>
  )
}
