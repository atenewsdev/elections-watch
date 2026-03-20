import Image from "next/image";
import Link from "next/link";
import {
  FacebookLogo,
  XLogo,
  InstagramLogo,
  TiktokLogo,
  Globe,
} from "@phosphor-icons/react/dist/ssr";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Candidates Profile", href: "/candidates-profile" },
  { label: "Editorial", href: "/editorial" },
  { label: "A Year in Review", href: "/year-in-review" },
];

const socialLinks = [
  { icon: FacebookLogo, href: "https://facebook.com/atenews", label: "Facebook" },
  { icon: XLogo, href: "https://x.com/atenews", label: "X" },
  { icon: InstagramLogo, href: "https://instagram.com/atenews", label: "Instagram" },
  { icon: TiktokLogo, href: "https://tiktok.com/@atenews", label: "TikTok" },
  { icon: Globe, href: "https://atenews.ph", label: "Website" },
];

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/mobile-footer.png')" }}
      >
        <div className="hidden md:block absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: "url('/desktop-footer.png')" }} />
        {/* Mobile layout */}
        <div className="md:hidden py-8 px-7.5 flex flex-col gap-6">
          {/* Logo + logotype */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-white.png" alt="Atenews Logo" width={40} height={40} />
            <Image src="/logotype-white.png" alt="Atenews" width={120} height={32} />
          </Link>

          {/* Tagline */}
          <p className="text-white text-sm font-montserrat font-semibold leading-snug">
            The Official Student Publication of<br />
            Ateneo de Davao University
          </p>

          {/* Nav links */}
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white text-xl font-montserrat font-bold hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <hr className="border-white/40" />

          {/* Address */}
          <p className="text-white text-sm font-montserrat font-normal leading-relaxed">
            G/F Arrupe Hall, Martin Building<br />
            Ateneo de Davao University<br />
            E. Jacinto St., 8016 Davao City
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white hover:opacity-70 transition-opacity"
              >
                <Icon size={30} weight="fill" />
              </a>
            ))}
          </div>

          <hr className="border-white/40" />

          {/* Copyright */}
          <div>
            <p className="text-white text-sm font-montserrat">© 2026 Atenews</p>
            <p className="text-white text-sm font-montserrat">End the silence of the gagged!</p>
          </div>

          {/* Hashtag + description */}
          <div>
            <p className="text-white text-sm font-montserrat font-bold">
              #AtenewsElectionsWatch
            </p>
            <p className="text-white text-sm font-montserrat leading-snug mt-1">
              Atenews Special Coverage of the SAMAHAN Central Board Elections 2026
            </p>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="max-w-271 mx-auto py-12 flex justify-between">
            {/* Left column */}
            <div className="flex flex-col gap-4 max-w-xs">
              {/* Logo + logotype */}
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo-white.png" alt="Atenews Logo" width={40} height={40} />
                <Image src="/logotype-white.png" alt="Atenews" width={120} height={32} />
              </Link>

              {/* Tagline */}
              <p className="text-white text-xs font-montserrat font-semibold leading-snug">
                The Official Student Publication of<br />
                Ateneo de Davao University
              </p>

              {/* Address */}
              <p className="text-white text-xs font-montserrat font-normal leading-relaxed">
                G/F Arrupe Hall, Martin Building<br />
                Ateneo de Davao University<br />
                E. Jacinto St., 8016 Davao City
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white hover:opacity-70 transition-opacity"
                  >
                    <Icon size={22} weight="fill" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-12">
              {/* Nav links */}
              <ul className="flex flex-col gap-2">
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

              {/* Hashtag + description */}
              <div>
                <p className="text-white text-xs font-montserrat font-bold">
                  #AtenewsElectionsWatch
                </p>
                <p className="text-white text-xs font-montserrat leading-snug mt-1">
                  Atenews Special Coverage of the<br />
                  SAMAHAN Central Board Elections 2026
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="max-w-271 mx-auto pb-6 flex justify-between items-center">
            <div>
              <p className="text-white text-xs font-montserrat">© 2026 Atenews</p>
              <p className="text-white text-xs font-montserrat italic">End the silence of the gagged!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
