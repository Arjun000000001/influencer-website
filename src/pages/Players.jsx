import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const players = [
  {
    id: 1,
    name: "8Bit Thug",
    role: "Leader",
    image: "https://images.unsplash.com/photo-1564878954365-ce84ffc09f68?w=600&auto=format&fit=crop&q=60",
    team: "8Bit",
    country: "India",
    age: 27,
    highlights: "3x BGMI Finalist",
  },
  {
    id: 2,
    name: "Scout",
    role: "Assaulter",
    image: "https://images.unsplash.com/photo-1640187128454-1d7c462ede26?w=600&auto=format&fit=crop&q=60",
    team: "Xo",
    country: "India",
    age: 25,
    highlights: "PMWL Top Fragger",
  },
  {
    id: 3,
    name: "Mavi",
    role: "IGL",
    image: "https://images.unsplash.com/photo-1706246448963-0b494178e293?w=600&auto=format&fit=crop&q=60",
    team: "Orange Rock",
    country: "India",
    age: 26,
    highlights: "Best IGL 2021",
  },
  {
    id: 4,
    name: "Goblin",
    role: "Sniper",
    image: "https://images.unsplash.com/photo-1622349851524-890cc3641b87?w=600&auto=format&fit=crop&q=60",
    team: "Soul",
    country: "India",
    age: 21,
    highlights: "MVP BGIS 2022",
  },
];

export default function Players() {
  const sectionRef = useRef(null);

  const animations = [
    { x: -400, y: 0, rotate: 10, scale: 0.7 },
    { x: 400, y: 0, rotate: -10, scale: 0.75 },
    { x: 0, y: 400, rotate: 5, scale: 0.7 },
    { x: 0, y: -400, rotate: -5, scale: 0.7 },
    { x: -250, y: 150, rotate: 20, scale: 0.6 },
    { x: 200, y: -200, rotate: -15, scale: 0.65 },
  ];

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".card");

    cards.forEach((card) => {
      const animation = animations[Math.floor(Math.random() * animations.length)];

      gsap.fromTo(
        card,
        {
          opacity: 0,
          ...animation,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Glowing image effect
    gsap.utils.toArray(".glow").forEach((imgWrapper) => {
      gsap.to(imgWrapper, {
        boxShadow: "0 0 30px rgba(0,255,255,0.6)",
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });
    });

    // Looping animation for text
    gsap.utils.toArray(".animated-text").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0.5, y: -5 },
        {
          opacity: 1,
          y: 5,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "sine.inOut",
        }
      );
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: () => sectionRef.current.scrollHeight - window.innerHeight + "px",
      snap: {
        snapTo: 1 / (players.length - 1),
        duration: 0.5,
        ease: "power1.inOut",
      },
    });
  }, []);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: #000;
          font-family: 'Segoe UI', sans-serif;
          overflow-x: hidden;
        }

        .section {
          width: 100%;
        }

        .card {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          box-shadow: 0 0 50px rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          text-align: center;
        }

        .image-wrapper {
          position: relative;
          width: 500px;
          height: 300px;
          margin-bottom: 2rem;
          overflow: hidden;
          border-radius: 16px;
          transition: box-shadow 0.3s ease;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .image-wrapper::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: inherit;
          background-image: inherit;
          background-size: cover;
          background-position: center;
          transform: scaleY(-1);
          opacity: 0.3;
          filter: blur(3px);
          mask-image: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
        }

        .card h2 {
          font-size: 2.8rem;
          margin: 0.5rem 0;
        }

        .card p {
          font-size: 1.4rem;
          opacity: 0.85;
          margin: 0.3rem 0;
        }

        .info {
          margin-top: 1rem;
        }

        .info span {
          display: block;
          font-size: 1.1rem;
          opacity: 0.7;
        }
      `}</style>

      <div className="section" ref={sectionRef}>
        {players.map((player) => (
          <div key={player.id} className="card">
            <div
              className="image-wrapper glow"
              style={{ backgroundImage: `url(${player.image})` }}
            >
              <img src={player.image} alt={player.name} />
            </div>
            <h2 className="animated-text">{player.name}</h2>
            <p className="animated-text">{player.role}</p>
            <div className="info">
              <span className="animated-text"><strong>Team:</strong> {player.team}</span>
              <span className="animated-text"><strong>Country:</strong> {player.country}</span>
              <span className="animated-text"><strong>Age:</strong> {player.age}</span>
              <span className="animated-text"><strong>Highlights:</strong> {player.highlights}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
