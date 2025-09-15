"use client";
import { Stack } from "@mui/material";
import "./GrowAndShrink.css";

const GrowAndShrink = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"#bbb"}
      height={"100vh"}
    >
      <div className="container">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <div className="item">Item 6</div>
        <div className="item">Item 7</div>
        <div className="item">Item 8</div>
        <div className="item">Item 9</div>
        <div className="item">Item 10</div>
      </div>
    </Stack>
  );
};

export default GrowAndShrink;
