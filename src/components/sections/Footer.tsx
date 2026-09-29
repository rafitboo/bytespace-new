"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  const col1 = [
    { name: "Featured Courses", href: "#courses" },
    { name: "Featured Categories", href: "#categories" },
    { name: "Business", href: "#" },
    { name: "IT", href: "#" },
    { name: "Design", href: "#" },
  ];

  const col2 = [
    { name: "Development", href: "#" },
    { name: "Marketing", href: "#" },
    { name: "Photography", href: "#" },
    { name: "Finance", href: "#" },
    { name: "Sport", href: "#" },
  ];

  const col3 = [
    { name: "Become a Creator", href: "/signup" },
    { name: "Affiliate Program", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Help", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Newsletter Left / 3 Link Columns Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 items-start">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-6 space-y-4 max-w-md">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#D3F832] text-[#1A56EE] font-black text-sm">
                b
              </span>
              <span className="font-extrabold text-xl text-gray-900">ByteSpace</span>
            </Link>

            <p className="text-gray-500 text-xs sm:text-sm font-normal pt-1">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input */}
            <form onSubmit={handleSubmit} className="pt-2 flex items-center gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full max-w-[280px] px-4 py-2.5 rounded-full border border-gray-300 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#1A56EE] transition"
              />
              <button
                type="submit"
                className="bg-[#D3F832] text-gray-900 font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full hover:brightness-105 active:scale-95 transition"
              >
                Search
              </button>
            </form>

            <p className="text-[11px] text-gray-400 leading-relaxed font-normal pt-1">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            {/* Column 1 */}
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {col1.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {col2.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {col3.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>@ 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gray-800 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-800 transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-800 transition">
              Cookies Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}