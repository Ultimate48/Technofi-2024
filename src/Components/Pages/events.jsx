import React from 'react'
import Header from '../header'
import Footer from '../footer'

const Event = ({event}) => {
    return(
        <div className='flex gap-10'>
            <div className='flex flex-col gap-5 justify-between'>
                <div className='flex flex-col font-dlig-on font-[Lexend] not-italic'>
                    <div className='text-white font-bold h-fit'>
                        {event.title}
                    </div>
                    <div className='text-[#cba090] font-medium text-[14px]'>
                        {event.description}
                    </div>
                </div>
                <button className='text-white bg-readMore rounded-xl flex justify-center items-center w-fit font-dlig-on font-[Lexend] text-base not-italic font-medium leading-6 px-4 py-1 h-10 hover:bg-button transform hover:scale-105  transition-transform duration-200 shadow-lg'>Know More
                    <img src="./src/assets/arrow.svg" alt="arrow" className='w-6 h-6 ml-2'/>
                </button>
            </div>
            <img src={event.imageUrl} alt="event" className='w-60 h-40 rounded-xl'/>
        </div>
    )
}

const events = [
    {
        title: 'Designing for emotion',
        //Write a big description here
        description: 'Designing for emotion is a great way to make your users feel connected to your product. This talk will cover the basics of designing for emotion and how you can use it to make your users feel more connected to your product.',
        imageUrl: './src/assets/heroImg/hero-1.png',
    },

    {
        title: 'Designing for emotion',
        //Write a big description here
        description: 'Designing for emotion is a great way to make your users feel connected to your product. This talk will cover the basics of designing for emotion and how you can use it to make your users feel more connected to your product.',
        imageUrl: './src/assets/heroImg/hero-1.png',
    },

    {
        title: 'Designing for emotion',
        //Write a big description here
        description: 'Designing for emotion is a great way to make your users feel connected to your product. This talk will cover the basics of designing for emotion and how you can use it to make your users feel more connected to your product.',
        imageUrl: './src/assets/heroImg/hero-1.png',
    },

    {
        title: 'Designing for emotion',
        //Write a big description here
        description: 'Designing for emotion is a great way to make your users feel connected to your product. This talk will cover the basics of designing for emotion and how you can use it to make your users feel more connected to your product.',
        imageUrl: './src/assets/heroImg/hero-1.png',
    },


    {
        title: 'Designing for emotion',
        //Write a big description here
        description: 'Designing for emotion is a great way to make your users feel connected to your product. This talk will cover the basics of designing for emotion and how you can use it to make your users feel more connected to your product. Designing for emotion is a great way to make your users feel connected to your product. This talk will cover the basics of designing for emotion and how you can use it to make your users feel more connected to your product. Designing for emotion is a great way to make your users feel connected to your product. This talk will cover the basics of designing for emotion and how you can use it to make your users feel more connected to your product.',
        imageUrl: './src/assets/heroImg/hero-1.png',
    },
]

const Body = () => {

    const headCoverStyles = 'flex h-[60px] px-4 pt-5 pb-3 flex-col self-stretch mb-6'

  const headTextStyles = 'text-white font-dlig-on font-[Lexend] text-[28px] not-italic font-extrabold leading-7 tracking-tighter'

    return (
        <body className='flex flex-col py-5 px-40 items-start flex-1 self-stretch bg-background h-fit'>
            <div className={headCoverStyles}>
                <div className={headTextStyles}>Events</div>
            </div>
            <div className='flex flex-col gap-20 px-4'>
                {events.map((event, index) => {
                    return <Event key={index} event={event}/>
                })}
            </div>
        </body>
    )
}

export default function Events() {
  return (
    <>
        {/* Header */}
        <Header/>
        {/*body*/}
        <Body/>
        {/*footer*/}
        <Footer/>
    </>
  )
}
