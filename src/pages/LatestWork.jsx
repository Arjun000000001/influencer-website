import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    title: "Gameplay Domination",
    video: "https://www.youtube.com/embed/tS2LGPkTSSc",
    description: "High-energy intense game highlights!",
  },
  {
    title: "Unbelievable Comeback",
    video: "https://www.youtube.com/embed/oUOFkcE091Y",
    description: "Watch the clutch that shocked everyone!",
  },
  {
    title: "Sniping Masterclass",
    video: "https://www.youtube.com/embed/ilpCGD2O4Zg",
    description: "One-shot kills with precision and style.",
  },
  {
    title: "Squad Wipe with Style",
    video: "https://www.youtube.com/embed/OBeKopsFH04",
    description: "Full squad eliminated in seconds!",
  },
];

const LatestWork = () => {
  const gateLeft = useRef(null);
  const gateRight = useRef(null);
  const videoRefs = useRef([]);
  const bgRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

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
        setShowContent(true);
        videoRefs.current.forEach((video, i) => {
          gsap.fromTo(
            video,
            { opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.4,
              delay: i * 0.4,
              ease: "power2.out",
            }
          );
        });
      },
    });

    // Animated Background
    gsap.to(bgRef.current, {
      backgroundPosition: "1000% 0",
      duration: 30,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#000",
        overflow: "hidden",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        padding: "4rem 1rem",
      }}
    >
      {/* 🔥 Chaos BG */}
      <div
        ref={bgRef}
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

      {/* ⛩️ Gates */}
      <div
        ref={gateLeft}
        style={{
          position: "absolute",
          width: "50%",
          height: "100%",
          background: "#111",
          left: 0,
          top: 0,
          zIndex: 2,
        }}
      />
      <div
        ref={gateRight}
        style={{
          position: "absolute",
          width: "50%",
          height: "100%",
          background: "#111",
          right: 0,
          top: 0,
          zIndex: 2,
        }}
      />

      {/* 🎥 Influencer Videos */}
      {showContent && (
        <div
          style={{
            position: "relative",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "3.5rem",
          }}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              style={{
                width: "90%",
                maxWidth: "800px",
                borderRadius: "16px",
                overflow: "hidden",
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.06)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(255, 255, 255, 0.06)";
              }}
            >
              <iframe
                width="100%"
                height="450"
                src={video.video}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div style={{ padding: "1rem" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "0.5rem",
                    color: "#fff",
                  }}
                >
                  {video.title}
                </h3>
                <p style={{ fontSize: "1rem", opacity: 0.8 }}>
                  {video.description}
                </p>
              </div>
            </div>
          ))}

          {/* 🧩 Glowing Divider Line */}
          <div
            style={{
              marginTop: "5rem",
              width: "100%",
              height: "3px",
              background:
                "linear-gradient(to right, transparent, #fff 50%, transparent)",
              filter: "blur(2px)",
              opacity: 0.3,
            }}
          ></div>
        </div>
      )}
    </section>
  );
};

export default LatestWork;
