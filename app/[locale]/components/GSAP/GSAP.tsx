import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Button, Box } from "@mui/material";

const GSAP: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const staggerRefs: any = useRef<HTMLDivElement[]>([]);
  const hoverButtonRef = useRef<HTMLButtonElement>(null);
  const timelineRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    // Basic tween (moving and scaling)
    gsap.to(boxRef.current, { y: 200, rotate: 1.5, duration: 2 });

    // Staggered animation (delayed animations on multiple elements)
    gsap.from(staggerRefs.current, {
      opacity: 1,
      x: -150,
      duration: 2,
      stagger: 1,
    });

    // Timeline (sequencing multiple animations together)
    timelineRef.current = gsap
      .timeline()
      .to(boxRef.current, { rotation: 360, duration: 2 }) // Rotate the box
      .to(boxRef.current, { opacity: 0, duration: 1 }, "+=0.5"); // Fade out

    // Cleanup animations on unmount
    return () => {
      gsap.killTweensOf(boxRef.current);
      gsap.killTweensOf(staggerRefs.current);
      timelineRef.current?.kill();
    };
  }, []);

  // Hover animation for the button
  useEffect(() => {
    const hoverAnim = gsap.to(hoverButtonRef.current, {
      scale: 1.2,
      duration: 0.3,
      paused: true,
    });

    // Add hover event listeners
    const handleMouseEnter = () => hoverAnim.play();
    const handleMouseLeave = () => hoverAnim.reverse();

    const buttonEl = hoverButtonRef.current;
    buttonEl?.addEventListener("mouseenter", handleMouseEnter);
    buttonEl?.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on unmount
    return () => {
      buttonEl?.removeEventListener("mouseenter", handleMouseEnter);
      buttonEl?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        mt: 5,
      }}
    >
      {/* Box with basic and timeline animations */}
      <Box
        ref={boxRef}
        sx={{
          width: 100,
          height: 100,
          backgroundColor: "blue",
          marginBottom: 4,
        }}
      />

      {/* Staggered animated elements */}
      {["Item 1", "Item 2", "Item 3"].map((item, index) => (
        <Box
          key={index}
          ref={(el) => (staggerRefs.current[index] = el!)}
          sx={{
            width: 100,
            height: 50,
            backgroundColor: "green",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          {item}
        </Box>
      ))}

      {/* Button with hover animation */}
      <Button
        ref={hoverButtonRef}
        variant="contained"
        color="primary"
        sx={{ mt: 4 }}
      >
        Hover Me
      </Button>
    </Box>
  );
};

export default GSAP;
