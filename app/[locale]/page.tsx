"use client";
import { Stack } from "@mui/material";
import "./page.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ApiRequest from "./components/ApiRequest";

const page = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        justifyContent={"center"} 
        alignItems={"center"} 
        bgcolor={"#bbb"}
        width={"100%"}
        height={"100vh"}
      >
        {/* <ExportToExcel /> */}
        {/*  <Emoji icon={emojiIcons.sun} size={100} /> */}
        <ApiRequest />
      </Stack>
    </QueryClientProvider>
  );
};

export default page;
