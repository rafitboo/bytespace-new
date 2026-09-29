export default function LogoCloud() {
  const partnerLogos = [
    { src: "/assets/logo/footlogo-1.png", alt: "Logoipsum 1" },
    { src: "/assets/logo/footlogo-2.png", alt: "Logoipsum 2" },
    { src: "/assets/logo/footlogo-3.png", alt: "Logoipsum 3" },
    { src: "/assets/logo/footlogo-4.png", alt: "Logoipsum 4" },
    { src: "/assets/logo/footlogo-5.png", alt: "Logoipsum 5" },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-6 sm:gap-8 opacity-70">
        {partnerLogos.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-6 sm:h-7 w-auto object-contain hover:opacity-100 transition duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}