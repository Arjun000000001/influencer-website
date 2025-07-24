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
        {
          opacity: 0,
          y: 60,
          rotateX: 15,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 60%",
            scrub: 0.3,
            once: true,
          },
        }
      );
    });
  }, []);

  const handleMouseEnter = (idx) => {
    gsap.to(cardsRef.current[idx], {
      rotateY: 8,
      rotateX: 4,
      scale: 1.07,
      boxShadow: "0 0 40px rgba(255,255,255,0.1), 0 0 60px #facc15",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (idx) => {
    gsap.to(cardsRef.current[idx], {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      boxShadow: "none",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-gray-100 py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-yellow-400 text-5xl font-black tracking-wide drop-shadow-[0_0_30px_rgba(234,179,8,0.6)]">
          ⚡ Founders of 2025
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          The minds redefining India's esports dominance with next-gen innovation and vision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {founders.map((founder, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            className="group relative bg-white/5 border border-white/20 backdrop-blur-[12px] rounded-3xl p-6 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-500 overflow-hidden will-change-transform"
          >
            {/* Border Glow Layer */}
            <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-yellow-300/5 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Profile Image */}
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 shadow-yellow-300/50 shadow-lg mb-4 relative z-10">
              <img
                src={founder.img}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-white font-bold text-xl relative z-10">
              {founder.name}
            </h3>

            {/* Bio */}
            <p className="text-sm text-gray-300 mt-2 relative z-10 leading-relaxed">
              {founder.bio}
            </p>

            {/* Glow Ring */}
            <div className="absolute -inset-1 z-0 rounded-3xl ring-2 ring-yellow-400/10 group-hover:ring-yellow-400/30 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
