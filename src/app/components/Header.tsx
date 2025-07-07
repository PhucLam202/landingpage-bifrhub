"use client";

import React, { useState } from "react";
import { FaGithub, FaTwitter, FaTelegramPlane, FaRocket, FaMoon } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about", external: true },
  { icon: <FaGithub />, href: "https://github.com/", external: true },
  { icon: <FaTwitter />, href: "https://x.com/", external: true },
  { icon: <FaTelegramPlane />, href: "https://t.me/", external: true },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-violet-500/20 shadow-md">
      <nav className="flex justify-between items-center px-4 md:px-8 py-2 md:py-3 max-w-7xl mx-auto">
        {/* Logo / Title */}
        <div className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white">
          Bifrhub
        </div>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation */}
        <ul
          className={`
            flex-col md:flex-row flex items-center gap-5
            fixed md:static top-0 right-0 h-full w-2/3 max-w-xs bg-black/90 md:bg-transparent
            md:h-auto md:w-auto md:max-w-none
            transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
            md:translate-x-0
            z-50
            md:gap-5
            pt-20 md:pt-0
          `}
        >
          {/* Close button on mobile */}
          <button
            className="md:hidden absolute top-4 right-4 text-white text-2xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          {/* About link */}
          <li>
            <a
              href="#about"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-white text-sm font-medium rounded transition-colors duration-200"
            >
              About
              <span className="ml-1 text-xs">↗</span>
            </a>
          </li>
          {/* Social icons */}
          <li>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded text-white text-lg transition">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded  text-white text-lg transition">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded  text-white text-lg transition">
              <FaTelegramPlane />
            </a>
          </li>
          {/* Launch Dashboard */}
          <li>
            <a
              href="#"
              className="flex items-center gap-1 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded transition font-semibold"
            >
              Launch Dashboard
              <FaRocket className="ml-1" />
            </a>
          </li>
          {/* Dark/Light mode toggle (icon only, logic tuỳ bạn) */}
          <li>
            <button
              className="p-2 rounded hover:bg-white/10 text-white text-lg transition"
              aria-label="Toggle dark mode"
            >
              <FaMoon />
            </button>
          </li>
        </ul>
      </nav>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
