"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SlidersHorizontal,
  Signal,
  LayoutGrid,
  ArrowUpDown,
  Star,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

const creatorCourses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course1.jpg",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course2.jpg",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course3.jpg",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course4.jpg",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course5.jpg",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course6.jpg",
  },
];

export default function CreatorProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(12);

  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
    setFollowerCount((prev) => (isFollowing ? prev - 1 : prev + 1));
  };

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
            <Navbar />

            {/* Creator Header Profile Card */}
            <div className="mt-14 max-w-4xl space-y-6">
              {/* Avatar + Name + Tag */}
              <div className="flex items-center gap-5">
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white/10 border-2 border-white/20 shadow-lg shrink-0">
                  <img
                    src="/assets/creator.png"
                    alt="PurePearl Studio"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/community/person3.png";
                    }}
                  />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      PurePearl Studio
                    </h1>
                    <span className="bg-[#D3F832] text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                      Creator
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100/90 font-medium mt-1">
                    Passionate UI/UX, Web designer
                  </p>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-xs sm:text-sm text-blue-100/80 leading-relaxed font-normal max-w-3xl">
                <p>
                  Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
                </p>
                <p>
                  ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
                </p>
              </div>

              {/* Stats & Follow Button */}
              <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white text-gray-900 text-xs sm:text-sm font-semibold px-5 py-2 rounded-full shadow-sm">
                    3 Products
                  </span>
                  <span className="bg-white text-gray-900 text-xs sm:text-sm font-semibold px-5 py-2 rounded-full shadow-sm">
                    {followerCount} Followers
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleFollowToggle}
                  className={`text-xs sm:text-sm font-bold px-7 py-2.5 rounded-full transition-all active:scale-95 shadow-md ${
                    isFollowing
                      ? "bg-white text-gray-900"
                      : "bg-[#D3F832] text-gray-900 hover:brightness-105"
                  }`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CREATOR'S PUBLISHED COURSES ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            {/* Filter Buttons */}
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

            {/* Sorting */}
            <button className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition">
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
              Most relevant
            </button>
          </div>

          {/* 6 Course Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left">
            {creatorCourses.map((course) => (
              <Link
                key={course.id}
                href="/courses/overview"
                className="bg-white rounded-[26px] p-3 border border-gray-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/courses/course-1.png";
                    }}
                  />
                </div>

                {/* Details */}
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
                    by {course.author}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#F5F5F7] text-gray-700 text-xs font-medium px-3.5 py-1.5 rounded-full">
                      <Signal className="w-3.5 h-3.5 text-gray-600" />
                      {course.level}
                    </span>

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
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}