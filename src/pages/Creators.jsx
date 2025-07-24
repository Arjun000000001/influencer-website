import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const cards = [
  {
    title: "Mortal",
    img: "https://s8ul.gg/img/naman.webp",
  },
  { title: "Scout", img: "https://staticg.sportskeeda.com/editor/2023/02/44dd3-16756451153105-1920.jpg" },
  {
    title: "8Bit Thug",
    img: "https://s8ul.gg/img/about.jpg",
  },
  { title: "Viper", img: "https://staticg.sportskeeda.com/editor/2023/05/07e16-16852420481688-1920.jpg" },
  { title: "Rega", img: "https://aflencemedia.com/wp-content/uploads/2024/04/Regaltos-Featured-Image.png" },
];

function getRandomStyle() {
  const top = Math.random() * 80 + 5;
  const left = Math.random() * 85 + 5;
  const rotate = Math.random() * 40 - 20;
  return { top: `${top}%`, left: `${left}%`, rotate };
}

function FloatingCards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    setPositions(cards.map(() => getRandomStyle()));
  }, []);

  useEffect(() => {
    gsap.utils.toArray(".blob").forEach((el) => {
      gsap.to(el, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* 🫧 Floating Particles in BG */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: { value: "#000" } },
          particles: {
            number: { value: 30, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 2 },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out",
              bounce: false,
            },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* 🟡 Blobs */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-yellow-400/20 blur-[100px] rounded-full blob z-0" />
      <div className="absolute bottom-[15%] right-[5%] w-[300px] h-[300px] bg-yellow-400/20 blur-[100px] rounded-full blob z-0" />

      {/* 🃏 Cards */}
      {cards.map((card, i) => {
        const isSelected = selectedCard === i;
        const isHovered = hoveredIndex === i;
        const zIndex = isSelected ? 50 : isHovered ? 40 : 10;

        return (
          <motion.div
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCard(i);
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={false}
            animate={
              isSelected
                ? {
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    scale: 1.6,
                    rotate: 0,
                    zIndex,
                  }
                : {
                    top: positions[i]?.top || "50%",
                    left: positions[i]?.left || "50%",
                    x: "-50%",
                    y: "-50%",
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 0 : positions[i]?.rotate || 0,
                    zIndex,
                  }
            }
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            className="absolute w-60 h-80 rounded-2xl border border-white/20 backdrop-blur-md bg-white/10 text-white overflow-hidden flex flex-col cursor-pointer hover:shadow-[0_0_40px_#facc15]/80"
            style={{ transformOrigin: "center center" }}
          >
            {/* Title on top */}
            <div className="w-full bg-black/60 text-center py-2">
              <h3 className="text-lg font-bold tracking-wide uppercase text-yellow-400">
                {card.title}
              </h3>
            </div>

            {/* Image fills rest of card */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}

      {/* 🔲 Click on background to deselect */}
      {selectedCard !== null && (
        <div
          className="absolute inset-0 z-10"
          onClick={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
}

export default FloatingCards;
