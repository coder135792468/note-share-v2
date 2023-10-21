"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import axios from "axios";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { useSession } from "next-auth/react";
import { PAGE_SIZE } from "../../assets/contants/contant";
import { IconButton, Tooltip } from "@mui/material";

const getAllNotes = async (ownerId: string = "") => {
  const res = await axios.get(
    `http://localhost:8080/library/${ownerId}?size=${PAGE_SIZE}&sort=id,asec`
  );
  return res.data;
};
export const NoteCard = (props: any) => {
  const { note, isLibrary = false } = props;
  const { data: session }: any = useSession();

  if (session === undefined) return null;

  const deleteNote = async (note: number, userId: string) => {
    try {
      await axios.delete(
        `http://localhost:8080/library/${note}?userId=${userId}`
      );
      await getAllNotes(session?.user?.uid).then((res) => {
        let new_data = res;
        new_data?.notes?.forEach((ele: any) => {
          let temp = ele;
          ele = ele?.note;
          ele.libraryId = temp?.id;
        });
        // @ts-ignore
        new_data.notes = new_data?.notes?.map((ele: any) => ele.note);
        console.log(new_data);
        props.setNotes(new_data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    note && (
      <Card
        sx={{
          display: "flex",
          width: "90%",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: {
              sm: "190px",
              md: "170px",
            },
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div">
              {note?.title.substring(0, 100)}
              {isLibrary && (
                <Tooltip title="Delete">
                  <IconButton
                    onClick={() =>
                      deleteNote(note?.libraryId, session?.user.uid)
                    }
                    color="warning"
                    sx={{ ml: 1 }}
                  >
                    <DeleteSharpIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {note?.desc.substring(0, 100)}
            </Typography>
            <Typography variant="subtitle1" component="div">
              {note?.author.substring(0, 50)}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Link href={`search/note/${note.id}`} aria-label="previous">
              <Button aria-label="previous">View Note</Button>
            </Link>
          </Box>
        </Box>
      </Card>
    )
  );
};
