"use client"
import React from "react";
import LoginButton from "./LoginButton";
import { AppBar, Toolbar, Typography ,Button, Input} from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={0}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Note Share
        </Typography>
        <div style={{marginRight:'20px'}}>
        <Input placeholder="Search for notes...." type='search' style={{background:'#fff',padding:'2px 20px',marginRight:'5px',position:'relative',top:'2px'}}/>
        <Button variant="contained" color='secondary'>Search</Button>
        </div>
        <LoginButton />
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
