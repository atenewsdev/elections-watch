import Image from "next/image";
import CandidateCard from "@/components/CandidateCard";
import candidates from "@/data/candidates.json";

const top4Sections = [
  { label: "Presidential Candidates", key: "pres" },
  { label: "Vice Presidential Candidates", key: "vp" },
  { label: "Treasurer Candidates", key: "treas" },
  { label: "Secretary-General Candidates", key: "secgen" },
] as const;

const clusterSections = [
  { label: "Accountancy Cluster", key: "acc" },
  { label: "Business & Management Cluster", key: "b&m" },
  { label: "Computer Studies Cluster", key: "cs" },
  { label: "Humanities & Letters Cluster", key: "humlet" },
  { label: "Social Sciences Cluster", key: "ss" },
  { label: "School of Nursing", key: "son" },
  { label: "School of Engineering & Architecture", key: "sea" },
] as const;

export default function CandidatesProfilePage() {
  return (
    <main>
      {/* Hero header */}
      <section className="relative w-full h-[480px] flex flex-col items-center justify-center text-white text-center">
        <Image
          src="/elecwatch-header.png"
          alt="Elections Watch Header"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 flex flex-col items-center gap-4 px-4">
          <h1 className="font-antenna-bold text-6xl md:text-8xl uppercase leading-none">
            Candidates<br />Profile
          </h1>
          <p className="font-montserrat text-sm md:text-base text-white/80">
            Atenews Special Election Coverage on the
          </p>
          <p className="font-montserrat font-semibold text-sm md:text-base">
            SAMAHAN Central Board Elections 2026
          </p>
          <p className="font-montserrat italic text-xs text-white/60 mt-6">
            *Click a candidate&apos;s image below to view their profile.
          </p>
        </div>
      </section>

      {/* Top 4 */}
      <section className="flex flex-col items-center gap-16 py-16 px-4">
        {top4Sections.map(({ label, key }) => (
          <div key={key} className="flex flex-col items-center gap-8 w-full">
            <h2 className="font-antenna-bold text-3xl text-blue-500 text-center">
              {label}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {candidates["top-4"][key].map((c) => (
                <CandidateCard
                  key={c.fullName}
                  photo={c.photo}
                  fullName={c.fullName}
                  positionCategory={c.positionCategory}
                  position={c.position}
                  politicalParty={c.politicalParty}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Cluster Representatives */}
      <section className="flex flex-col items-center gap-16 py-16 px-4">
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-antenna-bold text-4xl text-blue-500 text-center">
            Cluster Representatives
          </h2>
          <div className="w-16 h-0.5 bg-blue-500 rounded-full" />
        </div>

        {clusterSections.map(({ label, key }) => (
          <div key={key} className="flex flex-col items-center gap-8 w-full">
            <h3 className="font-antenna-bold text-2xl text-blue-500 text-center">
              {label}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {candidates["cluster-reps"][key].map((c) => (
                <CandidateCard
                  key={c.fullName}
                  photo={c.photo}
                  fullName={c.fullName}
                  positionCategory={c.positionCategory}
                  position={c.position}
                  politicalParty={c.politicalParty}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
