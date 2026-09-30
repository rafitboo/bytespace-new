"use client";

import Link from "next/link";

export default function CreatorCTA() {
  return (
    <section className="relative bg-[#1A56EE] text-white overflow-hidden py-24 sm:py-32 my-12">
      {/* SVG Lime Tint Filter Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="lime-tint" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="
              0.827 0     0     0 0
              0     0.972 0     0 0
              0     0     0.196 0 0
              0     0     0     1 0
            "
          />
        </filter>
      </svg>

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

      {/* 2. Floating 3D Ornaments */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-[1440px] mx-auto">
        {/* Top-Left GREEN Zigzag */}
        <div className="absolute -left-4 sm:left-0 top-0 w-32 sm:w-44 lg:w-56 select-none">
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

        {/* Top-Left WHITE Squiggle */}
        <div className="absolute left-14 sm:left-40 top-6 sm:top-8 w-16 sm:w-24 lg:w-44 select-none">
          <img
            src="/assets/ornaments/spiral.png"
            alt="Decoration"
            className="w-full object-contain brightness-125 contrast-110 drop-shadow-md"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* Bottom-Left WHITE Cone */}
        <div className="absolute left-2 sm:left-8 bottom-3 sm:bottom-6 w-20 sm:w-32 select-none">
          <img
            src="/assets/ornaments/cone.png"
            alt="Decoration"
            className="w-full object-contain brightness-125 contrast-110 drop-shadow-md"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* Bottom-Left GREEN Torus */}
        <div className="absolute left-8 sm:left-[120px] -bottom-24 sm:-bottom-24 w-36 sm:w-52 lg:w-64 select-none">
          <img
            src="/assets/ornaments/donut.png"
            alt="Decoration"
            className="w-full object-contain"
            style={{
              filter: "url(#lime-tint) drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
            }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* Top-Right GREEN Cone */}
        <div className="absolute right-10 sm:right-32 top-2 sm:top-6 w-24 sm:w-36 lg:w-44 select-none">
          <img
            src="/assets/ornaments/cone.png"
            alt="Decoration"
            className="w-full object-contain rotate-12"
            style={{
              filter: "url(#lime-tint) drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
            }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* Top-Right Edge WHITE Cylinder */}
        <div className="absolute -right-8 sm:-right-4 top-0 w-36 sm:w-52 select-none">
          <img
            src="/assets/ornaments/cylinder.png"
            alt="Decoration"
            className="w-full object-contain brightness-125 contrast-110 drop-shadow-md"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        {/* Bottom-Right GREEN Zigzag */}
        <div className="absolute right-0 sm:right-4 -bottom-6 sm:-bottom-4 w-28 sm:w-44 lg:w-52 select-none">
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
      </div>

      {/* 3. Center Text & CTA */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-extrabold tracking-tight leading-[1.18] text-white">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-5 text-xs sm:text-sm text-blue-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/signup"
            className="bg-[#D3F832] text-gray-900 font-semibold text-xs sm:text-sm px-8 py-3 rounded-full hover:brightness-105 active:scale-95 transition shadow-lg inline-block"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}