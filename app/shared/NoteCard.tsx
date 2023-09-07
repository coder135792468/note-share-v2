"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export const NoteCard = (props: any) => {
  const [thumbnail, setThumbnail] = useState();

  return (
    <Card sx={{ display: "flex", width: "400px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="p">{props.note.title}</Typography>

          <Typography variant="body2" color="text.secondary">
            {props.note.desc}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {props.note.author}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Link href={`search/note/${props.note.id}`} aria-label="previous">
            <Button aria-label="previous">View Note</Button>
          </Link>
        </Box>
      </Box>
    </Card>
  );
};
