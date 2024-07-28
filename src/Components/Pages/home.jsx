import React from 'react'
import Header from '../header'
import competitionsImage from '../../assets/key/competitions.png'
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';



const about = "Technofi is an annual technical festival organized by St. Peter's College. It is one of the largest technical festivals in India. The festival is a platform for students to showcase their technical prowess. With a variety of competitions and quizzes, the festival is a haven for tech enthusiasts. The festival also hosts a number of workshops and seminars that provide students with the opportunity to learn from experts in the field. Technofi aims to inspire and engage the next generation of technologists."

  const headCoverStyles = 'flex h-[60px] px-4 pt-5 pb-3 flex-col self-stretch'

  const headTextStyles = 'text-white font-dlig-on font-[Lexend] text-[22px] not-italic font-bold leading-7'

  const highlights = [
    { name: 'Great Competitions', imageUrl: competitionsImage },
    { name: 'Exciting Workshops', imageUrl: competitionsImage },
    { name: 'Inspiring Seminars', imageUrl: competitionsImage },
    { name: 'Great Competitions', imageUrl: competitionsImage },
  ]

  const news = [
    { name: 'Great Competitions', imageUrl: competitionsImage },
    { name: 'Exciting Workshops', imageUrl: competitionsImage },
    { name: 'Inspiring Seminars', imageUrl: competitionsImage },
    { name: 'Great Competitions', imageUrl: competitionsImage },
  ]

  const sponsors = [
    { imageUrl: competitionsImage },
    { imageUrl: competitionsImage },
    { imageUrl: competitionsImage },
  ]

  const FAQs = [
    { question: "What are the dates of the event?", answer: "The event will be held from 1st to 3rd April 2024." },
    { question: "How can I register for the event?", answer: "You can register for the event by visiting our website." },
    { question: "Are there any registration fees?", answer: "No, the event is free for all." },
    { question: "What are the prizes for the competitions?", answer: "The prizes for the competitions will be announced soon." },
  ]

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

const FAQComp = ({question, answer}) => {
  return(
    <details class="flex flex-col rounded-xl bg-[#492d22] px-4 py-2 group w-full ">
      <summary class="flex cursor-pointer items-center justify-between gap-6 py-2">
        <p class="text-white text-sm font-bold font-dlig-on font-[Lexend] not-italic leading-6">{question}</p>
        <div class="text-white group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </div>
      </summary>
      <p class="text-[#cba090] text-sm font-semibold leading-normal pb-2 font-dlig-on font-[Lexend] not-italic">{answer}</p>
    </details>
  )
}

const Hero = () => {

  const navigate = useNavigate();

  return(
  <section className='w-full'>
        <div className='flex flex-col items-start self-stretch h-fit p-4'>
          <div className='flex h-[480px] min-h-[480px] pt-[170px] pb-[138px] pl-[169px] pr-[137px] flex-col justify-end items-center gap-4 self-stretch rounded-xl bg-hero-pattern bg-no-repeat bg-cover bg-bottom'>
            <div className='flex flex-col items-center gap-2 justify-center'>
              <div className='text-white text-center font-dlig-on font-[Lexend] text-5xl not-italic font-black leading-[60px] tracking-[-2px]'>
              Welcome to Technofi 2024
              </div>
              <div className='text-white text-center font-dlig-on font-[Lexend] text-[16px] not-italic font-normal leading-6'>
              Where science meets technology
              </div>
            </div>
            <button className='flex h-16 min-w-[84px] max-w-[480px] px-5 justify-center items-center rounded-xl shadow-lg bg-button transform hover:scale-105 transition-transform duration-200' onClick={() => navigate('/about')}>
              <div className='flex items-center overflow-hidden text-white text-center font-dlig-on text-ellipsis font-[Lexend] text-[16px] not-italic font-bold leading-6'>
                Know More
              </div>
            </button>
          </div>
        </div>
  </section>
  )
}

const About = () => {
  return(
    <section>
        <div className={headCoverStyles}>
          <div className={headTextStyles}>About Technofi</div>
        </div>
        <div className='flex px-4 pt-1 pb-3 flex-col items-start self-stretch h-fit'>
          <div className='self-stretch text-white font-dlig-on font-[Lexend] text-[16px] not-italic font-normal leading-6'>
            {about}
          </div>
        </div>
        </section>
  )
}

const Highlights = () => {
  return(
    <section>
        <div className={headCoverStyles}>
          <div className={headTextStyles}>Key Highlights</div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mt-5 p-4'>
            {highlights.map((highlight, index) => (
              <Highlight key={index} name={highlight.name} imageUrl={highlight.imageUrl} />
            ))}
        </div>
        </section>
  )
}

const NewSect = () => {
  return(
    <section>
        <div className={headCoverStyles}>
          <div className={headTextStyles}>News and Updates</div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mt-5 p-4'>
            {news.map((news, index) => (
              <News key={index} name={news.name} imageUrl={news.imageUrl} />
            ))}
        </div>
        </section>
  )
}

const Sponsors = () => {
  return(
    <section>
        <div className={headCoverStyles}>
          <div className={headTextStyles}>Our Sponsors</div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mt-5 p-4'>
            {sponsors.map((sponsor, index) => (<>
            <img src={sponsor.imageUrl} alt={sponsor} className='h-60 w-full object-cover rounded-xl'/>
            </>))}
        </div>
        </section>
  )
}

const FAQSec = () => {
  return(
    <section className='w-full'>
        <div className={headCoverStyles}>
          <div className={headTextStyles}>FAQs</div>
        </div>
        <div className='flex flex-col p-4 gap-3'>
            {FAQs.map((FAQ, index) => (
              <FAQComp key={index} question={FAQ.question} answer={FAQ.answer} />
            ))}
        </div>
        </section>
  )
}

const Contact = () => {
  return(
    <section className='w-full'>
        <div className={headCoverStyles}>
          <div className={headTextStyles}>Contact Us</div>
        </div>
            {/*Directions*/}
            <div class="flex items-center gap-4 bg-[#231510] px-4 min-h-[72px] py-2 justify-between">
              <div class="flex items-center gap-4">
                <div class="text-white flex items-center justify-center rounded-lg bg-[#492d22] shrink-0 size-12" data-icon="MapPin" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                  </svg>
                </div>
                <div class="flex flex-col justify-center">
                  <p class="text-white text-base font-medium leading-normal line-clamp-1">St. Peter's College, Agra</p>
                  <p class="text-[#cba090] text-sm font-normal leading-normal line-clamp-2">St. Peter's College Agra, Agra, Uttar Pradesh, India</p>
                </div>
              </div>
              <div class="shrink-0">
                <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#492d22] text-white text-sm font-medium leading-normal w-fit hover:bg-button transform hover:scale-105 transition-transform duration-200 shadow-lg">
                  <span class="truncate flex items-center">Get Directions</span>
                </button>
              </div>
            </div>
            {/*Email*/}
            <div class="flex items-center gap-4 bg-[#231510] px-4 min-h-[72px] py-2 justify-between">
              <div class="flex items-center gap-4">
                <div class="text-white flex items-center justify-center rounded-lg bg-[#492d22] shrink-0 size-12" data-icon="EnvelopeOpen" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"></path>
                  </svg>
                </div>
                <div class="flex flex-col justify-center">
                  <p class="text-white text-base font-medium leading-normal line-clamp-1">Send Email</p>
                  <p class="text-[#cba090] text-sm font-normal leading-normal line-clamp-2">contact@technofi.live</p>
                </div>
              </div>
              <div class="shrink-0">
                <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#492d22] text-white text-sm font-medium leading-normal w-fit hover:bg-button transform hover:scale-105 transition-transform duration-200 shadow-lg">
                  <span class="truncate flex items-center">Open Mail</span>
                </button>
              </div>
            </div>
            {/*Phone*/}
            <div class="flex items-center gap-4 bg-[#231510] px-4 min-h-[72px] py-2 justify-between">
              <div class="flex items-center gap-4">
                <div class="text-white flex items-center justify-center rounded-lg bg-[#492d22] shrink-0 size-12" data-icon="Phone" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                  </svg>
                </div>
                <div class="flex flex-col justify-center">
                  <p class="text-white text-base font-medium leading-normal line-clamp-1">Call Us</p>
                  <p class="text-[#cba090] text-sm font-normal leading-normal line-clamp-2">+91-99999-99999</p>
                </div>
              </div>
              <div class="shrink-0">
                <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#492d22] text-white text-sm font-medium leading-normal w-fit hover:bg-button transform hover:scale-105 transition-transform duration-200 shadow-lg">
                  <span class="truncate flex items-center">Call Now</span>
                </button>
              </div>
            </div>
        </section>
  )
}

const Body = () => {
  return(
    <body className='flex flex-col py-5 px-40 items-start flex-1 self-stretch bg-background h-fit'>
        <Hero />
        <About />
        <Highlights />
        <NewSect />
        <Sponsors />
        <FAQSec />
        <Contact />
      </body>
  )
}

export default function Home() {

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
