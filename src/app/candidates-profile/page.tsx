import CandidateCard from "@/components/CandidateCard";
import PageHeader from "@/components/PageHeader";
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
      <PageHeader
        heading={"Candidates\nProfile"}
        disclaimer="*Click a candidate's image below to view their profile."
      />

      {/* Top 4 */}
      <section className="flex flex-col items-center gap-10 md:gap-16 py-10 md:py-16 px-4">
        {top4Sections.map(({ label, key }) => (
          <div key={key} className="flex flex-col items-center gap-4 md:gap-8 w-full">
            <h2 className="font-antenna-bold text-xl md:text-3xl text-blue-500 text-center">
              {label}
            </h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
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
      <section className="flex flex-col items-center gap-10 md:gap-16 py-10 md:py-16 px-4">
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-antenna-bold text-2xl md:text-4xl text-blue-400 text-center">
            Cluster Representatives
          </h2>
          <div className="w-16 h-0.5 bg-blue-400 rounded-full" />
        </div>

        {clusterSections.map(({ label, key }) => (
          <div key={key} className="flex flex-col items-center gap-4 md:gap-8 w-full">
            <h3 className="font-antenna-bold text-lg md:text-2xl text-blue-500 text-center">
              {label}
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
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
