import React from "react";

interface CardProps {
  title: string;
  items: string[];
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ title, items, subtitle }) => {
  return (
    <div className="p-4 border border-white w-60 sm:w-64 md:w-72 lg:w-80 h-60 rounded-md bg-black text-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <h2 className="text-xsmb-2">{subtitle}</h2>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
