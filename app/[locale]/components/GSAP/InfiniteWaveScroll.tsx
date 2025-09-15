import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Box, Stack } from "@mui/material";
import { gsap } from "gsap";

const InfiniteWaveScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const images = gsap.utils.toArray<HTMLDivElement>(".wave-image");

    // Clone images for seamless effect
    images.forEach((img) => {
      const clone = img.cloneNode(true) as HTMLDivElement;
      container.appendChild(clone);
    });

    // Infinite scroll timeline
    const tl = gsap.to(container, {
      x: () => `-${container.scrollWidth / 2}px`,
      ease: "none",
      duration: 120,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(
          (x) => parseFloat(x) % (container.scrollWidth / 2)
        ),
      },
    });

    // Independent wave motion for each image
    images.forEach((img, i) => {
      gsap.to(img, {
        y: gsap.utils.random(100, 100),
        duration: gsap.utils.random(10, 30),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random(),
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Stack
      justifyContent={"center"}
      sx={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "400px",
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          willChange: "transform",
        }}
      >
        {Array.from({ length: 7 }).map((_, i) => {
          let random = Math.random() * 100 + 70;

          return (
            <Box
              key={i}
              className="wave-image"
              sx={{
                flex: "0 0 auto",
                width: random,
                height: random,
                marginRight: "250px",
                backgroundImage: `url(https://picsum.photos/seed/${
                  i + 1
                }/200/200)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
              }}
            />
          );
        })}
      </Box>
    </Stack>
  );
};

export default InfiniteWaveScroll;
