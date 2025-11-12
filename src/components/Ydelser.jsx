import React from 'react'

const Ydelser = () => {
  return (
    <section id="ydelser" className="container mx-auto px-18 mt-24">       
        <div className="mb-6 items-center justify-center text-center">
          <h1 className="font-bold text-3xl text-primary">
              Ydelser
          </h1>
          <p className="font-regular text-lg">Vi tilbyder en bred vifte af ydelser og hjælp i forbindelse med bolig og byggeri.</p>
        </div>  
        <div className="flex items-center justify-center lg:flex-row sm:flex-col">   
          <div className="flex flex-col lg:mr-1.5 lg:w-1/2 sm:w-100%">
            <div className="bobbel flex flex-col pb-6"> 
                <h1 className="font-semibold text-2xl">Assistance ved køb af bolig</h1>
                <p className="font-regular text-lg">Vi tilbyder rådgivning, når du skal ud og købe ny bolig, så alt går præcis som det skal, og du slipper for ubehagelige overraskelse.</p>
            </div>
            <div className="bobbel mt-6 flex flex-col py-6"> 
                <h1 className="font-semibold text-2xl">Plan til ombygning og renovering</h1>
                <p className="font-regular text-lg">At renovere er ikke nemt, og det er ofte vigtigt, at tingene hverken bliver for dyre eller besværlige. Her vejleder vi gerne gennem hele projektet, så du slipper for det mest komplicerede detaljearbejde.</p>
            </div>
            <div className="bobbel mt-6 flex flex-col py-6"> 
                <h1 className="font-semibold text-2xl">Vejledning når i skal bygge nyt hus</h1>
                <p className="font-regular text-lg">Lad en ekspert vejlede jer, så byggeriet bliver sat ordentligt i gang, hvorefter processen bliver nemmere.</p>
            </div>
            <div className="bobbel mt-6 flex flex-col py-6"> 
                <h1 className="font-semibold text-2xl">Hjælp ved skader i bolig</h1>
                <p className="font-regular text-lg">Ved skader i boligen opstår der ofte komplikationer. Her er det vigtigt at søge hjælp fra en ekspert, der kan hjælpe dig på rette vej.</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-full sm:scale-75 lg:scale-100 flex sm:items-center sm:justify-center sm:-ml-6 lg:-mt-30 lg:pl-3 sm:-mt-12 sm:-mb-30 sm:flex-row"> 
            <img src="/by.png" className="object-cover h-182 rounded-sm"/>
          </div> 
        </div>
        <div className="mb-24 items-center justify-center text-center">
          <h1 className="mt-24 font-semibold text-2xl">
            Og meget mere...
          </h1>
          <p className="font-regular text-lg">
            <span className="font-semibold underline text-secondary transition-all duration-300 ease-in-out opacity-60 hover:opacity-100 cursor-pointer">Kontakt</span> os for yderligere information, eller hvis du har spørgsmål.
          </p>
        </div> 

    </section>
  )
}

export default Ydelser