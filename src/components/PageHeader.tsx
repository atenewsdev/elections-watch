import Image from "next/image";

interface PageHeaderProps {
  heading: string;
  disclaimer?: string;
  showLogo?: boolean;
}

export default function PageHeader({ heading, disclaimer, showLogo = false }: PageHeaderProps) {
  return (
    <>
      <section className="relative w-full py-16 md:py-0 md:h-150 flex flex-col items-center justify-center text-white text-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/elecwatch-header.png"
              alt="Elections Watch Header"
              className="w-full h-full object-cover"
            />
          </div>
        <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4 px-8 md:px-4 w-full">
          {showLogo && (
            <div className="flex items-center">
              <Image
                src="/AtenewsLogo_WhiteWhole.png"
                alt="Atenews"
                width={214}
                height={100}
                className="w-32 h-auto md:w-50 md:h-auto"
              />
            </div>
          )}
          <h1 className="font-antenna-bold text-[2.5rem] sm:text-5xl md:text-8xl uppercase leading-tight md:leading-none whitespace-pre-line w-full">
            {heading}
          </h1>
          <div className="flex flex-col items-center gap-0.5">
            <p className="font-montserrat text-xs sm:text-sm md:text-base text-white/80">
              Atenews Special Election Coverage on the
            </p>
            <p className="font-montserrat font-semibold text-xs sm:text-sm md:text-base">
              SAMAHAN Central Board Elections 2026
            </p>
          </div>
          {disclaimer && (
            <p className="hidden md:block font-montserrat italic text-xs text-white/60 mt-6">
              {disclaimer}
            </p>
          )}
        </div>
      </section>

      {disclaimer && (
        <p className="md:hidden font-montserrat italic text-xs text-blue-900/50 text-center py-4 px-4">
          {disclaimer}
        </p>
      )}
    </>
  );
}
