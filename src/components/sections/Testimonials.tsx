"use client";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/community/person1.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/community/person2.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/community/person3.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function CommunityTestimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      
      {/* ================= ATMOSPHERIC GRADIENTS (CENTERED) ================= */}
      {/* 1. Center-Left Soft Blue Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[650px] h-[550px] bg-[#1A56EE]/12 rounded-full blur-[140px] pointer-events-none" />

      {/* 2. Center-Right Soft Lime/Yellow Ambient Glow */}
      <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[650px] h-[550px] bg-[#D3F832]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Central Ambient Core Blend */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#1A56EE]/8 to-[#D3F832]/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-between pb-16">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-900 tracking-tight leading-[1.15]">
            Discover What Our <br />
            Community Is Saying
          </h2>

          {/* Subtext Paragraph */}
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal max-w-xl lg:ml-auto">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced
            the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of
            enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* ================= TESTIMONIAL CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-sm rounded-[28px] p-7 sm:p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* User Avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden mb-5 bg-gray-100 border border-gray-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="font-bold text-gray-900 text-base tracking-tight">
                  {item.name}
                </h3>
                <p className="text-xs text-[#1A56EE] font-medium mt-0.5 mb-5">
                  {item.role}
                </p>

                {/* Quote Body */}
                <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}