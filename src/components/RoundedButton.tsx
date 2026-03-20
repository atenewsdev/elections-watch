import React from 'react'
import Link from 'next/link'

interface RoundedButtonProps {
  text: string;
  href: string;
}

export default function RoundedButton({ text, href }: RoundedButtonProps) {
  return (
    <Link
      href={href}
      style={{ background: "var(--gradient-blue)" }}
      className="px-8 py-3 text-white text-lg font-medium font-montserrat rounded-full"
    >
      {text}
    </Link>
  )
}