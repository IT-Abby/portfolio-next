"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between align-center bg-black text-white w-full px-25 py-7 box-border">
      <div>
        <h1 className="text-3xl">
          {"<"}G{"/>"}
        </h1>
      </div>
      <div className="list-none flex flex-row gap-8 text-none text-white ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </div>
    </nav>
  );
}
