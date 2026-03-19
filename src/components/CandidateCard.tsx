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
  positionCategory,
  position,
  politicalParty,
}: CandidateCardProps) {
  const gradient = partyGradient[politicalParty] ?? partyGradient["INDEPENDENT"];

  return (
    <div className="flex flex-col items-center gap-4 px-6 py-6 w-fit transition-transform duration-300 ease-in-out hover:scale-101">
      {/* Photo with gradient border */}
      <div
        className="rounded-2xl p-0.75 shadow-md"
        style={{ background: gradient }}
      >
        <div className="rounded-[14px] overflow-hidden bg-white w-68.5 h-85.75">
          <Image
            src={photo}
            alt={fullName}
            width={274}
            height={343}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Name & party */}
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="font-antenna-bold text-2xl text-blue-600 leading-tight">
          {fullName}
        </p>
        <p className="font-montserrat font-semibold text-sm tracking-widest uppercase text-ind-gray">
          {politicalParty}
        </p>
      </div>
    </div>
  );
}
