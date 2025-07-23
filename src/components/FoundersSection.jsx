import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const founders = [
  {
    name: "Animesh Agarwal",
    img: "https://s8ul.gg/img/animesh.webp",
    bio: "28-year-old has a deep understanding...",
  },
  {
    name: "Lokesh Jain",
    img: "https://s8ul.gg/img/lokesh.webp",
    bio: "Casualy and enjoys hobbies like billiards...",
  },
  {
    name: "Naman Mathur",
    img: "https://s8ul.gg/img/naman.webp",
    bio: "Widely known by his gaming alias Mortal...",
  },
  {
    name: "Sumit Sovasaria",
    img: "https://s8ul.gg/img/sumit.jpg",
    bio: "Sumit is a seasoned industrialist from Guwahati...",
  },
];

export default function FoundersSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, idx) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, rotateX: 20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          delay: idx * 0.15,
        }
      );
    });
  }, []);

  const handleMouseEnter = (idx) => {
    gsap.to(cardsRef.current[idx], {
      rotateY: 10,
      scale: 1.05,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (idx) => {
    gsap.to(cardsRef.current[idx], {
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section className="bg-black text-gray-200 py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-left mb-14">
        <h2 className="text-yellow-400 text-4xl md:text-5xl font-extrabold mb-4 tracking-wide drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]">
          🚀 Meet Our Founders
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl">
          Visionaries behind India's esports revolution – driving innovation, gaming culture, and global dominance.
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
        style={{ perspective: "1200px" }}
      >
        {founders.map((founder, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            className="relative group bg-white/10 backdrop-blur-xl rounded-2xl pt-20 pb-8 px-6 text-center text-white shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-white/20 transition-transform duration-300 transform-style-preserve-3d cursor-pointer hover:shadow-yellow-500/30"
          >
            {/* Glow Border on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>

            {/* Reflective Shine Layer */}
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-0" />

            {/* Profile Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500 shadow-md z-10">
              <img
                src={founder.img}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name + Bio */}
            <h3 className="text-white font-semibold text-lg mt-6 mb-2 relative z-10">
              {founder.name}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed relative z-10">
              {founder.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
