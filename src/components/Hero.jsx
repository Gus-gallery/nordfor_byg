import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center h-[70vh] overflow-hidden">
        <img src="hero2.png" alt="Hero bg" className="absolute bottom-0 left-0 w-full h-auto min-h-full object-cover object-bottom opacity-50"/>
        
        <div className="relative z-10 text-center">
            <h1 className="text-5xl text-stone-800 font-bold text-center">
                Nordfor Byggerådgivning
            </h1>
            <h4 className="mt-2 font-semibold text-lg text-secondary">
                Byggerådgivning og privat vejledning i Storkøbenhavn og Nordsjælland
            </h4>
            <button className="mt-6 font-bold text-lg py-1.5 px-3.5 text-stone-800 bg-backgroundsecondary rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-stone-800 hover:text-backgroundsecondary hover:drop-shadow-lg">
                Bestil konsultation
            </button>
        </div>
    </section>
  )
}

export default Hero