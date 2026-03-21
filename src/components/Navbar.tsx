"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Candidates Profile", href: "/candidates-profile" },
  { label: "Editorial", href: "/editorial" },
  { label: "A Year in Review", href: "/year-in-review" },
];

const desktopNavLinks = navLinks.filter((l) => l.label !== "Home");

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-linear-to-r from-blue-500 via-blue-300 to-blue-400">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(30, 30, 30, 0.4)" }} />

        {/* Mobile navbar */}
        <div className="relative md:hidden px-7.5 py-5 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            className="text-white"
          >
            <List size={28} weight="bold" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-white.png" alt="Atenews Logo" width={24} height={24} />
            <span className="text-white font-antenna-bold text-xl tracking-normal uppercase whitespace-nowrap">
              Elections Watch
            </span>
          </Link>
        </div>

        {/* Desktop navbar */}
        <div className="relative hidden md:flex max-w-271 mx-auto px-6 py-5 items-center justify-between">
          <Link href="/">
            <Image src="/logo-white.png" alt="Atenews Logo" width={40} height={40} />
          </Link>
          <ul className="flex items-center gap-[60px]">
            {desktopNavLinks.map((link) => (
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

      {/* Backdrop */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 md:hidden ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[78vw] max-w-sm bg-white flex flex-col transition-transform duration-200 ease-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7.5 py-6">
          <Link href="/" onClick={() => setSidebarOpen(false)} className="flex items-center gap-2">
            <Image src="/logo-blue.png" alt="Atenews Logo" width={32} height={32} />
            <Image src="/logotype-blue.png" alt="Atenews" width={100} height={26} />
          </Link>
          <button onClick={() => setSidebarOpen(false)} aria-label="Close menu" className="text-blue-500">
            <X size={26} weight="bold" />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col gap-4 px-7.5 mt-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className="text-blue-500 text-xl font-montserrat font-bold hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom info */}
        <div className="mt-auto px-7.5 pb-8 flex flex-col gap-3">
          <div>
            <p className="text-blue-500 text-xs font-montserrat font-bold">#AtenewsElectionsWatch</p>
            <p className="text-blue-500 text-xs font-montserrat leading-snug">
              Atenews Special Coverage of the SAMAHAN Central Board Elections 2026
            </p>
          </div>
          <div>
            <p className="text-blue-500 text-xs font-montserrat">
              © 2026 <span className="font-bold">Atenews</span>
            </p>
            <p className="text-blue-500 text-xs font-montserrat">End the silence of the gagged!</p>
          </div>
        </div>
      </div>
    </>
  );
}
