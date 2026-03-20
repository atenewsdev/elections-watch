import React from 'react'

interface HeaderProps {
  title: string;
  showLogo?: boolean;
}

export default function Header({ title, showLogo = true }: HeaderProps) {
  return (
    <div
      className="w-full h-150.75 px-44 inline-flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/AtenewsElectionsWatch_Header 1.png')" }}
    >
      <div className="w-full h-72 flex flex-col items-center gap-2">
        <div className="self-stretch h-48 flex flex-col items-center gap-16">

          {/* Logo & Title */}
          <div className="flex flex-col items-center gap-8">
            {showLogo && (
              <img className="w-72 h-12" src="/AtenewsLogo_WhiteWhole.png" alt="Atenews Logo" />
            )}
            <p className="text-8xl font-antenna-bold text-center">
              {title}
            </p>
          </div>

          {/* Subtitle */}
          <div className="w-full flex flex-col items-center text-center space-y-3">
            <p className="text-white text-xl font-regular font-montserrat leading-6">
              Atenews Special Election Coverage on the
            </p>
            <p className="text-white text-2xl font-bold font-montserrat leading-6">
              SAMAHAN Central Board Elections 2026
            </p>
          </div>

        {/* Component Usage: 
            <Header title="ELECTIONS WATCH" showLogo={true}/>
            <Header title="CANDIDATES PROFILE" showLogo={false}/>
        */}

        </div>
      </div>
    </div>
  );
}
