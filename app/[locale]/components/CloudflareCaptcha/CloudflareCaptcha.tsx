// components/CloudflareCaptcha.tsx
import { Stack } from "@mui/material";
import React, { useState } from "react";
import Turnstile from "react-turnstile";

interface CloudflareCaptchaProps {
  setVerified: (token: string) => void;
}

const CloudflareCaptcha: React.FC<CloudflareCaptchaProps> = ({
  setVerified,
}) => {
  const handleVerify = (token: string | null) => {
    if (token) {
      console.log("success");

      setVerified(token);
    }
  };

  return (
    <Stack bgcolor={"red"}>
      <Turnstile
        sitekey="0x4AAAAAAAx6OXiNoAtiWm_0" // Replace this with your site key
        onVerify={handleVerify}
        theme="light" // Optional: 'light' or 'dark'
      />
    </Stack>
  );
};

export default CloudflareCaptcha;
