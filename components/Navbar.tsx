"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/60 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1">
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Ellis
          </span>
          <span className="text-xl font-bold text-blue-600 tracking-tight">
            Pae
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          {["About", "Projects", "Contact"].map((label) => (
            <Link
              key={label}
              href={`#${label.toLowerCase()}`}
              className="hover:text-gray-900 transition-colors duration-200 relative group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl">
          <div className="flex flex-col items-center py-4 space-y-4 text-gray-800 font-medium">
            {["About", "Projects", "Contact"].map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-blue-600 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
