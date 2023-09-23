"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Chip } from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";

export const NoteCard = (props: any) => {
  const { note, isLibrary = false } = props;
  const { data: session }: any = useSession();
  const [isDeleted, setIsDeleted] = useState<null | boolean>(false);

  if (session === undefined) return null;

  const deleteNote = async (note: number, userId: string) => {
    try {
      axios.delete(`http://localhost:8080/library/${note}?userId=${userId}`);
    } catch (err) {
      console.log(err);
    } finally {
      setIsDeleted(true);
    }
  };
  return (
    <Card sx={{ display: "flex", width: "90%" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="p">
            {note.title}
            {isLibrary && (
              <Chip
                color={isDeleted ? "secondary" : "primary"}
                sx={{
                  fontSize: "8px",
                  padding: "0",
                  width: "60px",
                  height: "20px",
                  marginLeft: "5px",
                }}
                label={isDeleted ? "Deleted" : "Library"}
              />
            )}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {note.desc}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {note.author}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Link href={`search/note/${note.id}`} aria-label="previous">
            <Button aria-label="previous">View Note</Button>
          </Link>
          {isLibrary && (
            <Button
              onClick={() => deleteNote(note.libraryId, session?.user.uid)}
              variant="contained"
              color="warning"
            >
              Delete
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
};
