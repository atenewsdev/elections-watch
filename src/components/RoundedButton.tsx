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
      className="btn-gradient px-8 py-3 text-white text-lg font-semibold font-montserrat rounded-full"
    >
      {text}
    </Link>
  )
}