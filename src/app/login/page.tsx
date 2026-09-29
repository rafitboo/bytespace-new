"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { Star, Signal } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="relative min-h-screen bg-[#1A56EE] text-white flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden">
      {/* SVG Lime Tint Filter Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="lime-tint" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="
              0.82 0    0    0 0
              0    0.97 0    0 0
              0    0    0.20 0 0
              0    0    0    1 0"
          />
        </filter>
      </svg>

      {/* 1. Blueprint Grid Background */}
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

      {/* 2. Top-Left Logo */}
      <div className="relative z-20">
        <Link href="/" className="inline-flex items-center">
          <img
            src="/assets/logo.png"
            alt="ByteSpace"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-sm hover:scale-105 transition-transform"
          />
        </Link>
      </div>

      {/* 3. Main Center Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center my-auto py-6">
        
        {/* ================= LEFT SIDE: Headings & Floating Cards ================= */}
        <div className="lg:col-span-6 space-y-6">
          {/* Header Texts */}
          <div className="max-w-md space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Sign in with ease
            </h1>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed font-normal">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          {/* Scaled Floating Visual Stage */}
          <div className="relative w-full max-w-[540px] h-[450px] sm:h-[500px] select-none">
            
            {/* Green Torus / Donut (Top-Left) */}
            <div className="absolute left-10 sm:left-14 -top-2 w-24 sm:w-28 z-20 pointer-events-none">
              <img
                src="/assets/ornaments/donut.png"
                alt="Donut"
                className="w-full object-contain"
                style={{
                  filter: "url(#lime-tint) drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
                }}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>

            {/* Back Course Card ("Build Digital Asset") */}
            <div className="absolute left-2 sm:left-4 top-14 w-72 sm:w-80 bg-white/95 rounded-[30px] p-3.5 shadow-xl border border-gray-100 z-10 opacity-90 -rotate-3">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100 mb-3">
                <img
                  src="/assets/courses/course2.jpg"
                  alt="Course 2"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/courses/course-2.png";
                  }}
                />
              </div>
              <p className="text-sm font-bold text-gray-900 truncate">Build Digital Asset</p>
              <p className="text-xs text-gray-400 mt-0.5">by purepearl studio</p>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                <span className="text-[10px] bg-gray-100 px-2.5 py-0.5 rounded-full text-gray-600 font-medium">Beginner</span>
                <span className="text-sm font-black text-[#1A56EE]">$25<span className="text-[10px] text-gray-400 font-normal">/lifetime</span></span>
              </div>
            </div>

            {/* Front Course Card ("The Power of Big Data") */}
            <div className="absolute left-16 sm:left-24 top-0 w-80 sm:w-[360px] bg-white rounded-[32px] p-4 shadow-2xl border border-gray-100 z-30">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100 mb-3.5">
                <img
                  src="/assets/courses/course3.jpg"
                  alt="Big Data"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/courses/course-3.png";
                  }}
                />
              </div>

              <div className="px-1.5 pb-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-gray-900 tracking-tight truncate">
                    the Power of Big Data
                  </h3>
                  <div className="flex items-center text-xs font-bold text-gray-700 ml-1">
                    4.5 <Star className="w-3.5 h-3.5 fill-[#D3F832] text-[#D3F832] ml-0.5" />
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-0.5 font-medium">by purepearl studio</p>

                <div className="flex items-center justify-between mt-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#F5F5F7] text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    <Signal className="w-3.5 h-3.5 text-gray-500" />
                    Beginner
                  </span>
                  <div className="flex items-center -space-x-1.5">
                    <span className="w-5 h-5 rounded-full bg-gray-300 border-2 border-white inline-block" />
                    <span className="w-5 h-5 rounded-full bg-gray-400 border-2 border-white inline-block" />
                    <span className="w-5 h-5 rounded-full bg-gray-500 border-2 border-white inline-block" />
                    <span className="w-5 h-5 rounded-full bg-[#D3F832] text-[9px] font-bold text-gray-900 flex items-center justify-center border-2 border-white">
                      26+
                    </span>
                  </div>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-gray-100 flex items-baseline">
                  <span className="text-[#1A56EE] font-black text-base">$25</span>
                  <span className="text-gray-400 text-xs ml-1">/lifetime</span>
                </div>
              </div>
            </div>

            {/* Bottom-Left Green Cone */}
            <div className="absolute left-2 bottom-6 w-24 sm:w-28 z-20 pointer-events-none">
              <img
                src="/assets/ornaments/cone.png"
                alt="Cone"
                className="w-full object-contain -rotate-12"
                style={{
                  filter: "url(#lime-tint) drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
                }}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>

            {/* White Squiggle / Noodle */}
            <div className="absolute -right-2 sm:right-2 bottom-20 w-20 sm:w-24 z-40 pointer-events-none">
              <img
                src="/assets/ornaments/spiral 3.png"
                alt="Squiggle"
                className="w-full object-contain brightness-125 contrast-110 drop-shadow-md"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>

            {/* Lime Green "Happy Students" Card */}
            <div className="absolute left-28 sm:left-36 bottom-0 z-40 bg-[#D3F832] rounded-2xl p-3.5 shadow-xl text-gray-900 min-w-[210px]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <p className="text-xs font-black text-gray-900">Happy Students</p>
                <span className="text-[11px] text-gray-800 font-bold flex items-center">
                  4.5 (240) <Star className="w-3 h-3 fill-blue-600 text-blue-600 ml-0.5" />
                </span>
              </div>
              <img
                src="/assets/happy-students-avatars.png"
                alt="Students"
                className="h-6 w-auto object-contain"
              />
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE: Sign In Form Card ================= */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="bg-white text-gray-900 rounded-[32px] sm:rounded-[38px] p-8 sm:p-12 lg:p-14 shadow-2xl max-w-lg w-full border border-gray-100">
            
            <p className="text-xs sm:text-sm font-semibold text-[#1A56EE] tracking-tight">
              Sign In
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1 mb-8 tracking-tight">
              Welcome Back
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#1A56EE] transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#1A56EE] transition"
                />
              </div>

              {/* Sign In Button (Right Aligned) */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#D3F832] text-gray-900 font-bold text-xs sm:text-sm px-9 py-3 rounded-full hover:brightness-105 active:scale-95 transition shadow-sm"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* "or" Divider */}
            <div className="relative my-8 flex items-center justify-center">
              <div className="w-full border-t border-gray-200" />
              <span className="absolute bg-white px-3 text-xs text-gray-400 font-normal">
                or
              </span>
            </div>

            {/* Social Logins: Facebook & Google */}
            <div className="flex items-center justify-center gap-4">
              {/* Facebook */}
              <button
                type="button"
                aria-label="Log in with Facebook"
                className="w-14 h-14 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition"
              >
                <svg className="w-6 h-6 text-gray-900 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              {/* Google */}
              <button
                type="button"
                aria-label="Log in with Google"
                className="w-14 h-14 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition"
              >
                <svg className="w-6 h-6 text-gray-900 fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V7.4h6.54c.24 1.05.36 2.19.36 3.42 0 4.29-2.88 7.35-7.08 7.35-4.08 0-7.38-3.3-7.38-7.38s3.3-7.38 7.38-7.38c1.98 0 3.75.75 5.1 1.98l-2.16 2.13c-.78-.72-1.8-1.17-2.94-1.17-2.52 0-4.56 2.04-4.56 4.56s2.04 4.56 4.56 4.56c2.31 0 3.9-1.38 4.23-3.27h-4.23z" />
                </svg>
              </button>
            </div>

            {/* Bottom New User Link */}
            <p className="mt-10 text-center text-xs text-gray-500 font-medium">
              New user?{" "}
              <Link href="/signup" className="text-[#1A56EE] font-semibold hover:underline">
                Create an account
              </Link>
            </p>

          </div>
        </div>

      </div>

      <div className="hidden lg:block h-2" />
    </div>
  );
}