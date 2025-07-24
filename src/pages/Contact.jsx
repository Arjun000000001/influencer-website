import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Hover Sound
const hoverSoundUrl = "https://www.fesliyanstudios.com/play-mp3/387";

export default function FuturisticContactForm() {
  const formRef = useRef(null);
  const bgRef = useRef(null);
  const audioRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // 3D Flip Animation for form
    gsap.fromTo(
      formRef.current,
      {
        opacity: 0,
        rotateY: -90,
        transformOrigin: "left center",
        x: -100,
      },
      {
        opacity: 1,
        rotateY: 0,
        x: 0,
        duration: 1.5,
        ease: "power4.out",
      }
    );

    // Particle background animation (rotate and scale pulse)
    gsap.to(bgRef.current, {
      rotate: 360,
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 8,
      ease: "power2.inOut",
    });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1200px",
      }}
    >
      {/* 🔊 Sound Effect */}
      <audio ref={audioRef} src={hoverSoundUrl} preload="auto" />

      {/* ✨ Particle Background */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          width: "150vmax",
          height: "150vmax",
          backgroundImage: "radial-gradient(#00ffff33 2px, transparent 2px)",
          backgroundSize: "40px 40px",
          opacity: 0.04,
          zIndex: 1,
          filter: "blur(1px)",
          pointerEvents: "none",
        }}
      />

      {/* 📩 Contact Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        style={{
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          background: "rgba(0, 0, 0, 0.6)",
          padding: "35px",
          borderRadius: "15px",
          border: "1px solid #00ffff55",
          boxShadow: "0 0 25px #00ffff33",
          color: "white",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          width: "320px",
          transition: "all 0.3s ease",
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        }}
      >
        <h2 style={{ textAlign: "center", color: "#00ffff", marginBottom: "10px" }}>
          Contact Us
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          style={inputStyle}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#00ffff",
            color: "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Send
        </button>
      </form>
    </div>
  );
}

// ✏️ Input Style
const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #00ffff44",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  color: "#fff",
  outline: "none",
  fontSize: "14px",
  backdropFilter: "blur(4px)",
};
