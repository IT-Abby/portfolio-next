"use client";

import React from "react";

interface LogoProps {
  src: string;
  alt: string;
}

export default function Logo({ src, alt }: LogoProps) {
  return (
    <div className="flex items-center justify-center w-20 h-20 rounded-full border border-gray-400 bg-white">
      <img src={src} alt={alt} className="w-20 h-20 object-contain" />
    </div>
  );
}
