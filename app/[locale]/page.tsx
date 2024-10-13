"use client";
import {
  Stack,
  Drawer,
  Button,
  Box,
  Typography,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@mui/material";
import "./page.css";
import ImageClassifier from "./components/ImageClassifier/ImageClassifier";

export default function HomePage() {
  return (
    <Stack bgcolor={"#76C2D6"}>
      <ImageClassifier />
    </Stack>
  );
}
