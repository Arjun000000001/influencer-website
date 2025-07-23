import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Left content animation
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
      }
    );

    // Right form animation
    gsap.fromTo(
      rightRef.current,
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      id="contactUs"
      style={{
        backgroundImage: "url('https://s8ul.gg/img/contactbg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        minHeight: "100vh",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        gap: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔥 Left Content */}
      <div
        ref={leftRef}
        style={{ flex: "1 1 400px", maxWidth: "500px", minWidth: "280px" }}
      >
        <img
          src="https://s8ul.gg/img/logo.webp"
          alt="S8UL Logo"
          style={{ width: "100px", marginBottom: "1rem" }}
        />
        <h1
          style={{
            fontWeight: "700",
            fontSize: "2.2rem",
            lineHeight: 1.3,
            marginBottom: "1rem",
          }}
        >
          Looking forward to connecting — Who should get in touch?
        </h1>
        <p style={{ marginBottom: "0.6rem" }}>
          <strong>Brands</strong> – Looking to tap into gaming? Let’s craft impactful campaigns together.
        </p>
        <p style={{ marginBottom: "0.6rem" }}>
          <strong>Esports Orgs</strong> – Collaborations, tournaments, invites — let’s build the future of esports.
        </p>
        <p>
          <strong>Creators & Players</strong> – Want to work with us? Let’s create, compete, and grow together.
        </p>
        <button
          style={{
            marginTop: "2rem",
            padding: "0.75rem 2.2rem",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "600",
            fontSize: "1rem",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        >
          Learn More
        </button>
      </div>

      {/* 📩 Right Form */}
      <div
        ref={rightRef}
        style={{
          flex: "1 1 350px",
          maxWidth: "420px",
          minWidth: "280px",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(16px)",
          borderRadius: "20px",
          padding: "2rem",
          color: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <h2 style={{ fontWeight: "700", marginBottom: "0.5rem", fontSize: "1.5rem" }}>
          Reach us now!
        </h2>
        <p
          style={{
            fontWeight: "400",
            marginBottom: "1.8rem",
            fontSize: "0.95rem",
            color: "#ccc",
          }}
        >
          Drop your details and we'll get back to you!
        </p>
        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "1.2rem",
            }}
          >
            <input type="text" placeholder="First Name" style={inputStyle} />
            <input type="text" placeholder="Last Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
          </div>
          <input
            type="text"
            placeholder="Project title"
            style={{ ...inputStyle, width: "100%", marginBottom: "1rem" }}
          />
          <textarea
            placeholder="Leave us a message..."
            rows="4"
            style={{
              ...inputStyle,
              width: "100%",
              resize: "none",
              marginBottom: "1.5rem",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.9rem",
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: "600",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

const inputStyle = {
  backgroundColor: "transparent",
  border: "1px solid white",
  borderRadius: "6px",
  color: "white",
  padding: "0.6rem 0.9rem",
  fontSize: "0.95rem",
  outline: "none",
  width: "100%",
};

export default ContactSection;
