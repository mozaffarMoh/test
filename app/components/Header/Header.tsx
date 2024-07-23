"use client";
import Image from "next/image";
import "./Header.css";
import LogoIcon from "../../assets/images/Header/logo.png";
import socialLogo from "../../assets/images/Header/socialLogo.png";
import { Button, MenuItem, Select, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
  const [active, setActive] = useState("home");
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const [showNavigations, setShowNavigations] = useState(false);
  const [language, setLanguage] = useState("English");
  const HeaderArray = [
    { label: "HOME", link: "#home" },
    { label: "ABOUT", link: "#about" },
    { label: "SERVICES", link: "#services" },
    { label: "PARTNERS", link: "#partners" },
    { label: "CONTACT US", link: "#contact-us" },
  ];

  const handleChange = (event: any) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="header-container">
      <div className="social flexEnd">
        <Image src={socialLogo} alt="socialLogo" />
      </div>
      <div className="header flexBetween fixed-top">
        <Image src={LogoIcon} alt="LogoIcon" className="logo-icon" />

        <RiMenuFill
          className="menu-icon"
          size={40}
          color="#ffffff"
          cursor={"pointer"}
          onClick={() => setShowNavigations(!showNavigations)}
        />

        <div
          className={`navigations ${
            !isSmallScreen ? " flexCenter" : "flexCenterColumn"
          } ${showNavigations ? "show-navigations" : ""}`}
        >
          {HeaderArray.map((item: any, i) => {
            return (
              <div
                key={i}
                className={`navigations-item flexCenterColumn ${
                  item.label == active && "active-item"
                }`}
                onClick={() => setActive(item.label)}
              >
                <div className="links-selector"></div>
                <a href={item.link}>{item.label}</a>
              </div>
            );
          })}
        </div>

        <div className="actions flexBetween">
          <div className="select-lang-container flexCenter">
            <GrLanguage color="white" />
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
          <div className="buttons flexCenter">
            <Button>Register</Button>
            <Button className="login-button">Log In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
