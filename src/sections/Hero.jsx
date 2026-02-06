import React from 'react'

function Hero() {
  return (
    <section id='hero'>
        {/*Bg*/}
        <div className='absolute inset-0'>
          <img src="/hero-bg.jpg" alt="Hero image" className='w-full h-full object-cover opacity-40 ' />
          <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background' />
        </div>
        {/*Floating dots*/}
        <div className='absolute overflow-hidden pointer-events-none inset-0 '>
          {[...Array(30)].map((_,i) => (
            <div className='absolute w-1.5 h-1.5 rounded-full opacity-60 ' 
            style={{
              background : "#20B2A6",
              left : `${Math.random() * 100}%`,
              top : `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random()*20}s ease-in-out infinite`,
              animationDelay:`${Math.random()*5}s`
            }}
            />
          ))}
        </div>
        {/*Content*/}
        <div>
          {/*left col - text and description*/}
          <div>
            <div className='animate-fade-in'>
              <span className='h-2 w-2 bg-primary rounded-full'>Software Engineering student</span>
            </div>
          </div>
          {/*right col -profile picture*/}
        </div>
    </section>
  )
}

export default Hero