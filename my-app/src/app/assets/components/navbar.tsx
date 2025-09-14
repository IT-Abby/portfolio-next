"use client";
import React from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavItem[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between bg-black text-white w-full px-10 py-7 box-border">
      {/* Left Side (Logo) */}
      <div className="flex-shrink-0">
        <h1 className="text-3xl">
          {"<"}G{"/>"}
        </h1>
      </div>

      {/* Center Nav */}
      <ul className="flex flex-row gap-8 list-none mx-auto">
        {links.map((link) => (
          <li key={link.href}>
            <a className="relative group text-white" href={link.href}>
              <span className="block group-hover:hidden">{link.label}</span>
              <span className="hidden group-hover:block">
                &lt;{link.label}/&gt;
              </span>
            </a>
          </li>
        ))}
      </ul>

      <AnimatedThemeToggler />
    </nav>
  );
}
