"use client";
import Header from "@/app/Header";
import { Footer } from "./Footer";
import "./globals.css";
import { Typewriter } from "react-simple-typewriter";
import { Box, Typography } from "@mui/material";

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

export default function Home(props: any) {
  return (
    <Box>
      <Header />
      <Box sx={{ position: "relative" }}>
        <img
          src={"https://docmerit.com/images/home.webp"}
          alt={""}
          width="100%"
          height={"90%"}
        />
        <Typography
          component="h1"
          sx={{
            width: "100%",
            height: "100%",
            color: "aliceblue",
            "text-align": "center",
            background: "rgba(255, 255, 255, 0.12)",
            boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: " blur(2.2px)",
            "-webkit-backdrop-filter": "blur(2.2px)",
            position: " absolute",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignTtems: "center",
            "user-select": "none",
            "-webkit-user-select": "none",
            "-webkit-user-drag": "none",
          }}
        >
          <Typography
            component="p"
            sx={{
              width: "90%",
              fontSize: {
                xs: "1em",
                sm: "1.5em",
              },
              marginTop: {
                xs: 0,
                sm: "50px",
              },
            }}
          >
            <Typewriter
              words={[
                "There is no end to education. It is not that you read a book, pass an examination, and finish with education. ",
                "The whole of life, from the moment you are born to the moment you die, is a process of learning.",
              ]}
              cursorBlinking={true}
              cursor={true}
              loop={false}
              delaySpeed={2000}
              typeSpeed={100}
              deleteSpeed={200}
            />
          </Typography>
        </Typography>
      </Box>
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
