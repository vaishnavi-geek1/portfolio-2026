"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/about", label: "About", icon: "👤" },
  { href: "/skills", label: "Skills", icon: "💡" },
  { href: "/projects", label: "Projects", icon: "🧩" },
  { href: "/education", label: "Education", icon: "🎓" },
  { href: "/contact", label: "Contact", icon: "☎️" },
];

export function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      {/* Desktop / tablet pill nav */}
      <nav className="hidden sm:inline-flex items-center gap-4 rounded-full border border-slate-300/90 bg-white/80 px-5 py-2 shadow-md shadow-slate-200/60 backdrop-blur">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-1 rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-slate-700 hover:text-blue-600 hover:border-blue-500 border border-transparent transition-colors"
          >
            <span aria-hidden>{item.icon}</span>
            <span className="hidden sm:inline">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Mobile toggle nav */}
      <div className="sm:hidden w-full">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mx-auto flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-800 shadow-sm hover:border-blue-500 hover:text-blue-600 transition"
        >
          <span aria-hidden>☰</span>
          <span>Menu</span>
        </button>

        {open && (
          <nav className="mt-3 flex flex-wrap justify-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-blue-500 hover:text-blue-600 transition"
              >
                <span aria-hidden>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}

