import Image from "next/image";

type CandidateCardProps = {
  photo: string;
  fullName: string;
  positionCategory: string;
  position: string;
  politicalParty: string;
};

const partyGradient: Record<string, string> = {
  PIGLASAPAT: "linear-gradient(to top right, #2C89DF, #FFCC07)",
  BAHAGHARI: "linear-gradient(to top right, #0E1DD2, #E3E3E4)",
  INDEPENDENT: "linear-gradient(to top right, #7A7A7A, #E2E2E2)",
};

export default function CandidateCard({
  photo,
  fullName,
  politicalParty,
}: CandidateCardProps) {
  const gradient = partyGradient[politicalParty] ?? partyGradient["INDEPENDENT"];

  return (
    <div className="flex flex-col items-center gap-2 md:gap-4 px-3 py-3 md:px-6 md:py-6 w-fit transition-transform duration-300 ease-in-out hover:scale-101">
      {/* Photo with gradient border */}
      <div
        className="rounded-xl md:rounded-2xl p-0.75 shadow-md"
        style={{ background: gradient }}
      >
        <div className="rounded-[10px] md:rounded-[14px] overflow-hidden bg-white w-52 h-65 md:w-68.5 md:h-85.75">
          <Image
            src={photo}
            alt={fullName}
            width={2048}
            height={2048}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Name & party */}
      <div className="flex flex-col items-center gap-0.5 md:gap-1 text-center">
        <p className="font-antenna-bold text-base md:text-2xl text-blue-600 leading-tight">
          {fullName}
        </p>
        <p className="font-montserrat font-semibold text-[10px] md:text-sm tracking-widest uppercase text-ind-gray">
          {politicalParty}
        </p>
      </div>
    </div>
  );
}
