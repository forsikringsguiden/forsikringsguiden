"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/bilforsikring", label: "Bilforsikring" },
  { href: "/husforsikring", label: "Husforsikring" },
  { href: "/innboforsikring", label: "Innboforsikring" },
  { href: "/reiseforsikring", label: "Reiseforsikring" },
  { href: "/blogg", label: "Blogg" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-sans text-xl font-bold text-navy tracking-tight"
          >
            Forsikringsguiden
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Hovedmeny">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#4b5563] hover:text-accent transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-navy hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Lukk meny" : "Åpne meny"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 4l14 14M18 4L4 18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M3 6h16M3 11h16M3 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-100 bg-white">
          <nav
            className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1"
            aria-label="Mobilmeny"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 rounded-md text-sm font-medium text-navy hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
