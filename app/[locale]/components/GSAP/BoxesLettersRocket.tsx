import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Box, Typography } from "@mui/material";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const BoxesLettersRocket: React.FC = () => {
  const rocketRef = useRef<HTMLDivElement | null>(null);
  const boxesRef: any = useRef<Array<HTMLDivElement | null>>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rocketRef.current || !sectionRef.current) return;

    // ScrollTrigger timeline
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
    });

    scrollTimeline
      .fromTo(
        boxesRef.current,
        { opacity: 0, y: 100, scale: 0.5 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.3, ease: "power3.out" }
      )
      .to(boxesRef.current, {
        rotate: 360,
        scale: 1.2,
        stagger: 0.3,
        ease: "back.out(1.7)",
      });

    // Rocket motion path
    gsap.to(rocketRef.current, {
      duration: 5,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 150, y: -100 },
          { x: 300, y: 0 },
          { x: 150, y: 100 },
          { x: 0, y: 0 },
        ],
        curviness: 1.25,
        autoRotate: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(boxesRef.current);
      gsap.killTweensOf(rocketRef.current);
    };
  }, []);

  useEffect(() => {
    const chars = textRef.current?.querySelectorAll(".char");

    if (chars) {
      gsap.fromTo(
        chars,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%", // when the title hits 80% of viewport height
            end: "top 30%",
            scrub: true, // makes it scroll-responsive
          },
        }
      );
    }
  }, []);

  return (
    <Box sx={{ padding: "100px 0", background: "#111", position: "relative" }}>
      {/* Rocket */}
      <Box
        ref={rocketRef}
        sx={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "linear-gradient(45deg, #ff9800, #f44336)",
          position: "absolute",
          top: "20%",
          left: "10%",
        }}
      />

      {/* Scroll-triggered section */}
      <Box
        ref={sectionRef}
        sx={{
          minHeight: "150vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography
          ref={textRef}
          variant="h4"
          sx={{ color: "white", mb: 4, display: "flex", flexWrap: "wrap" }}
        >
          {"Animated Title".split("").map((char, i) => (
            <span
              key={i}
              className="char"
              style={{
                display: "inline-block",
                minWidth: "10px",
                fontWeight: 800,
                transform: "translateY(0px)",
              }}
            >
              {char}
            </span>
          ))}
        </Typography>

        {["Box A", "Box B", "Box C", "Box D"].map((item, i) => (
          <Box
            key={i}
            ref={(el) => (boxesRef.current[i] = el)}
            sx={{
              width: 120,
              height: 120,
              background: "#4caf50",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BoxesLettersRocket;
