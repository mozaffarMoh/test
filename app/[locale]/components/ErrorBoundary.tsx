import { Stack } from "@mui/material";
import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }: any) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: any) => {
      setHasError(true);
      console.error("Error caught by ErrorBoundary:", error);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleError);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleError);
    };
  }, []);

  if (hasError) {
    return (
      <Stack width={100} height={100} bgcolor={"red"}>
        <h1>Something went wrong.</h1>;
      </Stack>
    );
  }

  return children;
};

export default ErrorBoundary;
