const partyGradient: Record<string, string> = {
  PIGLASAPAT: "linear-gradient(to right, #FFCC07, #2C89DF)",
  BAHAGHARI: "linear-gradient(to right, #0E1DD2, #E3E3E4)",
  INDEPENDENT: "linear-gradient(to right, #7A7A7A, #E2E2E2)",
};

type PolparBadgeProps = {
  variant: "polpar";
  party: string;
};

type PositionBadgeProps = {
  variant: "position";
  label: string;
};

type BadgeProps = PolparBadgeProps | PositionBadgeProps;

export default function Badge(props: BadgeProps) {
  if (props.variant === "polpar") {
    const gradient =
      partyGradient[props.party] ?? partyGradient["INDEPENDENT"];

    return (
      <span
        className="inline-block px-4 py-1.5 rounded-full font-antenna-bold text-sm uppercase text-white tracking-wide"
        style={{ background: gradient }}
      >
        {props.party}
      </span>
    );
  }

  return (
    <span className="inline-block px-4 py-1.5 rounded-full border-2 border-blue-300 font-montserrat font-semibold text-sm text-blue-300">
      {props.label}
    </span>
  );
}
