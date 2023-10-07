"use client";
import Header from "./Header";
import { Footer } from "./Footer";
import "./globals.css";
import { Typewriter } from "react-simple-typewriter";
import { Box, Typography } from "@mui/material";
import LandingBanner from "./layout/LandingBanner";

const cardStyle = {
  width: {
    xs: "70vw",
    sm: "50vw",
    md: "33vw",
  },
  margin: "20px auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "10px",
  boxShadow: {
    xs: "-1px 4px 5px 6px rgba(0,0,0,0.09)",
    sm: "none",
  },
};

const backgroundImage = "https://docmerit.com/images/home.webp";
export default function Home(props: any) {
  return (
    <Box>
      <Header />
      <LandingBanner
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "#7fc7d9",
          backgroundPosition: "center",
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box sx={cardStyle}>
          <Box>
            <h4>BROWSE STUDY MATERIALS</h4>
            <p>
              Buy lecture notes, summaries and practice exams and get higher
              grades for your exams.
            </p>
          </Box>
          <img src="https://docmerit.com/images/img1.png" />
        </Box>
        <Box sx={cardStyle}>
          <img src="https://docmerit.com/images/img2.png" />
          <Box>
            <h4>BROWSE STUDY MATERIALS</h4>
            <p>
              Buy lecture notes, summaries and practice exams and get higher
              grades for your exams.
            </p>
          </Box>
        </Box>
        <Box sx={cardStyle}>
          <Box>
            <h4>BROWSE STUDY MATERIALS</h4>
            <p>
              Buy lecture notes, summaries and practice exams and get higher
              grades for your exams.
            </p>
          </Box>
          <img src="https://docmerit.com/images/img3.png" />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
