"use client";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const LoginButton = () => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  if (session === undefined) return null;
  return (
    <Box
      sx={{
        display: "inline-block",
      }}
    >
      {session?.user ? (
        <>
          <Tooltip title="Account settings">
            <Button
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              {/* @ts-ignore */}
              <Avatar src={session.user.image} sx={{ width: 32, height: 32 }}>
                M
              </Avatar>
              <MoreVertIcon />
            </Button>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={() => setAnchorEl(null)}
            onClick={() => setAnchorEl(null)}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem> {session.user.name} </MenuItem>
            <Link style={{ textDecoration: "none" }} href="/dashboard">
              <MenuItem> Dashboard</MenuItem>
            </Link>
            <Divider />
            <MenuItem onClick={async () => await signOut()}>
              <strong>Sign Out</strong>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          onClick={() => {
            signIn("google", {
              redirect: true,
              callbackUrl: "/",
            });
          }}
          variant="contained"
          color="secondary"
          sx={{ margin: "5px", background: "green" }}
        >
          Sign In
          <FcGoogle className="ml-3" />
        </Button>
      )}
    </Box>
  );
};

export default LoginButton;
