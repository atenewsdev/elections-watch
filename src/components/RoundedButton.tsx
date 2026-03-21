import React from 'react'
import Link from 'next/link'

interface RoundedButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function RoundedButton({ children, href }: RoundedButtonProps) {
  return (
<Link
  href={href}
  style={{ background: "var(--gradient-blue)" }}
  className="relative px-8 py-3 text-white text-lg font-medium font-montserrat rounded-full
             overflow-hidden group"
>
  {/* Hover gradient overlay */}
  <span
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
    style={{ background: "var(--gradient-hoverblue)" }}
  />

  {/* Text stays above overlay */}
  <span className="relative z-10">
    {children}
  </span>
</Link>
  )
}