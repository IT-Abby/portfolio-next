import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tools: string[];
  link?: string;
  status?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tools,
  link,
  status,
}) => {
  return (
    <div className="group relative bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-gray-600 transition-all duration-300 max-w-sm hover:-translate-y-1">
      {/* Image */}
      <div className="relative w-full h-40 overflow-hidden bg-zinc-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-zinc-800 text-gray-300 rounded-full border border-zinc-700 hover:border-zinc-600 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* View Project */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/70 transition-colors pt-2"
          >
            View Project
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-lg bg-gray-500/10 blur-xl" />
      </div>
    </div>
  );
};

export default ProjectCard;
