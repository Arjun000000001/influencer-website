import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const video = {
  id: "fHhNYwNBfus",
  title: "Virat Kohli Meet",
};

function FeaturedVideo() {
  const videoRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);

  useEffect(() => {
    // Rotate video on scroll
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { rotateY: 0 },
        {
          rotateY: 360,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate top and bottom gradient lines
    [topLineRef, bottomLineRef].forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          transformOrigin: "center",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const youtubeLink = `https://www.youtube.com/watch?v=${video.id}`;
  const thumbnail = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center px-4 py-24 relative overflow-hidden">

      {/* Top Glowing Line */}
      <div
        ref={topLineRef}
        className="w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent mb-12 scale-x-0 origin-center"
      />

      {/* Rotating Video Card */}
      <a
        href={youtubeLink}
        target="_blank"
        rel="noopener noreferrer"
        ref={videoRef}
        className="group relative w-[92%] max-w-[850px] rounded-3xl overflow-hidden transition duration-500 hover:scale-105 shadow-[0_0_80px_rgba(0,255,100,0.4)] hover:shadow-[0_0_100px_rgba(255,255,255,0.8)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={thumbnail}
          alt={video.title}
          className="w-full h-[480px] object-cover rounded-3xl"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-14 h-14"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </a>

      {/* Bottom Glowing Line */}
      <div
        ref={bottomLineRef}
        className="w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent mt-12 scale-x-0 origin-center"
      />
    </div>
  );
}

export default FeaturedVideo;
