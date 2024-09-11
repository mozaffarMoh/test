"use client";
import { Stack } from "@mui/material";
import "./page.css";
import FlexBoxImages from "./components/FlexBoxImages/FlexBoxImages";
import ScrollAnimation from "./components/useScrollAnimation/ScrollAnimation";

export default function HomePage() {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      bgcolor={"black"}
    >
      <h1>Test</h1>
      <ScrollAnimation />
    </Stack>
  );
}
