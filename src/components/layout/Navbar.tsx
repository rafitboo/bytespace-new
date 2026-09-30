"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
  ];

  return (
    <header className="relative z-30 w-full">
      <div className="flex items-center justify-between py-2 w-full">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/assets/logo.png"
            alt="ByteSpace"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
            ByteSpace
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-white ${
                  isActive
                    ? "text-white font-semibold underline underline-offset-8"
                    : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right User Actions & Mobile Hamburger */}
        <div className="flex items-center gap-4 sm:gap-5 text-sm font-medium text-white">
          <Link
            href="/login"
            className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-white/80 hover:text-white transition-colors text-xs sm:text-sm"
          >
            Join Us
          </Link>

          <button
            type="button"
            aria-label="Shopping Cart"
            className="p-1 hover:text-white/80 transition"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2]" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="p-1 md:hidden text-white/90 hover:text-white transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#1443c3] rounded-2xl border border-white/15 shadow-xl space-y-3">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? "bg-[#D3F832] text-gray-900 font-bold"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}