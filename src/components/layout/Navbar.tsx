"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
  ];

  return (
    <header className="flex items-center justify-between py-2 w-full">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2">
        <img
          src="/assets/logo.png"
          alt="ByteSpace"
          className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
        />
        <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
          ByteSpace
        </span>
      </Link>

      {/* Dynamic Navigation Links */}
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

      {/* Right User Actions */}
      <div className="flex items-center gap-5 text-sm font-medium text-white">
        <Link href="/login" className="hover:text-white/80 transition-colors">
          Sign In
        </Link>
        <Link href="/signup" className="hover:text-white/80 transition-colors">
          Join Us
        </Link>
        <button
          type="button"
          aria-label="Shopping Cart"
          className="p-1 hover:text-white/80 transition"
        >
          <ShoppingBag className="w-5 h-5 stroke-[2]" />
        </button>
      </div>
    </header>
  );
}