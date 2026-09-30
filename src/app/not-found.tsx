"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        {/* ================= HERO SECTION WITH BLUEPRINT GRID ================= */}
        <div className="relative bg-[#1A56EE] text-white pt-6 pb-28 sm:pb-36 overflow-hidden">
          {/* Blueprint Grid Overlay */}
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />

            {/* Center Content Stage */}
            <div className="mt-12 sm:mt-16 text-center max-w-4xl mx-auto flex flex-col items-center">
              {/* Massive 404 Gradient Number */}
              <div className="select-none">
                <span className="text-[140px] sm:text-[230px] md:text-[300px] lg:text-[340px] font-black tracking-tight leading-none bg-gradient-to-b from-[#D3F832] via-[#B8E628]/70 to-transparent bg-clip-text text-transparent inline-block">
                  404
                </span>
              </div>

              {/* Overlapping Text & CTA */}
              <div className="-mt-16 sm:-mt-24 md:-mt-32 relative z-10 space-y-4">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
                  The page you are looking <br className="hidden sm:inline" />
                  for doesn&apos;t exist
                </h1>

                <p className="text-xs sm:text-sm text-blue-100/90 font-normal max-w-md mx-auto">
                  Try to use a correct url or go back to homepage to start again
                </p>

                <div className="pt-4">
                  <Link
                    href="/"
                    className="inline-block bg-[#D3F832] text-gray-900 font-semibold text-xs sm:text-sm px-8 py-3 rounded-full hover:brightness-105 active:scale-95 transition shadow-lg"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}