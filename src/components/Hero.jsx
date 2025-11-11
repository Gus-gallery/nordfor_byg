import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center h-[50vh] overflow-hidden">
        <img src="hero.jpg" alt="Hero bg" className="absolute inset-0 w-full object-cover opacity-30"/>
        
        <div className="relative z-10 text-center">
            <h1 className="text-5xl text-stone-800 font-bold text-center">
                Nordfor Byggerådgivning
            </h1>
            <h4 className="mt-2 font-semibold text-lg text-secondary">
                Byggerådgivning og privat vejledning til både store og små projekter
            </h4>
            <button className="mt-12 font-bold text-lg py-1.5 px-3.5 text-stone-800 bg-backgroundsecondary rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-stone-800 hover:text-backgroundsecondary hover:drop-shadow-lg">
                Bestil konsultation
            </button>
        </div>
    </section>
  )
}

export default Hero