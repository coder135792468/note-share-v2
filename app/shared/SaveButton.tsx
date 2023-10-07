"use client";
import { Button } from "@mui/material";
import React from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

export const SaveButton = ({ noteId }: any) => {
  const { data: session }: any = useSession();
  if (session === undefined) return null;
  const userId = session?.user?.uid;
  const saveNoteToLibrary = async () => {
    try {
      await axios.post(
        `http://localhost:8080/library?noteId=${noteId}&userId=${userId}`
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Button
      onClick={saveNoteToLibrary}
      color="secondary"
      variant="contained"
      style={{ margin: "10px" }}
    >
      <BookmarksIcon />
      Save Note
    </Button>
  );
};
