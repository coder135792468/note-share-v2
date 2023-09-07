"use client";
import React, { useState } from "react";
import LoginButton from "./LoginButton";
import { AppBar, Toolbar, Typography, Button, Input } from "@mui/material";
import Link from "next/link";

const Header = () => {
  const [text, setText] = useState(null);
  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            Note Share
          </Link>
        </Typography>
        <div style={{ marginRight: "20px" }}>
          <Input
            placeholder="Search for notes...."
            type="search"
            value={text}
            onChange={(e: any) => setText(e.target.value)}
            style={{
              background: "#fff",
              padding: "2px 20px",
              marginRight: "5px",
              position: "relative",
              top: "2px",
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
        </div>
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
