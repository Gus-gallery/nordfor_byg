import React from 'react'

const Footer = () => {
  return (
    <section id="footer">
        <div className="bg-backgroundsecondary flex flex-col lg:flex-row text-center lg:text-left items-center justify-between mt-12 gap-6 p-12">
          <div>
            <h3 className="text-lg font-regular text-stone-800">Kontakt</h3>
            <p className="font-light text-md text-primary">
              Mail: nordfor@gmail.com
            </p>
            <p className="font-light text-md text-primary">
              Tlf: +45 26 71 62 62
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-regular text-stone-800">Om os</h3>
            <p className="font-light text-md text-primary">
              Vi er et lille firma, der gerne tager imod de svære opgaver. Byggeri kan
            </p>
            <p className="font-light text-md text-primary">
              tage tid, og for os er det vigtigste, at opgaven bliver ført ordentligt til dørs.
            </p>
          </div>
          <div>
            <h3 className="font-regular text-lg text-primary">
              Område
            </h3>
            <p className="font-light text-md text-primary">
              Vi arbejder primært i Storkøbehavn og Nordsjælland, 
            </p>
            <p className="font-light text-md text-primary">
              og vi svinger straks forbi, hvis du bor i området.
            </p>
          </div>
        </div>
    </section>
  )
}

export default Footer