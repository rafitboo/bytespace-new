"use client";

import { Check, Star } from "lucide-react";

export default function ShowcaseSections() {
  const checkItems = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ];

  return (
    <div className="relative py-20 lg:py-28 bg-white overflow-hidden space-y-28 lg:space-y-36">
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

      {/* ================= ATMOSPHERIC GRADIENTS ================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[650px] sm:w-[750px] h-[550px] bg-[#D3F832]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[700px] sm:w-[850px] h-[600px] bg-gradient-to-r from-[#D3F832]/20 via-[#1A56EE]/15 to-[#D3F832]/20 rounded-full blur-[150px] pointer-events-none" />

      {/* ================= SECTION 1: Professional Growth ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text & Metrics */}
          <div className="space-y-6 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Your Path to Professional <br className="hidden sm:inline" />
              Growth Starts Here!
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Metrics */}
            <div className="pt-4 flex items-center gap-10 sm:gap-14">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1A56EE] tracking-tight">
                  12K
                </p>
                <p className="text-xs text-gray-500 font-medium mt-1">Students</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1A56EE] tracking-tight">
                  70+
                </p>
                <p className="text-xs text-gray-500 font-medium mt-1">Courses</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#1A56EE] tracking-tight">
                  16
                </p>
                <p className="text-xs text-gray-500 font-medium mt-1">Creators</p>
              </div>
            </div>
          </div>

          {/* Right: Visual Showcase Composite */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[360px] sm:w-[520px] h-[440px] sm:h-[530px] flex items-center justify-center">
              {/* 1. Green Spiral Ornament */}
              <img
                src="/assets/ornaments/spiral.png"
                alt="Ornament"
                className="absolute -right-2 sm:right-2 top-4 sm:top-6 w-20 sm:w-28 object-contain z-0 pointer-events-none"
                style={{
                  filter: "url(#lime-tint) drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
                }}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />

              {/* 2. Floating Mini Course Card */}
              <div className="absolute left-0 sm:left-2 top-4 sm:top-6 z-10 w-48 sm:w-52 bg-white rounded-2xl p-2.5 shadow-2xl border border-gray-100">
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-gray-100 mb-2">
                  <img
                    src="/assets/courses/course1.jpg"
                    alt="Course"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/courses/course-1.png";
                    }}
                  />
                  <div className="absolute bottom-1 left-1 right-1 flex justify-between text-[8px] bg-black/40 text-white rounded px-1.5 py-0.5">
                    <span>17 Lessons</span>
                    <span>2h 16m</span>
                  </div>
                </div>
                <p className="text-[11px] font-bold text-gray-900 truncate">Learn Figma from Basic</p>
                <p className="text-[9px] text-gray-400">by purepearl studio</p>
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-gray-100">
                  <span className="text-[9px] bg-gray-100 px-2 py-0.5 rounded-full text-gray-600 font-medium">Beginner</span>
                  <span className="text-xs font-black text-[#1A56EE]">$25<span className="text-[8px] text-gray-400 font-normal">/life</span></span>
                </div>
              </div>

              {/* 3. Floating Learning Progress Badge */}
              <div className="absolute -right-2 sm:right-0 top-[48%] -translate-y-1/2 z-10 bg-white rounded-2xl py-3 px-4 shadow-xl border border-gray-100 min-w-[130px] sm:min-w-[150px]">
                <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium">Learning Progress</p>
                <p className="font-black text-xl sm:text-2xl text-gray-900 mt-0.5">55%</p>
                <div className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#D3F832] h-full w-[55%] rounded-full" />
                </div>
              </div>

              {/* 4. Main Student Image */}
              <img
                src="/assets/lp-img-1.png"
                alt="Student"
                className="w-[340px] sm:w-[470px] lg:w-[490px] object-contain absolute bottom-0 right-0 sm:right-4 z-20 drop-shadow-2xl pointer-events-none"
                onError={(e) => {
                  e.currentTarget.src = "/assets/student-hero.png";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: Create & Manage Courses ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Creator Visual Composite */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-[360px] sm:w-[520px] h-[440px] sm:h-[530px] flex items-center justify-center">
              {/* 1. Green Spiral Ornament */}
              <img
                src="/assets/ornaments/spiral.png"
                alt="Ornament"
                className="absolute right-4 sm:right-10 top-1/2 -translate-y-8 w-20 sm:w-28 object-contain z-0 pointer-events-none"
                style={{
                  filter: "url(#lime-tint) drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
                }}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />

              {/* 2. Floating Total Revenue Badge */}
              <div className="absolute left-0 sm:left-4 top-8 z-10 bg-[#1A56EE] text-white rounded-2xl p-3 sm:p-3.5 shadow-xl min-w-[135px] sm:min-w-[155px]">
                <p className="text-[10px] text-blue-100 font-medium">Total Revenue</p>
                <p className="text-[9px] text-blue-200">July 1-28</p>
                <p className="font-extrabold text-base sm:text-lg mt-1">$120.29</p>
                <div className="w-full bg-white/20 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#D3F832] h-full w-[65%] rounded-full" />
                </div>
              </div>

              {/* 3. Floating Year to Date Badge */}
              <div className="absolute left-0 sm:left-4 top-[56%] -translate-y-1/2 z-10 bg-[#1A56EE] text-white rounded-2xl p-3 sm:p-3.5 shadow-xl min-w-[135px] sm:min-w-[155px]">
                <p className="text-[10px] text-blue-100 font-medium">Year to Date</p>
                <p className="text-[9px] text-blue-200">2023</p>
                <p className="font-extrabold text-base sm:text-lg mt-1">$1,200.38</p>
                <span className="inline-block bg-[#D3F832] text-gray-900 text-[9px] font-bold px-1.5 py-0.5 rounded mt-1.5">
                  +12%
                </span>
              </div>

              {/* 4. Creator Main Photo */}
              <img
                src="/assets/showcase-creator.png"
                alt="Creator with Tablet"
                className="w-[330px] sm:w-[440px] object-contain absolute bottom-0 left-12 sm:left-20 z-20 drop-shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "/assets/creator.png";
                }}
              />

              {/* 5. Floating Happy Students Badge */}
              <div className="absolute right-0 sm:right-6 bottom-4 sm:bottom-6 z-30 bg-white rounded-2xl py-2 px-3.5 shadow-xl border border-gray-100">
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-[11px] font-bold text-gray-900">Happy Students</p>
                  <span className="text-[10px] text-amber-500 font-bold flex items-center">
                    4.5 <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400 ml-0.5" />
                  </span>
                </div>
                <img
                  src="/assets/happy-students-avatars.png"
                  alt="Students"
                  className="h-5 w-auto object-contain mt-0.5"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            </div>
          </div>

          {/* Right: Copy & Feature Checkmarks */}
          <div className="space-y-6 max-w-xl order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Create & Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            {/* Checkmark List */}
            <div className="pt-2 space-y-3.5">
              {checkItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1A56EE] flex items-center justify-center text-white">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}