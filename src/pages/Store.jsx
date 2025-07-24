import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const hoodieData = [
  {
    id: 1,
    name: "Hoodie 1",
    desc: "Warm and stylish hoodie for everyday wear.",
    price: 1199,
    category: "Hoodies",
    image: "https://i.pinimg.com/736x/94/1d/9f/941d9fee290f2e088558f909aa84268a.jpg",
  },
  {
    id: 2,
    name: "Coord Set 1",
    desc: "Sleek coord set perfect for matching style.",
    price: 1599,
    category: "Coord Set",
    image: "https://i.pinimg.com/736x/c3/d5/d5/c3d5d5b8ff3e7007533833b461ff9c95.jpg",
  },
  {
    id: 3,
    name: "Hoodie 3",
    desc: "Geeky coder vibes, soft cotton blend.",
    price: 1399,
    category: "Hoodies",
    image: "https://i.pinimg.com/1200x/c9/73/8a/c9738ae44d4460db176c728736421b96.jpg",
  },
  {
    id: 4,
    name: "Coord Set 2",
    desc: "Elegant and minimal, perfect for winter.",
    price: 1899,
    category: "Coord Set",
    image: "https://i.pinimg.com/1200x/1f/0b/61/1f0b6175df77b8bac599db3ad62cb2f4.jpg",
  },
  {
    id: 5,
    name: "Hoodie 5",
    desc: "Dark hoodie with a premium build.",
    price: 1499,
    category: "Hoodies",
    image: "https://i.pinimg.com/1200x/78/0b/d1/780bd197686e404e443c0f07d4987297.jpg",
  },
  {
    id: 6,
    name: "Hoodie 6",
    desc: "Street-style design in soft fleece.",
    price: 1299,
    category: "Hoodies",
    image: "https://i.pinimg.com/1200x/4e/96/15/4e961510aa048d050c206bc317632306.jpg",
  },
  {
    id: 7,
    name: "New Hoodie",
    desc: "Urban dark hoodie for bold vibes.",
    price: 1699,
    category: "Hoodies",
    image: "https://i.pinimg.com/736x/60/65/ec/6065ec0df788d8535517d28307805116.jpg",
  },
  {
    id: 8,
    name: "Winter Coord",
    desc: "Chic winter coord for cozy style.",
    price: 2099,
    category: "Coord Set",
    image: "https://i.pinimg.com/736x/d1/c6/57/d1c657b131e571001fb4d513549b6082.jpg",
  },
  {
    id: 9,
    name: "Classic Hoodie",
    desc: "Classic black hoodie for all seasons.",
    price: 1399,
    category: "Hoodies",
    image: "https://i.pinimg.com/1200x/9d/c1/a4/9dc1a4d77396bc33c3adc14c8186f62c.jpg",
  },
  {
    id: 10,
    name: "Darkwear Hoodie",
    desc: "Mystery-themed urban hoodie look.",
    price: 1599,
    category: "Hoodies",
    image: "https://i.pinimg.com/736x/eb/f2/29/ebf2296607887b3eb26002c1f158e217.jpg",
  },
];

export default function ProductShowcase() {
  const cardsRef = useRef([]);
  const leftDoor = useRef(null);
  const rightDoor = useRef(null);
  const [showStore, setShowStore] = useState(false);

  useEffect(() => {
    gsap.to(leftDoor.current, {
      x: "-100%",
      duration: 1.5,
      delay: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(rightDoor.current, {
      x: "100%",
      duration: 1.5,
      delay: 0.5,
      ease: "power2.inOut",
      onComplete: () => setShowStore(true),
    });
  }, []);

  useEffect(() => {
    if (showStore) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [showStore]);

  return (
    <div
      style={{
        background: "radial-gradient(circle at top, #0d0d0d, #1a1a1a 80%)",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      {/* GATE ANIMATION */}
      <div
        ref={leftDoor}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          backgroundColor: "#0f0f0f",
          zIndex: 999,
        }}
      />
      <div
        ref={rightDoor}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          backgroundColor: "#0f0f0f",
          zIndex: 999,
        }}
      />

      {/* PRODUCT GRID */}
      {showStore && (
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {hoodieData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                backgroundColor: "#1e1e1e",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
                color: "#fff",
                opacity: 0,
                transform: "translateY(50px)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "12px",
                }}
              />
              <h3 style={{ fontSize: "1.25rem", marginBottom: "6px" }}>{item.name}</h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>{item.desc}</p>
              <p style={{ fontSize: "0.85rem", color: "#aaa", marginTop: "4px" }}>
                Category: {item.category}
              </p>
              <p style={{ fontWeight: "bold", color: "#00ffaa", marginTop: "8px" }}>
                ₹{item.price} / ${(item.price * 0.012).toFixed(2)} USD
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
