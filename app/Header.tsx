"use client";
import React, { useState } from "react";
import LoginButton from "./LoginButton";
import { AppBar, Toolbar, Typography, Button, Input, Box } from "@mui/material";
import Link from "next/link";

const Header = () => {
  const [text, setText] = useState(null);
  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={0}
      sx={{ paddingBottom: "5px" }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, whiteSpace: "nowrap" }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            Note Share
          </Link>
          <LoginButton />
        </Typography>
        <Box>
          <Input
            placeholder="Search for notes...."
            type="search"
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            sx={{
              background: "#fff",
              padding: "2px 20px",
              marginRight: "5px",
              position: "relative",
              top: "2px",
              width: {
                xs: "60%",
                sm: "auto",
              },
            }}
          />
          <Link
            href={{
              pathname: "/search",
              query: text ? { search: text } : null,
            }}
          >
            <Button variant="contained" color="secondary">
              Search
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
