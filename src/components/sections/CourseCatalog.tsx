"use client";

import { useState } from "react";
import { Signal, Star } from "lucide-react";

const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration",
  "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design",
  "Photography", "Productivity", "Web Development", "Data Science", "Cooking", "+ More"
];

const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course1.jpg",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course2.jpg",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course3.jpg",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course4.jpg",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course5.jpg",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: "4.5",
    price: "$25",
    level: "Beginner",
    image: "/assets/courses/course6.jpg",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
];

export default function CourseCatalog() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight">
          Discover Your Passion, <br /> Build Your Skills
        </h2>
        <p className="mt-4 text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed font-normal">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>

        {/* Filter Category Pills */}
        <div className="mt-9 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
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

        {/* Course Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[26px] p-3 border border-gray-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Course Image + Frosted Badges */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                />

                {/* Frosted Badge Bar (Evenly aligned across every card) */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10 pointer-events-none">
                  <span className="bg-white/70 backdrop-blur-md text-gray-800 text-[11px] font-medium px-2.5 py-1 rounded-full shadow-sm">
                    {course.lessons}
                  </span>
                  <span className="bg-white/70 backdrop-blur-md text-gray-800 text-[11px] font-medium px-2.5 py-1 rounded-full shadow-sm">
                    {course.duration}
                  </span>
                  <span className="bg-white/70 backdrop-blur-md text-gray-800 text-[11px] font-medium px-2.5 py-1 rounded-full shadow-sm">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Course Meta & Details */}
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
                  by <span className="hover:underline cursor-pointer">{course.author}</span>
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#F5F5F7] text-gray-700 text-xs font-medium px-3.5 py-1.5 rounded-full">
                    <Signal className="w-3.5 h-3.5 text-gray-600" />
                    {course.level}
                  </span>

                  <div className="flex items-center -space-x-1.5">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop"
                      alt="Student"
                      className="w-6 h-6 rounded-full border border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop"
                      alt="Student"
                      className="w-6 h-6 rounded-full border border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop"
                      alt="Student"
                      className="w-6 h-6 rounded-full border border-white object-cover"
                    />
                    <span className="w-6 h-6 rounded-full bg-[#D3F832] text-[9px] font-black text-gray-900 flex items-center justify-center border border-white">
                      26+
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-baseline">
                  <span className="text-[#1A56EE] font-black text-xl tracking-tight">
                    {course.price}
                  </span>
                  <span className="text-gray-400 text-xs font-normal ml-1">/lifetime</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}