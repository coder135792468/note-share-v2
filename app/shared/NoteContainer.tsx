"use client";
import React from "react";
import { NoteCard } from "./NoteCard";
import { Grid } from "@mui/material";
import "./style.css";

export default function NoteContainer(data: any) {
  return (
    <Grid
      className="search-header-notes-card"
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 2, md: 8 }}
    >
      {data?.notes?.map((note: any, index: number) => (
        <Grid item xs={2} sm={2} md={4} key={index}>
          <NoteCard note={note} />
        </Grid>
      ))}
    </Grid>
  );
}
