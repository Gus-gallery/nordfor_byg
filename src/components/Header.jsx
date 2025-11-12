import React from 'react'

const Header = () => {

    const label = [
        { name: "Om os", id: "bento" },
        { name: "Ydelser", id: "ydelser" },
        { name: "Kontakt", id: "footer"},
    ];

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <header className="sticky top-0 z-50">
        <nav className="min-w-screen p-3 lg:p-4 lg:px-6 container mx-auto flex flex-wrap items-center justify-between shadow-lg bg-backgroundsecondary">
            <h3 className="text-lg text-primary font-semibold">
                Nordfor Byggerådgivning
            </h3>

            <ul className="flex flex-wrap md:flex-row justify-end items-center font-regular gap-4 lg:gap-12 text-base">
                {label.map((label) => (
                    <li key={label.id}>
                        <p
                        onClick={() => handleScroll(label.id)}
                        className="text-primary opacity-60 cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out" 
                        >
                            {label.name}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Header