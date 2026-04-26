"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <nav className="hidden lg:block">
      <ul className="flex flex-col gap-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={() => setActiveSection(item.href.slice(1))}
              className="group flex items-center gap-4 text-sm font-medium uppercase tracking-widest"
            >
              <span
                className={`h-px transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "w-16 bg-foreground"
                    : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                }`}
              />
              <span
                className={`transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
