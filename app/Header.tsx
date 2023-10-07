"use client";
import React, { useState } from "react";
import LoginButton from "./LoginButton";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Input,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

const Header = () => {
  const [text, setText] = useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#efefef", color: "#000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Note Share
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box sx={{ padding: "10px" }}>
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
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Note Share
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
          <LoginButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
