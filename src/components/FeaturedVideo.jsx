import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeaturedVideo() {
  const videoUrl = "https://www.youtube.com/watch?v=Ezg92HF6vyk";
  const thumbnail = "https://img.youtube.com/vi/Ezg92HF6vyk/maxresdefault.jpg";
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      { rotateY: 0 },       // starting rotation
      {
        rotateY: 360,      // full rotate
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",   // when top of element hits 80% of viewport
          once: true,         // only once
        }
      }
    );
  }, []);

  return (
    <section className="bg-black py-16 px-4 flex justify-center">
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        ref={videoRef}
        style={{ transformStyle: "preserve-3d" }}   // 👈 enable 3D effect
        className="relative rounded-xl overflow-hidden shadow-lg border-4 border-green-500 hover:shadow-yellow-500 transition-shadow duration-300"
      >
        {/* Glow animation around */}
        <div
          className="absolute inset-0 rounded-xl border-4 border-yellow-400 animate-pulse"
          style={{ pointerEvents: "none" }}
        ></div>

        {/* Thumbnail image */}
        <img
          src={thumbnail}
          alt="Watch on YouTube"
          className="w-[90vw] max-w-3xl rounded-xl"
        />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-60 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-12 h-12"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </a>
    </section>
  );
}

export default FeaturedVideo;
