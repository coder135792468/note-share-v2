"use client";
import Header from "./Header";
import { Footer } from "./Footer";
import "./globals.css";
import { Box, Typography, styled } from "@mui/material";
import LandingBanner from "./layout/LandingBanner";
import { StudyMaterial } from "./components/StudyMaterial";
import { HOW_TO_USE } from "../assets/contants/contant";

const cardStyle = {
  width: {
    xs: "80vw",
    sm: "40vw",
    md: "30vw",
  },
  fontFamily: "sans-serif",
  margin: "20px auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "15px",
  border: {
    xs: "2px solid #efefef",
  },
};
const LandingBannerRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#efefef",
  flexDirection: "column",
  [theme.breakpoints.up("xs")]: {
    height: "50vh",
  },
  [theme.breakpoints.up("sm")]: {
    height: "50vh",
  },
  [theme.breakpoints.up("md")]: {
    height: "80vh",
  },
}));

const backgroundImage =
  "https://theme.zdassets.com/theme_assets/212433/7cc0fa2d8a55c3ca8b077bbe8248548a16caa4d9.svg";
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
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {HOW_TO_USE?.map((ele) => (
          <Box sx={cardStyle}>
            {ele?.isTop && <img src={ele.imageLink} />}
            <Box sx={{ margin: "20px auto" }}>
              <h4>{ele?.title}</h4>
              <p>{ele?.desc}</p>
            </Box>
            {!ele?.isTop && <img src={ele.imageLink} />}
          </Box>
        ))}
      </Box>
      <StudyMaterial />
      <Footer />
    </Box>
  );
}
