"use client";
import React, { ReactNode, HTMLAttributes } from "react";
import { BorderBeam } from "@/components/magicui/border-beam";

interface BorderBeamWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const BorderBeamWrapper: React.FC<BorderBeamWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Render the beam visually */}
      <BorderBeam className="absolute inset-0 rounded-md transition-all duration-300 group-hover:scale-105" />
      {/* Your content on top */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BorderBeamWrapper;
