import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

gsap.registerPlugin(ScrollTrigger);

const moments = [
  {
    img: "https://s8ul.site/_next/image?url=%2Fawards%2Fi2.png&w=3840&q=75",
    text: "📍 Formation of Team SouL — Founded by Naman Mathur (MortaL), Animesh Agarwal (8Bit Thug), and Lokesh Jain (Goldy) as a competitive PUBG Mobile team.",
  },
  {
    img: "https://s8ul.site/_next/image?url=%2Fawards%2Fi6.png&w=3840&q=75",
    text: "📢 PUBG Mobile India Series — Team SouL's first major tournament participation, establishing their presence in Indian esports.",
  },
  {
    img: "https://s8ul.site/_next/image?url=%2Flogos%2Fs8.png&w=640&q=75",
    text: "🛡️ S8UL Merger — Team SouL and 8bit merged into S8UL Esports, combining competitive gaming and content creation.\n🏆 PUBG Mobile Club Open Success — Secured top position in this international tournament.",
  },
  {
    img: "https://s8ul.site/_next/image?url=%2Fawards%2Fi3.png&w=384&q=75",
    text: "🎯 BGMI Transition — Successfully transitioned to Battlegrounds Mobile India after its launch.\n🥈 PMPL Achievement — Strong finish in PUBG Mobile Pro League South Asia Championship.\n🎥 YouTube Milestone — Crossed 1 million subscribers on YouTube.",
  },
  {
    img: "https://s8ul.site/_next/image?url=%2Fawards%2Fmobies.png&w=3840&q=75",
    text: "🏅 First Esports Awards Win — Won Content Group of the Year at Esports Awards 2022.\n🌍 Mobies Recognition — Received Global Impact on Mobile Gaming Award.\n🥇 BGMI Championship Success — Secured top position in BGMI Championship Series.",
  },
  {
    img: "https://s8ul.site/_next/image?url=%2Fawards%2Fi1.png&w=3840&q=75",
    text: "🏆 Second Esports Awards Win — Won Content Group of the Year for the second consecutive time.\n🎮 Multi-Game Success — Excellence in tournaments across Call of Duty: Mobile and Free Fire.\n🔥 BGMI Masters Performance — Outstanding performance in BGMI Masters Series.",
  },
];

export default function About() {
  const cardsRef = useRef([]);
  const linesRef = useRef([]);
  const arrowsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      const img = card.querySelector("img");
      const text = card.querySelector(".card-text");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        card,
        {
          opacity: 0,
          y: 150,
          rotateX: 45,
          skewY: 15,
          transformOrigin: "top center",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          skewY: 0,
          duration: 1.2,
          ease: "power4.out",
        }
      )
        .fromTo(
          img,
          { scale: 1.4, filter: "grayscale(1)" },
          {
            scale: 1,
            filter: "grayscale(0)",
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1"
        )
        .fromTo(
          text,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8"
        );
    });

    linesRef.current.forEach((line, i) => {
      gsap.fromTo(
        line,
        { height: 0 },
        {
          height: "120px",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[i + 1],
            start: "top 85%",
            toggleActions: "play none none none",
            onEnter: () => {
              gsap.to(arrowsRef.current[i], {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
              });
            },
          },
        }
      );
    });
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* 🌌 Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: { value: "#000000" } },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#00ffcc" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            links: {
              enable: true,
              color: "#00ffcc",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* 🔥 Foreground Cards + Lines */}
      <div className="relative z-10 max-w-6xl mx-auto py-24 px-4 flex flex-col items-center gap-32">
        {moments.map((moment, idx) => (
          <div key={idx} className="relative flex flex-col items-center w-full">
            {/* Card */}
            <div
              ref={(el) => (cardsRef.current[idx] = el)}
              className="flex flex-col md:flex-row items-center bg-[#111] rounded-xl border border-yellow-500/30 px-8 py-10 w-[90%] shadow-md backdrop-blur-md"
            >
              {/* Image */}
              <img
                src={moment.img}
                alt="Moment"
                className="w-full md:w-1/2 h-64 object-cover rounded-lg"
              />
              {/* Text */}
              <div className="md:ml-8 mt-6 md:mt-0 text-left card-text whitespace-pre-line">
                <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                  {moment.text}
                </p>
              </div>
            </div>

            {/* Mirror Reflection */}
            <div
              className="mt-[-80px] w-[90%] h-[250px] overflow-hidden rounded-b-xl pointer-events-none"
              style={{
                transform: "scaleY(-1)",
                opacity: 0.2,
                filter: "blur(3px)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${moment.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  borderRadius: "12px",
                }}
              />
            </div>

            {/* Connecting Line + ↓ Arrow */}
            {idx < moments.length - 1 && (
              <div className="flex flex-col items-center absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                <div
                  ref={(el) => (linesRef.current[idx] = el)}
                  className="w-0.5 bg-yellow-500"
                  style={{ height: "0px" }}
                ></div>

                <div
                  ref={(el) => (arrowsRef.current[idx] = el)}
                  className="mt-1 text-yellow-500 text-2xl opacity-0 translate-y-4 transition"
                >
                  ↓
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
