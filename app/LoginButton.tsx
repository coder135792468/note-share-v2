"use client";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginButton = () => {
  const { data: session } = useSession();
  console.log(session);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <span className="ml-auto flex gap-2">
      {session?.user ? (
        <>
          <Tooltip title="Account settings">
            <IconButton
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
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={() => setAnchorEl(null)}
            onClick={() => setAnchorEl(null)}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                padding: "10px 20px",
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem> {session.user.name} </MenuItem>
            <Divider />
            <MenuItem onClick={async () => await signOut()}>
              <strong>Sign Out</strong>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          variant="outlined"
          fullWidth
          onClick={() => {
            signIn("google", {
              redirect: true,
              callbackUrl: "/",
            });
          }}
          style={{
            marginTop: "5px",
            background: "lightgray",
            color: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Sign In With google
          <FcGoogle className="ml-3" />
        </Button>
      )}
    </span>
  );
};

export default LoginButton;
