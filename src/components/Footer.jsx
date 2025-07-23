import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        backgroundColor: "#0f0f0f",
        color: "#999",
        padding: "3rem 2rem 1rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {/* 🧠 Left Logo + About */}
        <div style={{ flex: "1 1 250px", minWidth: "250px" }}>
          <img
            src="https://s8ul.gg/img/logo.webp"
            alt="S8UL Logo"
            style={{ width: "80px", marginBottom: "1rem" }}
          />
          <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#666" }}>
            S8UL is a global name in esports and gaming content, headquartered in Mumbai, India.
          </p>
          <p style={{ fontWeight: "600", marginTop: "1rem", color: "white" }}>
            connect@s8ul.gg
          </p>

          {/* 🔗 Social Icons */}
          <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
            {socialIcon(
              "https://upload.wikimedia.org/wikipedia/commons/6/6f/Font_Awesome_5_brands_twitter.svg",
              "https://twitter.com/s8ul"
            )}
            {socialIcon(
              "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
              "https://linkedin.com/company/s8ul"
            )}
            {socialIcon(
              "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
              "https://instagram.com/s8ul"
            )}
          </div>
        </div>

        {/* 🧭 Navigation Links */}
        <div style={{ flex: "1 1 150px", minWidth: "150px" }}>
          <h3 style={headingStyle}>About S8UL</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
            {["Home", "About Us", "Shop", "Media", "Players", "Contact Us"].map((link, i) => (
              <li key={i}>
                <a href={`/${link.replace(/\s/g, "").toLowerCase()}`} style={linkStyle}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 📩 Subscribe Section */}
        <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
          <h3 style={headingStyle}>Subscribe</h3>
          <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
            Don’t miss updates. Drop your email & stay connected.
          </p>
          <form style={{ display: "flex" }}>
            <input
              type="email"
              placeholder="Email Address"
              style={{
                flex: 1,
                padding: "0.75rem 1rem",
                borderRadius: "6px 0 0 6px",
                border: "none",
                outline: "none",
                fontSize: "1rem",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#00FF55",
                border: "none",
                padding: "0 1.2rem",
                cursor: "pointer",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="black"
                viewBox="0 0 24 24"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* 🧾 Copyright */}
      <div
        style={{
          borderTop: "1px solid #222",
          marginTop: "2rem",
          paddingTop: "1rem",
          fontSize: "0.8rem",
          color: "#555",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          gap: "1rem",
        }}
      >
        <p>© 2025 S8UL. All rights reserved.</p>
        <div style={{ display: "flex", gap: "1rem" }}>
          {["About", "Terms", "Privacy", "Shipping", "Refund", "Contact"].map((text, i) => (
            <a key={i} href={`/${text.toLowerCase()}`} style={footerLink}>
              {text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

// 🔗 Social Icon Component
function socialIcon(src, href) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "inline-block", transition: "0.3s" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={src} alt="icon" style={{ width: "22px", height: "22px" }} />
    </a>
  );
}

const headingStyle = {
  color: "#fff",
  fontWeight: "700",
  marginBottom: "1rem",
};

const linkStyle = {
  color: "#999",
  textDecoration: "none",
  fontSize: "0.9rem",
  transition: "color 0.3s",
};

const footerLink = {
  ...linkStyle,
  fontSize: "0.8rem",
};

export default Footer;
