"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  Signal,
  LayoutGrid,
  ArrowUpDown,
  ShoppingBag,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Footer from "@/components/layout/Footer";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const baseCourses = [
  {
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course1.jpg",
  },
  {
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course2.jpg",
    href: "/courses/overview",
  },
  {
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course3.jpg",
  },
  {
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course4.jpg",
  },
  {
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course5.jpg",
  },
  {
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course6.jpg",
  },
];

// 12 courses total (2 repetitions of the 6-course dataset)
const allCourses = [
  ...baseCourses.map((c, i) => ({ ...c, id: i + 1 })),
  ...baseCourses.map((c, i) => ({ ...c, id: i + 7 })),
];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("Featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        {/* ================= HERO SECTION WITH BLUEPRINT GRID ================= */}
        <div className="relative bg-[#1A56EE] text-white pt-6 pb-20 sm:pb-24 overflow-hidden">
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
            {/* Top Navigation */}
            <Navbar />

            {/* Hero Title & Search Bar */}
            <div className="mt-14 sm:mt-16 text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-white mb-8">
                Find Your Next Course
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-xl mx-auto">
                <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                    className="w-full pl-11 pr-4 py-3 rounded-full bg-white text-gray-800 text-sm placeholder-gray-400 outline-none shadow-sm focus:ring-2 focus:ring-[#D3F832]"
                  />
                </div>

                <button
                  type="button"
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#D3F832] text-gray-900 font-semibold text-sm px-6 py-3 rounded-full hover:brightness-105 active:scale-95 transition shadow-sm shrink-0"
                >
                  <span>Courses</span>
                  <ChevronDown className="w-4 h-4 text-gray-800" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FILTER TOOLBAR & CATEGORIES ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-700 hover:bg-gray-50 transition">
                <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
                Filter
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-700 hover:bg-gray-50 transition">
                <Signal className="w-3.5 h-3.5 text-gray-500" />
                Level
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-xs font-medium text-gray-700 hover:bg-gray-50 transition">
                <LayoutGrid className="w-3.5 h-3.5 text-gray-500" />
                Category
              </button>
            </div>

            <button className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition">
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
              Most relevant
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition duration-150 ${
                  activeTab === cat
                    ? "bg-[#D3F832] text-gray-900 font-semibold shadow-sm"
                    : "bg-[#F5F5F7] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ================= 12-CARD COURSE GRID (4 ROWS x 3 COLS) ================= */}
          <div className="mt-10 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left">
            {allCourses.map((course) => {
              const cardContent = (
                <>
                  {/* Course Image */}
                  <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-gray-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/courses/course1.jpg";
                      }}
                    />
                  </div>

                  {/* Course Details */}
                  <div className="px-1.5 pt-4 pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-gray-900 text-lg tracking-tight group-hover:text-[#1A56EE] transition truncate">
                        {course.title}
                      </h3>
                      <div className="flex items-center text-sm font-semibold text-gray-500 shrink-0">
                        {course.rating}
                        <Star className="w-4 h-4 fill-gray-300 text-gray-300 ml-1" />
                      </div>
                    </div>

                    <p className="text-xs text-[#1A56EE] mt-0.5 font-medium">
                      by <span className="hover:underline">{course.author}</span>
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <span className="inline-flex items-center gap-1.5 bg-[#F5F5F7] text-gray-700 text-xs font-medium px-3.5 py-1.5 rounded-full">
                        <Signal className="w-3.5 h-3.5 text-gray-600" />
                        {course.level}
                      </span>

                      {/* Exact Avatar Stack Asset */}
                      <img
                        src="/assets/course-avatars.png"
                        alt="Enrolled students"
                        className="h-6 w-auto object-contain select-none"
                      />
                    </div>

                    <div className="mt-4 pt-3 flex items-baseline">
                      <span className="text-[#1A56EE] font-black text-xl tracking-tight">
                        {course.price}
                      </span>
                      <span className="text-gray-400 text-xs font-normal ml-1">/lifetime</span>
                    </div>
                  </div>
                </>
              );

              const cardClasses =
                "bg-white rounded-[26px] p-3 border border-gray-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group block cursor-pointer";

              return course.href ? (
                <Link key={course.id} href={course.href} className={cardClasses}>
                  {cardContent}
                </Link>
              ) : (
                <div key={course.id} className={cardClasses}>
                  {cardContent}
                </div>
              );
            })}
          </div>

          {/* ================= PAGINATION CONTROLS ================= */}
          <div className="flex items-center justify-center gap-2 pb-16">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[1, 2, 3, 4, 5].map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-10 h-10 rounded-full text-sm font-semibold transition ${
                  currentPage === pageNum
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
              disabled={currentPage === 5}
              aria-label="Next Page"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}