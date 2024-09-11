import { Box, Button } from "@mui/material";
import { useOnScreen } from "./useOnScreen";
import image1 from "../../assets/images/1.png";
import './ScrollAnimation.css'

export default function ScrollAnimation() {
  // Use the hook to detect when the section is in view
  const { isVisible, ref } = useOnScreen({ threshold: 0.5 });

  return (
    <div style={{ background: "black" }}>
      <Box
        sx={{
          width: "500px",
          height: "150vh",
          background: "black",
          color: "white",
        }}
      >
        Scroll down to see the animation
      </Box>
      <div
        className={`animationScroll ${isVisible ? "visible" : ""}`}
        ref={ref}
      >
        <h1>Section</h1>
      </div>
    </div>
  );
}
