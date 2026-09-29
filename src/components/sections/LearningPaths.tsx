const paths = [
  {
    name: "Design",
    image: "/assets/paths/design.png",
  },
  {
    name: "Development",
    image: "/assets/paths/development.png",
  },
  {
    name: "IT & Software",
    image: "/assets/paths/it.png",
  },
  {
    name: "Business",
    image: "/assets/paths/business.png",
  },
  {
    name: "Marketing",
    image: "/assets/paths/marketting.png",
  },
  {
    name: "Photography",
    image: "/assets/paths/photography.png",
  },
];

export default function LearningPaths() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-gray-900 tracking-tight leading-tight">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mt-4 text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed font-normal">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        {/* 6 Category Cards Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {paths.map((path, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[26px] p-6 flex flex-col items-center justify-center border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
            >
              {/* Badge Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105">
                <img
                  src={path.image}
                  alt={path.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <span className="font-semibold text-gray-900 text-sm tracking-tight group-hover:text-[#1A56EE] transition-colors">
                {path.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}