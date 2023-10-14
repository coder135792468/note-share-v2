"use client";
import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import Link from "next/link";

export const NoteSearchBar = () => {
  const [text, setText] = useState(null);
  return (
    <Box
      sx={{
        margin: {
          xs: "0 7%",
          sm: "0 1%",
        },
        p: 2,
        width: {
          xs: "80%",
          md: "40%",
        },
        display: "flex",
        justifyContent: {
          xs: "center",
          sm: "flex-start",
        },
        alignItems: "center",
      }}
    >
      <OutlinedInput
        type="search"
        placeholder="Search Notes..."
        value={text}
        onChange={(e: any) => setText(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SvgIcon color="action" fontSize="small">
              <SearchIcon />
            </SvgIcon>
          </InputAdornment>
        }
        sx={{ maxWidth: 500, height: "40px" }}
      />
      <Link
        href={{
          pathname: "/search",
          query: text ? { search: text } : null,
        }}
      >
        <Button color="primary" variant="contained" sx={{ marginLeft: "3px" }}>
          <ArrowForwardIosIcon />
        </Button>
      </Link>
    </Box>
  );
};
