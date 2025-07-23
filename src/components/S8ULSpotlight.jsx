import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const spotlightData = [
  {
    img: "https://s8ul.gg/img/slider8.png",
    title: "S8UL's Historic Win",
    date: "📅 August 26, 2024",
    desc: "S8UL becomes World's First Org To Win Content Group Of The Year Title 3x.",
  },
  {
    img: "https://s8ul.gg/img/media1.png",
    title: "S8UL enters COD:M",
    date: "📅 March 3, 2025",
    desc: "S8UL unveils power-packed Call of Duty: Mobile Roster for national/international glory.",
  },
  {
    img: "https://s8ul.gg/img/slider2.jpg",
    title: "S8UL Wins MOBIES",
    date: "📅 July 17, 2023",
    desc: "S8UL wins MOBIES award for global mobile gaming impact in LA.",
  },
];

function S8ULSpotlight() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, idx) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
            once: true,
          },
        }
      );
    });

    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleMouseMove = (e, i) => {
    const card = cardsRef.current[i];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = -(y / rect.height - 0.5) * 10;

    gsap.to(card, {
      rotateY,
      rotateX,
      scale: 1.03,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handleMouseLeave = (i) => {
    gsap.to(cardsRef.current[i], {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <section className="bg-black text-gray-100 py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-left mb-14">
        <h2 className="text-yellow-400 text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-[0_0_40px_rgba(234,179,8,0.5)]">
          ⚡ S8UL Spotlight
        </h2>
        <p className="text-lg text-gray-400">
          Highlights of iconic moments that shaped Indian esports.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto perspective-[1200px]">
        {spotlightData.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => handleMouseLeave(i)}
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-yellow-500/5 border border-yellow-400/10 shadow-[0_0_60px_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 cursor-pointer transform-style-preserve-3d will-change-transform"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500 brightness-90"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-center px-5 py-5 translate-y-full group-hover:translate-y-0 transition-all duration-500 z-10">
              <h3 className="text-lg font-bold text-yellow-400 mb-1 drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mb-1">{item.date}</p>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </div>

            {/* Shine */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-20" />
            {/* Glow Border on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/40 rounded-3xl transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default S8ULSpotlight;
