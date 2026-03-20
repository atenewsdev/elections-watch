import React from 'react'

const Header = () => {
  return (
    <div className="w-full h-150.75 px-44 inline-flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('/AtenewsElectionsWatch_Header 1.png')" }}
    >
    <div className="w-screen h-72 flex flex-col items-center gap-2">
        <div className="self-stretch h-48 flex flex-col items-center gap-20">

        {/* Logo & Title */}
        <div className="flex flex-col items-center gap-16">
            <img className="w-72 h-12" src="/AtenewsLogo_WhiteWhole.png" alt="Atenews Logo" />
            <p className="text-8xl font-antenna-bold leading-6 text-center">
            ELECTIONS WATCH
            </p>
        </div>

        {/* Subtitle */}
        <div className="w-203.25 flex flex-col items-center text-center space-y-1.5">
            <p className="text-white text-xl font-regular font-montserrat leading-6">
            Atenews Special Election Coverage on the
            </p>
            <p className="text-white text-2xl font-bold font-montserrat leading-6">
            SAMAHAN Central Board Elections 2026
            </p>
        </div>

        </div>
    </div>
    </div>
  )
}

export default Header
