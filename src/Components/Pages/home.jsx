import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../styles.css'


const FAQs = [
  { question: "What are the dates of the event?", answer: "The event will be held from 1st to 3rd April 2024." },
  { question: "How can I register for the event?", answer: "You can register for the event by visiting our website." },
  { question: "Are there any registration fees?", answer: "No, the event is free for all." },
  { question: "What are the prizes for the competitions?", answer: "The prizes for the competitions will be announced soon." },
]


const headCoverStyles = 'flex h-[60px] px-4 pt-5 pb-3 flex-col self-stretch'

  const headTextStyles = 'text-white font-dlig-on font-[Lexend] text-[22px] not-italic font-bold leading-7'

  
function Hero(){
  return(
    <div className='flex w-full flex-col items-start bg-transparent h-fit'>
    <div className='flex w-full px-36 flex-col items-center h-fit'>
      <img src='./src/assets/Hero.png' alt='logo' className='' />
    </div>
    </div>
  )
}

function About(){
  return(
    <div className='flex px-[60px] flex-col items-start self-stretch bg-transparent pt-[52px] h-fit'>
      <div className='flex flex-col justify-between items-center self-stretch h-fit'>
        <div className='text-center font-[Inter] text-5xl font-semibold leading-normal tracking-[1.44px] h-fit' style={{
          backgroundImage: 'linear-gradient(121deg, #FBB144 0%, #DFC9A7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          ABOUT
        </div>
        <div className='flex w-full justify-between items-start'>
          <div className='flex flex-col items-start self-stretch w-1/3'>
            <div className='flex flex-col items-start gap-4 w-full h-fit'>
              <div className='text-[#9ba1a8] text-xl font-semibold leading-7 tracking-[5px] uppercase w-full h-fit'>
                St. Peter's Techfest
              </div>
              <div className='text-[#eff2f5] text-3xl font-bold leading-10 capitalize w-full h-fit'>
                Technofi 2024
              </div>
              <div className='flex pr-4 justify-center items-start self-stretch w-full gap-4'>
                <div className='w-1 h-full border rounded-xl opacity-40 bg-[#feb43c]' />
                <div className='child-1 text-base font-medium leading-6 tracking-[0.48px] text-white h-fit'>
                Technofi, the conjugation of the finest
technical minds of the country is the annual
technical fest of St. Peter's. It is a platform
for your ideas to speak out loud and to
promote the skills aiming to reach the pinnacle
of your mind.
                </div>
              </div>
            </div>
            <div className='flex pt-48 flex-col items-start self-stretch'>
              <div className='flex items-start self-stretch'>
                <div className='flex items-start'>
                  <div className='flex flex-col justify-center items-start self-stretch w-fit pr-[10px]'>
                    <div className='flex h-full items-start w-[21px]'>
                      <img src='./src/assets/arrow.png' alt='logo' className='w-[21px] h-[28px]' />
                    </div>
                  </div>
                  <div className='flex flex-col items-start self-stretch'>
                  <div className='flex flex-col items-start self-stretch'>
                    <div className='text-[#eff2f5] text-2xl font-semibold leading-8 capitalize'>
                    Events
                    </div>
                  </div>
                  <div className='flex flex-col items-start self-stretch'>
                    <div className='text-white text-base font-medium leading-6 tracking-[0.48px]'>
                    Experience the power of creativity and inspiration at our
events. We bring together artists, thinkers, and innovators
from across different fields to spark new ideas and share their
stories. Whether you're a creative professional or just looking
to be inspired, our events are the perfect place to find your
next big idea.
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/3'>
            <img src='./src/assets/robot.png' alt='logo' className=''/>
          </div>
          <div className='w-1/3'>
          <div className='flex py-48 flex-col items-start self-stretch'>
              <div className='flex items-start self-stretch'>
                <div className='flex items-start'>
                  <div className='flex flex-col justify-center items-start self-stretch w-fit pr-[10px]'>
                    <div className='flex h-full items-start w-[21px]'>
                      <img src='./src/assets/arrow.png' alt='logo' className='w-[21px] h-[28px]' />
                    </div>
                  </div>
                  <div className='flex flex-col items-start self-stretch'>
                  <div className='flex flex-col items-start self-stretch'>
                    <div className='text-[#eff2f5] text-2xl font-semibold leading-8 capitalize'>
                    Mission
                    </div>
                  </div>
                  <div className='flex flex-col items-start self-stretch'>
                    <div className='text-white text-base font-medium leading-6 tracking-[0.48px]'>
                    Our mission is to inspire and empower the next generation of innovators. We believe that technology has the power to change the world, and we want to help students develop the skills and confidence they need to make a positive impact. We aim to create a supportive and inclusive community where students can learn from each other, collaborate on projects, and explore new ideas. Ultimately, we hope to foster a love of learning and a spirit of curiosity that will stay with our participants long after Technofi ends.
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function News(){
  return(
    /* From Uiverse.io by ElSombrero2 */ 
<div class="card">
  <div class="content">
    <div class="back">
      <div class="back-content">
                <strong>Brochure Release</strong>
      </div>
    </div>
    <div class="front">
      
      <div class="img">
        <div class="circle">
        </div>
        <div class="circle" id="right">
        </div>
        <div class="circle" id="bottom">
        </div>
      </div>

      <div class="front-content">
        <small class="badge">11 August 2024</small>
        <div class="description">
          <div class="title">
            <p class="title">
              <strong>Brochure was released on this date</strong>
            </p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

function NewsSet(){
  return(
    <div className='flex justify-center items-center px-24 w-full'>
    <div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mt-5 p-4 w-full'>
      <News/>
      <News/>
      <News/>
      <News/>
    </div>
    </div>
  )
}

const FAQComp = ({question, answer}) => {
  return(
    <details class="flex flex-col rounded-xl bg-[#151515] px-4 py-2 group w-full ">
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

const FAQSec = () => {
  return(
    <section className='w-4/5 mb-20 mt-20'>
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
    <section className='w-full px-40'>
            {/*Directions*/}
            <div class="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between">
              <div class="flex items-center gap-4">
                <div class="text-white flex items-center justify-center rounded-lg shrink-0 size-12" data-icon="MapPin" data-size="24px" data-weight="regular">
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
                <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#151515] text-white text-sm font-medium leading-normal w-fit hover:bg-button transform hover:scale-105 transition-transform duration-200 shadow-lg">
                  <span class="truncate flex items-center">Get Directions</span>
                </button>
              </div>
            </div>
            {/*Email*/}
            <div class="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between">
              <div class="flex items-center gap-4">
                <div class="text-white flex items-center justify-center rounded-lg shrink-0 size-12" data-icon="EnvelopeOpen" data-size="24px" data-weight="regular">
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
                <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#151515] text-white text-sm font-medium leading-normal w-fit hover:bg-button transform hover:scale-105 transition-transform duration-200 shadow-lg">
                  <span class="truncate flex items-center">Open Mail</span>
                </button>
              </div>
            </div>
            {/*Phone*/}
            <div class="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between">
              <div class="flex items-center gap-4">
                <div class="text-white flex items-center justify-center rounded-lg shrink-0 size-12" data-icon="Phone" data-size="24px" data-weight="regular">
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
                <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#151515] text-white text-sm font-medium leading-normal w-fit hover:bg-button transform hover:scale-105 transition-transform duration-200 shadow-lg">
                  <span class="truncate flex items-center">Call Now</span>
                </button>
              </div>
            </div>
        </section>
  )
}

export default function Home() {
  return (
    <div className='bg-background'>
    <Header/>
      <Hero />
      <About />
      <NewsSet />
      <div className='flex justify-center items-center'>
      <FAQSec />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}
