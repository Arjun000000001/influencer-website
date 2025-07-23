import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Montage 1",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "High energy gameplay",
  },
  {
    title: "Montage 2",
    video: "https://www.w3schools.com/html/movie.mp4",
    description: "Fast-paced action",
  },
  {
    title: "Montage 3",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Creative transitions",
  },
];

const LatestWork = () => {
  const gateLeft = useRef(null);
  const gateRight = useRef(null);
  const cardRefs = useRef([]);
  const fireRef = useRef(null);

  useEffect(() => {
    // Gate animation
    gsap.to(gateLeft.current, {
      x: "-100%",
      duration: 1.2,
      ease: "power2.inOut",
    });

    gsap.to(gateRight.current, {
      x: "100%",
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        cardRefs.current.forEach((card, i) => {
          gsap.fromTo(
            card,
            { rotationY: 180, opacity: 0, y: 100 },
            {
              rotationY: 0,
              opacity: 1,
              y: 0,
              duration: 1,
              delay: i * 0.3,
              ease: "back.out(1.7)",
            }
          );
        });
      },
    });

    gsap.to(fireRef.current, {
      backgroundPosition: "1000% 0",
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      {/* 🔥 Fire BG */}
      <div
        ref={fireRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* ⛩️ Gate */}
      <div
        ref={gateLeft}
        style={{
          position: "absolute",
          width: "50%",
          height: "100%",
          background: "#1a1a1a",
          left: 0,
          top: 0,
          zIndex: 2,
        }}
      ></div>
      <div
        ref={gateRight}
        style={{
          position: "absolute",
          width: "50%",
          height: "100%",
          background: "#1a1a1a",
          right: 0,
          top: 0,
          zIndex: 2,
        }}
      ></div>

      {/* 🃏 Cards with 3D perspective */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: "2rem",
          flexWrap: "wrap",
          perspective: "1000px", // 👈 Key for 3D effect
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{
              width: "300px",
              height: "350px",
              background: "#111",
              borderRadius: "16px",
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.15)",
              padding: "1rem",
              transformStyle: "preserve-3d",
              transform: "rotateY(180deg)",
              opacity: 0,
              cursor: "pointer",
              transition: "transform 0.5s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateZ(-100px) scale(0.95)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateZ(0px) scale(1)";
            }}
          >
            <video
              src={card.video}
              style={{
                width: "100%",
                height: "70%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              muted
              autoPlay
              loop
            />
            <h3
              style={{
                fontSize: "1.2rem",
                marginTop: "0.8rem",
                marginBottom: "0.3rem",
                textAlign: "center",
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                opacity: 0.7,
                textAlign: "center",
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
