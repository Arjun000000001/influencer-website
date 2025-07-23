import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { v4 as uuidv4 } from "uuid";

export default function FuturisticContactForm() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Create random objects on mount
  useEffect(() => {
    const numObjects = 20;
    const container = containerRef.current;
    const objects = [];

    for (let i = 0; i < numObjects; i++) {
      const obj = document.createElement("div");
      obj.classList.add("floating-object");
      obj.style.position = "absolute";
      obj.style.width = `${Math.random() * 20 + 10}px`;
      obj.style.height = obj.style.width;
      obj.style.borderRadius = Math.random() > 0.5 ? "50%" : "10%";
      obj.style.backgroundColor = `hsla(${Math.random() * 360}, 100%, 70%, 0.7)`;
      obj.style.left = `${Math.random() * 100}%`;
      obj.style.top = `${Math.random() * 100}%`;

      container.appendChild(obj);
      objects.push(obj);
    }

    // Animate objects
    objects.forEach((obj) => {
      const dx = Math.random() * 100 + 50;
      const dy = Math.random() * 100 + 50;
      const duration = Math.random() * 8 + 4;

      gsap.to(obj, {
        x: `+=${Math.random() > 0.5 ? dx : -dx}`,
        y: `+=${Math.random() > 0.5 ? dy : -dy}`,
        repeat: -1,
        yoyo: true,
        duration,
        ease: "power1.inOut",
      });
    });

    return () => {
      objects.forEach((obj) => obj.remove());
    };
  }, []);

  // Handle form data
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "radial-gradient(circle at center, #020024, #090979, #000000)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "30px",
          borderRadius: "12px",
          width: "300px",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 0 15px #00ffffaa",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          color: "white",
          zIndex: 10,
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 25px #00ffff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 15px #00ffffaa";
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
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

// Input field style
const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #aaa",
  outline: "none",
  fontSize: "14px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "white",
  backdropFilter: "blur(5px)",
};
