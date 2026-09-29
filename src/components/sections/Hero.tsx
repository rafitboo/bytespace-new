"use client";

import Link from "next/link";
import { Search, ShoppingBag, Star } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-[#1A56EE] text-white overflow-hidden pt-6 pb-0">
      {/* 1. Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* SVG Color Tint Filter for Electric Neon Lime #D3F832 */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="lime-tint" colorInterpolationFilters="sRGB">
          {/* First convert luminance to high-key white, then tint with #D3F832 */}
          <feColorMatrix
            type="matrix"
            values="
              1.35 0 0 0 0.12
              0 1.55 0 0 0.15
              0 0 0.35 0 0.02
              0 0 0 1 0
            "
          />
        </filter>
      </svg>

      {/* 2. Floating 3D Ornaments */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-[1440px] mx-auto">
        {/* Top-Left Zigzag - LIME #D3F832 */}
        <div className="absolute left-1 lg:left-6 top-20 w-32 sm:w-44 lg:w-56 select-none">
          <img
            src="/assets/ornaments/spiral 2.png"
            alt="Decoration"
            className="w-full object-contain"
            style={{
              filter: "url(#lime-tint) drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
            }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* Mid-Left Squiggle - 3D WHITE */}
        <div className="absolute left-14 lg:left-24 top-[44%] w-16 sm:w-22 lg:w-28 select-none">
          <img
            src="/assets/ornaments/spiral.png"
            alt="Decoration"
            className="w-full object-contain brightness-125 contrast-110 drop-shadow-lg"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* Bottom-Left Torus / Donut - 3D WHITE */}
        <div className="absolute left-2 lg:left-10 bottom-10 w-36 sm:w-52 lg:w-64 select-none">
          <img
            src="/assets/ornaments/donut.png"
            alt="Decoration"
            className="w-full object-contain brightness-125 contrast-110 drop-shadow-xl"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* Top-Right Cylinder - LIME #D3F832 */}
        <div className="absolute right-2 lg:right-6 top-16 w-36 sm:w-48 lg:w-60 select-none">
          <img
            src="/assets/ornaments/cylinder.png"
            alt="Decoration"
            className="w-full object-contain"
            style={{
              filter: "url(#lime-tint) drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
            }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* Mid-Right Cone - 3D WHITE */}
        <div className="absolute right-16 lg:right-28 top-[42%] w-20 sm:w-30 lg:w-36 select-none">
          <img
            src="/assets/ornaments/cone.png"
            alt="Decoration"
            className="w-full object-contain brightness-125 contrast-110 drop-shadow-xl"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* Bottom-Right Squiggle - 3D WHITE */}
        <div className="absolute right-4 lg:right-12 bottom-12 w-20 sm:w-32 lg:w-36 select-none">
          <img
            src="/assets/ornaments/spiral 3.png"
            alt="Decoration"
            className="w-full object-contain brightness-125 contrast-110 drop-shadow-xl"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>
      </div>

      {/* 3. Header & Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between pb-8">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-white group">
            <img
              src="/assets/logo.png"
              alt="ByteSpace"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className="font-semibold text-lg text-white">ByteSpace</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/90 font-medium">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="#courses" className="hover:text-white transition">Courses</Link>
            <Link href="#creators" className="hover:text-white transition">Creators</Link>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/login" className="text-white hover:text-white/80 transition text-xs sm:text-sm">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-1.5 rounded-full border border-white/60 text-white hover:bg-white/10 transition text-xs sm:text-sm"
            >
              Join Us
            </Link>
            <button aria-label="Cart" className="p-1 text-white hover:opacity-80 transition">
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            </button>
          </div>
        </nav>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl mx-auto text-center pt-2">
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white tracking-tight leading-[1.12]">
            Get Access to Hundreds <br /> Courses Available
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-white/85 max-w-xl mx-auto font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="mt-7 max-w-lg mx-auto">
            <div className="bg-white rounded-full p-1.5 pl-5 flex items-center shadow-lg">
              <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-xs sm:text-sm outline-none"
              />
              <button className="bg-[#D3F832] text-gray-900 font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full hover:brightness-105 transition">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Hero Bottom Visual (Large Dome + Centered Student + Flush Bottom) */}
        <div className="relative mt-8 sm:mt-12 w-full max-w-5xl mx-auto flex items-end justify-center">
          <div className="relative flex items-end justify-center">
            
            {/* Expanded Semi-Circle Dome resting flush on the bottom edge */}
            <div className="w-[360px] h-[210px] sm:w-[560px] sm:h-[320px] md:w-[740px] md:h-[400px] bg-[#D3F832] rounded-t-full flex-shrink-0" />

            {/* Student Image: Scaled up and shifted to compensate for laptop width */}
            <img
              src="/assets/lp-img-1.png"
              alt="ByteSpace Student"
              className="absolute bottom-0 left-1/2 -translate-x-[46%] z-10 w-[340px] sm:w-[500px] md:w-[620px] max-w-none object-contain drop-shadow-2xl pointer-events-none"
            />

            {/* Badge 1: Top-Left (UI/UX Design) */}
            <div className="absolute -left-2 sm:left-4 md:left-6 top-10 sm:top-18 md:top-24 z-20 bg-white rounded-2xl py-2.5 px-4 shadow-xl text-left border border-gray-100 hidden sm:block">
              <p className="font-bold text-xs text-gray-900">UI/UX Design</p>
              <p className="text-[10px] text-gray-400 font-medium mt-0.5">200 Courses • 1000+ Students</p>
            </div>

            {/* Badge 2: Top-Right (Learning Progress) */}
            <div className="absolute -right-2 sm:right-6 md:right-8 top-14 sm:top-22 md:top-28 z-20 bg-white rounded-2xl py-3 px-5 shadow-xl text-left border border-gray-100 min-w-[150px] sm:min-w-[170px]">
              <p className="text-[11px] text-gray-400 font-medium">Learning Progress</p>
              <p className="font-black text-2xl text-gray-900 mt-0.5">55%</p>
              <div className="w-full bg-gray-100 h-2 rounded-full mt-2.5 overflow-hidden">
                <div className="bg-[#D3F832] h-full w-[55%] rounded-full" />
              </div>
            </div>

            {/* Badge 3: Bottom-Left (Happy Students) */}
            <div className="absolute -left-4 sm:left-0 md:left-4 bottom-8 sm:bottom-12 md:bottom-16 z-20 bg-white rounded-2xl py-2.5 px-4 shadow-xl text-left border border-gray-100">
              <div className="flex items-center gap-1.5 mb-1.5">
                <p className="text-xs font-bold text-gray-900">Happy Students</p>
                <div className="flex items-center text-[11px] text-amber-500 font-bold ml-1">
                  4.5 <Star className="w-3 h-3 fill-amber-400 text-amber-400 ml-0.5" />
                </div>
              </div>
              <img
                src="/assets/happy-students-avatars.png"
                alt="Happy Students"
                className="h-6 w-auto object-contain mt-0.5"
              />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}