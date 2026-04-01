import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Add your font files to src/app/fonts/ and update the `src` paths below.`
// Each font gets its own CSS variable which Tailwind maps to a utility class.

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const antennaMed = localFont({
  src: "./fonts/antenna-med.otf",
  variable: "--font-antenna-med",
});

const antennaBold = localFont({
  src: "./fonts/antenna-bold.otf",
  variable: "--font-antenna-bold",
});

const publicoBold = localFont({
  src: "./fonts/publico-bold.otf",
  variable: "--font-publico-bold",
});

const publicoRoman = localFont({
  src: "./fonts/publico-roman.otf",
  variable: "--font-publico-roman",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${montserrat.variable} ${antennaMed.variable} ${publicoBold.variable} ${publicoRoman.variable} ${antennaBold.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
