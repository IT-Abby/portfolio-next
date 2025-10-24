"use client";

import React from "react";
import Link from "next/link";

interface SocialIconProps {
  href: string;
  src: string;
  alt: string;
}

export default function SocialIcon({ href, src, alt }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition duration-300 border border-white/20"
    >
      <img
        src={src}
        alt={alt}
        className="w-7 h-7 object-contain group-hover:scale-110 transition"
      />
    </Link>
  );
}
