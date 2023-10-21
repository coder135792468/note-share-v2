"use client";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <Box
      sx={{
        height: "200px",
        backgroundColor: "#333",
        color: "#fff",
        marginTop: "20px",
        p: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "1.5rem",
        }}
      >
        Welcome to Note Share
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "1fr 1fr 1fr",
          },
          pt: 2,
          pl: 2,
        }}
      >
        {[
          { text: "Privacy Policy", redirect: "privary-policy" },
          { text: "Terms of Service", redirect: "terms-of-service" },
          { text: "Study Tips", redirect: "study-tips" },
          { text: "Team", redirect: "team" },
        ].map((ele) => (
          <Typography component={"u"}>{ele?.text}</Typography>
        ))}
      </Box>
      <Box component="p" sx={{ position: "relative", top: "70px" }}>
        Made By Coder
        <Box
          component="a"
          href="https://github.com/coder135792468"
          target="_blank"
          sx={{
            marginLeft: "10px",
            position: "relative",
            top: "5px",
            textDecoration: "none",
            color: "aliceblue",
          }}
        >
          <GitHubIcon />
        </Box>
      </Box>
    </Box>
  );
};
