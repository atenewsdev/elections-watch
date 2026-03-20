const partyGradient: Record<string, string> = {
  PIGLASAPAT: "linear-gradient(to right, #FFCC07, #2C89DF)",
  BAHAGHARI: "linear-gradient(to right, #0E1DD2, #E3E3E4)",
  INDEPENDENT: "linear-gradient(to right, #7A7A7A, #E2E2E2)",
};

const partyOutline: Record<string, string> = {
  PIGLASAPAT: "#2C89DF",
  BAHAGHARI: "#0E1DD2",
  INDEPENDENT: "#7A7A7A",
};

type BadgeProps = {
  party: string;
  size?: "sm";
};

export default function Badge({ party, size }: BadgeProps) {
  const gradient = partyGradient[party] ?? partyGradient["INDEPENDENT"];
  const outline = partyOutline[party] ?? partyOutline["INDEPENDENT"];

  return (
    <span
      className={`inline-block rounded-full font-antenna-bold uppercase text-white tracking-wide whitespace-nowrap ${
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-4 py-1.5 text-sm"
      }`}
      style={{ background: gradient, outline: `1px solid ${outline}` }}
    >
      {party}
    </span>
  );
}
