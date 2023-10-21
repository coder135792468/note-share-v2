import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import { STUDY_MATERIAL } from "../../assets/contants/contant";

export const StudyMaterial = () => {
  return (
    <Box sx={{ margin: "10px 2%" }}>
      <Typography
        component="h1"
        sx={{
          fontWeight: 700,
          fontSize: "1.2rem",
        }}
      >
        Checkout study materials
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            sm: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          },
          placeItems: "center",
        }}
      >
        {STUDY_MATERIAL?.map((ele) => (
          <Box
            sx={{
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              width: "300px",
              height: "70px",
              padding: "5px",
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
            }}
            key={ele.id}
          >
            <Box
              sx={{
                height: "100%",
                backgroundColor: "#44eeff",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "#000",
                  textAlign: "center",
                  fontWeight: 900,
                  fontFamily: "sans-serif",
                  fontSize: "1rem",
                }}
              >
                {ele.searchFor}
              </Typography>
              <Typography
                sx={{
                  color: "#222",
                  textAlign: "center",
                  fontSize: "0.7rem",
                }}
              >
                Checkout "{ele.searchFor}" notes
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                href={{
                  pathname: "/search",
                  query: { search: ele.searchFor },
                }}
              >
                <IconButton>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
