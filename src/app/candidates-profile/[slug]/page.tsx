import Image from "next/image";
import { notFound } from "next/navigation";
import Badge from "@/components/Badge";
import RoundedButton from "@/components/RoundedButton";
import candidates from "@/data/candidates.json";
import platformsData from "@/data/platforms.json";

// ── Types ──────────────────────────────────────────────────────────────────

type Candidate = {
  photo: string;
  fullName: string;
  positionCategory: string;
  position: string;
  politicalParty: string;
};

type BulletPoint = {
  text: string;
  subpoints?: string[];
};

type BodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; label?: string; points: BulletPoint[] }
  | { type: "subitems"; items: { title: string; text: string }[] };

type PlatformItem = {
  title: string;
  body: BodyBlock[];
};

type Category = {
  name: string;
  body?: BodyBlock[];
  items: PlatformItem[];
};

type CandidatePlatforms = {
  theme: string | null;
  categories: Category[];
};

// ── Helpers ────────────────────────────────────────────────────────────────

function photoToSlug(photo: string): string {
  const filename = photo.split("/").pop()!.replace(".jpg", "");
  return filename.replace(/^[^-]+-/, "");
}

function getAllCandidates(): Candidate[] {
  const all: Candidate[] = [];
  for (const section of Object.values(candidates["top-4"])) {
    all.push(...(section as Candidate[]));
  }
  for (const section of Object.values(candidates["cluster-reps"])) {
    all.push(...(section as Candidate[]));
  }
  return all;
}

export function generateStaticParams() {
  return getAllCandidates().map((c) => ({ slug: photoToSlug(c.photo) }));
}

// ── Body block renderer ────────────────────────────────────────────────────

function BodyBlocks({ blocks }: { blocks: BodyBlock[] }) {
  return (
    <div className="flex flex-col gap-3">
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="font-montserrat text-sm md:text-base text-blue-600">
              {block.text}
            </p>
          );
        }

        if (block.type === "bullets") {
          return (
            <div key={i} className="flex flex-col gap-1">
              {block.label && (
                <p className="font-montserrat font-semibold text-sm md:text-base text-blue-600">
                  {block.label}
                </p>
              )}
              <ul className="flex flex-col gap-1">
                {block.points.map((point, j) => (
                  <li key={j} className="flex flex-col gap-1">
                    <div className="font-montserrat text-sm md:text-base text-blue-600 flex gap-2">
                      <span className="mt-0.5 shrink-0">·</span>
                      <span>{point.text}</span>
                    </div>
                    {point.subpoints && point.subpoints.length > 0 && (
                      <ul className="ml-5 flex flex-col gap-1">
                        {point.subpoints.map((sub, k) => (
                          <li
                            key={k}
                            className="font-montserrat text-sm md:text-base text-blue-600 flex gap-2"
                          >
                            <span className="mt-0.5 shrink-0">◦</span>
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        if (block.type === "subitems") {
          return (
            <div key={i} className="flex flex-col gap-3 ml-2">
              {block.items.map((sub, j) => (
                <div key={j} className="flex flex-col gap-1">
                  <p className="font-montserrat font-semibold text-sm md:text-base text-blue-600">
                    {sub.title}
                  </p>
                  <p className="font-montserrat text-sm md:text-base text-blue-600">
                    {sub.text}
                  </p>
                </div>
              ))}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default async function CandidateProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const candidate = getAllCandidates().find(
    (c) => photoToSlug(c.photo) === slug
  );
  if (!candidate) notFound();

  const platforms =
    (platformsData as Record<string, CandidatePlatforms>)[slug] ?? null;

  return (
    <main className="min-h-screen px-6 md:px-16 lg:px-24 py-12 md:py-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 max-w-5xl mx-auto items-center md:items-start">

        {/* Left column: photo + name + position + badge */}
        <div className="w-full md:w-84 md:shrink-0 md:sticky md:top-24 flex flex-col items-center md:items-start gap-3 md:gap-4">
          <div className="relative w-60 h-76 md:w-84 md:h-[420px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src={candidate.photo}
              alt={candidate.fullName}
              fill
              sizes="(max-width: 2080px) 2080px, 2080px"
              quality={90}
              className="object-cover"
            />
          </div>

          <h1 className="font-montserrat font-bold text-2xl md:text-3xl text-blue-600 leading-tight text-center md:text-left">
            {candidate.fullName}
          </h1>

          <p className="font-montserrat font-medium text-sm text-ind-gray text-center md:text-left -mt-1">
            {candidate.positionCategory === "top-4"
              ? `Aspiring SAMAHAN ${candidate.position}`
              : `Aspiring ${candidate.position}`}
          </p>

          <Badge party={candidate.politicalParty} size="sm" />
        </div>

        {/* Right column: platforms */}
        <div className="min-w-0 flex-1 w-full flex flex-col gap-4 md:gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="font-antenna-bold text-xl md:text-base tracking-[0.2em] uppercase text-blue-400">
              Platforms
            </h2>
            <hr className="border-blue-100" />
          </div>

          {platforms ? (
            <div className="flex flex-col gap-10">
              {platforms.theme && (
                <p className="font-antenna-bold text-base md:text-lg text-blue-500 italic">
                  {platforms.theme}
                </p>
              )}

              {platforms.categories.map((category) => (
                <div key={category.name} className="flex flex-col gap-5">
                  {/* Category heading */}
                  <h3 className="font-montserrat font-bold text-lg md:text-xl text-blue-500">
                    {category.name}
                  </h3>

                  {/* Category-level intro body */}
                  {category.body && category.body.length > 0 && (
                    <BodyBlocks blocks={category.body} />
                  )}

                  {/* Platform items */}
                  {category.items.length > 0 && (
                    <div className="flex flex-col gap-6">
                      {category.items.map((item) => (
                        <div key={item.title} className="flex flex-col gap-3">
                          <h4 className="font-antenna-bold text-base md:text-lg text-blue-600">
                            {item.title}
                          </h4>
                          <BodyBlocks blocks={item.body} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="font-montserrat text-sm text-ind-gray italic">
              Platforms coming soon.
            </p>
          )}
        </div>
      </div>

      {/* Back button */}
      <div className="flex justify-center mt-16">
        <RoundedButton href="/candidates-profile">
          Back to Candidates Profile
        </RoundedButton>
      </div>
    </main>
  );
}
