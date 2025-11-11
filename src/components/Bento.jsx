import React from 'react'

const Bento = () => {
  return (
    <section id="bento" className="container mx-auto py-18 px-5">
      <h1 className="text-2xl font-semibold text-center mx-auto pb-12 lg:w-160">Byggeri kræver papirarbejde, kontakter og kendskab til mange procedurer og regler, hvilket kan være svært at overskue uden den rigtige vejledning.</h1>
      <img src="" />

      <div className="masonry grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 text-primary">
        {/*VENSTRE SIDE*/}
        <div className="flex flex-col justify-between gap-6 opacity-100 -translate-y-6">
          <div className="bg-backgroundsecondary p-10 rounded-sm">
            <h2 className="text-2xl font-semibold">Hos Nordfor Byggerådgivning får du:</h2>
            <p className="font-regular text-xl">Privat og professionel vejledning fra en byggerådgiver med årtiers erfaring inden for byggeri. Nordfor sørger for at have det store overblik, så byggeriet bliver fulgt til dørs, uden for meget besvær. </p>
          </div>
          <div className="bg-backgroundsecondary p-10 rounded-sm">
            <h2 className="text-2xl font-semibold">Placering</h2>
            <p className="font-regular text-xl">
            Nordfor Byggerådgivning arbejder primært i Storkøbenhavn og Nordsjælland, men vi kører gerne længere, hvis opgaven kræver det.
            </p>
          </div>
        </div>
        {/*HØJRE SIDE*/}
        <div className="flex flex-col justify-between gap-6 opacity-100 -translate-y-6">
          <div className="relative bg-[url(/bento_bg.png)] bg-no-repeat bg-bottom bg-cover p-10 rounded-sm border-4 border-backgroundsecondary">
            <div className="absolute inset-0 bg-backgroundsecondary/60"></div> {/* 40% sort lag */}
            
            <p className="relative z-10 font-medium text-2xl text-stone-800">
            Vi er bygnings- og håndværksnørder, og vi kommer med hurtige, ærlige svar på dine spørgsmål i forbindelse med byggeriet.
            </p>
          </div>
          <div className="h-full p-10 bg-backgroundsecondary rounded-sm">
            <h2 className="text-2xl font-semibold">Erfaring</h2>
            <p className="relative z-10 font-regular text-primary text-xl">
            I Nordfor har vi erfaring inden for privat og industriel byggerådgivning, og vi tager imod projekter af alle slags - også hvis det drejer sig om et vejledning i forbindelse med et renoveringsprojekt i hjemmet.
            </p>
          </div>
        </div>
        
      </div>
   
   </section>
  )
}

export default Bento