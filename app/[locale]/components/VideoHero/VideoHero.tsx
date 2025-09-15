"use client";
import { Box, Stack, useMediaQuery } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useState } from "react";
import YouTube from "react-youtube";
import { primaryColor } from "../../constant/color";
import "./VideoHero.css";

const VideoHero = () => {
  const isScreen900 = useMediaQuery("(max-width:900px)");
  const [isPlay, setIsPlay] = useState(true);
  const [isHoverOnVideo, setIsHoverOnVideo] = useState(false);
  const [player, setPlayer] = useState<any>(null); // Hold the player instance here

  const onReady = (event: any) => {
    setPlayer(event?.target); // Assign the player instance when ready
  };

  const togglePlay = () => {
    if (player) {
      if (isPlay) {
        player?.pauseVideo();
      } else {
        player?.playVideo();
      }
      setIsPlay(!isPlay);
    }
  };

  return (
    <Stack height={"100vh"} justifyContent={"center"} className="hero">
      {/* Rhombus */}
      <Stack
        onMouseEnter={() => setIsHoverOnVideo(true)}
        onMouseLeave={() => setIsHoverOnVideo(false)}
        className="video-rhoumbus"
      >
        {/* Video Container */}
        <Box position={"relative"} width={"100%"} height={"100%"}>
          <Box
            position={"absolute"}
            width={"100%"}
            height={"100%"}
            top={3}
            left={0}
            bgcolor={"#000000DD"}
            zIndex={10}
            sx={{ opacity: 0 }}
          />
          {/* Icon */}
          {/* isHoverOnVideo &&  */}
          <Stack
            onMouseEnter={() => setIsHoverOnVideo(true)}
            className="play-icon-container"
            onClick={togglePlay}
          >
            {!isPlay ? (
              <PlayArrowIcon
                sx={{
                  color: primaryColor,
                  fontSize: 50,
                }}
              />
            ) : (
              <PauseIcon
                color="primary"
                sx={{
                  color: primaryColor,
                  fontSize: 50,
                }}
              />
            )}
          </Stack>

          {/* Rotated Video */}
          <Box className="video-container">
            <YouTube
              videoId="rX2T9jH0OxA" // J3pF2jkQ4vc// YouTube video ID
              opts={{
                playerVars: {
                  autoplay: 1, // Autoplay the video
                  controls: 0, // Hide controls
                  modestbranding: 1, // Minimize YouTube branding
                  fs: 0, // Disable fullscreen button
                  rel: 0, // Disable related videos at the end
                  showinfo: 0, // Hide video title and uploader
                  iv_load_policy: 3, // Disable video annotations
                  mute: 1, // Start the video muted
                  start: 0, // Optionally start at a specific time
                  loop: 1, // Loop the video
                  playlist: "rX2T9jH0OxA", // Required for loop to work
                },
              }}
              onReady={onReady}
            />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default VideoHero;
