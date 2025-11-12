import React from 'react'

const Ydelser = () => {
  return (
    <section id="ydelser" className="container mx-auto px-18">       
        <div className="mb-6 items-center justify-center text-center">
          <h1 className="font-bold text-3xl text-primary">
              Ydelser
          </h1>
          <p className="font-regular text-lg">Vi tilbyder en bred vifte af ydelser og hjælp i forbindelse med bolig og byggeri.</p>
        </div>  
        <div className="bg-backgroundsecondary flex lg:flex-row sm:flex-col justify-between rounded-sm p-6">   
          <div className="flex- flex-col lg:w-1/2 sm:w-100% pr-6">
            <div className="flex flex-col pb-6"> 
                <h1 className="font-semibold text-2xl">Køb af bolig</h1>
                <p className="font-regular text-lg">Vi tilbyder rådgivning, når du skal ud og købe ny bolig, så alt går præcis som det skal, og du slipper for ubehagelige overraskelse.</p>
            </div>
            <div className="flex flex-col py-6"> 
                <h1 className="font-semibold text-2xl">Ombygning og renovering</h1>
                <p className="font-regular text-lg">At renovere er ikke nemt, og det er ofte vigtigt, at tingene hverken bliver for dyre eller besværlige. Her vejleder vi gerne gennem hele projektet, så du slipper for det mest komplicerede detaljearbejde.</p>
            </div>
            <div className="flex flex-col py-6"> 
                <h1 className="font-semibold text-2xl">Bygge nyt hus</h1>
                <p className="font-regular text-lg">Lad en ekspert vejlede jer, så byggeriet bliver sat ordentligt i gang, hvorefter processen bliver nemmere.</p>
            </div>
            <div className="flex flex-col py-6"> 
                <h1 className="font-semibold text-2xl">Skader i bolig</h1>
                <p className="font-regular text-lg">Ved skader i boligen opstår der ubehag og komplikationer. Her er det vigtigt at søge hjælp fra en ekspert, der kan hjælpe dig på rette vej.</p>
            </div>
          </div>
          <div className="w-1/2 self-center"> 
            <img src="/hus.png" className="object-cover object-contain rounded-sm border-2 border-primary"/>
          </div> 
        </div>
        <div className="mb-6 items-center justify-center text-center">
          <h1 className="mt-6 font-semibold text-2xl">
            Og meget mere...
          </h1>
          <p className="font-regular text-lg">
            Kontakt os endelig for yderligere information, eller hvis du har spørgsmål.
          </p>
        </div> 

    </section>
  )
}

export default Ydelser