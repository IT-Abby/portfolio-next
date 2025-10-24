"use client";

import React from "react";
import Image from "next/image";
interface LogoProps {
  src: string;
  alt: string;
}

export default function Logo({ src, alt }: LogoProps) {
  return (
    <div className="flex items-center justify-center w-20 h-20 rounded-full border border-gray-400 bg-white">
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
        className="w-20 h-20 object-contain"
      />
    </div>
  );
}
