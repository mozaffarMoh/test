"use client";
import Image from "next/image";
import "./Footer.css";
import facebookLogo from "../../assets/images/Footer/1.png";
import instaLogo from "../../assets/images/Footer/2.png";
import twitterLogo from "../../assets/images/Footer/3.png";
import linkedinLogo from "../../assets/images/Footer/4.png";

import { Button, MenuItem, Select, Stack } from "@mui/material";
import React, { useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState("English");

  const handleChange = (event: any) => {
    setLanguage(event.target.value);
  };
  return (
    <div className="footer flexCenterColumn">
      <h2>Subscribe our newsletter</h2>
      <p>
        Your download should start automatically, if not Click here. Should I
        give up, huh?.
      </p>
      <div className="contact-email flexCenter">
        <input placeholder="Enter your email" />
        <Button variant="contained" color="success">
          Subscribe
        </Button>
      </div>
      <div className="footer-icons flexBetween">
        <Image src={facebookLogo} alt="facebookLogo" />
        <Image src={instaLogo} alt="instaLogo" />
        <Stack padding={1} bgcolor={"white"} borderRadius={20}>
          <Image src={twitterLogo} alt="twitterLogo" />
        </Stack>
        <Image src={linkedinLogo} alt="linkedinLogo" />
      </div>
      <hr style={{ width: "80%", marginTop: "100px" }} />
      <div className="footer-final flexBetween">
        <p>Copyright © 2024OurWebsite . All Right Reserved.</p>
        <Select
          className="select-lang"
          value={language}
          onChange={handleChange}
          label="Language"
        >
          <MenuItem value={"English"}>English</MenuItem>
          <MenuItem value={"arabic"}>العربية</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default Header;
