import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const allProducts = [
  {
    id: 1,
    name: "Creeper T-Shirt",
    category: "T-Shirts",
    price: "₹699",
    priceUSD: "$8.39",
    desc: "Comfortable cotton tee with iconic creeper design.",
    image: "https://via.placeholder.com/300x300?text=T-Shirt",
  },
  {
    id: 2,
    name: "Gaming Hoodie",
    category: "Hoodies",
    price: "₹1199",
    priceUSD: "$14.39",
    desc: "Warm hoodie for gamers, night grind ready.",
    image: "https://via.placeholder.com/300x300?text=Hoodie",
  },
  {
    id: 3,
    name: "Gamer Mousepad",
    category: "Accessories",
    price: "₹399",
    priceUSD: "$4.79",
    desc: "Precision surface for high-DPI performance.",
    image: "https://via.placeholder.com/300x300?text=Mousepad",
  },
  {
    id: 4,
    name: "Thug Cap",
    category: "Accessories",
    price: "₹299",
    priceUSD: "$3.59",
    desc: "Sleek black cap with embroidered thug logo.",
    image: "https://via.placeholder.com/300x300?text=Cap",
  },
  {
    id: 5,
    name: "Code Hoodie",
    category: "Hoodies",
    price: "₹1299",
    priceUSD: "$15.59",
    desc: "Perfect for coders—soft, warm, and hacker style.",
    image: "https://via.placeholder.com/300x300?text=Code+Hoodie",
  },
];

function Store() {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef(null);
  const introTextRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRefs = useRef([]);
  const bgRef = useRef(null);

  const filteredProducts =
    filter === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === filter);

  useEffect(() => {
    const text = introTextRef.current.innerText;
    introTextRef.current.innerHTML = text
      .split("")
      .map((l) => `<span style="opacity:0">${l}</span>`)
      .join("");

    const spans = introTextRef.current.querySelectorAll("span");
    gsap.to(spans, {
      opacity: 1,
      stagger: 0.05,
      delay: 0.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 }
        );
      },
    });
  }, []);

  useEffect(() => {
    gsap.to(bgRef.current, {
      backgroundPosition: "200% center",
      duration: 25,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  const animateStoreCards = () => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, rotateY: -90 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 1,
            delay: index * 0.15,
            ease: "power3.out",
          }
        );
      }
    });
  };

  const handleEnter = () => {
    gsap.to(containerRef.current, {
      x: "-100vw",
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: animateStoreCards,
    });
  };

  return (
    <div
      ref={bgRef}
      style={{
        overflow: "hidden",
        minHeight: "100vh",
        background:
          "linear-gradient(270deg, #0f0c29, #302b63, #24243e, #0f0c29)",
        backgroundSize: "400% 400%",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes starry {
          from { background-position: 0 0, 10px 10px; }
          to { background-position: 1000px 1000px, 1010px 1010px; }
        }
      `}</style>

      <div
        ref={containerRef}
        style={{ display: "flex", width: "200vw", transition: "none" }}
      >
        {/* INTRO SCREEN */}
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "#000",
            backgroundImage:
              "radial-gradient(white 1px, transparent 1px), radial-gradient(white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
            animation: "starry 15s linear infinite",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            padding: "20px",
          }}
        >
          <h1
            ref={introTextRef}
            style={{
              fontSize: "2.8rem",
              textAlign: "center",
              maxWidth: "600px",
              fontWeight: "bold",
              lineHeight: "1.5",
              textShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
          >
            Thug k Store me apka swagat hai
          </h1>

          <button
            ref={buttonRef}
            onClick={handleEnter}
            style={{
              opacity: 0,
              marginTop: "40px",
              padding: "15px 30px",
              fontSize: "1.2rem",
              border: "none",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0 0 15px rgba(255,255,255,0.4)",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Enter Store
          </button>
        </div>

        {/* STORE SCREEN */}
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            padding: "60px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background:
              "radial-gradient(circle at 20% 20%, #1e1e1e 0%, #000 100%)",
            color: "#fff",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
              textShadow: "2px 2px 10px rgba(255,255,255,0.2)",
            }}
          >
            🛒 Welcome to Thug Store
          </h1>

          {/* Filters */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginBottom: "30px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["All", "T-Shirts", "Hoodies", "Accessories"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "15px",
                  border: "none",
                  background:
                    filter === cat
                      ? "rgba(255,255,255,0.2)"
                      : "rgba(255,255,255,0.1)",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                ref={(el) => (cardRefs.current[index] = el)}
                style={{
                  background: "linear-gradient(145deg, #1a1a1a, #2b2b2b)",
                  borderRadius: "20px",
                  padding: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  textAlign: "center",
                  width: "260px",
                  color: "#fff",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  border: "1px solid rgba(255,255,255,0.1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.07) rotateY(3deg)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.5)";
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                    marginBottom: "15px",
                  }}
                />
                <h3 style={{ fontSize: "1.2rem", marginBottom: "5px" }}>
                  {product.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#aaa",
                    marginBottom: "10px",
                  }}
                >
                  {product.desc}
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    color: "#fff",
                  }}
                >
                  {product.price} /{" "}
                  <span style={{ color: "#7fffd4" }}>{product.priceUSD}</span>
                </p>
                <button
                  style={{
                    padding: "10px 20px",
                    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "25px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    boxShadow: "0 5px 15px rgba(255,75,43,0.4)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(255,75,43,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 5px 15px rgba(255,75,43,0.4)";
                  }}
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
