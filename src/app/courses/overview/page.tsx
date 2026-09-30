"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import {
  Share2,
  Signal,
  Star,
  Users,
  Play,
  ShoppingBag,
  CheckCircle2,
  FolderOpen,
  Video,
  Award,
  Headphones,
} from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function CourseOverviewPage() {
  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">("about");
  const [activeReviewRating, setActiveReviewRating] = useState("all");

  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  const modules = [
    {
      num: "Module 1",
      title: "Introduction to Digital Assets",
      desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      num: "Module 2",
      title: "Design Principles for Impact",
      desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      num: "Module 4",
      title: "User-Centric Design Strategies",
      desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      num: "Module 5",
      title: "Interactive Media and Engagement",
      desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      num: "Module 6",
      title: "Project Showcase and Critique",
      desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      num: "Module 7",
      title: "Optimizing Digital Assets for Various Platforms",
      desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ];

  const reviews = [
    {
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "/assets/overview/pure2.png",
      comment:
        "\"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!\"",
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "/assets/overview/albert.png",
      comment:
        "\"This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!\"",
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "/assets/overview/cody.png",
      comment:
        "\"The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.\"",
    },
    {
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      time: "a year ago",
      avatar: "/assets/overview/brook.png",
      comment:
        "\"The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.\"",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        {/* ================= HERO SECTION WITH BLUEPRINT GRID ================= */}
        <div className="relative bg-[#1A56EE] text-white pt-6 pb-14 sm:pb-16 overflow-hidden">
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
            {/* Header / Navbar */}
            <Navbar />

            {/* Course Title Strip */}
            <div className="mt-12 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight text-white">
                  Build Digital Asset: A Comprehensive Guide
                </h1>
                <p className="text-sm sm:text-base text-blue-100/90 font-normal">
                  Unlock the Power of Digital Creation with Expert Guidance
                </p>
                <p className="text-xs sm:text-sm text-blue-200">
                  by <span className="underline cursor-pointer">purepearl studio</span>
                </p>

                {/* Metadata Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-white text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                    <Signal className="w-3.5 h-3.5 text-gray-600" />
                    Intermediate
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-[#1A56EE] text-[#1A56EE]" />
                    4.8 (172 reviews)
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white text-gray-800 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                    <Users className="w-3.5 h-3.5 text-gray-600" />
                    199 Students
                  </span>
                </div>
              </div>

              {/* Share Pill Button */}
              <button
                type="button"
                className="self-start inline-flex items-center gap-2 bg-[#D3F832] text-gray-900 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full hover:brightness-105 active:scale-95 transition shadow-sm"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Video Playback Card directly inside the Blue Hero Section */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <div className="relative rounded-[32px] overflow-hidden aspect-[16/10] bg-gray-200 shadow-2xl border-4 border-white">
                  <img
                    src="/assets/overview/thumbnail.jpg"
                    alt="Course Preview"
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                    <button
                      type="button"
                      aria-label="Play Video"
                      className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 flex items-center justify-center hover:scale-105 transition shadow-2xl group"
                    >
                      <Play className="w-7 sm:w-9 h-7 sm:h-9 fill-white text-white translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT & SIDEBAR ================= */}
        {/* Pull up so the right sidebar card's top edge matches the video playback card's top edge perfectly */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:-mt-[527px] xl:-mt-[564px] pb-20 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ================= LEFT COLUMN: Spacer + Tabs ================= */}
            <div className="lg:col-span-8 space-y-8 lg:pt-[527px] xl:pt-[564px]">
              {/* Tab Switcher Pills */}
              <div className="flex items-center gap-2.5 pt-4">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                    activeTab === "about"
                      ? "bg-[#D3F832] text-gray-900 shadow-sm"
                      : "bg-[#F5F5F7] text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("lessons")}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                    activeTab === "lessons"
                      ? "bg-[#D3F832] text-gray-900 shadow-sm"
                      : "bg-[#F5F5F7] text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Lessons
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                    activeTab === "reviews"
                      ? "bg-[#D3F832] text-gray-900 shadow-sm"
                      : "bg-[#F5F5F7] text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Reviews
                </button>
              </div>

              {/* ================= TAB 1: ABOUT ================= */}
              {activeTab === "about" && (
                <div className="space-y-10 pt-2">
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                      Description
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                    </p>
                  </div>

                  {/* Sneak Peak Gallery */}
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                      Sneak Peak
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                        <img
                          src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80"
                          alt="Sneak peak 1"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                        <img
                          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80"
                          alt="Sneak peak 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                        <img
                          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80"
                          alt="Sneak peak 3"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                        <img
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                          alt="Sneak peak 4"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Key Points Checklist */}
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                      Key Points
                    </h3>
                    <div className="space-y-3">
                      {keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#1A56EE] fill-blue-50 shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-gray-700">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ================= TAB 2: LESSONS ================= */}
              {activeTab === "lessons" && (
                <div className="space-y-8 pt-2">
                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                      Explore the Modules
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                    </p>
                  </div>

                  {/* Lesson List */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-gray-900">Lesson List</h3>
                    <div className="space-y-3.5">
                      {modules.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#D3F832] flex items-center justify-center shrink-0">
                            <Video className="w-5 h-5 text-gray-900" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900">
                              {item.num}: {item.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-base font-bold text-gray-900">Lesson Content</h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                    </p>
                  </div>

                  {/* Lesson Progress Tracking */}
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-gray-900">
                        Lesson Progress Tracking
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                        Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                      </p>
                    </div>

                    {/* Progress Card */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                      <p className="text-xs text-gray-500 font-medium">Learning Progress</p>
                      <p className="text-3xl font-extrabold text-gray-900 mt-1">55%</p>
                      <div className="w-full bg-gray-100 h-2.5 rounded-full mt-3 overflow-hidden">
                        <div
                          className="bg-[#D3F832] h-full rounded-full transition-all duration-500"
                          style={{ width: "55%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= TAB 3: REVIEWS ================= */}
              {activeTab === "reviews" && (
                <div className="space-y-8 pt-2">
                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                      What Learners Are Saying
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                    </p>
                  </div>

                  {/* Rating Breakdown Card */}
                  <div className="p-6 rounded-[28px] border border-gray-200 bg-white grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    <div className="sm:col-span-4 bg-[#D3F832] rounded-2xl p-6 text-center flex flex-col justify-center items-center">
                      <span className="text-xs font-semibold text-gray-700">Ratings</span>
                      <span className="text-4xl sm:text-5xl font-black text-gray-900 mt-1">
                        4.7
                      </span>
                    </div>

                    <div className="sm:col-span-8 space-y-2 text-xs">
                      {[
                        { stars: 5, count: 720, pct: "85%" },
                        { stars: 4, count: 120, pct: "50%" },
                        { stars: 3, count: 21, pct: "15%" },
                        { stars: 2, count: 12, pct: "8%" },
                        { stars: 1, count: 16, pct: "10%" },
                      ].map((row) => (
                        <div key={row.stars} className="flex items-center gap-3">
                          <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                            <div className="bg-[#D3F832] h-full rounded-full" style={{ width: row.pct }} />
                          </div>
                          <div className="flex items-center text-gray-700 w-24 justify-end">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < row.stars ? "fill-gray-700 text-gray-700" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-gray-500 w-8 text-right font-medium">{row.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rating Filter Pills */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-gray-900">Individual Reviews:</h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => setActiveReviewRating("all")}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                          activeReviewRating === "all"
                            ? "bg-[#D3F832] text-gray-900 shadow-sm"
                            : "bg-[#F5F5F7] text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        All rating
                      </button>
                      {[5, 4, 3, 2, 1].map((r) => (
                        <button
                          key={r}
                          onClick={() => setActiveReviewRating(String(r))}
                          className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                            activeReviewRating === String(r)
                              ? "bg-[#D3F832] text-gray-900 shadow-sm"
                              : "bg-[#F5F5F7] text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          <Star className="w-3 h-3 fill-current" />
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Review Cards */}
                  <div className="space-y-4">
                    {reviews.map((rev, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-[24px] p-6 border border-gray-200/90 shadow-sm space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={rev.avatar}
                              alt={rev.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="text-sm font-bold text-gray-900">{rev.name}</h4>
                              <p className="text-xs text-gray-400">{rev.role}</p>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400">{rev.time}</span>
                        </div>

                        <div className="flex items-center gap-0.5 text-gray-800">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current text-gray-800" />
                          ))}
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                          {rev.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ================= RIGHT COLUMN: Sticky Sidebar Card ================= */}
            <div className="lg:col-span-4 lg:sticky lg:top-8">
              <div className="bg-white rounded-[32px] p-7 border border-gray-200 shadow-xl space-y-6">
                
                {/* 112 Lessons Preview */}
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-900 tracking-tight">
                    112 Lessons (24 hours)
                  </h3>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-700">
                      <span className="font-medium">01 Introduction to Digital Assets</span>
                      <span className="text-[#1A56EE] font-medium shrink-0 ml-2">12 mins</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-700">
                      <span className="font-medium">02 Design Principles for Impacts</span>
                      <span className="text-[#1A56EE] font-medium shrink-0 ml-2">21 mins</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-700">
                      <span className="font-medium">03 Advanced Techniques in Digital Creation</span>
                      <span className="text-[#1A56EE] font-medium shrink-0 ml-2">16 mins</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-3 font-medium">99 more videos</p>
                </div>

                {/* Subtext */}
                <p className="text-xs text-gray-500 leading-relaxed font-normal">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                {/* Price & CTA */}
                <div>
                  <div className="flex items-baseline mb-3">
                    <span className="text-[#1A56EE] font-black text-2xl tracking-tight">$25</span>
                    <span className="text-gray-400 text-xs ml-1 font-normal">/lifetime</span>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-[#D3F832] text-gray-900 font-bold text-sm py-3.5 rounded-full hover:brightness-105 active:scale-98 transition shadow-sm"
                  >
                    Enroll Now
                  </button>
                </div>

                {/* Included Features */}
                <div className="pt-2 border-t border-gray-100 space-y-3.5">
                  <h4 className="text-xs font-bold text-gray-900">This course include</h4>
                  <ul className="space-y-3 text-xs text-gray-600 font-medium">
                    <li className="flex items-center gap-2.5">
                      <FolderOpen className="w-4 h-4 text-[#1A56EE]" />
                      Learning Resources
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Video className="w-4 h-4 text-[#1A56EE]" />
                      Quality Lesson Videos
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-[#1A56EE]" />
                      Certificate of Completion
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Headphones className="w-4 h-4 text-[#1A56EE]" />
                      Private Consultation
                    </li>
                  </ul>
                </div>

                {/* Creator Profile Preview */}
                <div className="pt-4 border-t border-gray-100 space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/overview/pure.jpg"
                      alt="PurePearl Studio"
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">PurePearl Studio</h4>
                      <p className="text-xs text-gray-400">Professional Creator</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>

                  <Link
                    href="/creators"
                    className="block text-center w-full border border-gray-200 text-gray-800 font-semibold text-xs py-2.5 rounded-full hover:bg-gray-50 transition"
                  >
                    See Full Profile
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