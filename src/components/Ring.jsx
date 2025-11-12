import React from 'react'

const Ring = () => {
  return (
    <section id="ring" className="">
        <div className="bg-backgroundsecondary flex flex-col items-center justify-center shadow-md mb-12">
            <h2 className="mt-6 p-6 text-secondary font-bold text-xl"> Ring og få første samtale gratis </h2>
            <button className="flex flex-row mb-12 font-bold text-lg py-1.5 px-3.5 text-backgroundsecondary bg-primary rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:bg-stone-800 hover:text-backgroundsecondary hover:drop-shadow-lg">
                <img src="/nordfor_byg/phone.svg" className="mr-2 scale-105" />
                <p>+45 26 71 62 62</p>
            </button>
        </div>
    </section>
  )
}

export default Ring