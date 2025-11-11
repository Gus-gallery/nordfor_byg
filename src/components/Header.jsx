import React from 'react'

const Header = () => {

    const label = ["Ydelser", "Om os"];

  return (
    <header className="sticky">
        <nav className="min-w-screen p-4 px-6 container mx-auto flex flex-wrap items-center justify-between shadow-lg bg-backgroundsecondary">
            <h3 className="text-lg text-primary font-semibold">
                Nordfor Byggerådgivning
            </h3>

            <ul className="flex flex-wrap md:flex-row justify-end items-center font-regular gap-12 text-base">
                {label.map((label) => (
                    <li key={label}>
                        <p
                        className="text-primary opacity-60 cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out" 
                        >
                            {label}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header