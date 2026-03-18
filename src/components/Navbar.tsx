import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Candidates Profile", href: "/candidates-profile" },
  { label: "Editorial", href: "/editorial" },
  { label: "A Year in Review", href: "/year-in-review" },
];

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-linear-to-r from-blue-500 via-blue-300 to-blue-400">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(30, 30, 30, 0.4)" }} />
      {/* Content constrained to 12-col grid: 12×72 + 11×20 = 1084px */}
      <div className="relative max-w-271 mx-auto px-0 py-5 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo-white.png" alt="Atenews Logo" width={40} height={40} />
        </Link>

        <ul className="flex items-center gap-[60px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white text-sm font-montserrat font-semibold hover:underline transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
