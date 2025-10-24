"use client";

import React from "react";
import { NumberTicker } from "@/components/ui/number-ticker";

interface ExperienceCardProps {
  value?: number;
  label?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  value = 1,
  label = "Years Experience",
}) => {
  return (
    <div className="flex flex-row items-center px-5 py-5 rounded-md w-45 bg-white/10">
      <NumberTicker
        value={value}
        startValue={0}
        className="text-4xl font-medium tracking-tighter whitespace-pre-wrap text-white dark:text-white"
      />
      <div className="self-center text-2xl sm:mr-5">+</div>
      <p className="text-white">{label}</p>
    </div>
  );
};

export default ExperienceCard;
