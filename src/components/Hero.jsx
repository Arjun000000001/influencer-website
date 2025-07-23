import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const blockRefs = useRef([]);
  const imgRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    // Floating title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Subtitle slide
    gsap.fromTo(
      subTitleRef.current,
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: subTitleRef.current,
          start: "top 85%",
        },
      }
    );

    // Stagger animation for text blocks
    gsap.utils.toArray(blockRefs.current).forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });

    // Image reveal with glow
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.9, x: 60 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 85%",
        },
      }
    );

    // Marquee banner scroll
    gsap.to(bannerRef.current, {
      xPercent: -100,
      repeat: -1,
      duration: 20,
      ease: "linear",
    });
  }, []);

  return (
    <>
      {/* 🔁 Moving Marquee Banner */}
      <div className="overflow-hidden bg-yellow-400 text-black text-md font-semibold py-2 whitespace-nowrap">
        <div ref={bannerRef} className="inline-flex gap-16 px-4">
          <span>🎮 S8UL is redefining Indian gaming •</span>
          <span>🏆 3x Esports Content Award Winners •</span>
          <span>🔥 Innovation • 🎥 Content • 🌍 Community</span>
        </div>
      </div>

      {/* 🌟 Hero Section */}
      <section className="bg-black text-gray-200 py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-left">
            <h1
              ref={titleRef}
              className="text-yellow-400 text-6xl font-extrabold mb-6 tracking-widest drop-shadow-[0_0_30px_rgba(234,179,8,0.6)]"
            >
              Our Story
            </h1>
            <h2
              ref={subTitleRef}
              className="text-yellow-400 text-3xl font-bold mb-8 tracking-wide"
            >
              Leading the Gaming Revolution
            </h2>

            {/* Text Sections */}
            <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
              <div ref={(el) => (blockRefs.current[0] = el)}>
                <h3 className="text-yellow-400 font-bold text-xl mb-1">🎯 Vision</h3>
                <p>
                  S8UL is a global name in esports and gaming content, headquartered in Mumbai. We're shaping the future of gaming across the globe.
                </p>
              </div>

              <div ref={(el) => (blockRefs.current[1] = el)}>
                <h3 className="text-yellow-400 font-bold text-xl mb-1">🎮 Esports Legacy</h3>
                <p>
                  With BGMI, Valorant, and Pokémon Unite rosters, we dominate the esports scene and inspire the next generation of gamers.
                </p>
              </div>

              <div ref={(el) => (blockRefs.current[2] = el)}>
                <h3 className="text-yellow-400 font-bold text-xl mb-1">🏆 Global Recognition</h3>
                <p>
                  S8UL has won “Esports Content Group of the Year” 3 times, proving our dominance in digital storytelling and innovation.
                </p>
              </div>

              <div ref={(el) => (blockRefs.current[3] = el)}>
                <h3 className="text-yellow-400 font-bold text-xl mb-1">🤝 Brand Collaborations</h3>
                <p>
                  We've worked with 250+ global brands — from Netflix to Red Bull — amplifying the reach and credibility of Indian gaming.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1">
            <img
              ref={imgRef}
              src="https://s8ul.gg/img/about.jpg"
              alt="8bit Thug"
              className="w-full rounded-2xl shadow-[0_0_60px_rgba(234,179,8,0.5)] border border-yellow-500/40"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
