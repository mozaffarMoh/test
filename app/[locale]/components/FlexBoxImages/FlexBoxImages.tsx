"use client";
import { Stack } from "@mui/material";
import "./FlexBoxImages.css";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import Image from "next/image";

export default function FlexBoxImages() {
  const images = [image1, image2, image3];
  return (
    <div className="container">
      {images.map((item: any, i: number) => {
        const num = i + 1;
        return (
          <Image
            src={item}
            alt={`Image ${num}`}
            className={`image image${num}`}
          />
        );
      })}
    </div>
  );
}
