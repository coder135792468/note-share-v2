"use client";
import React, { useEffect, useState } from "react";
import { NoteCard } from "./NoteCard";
import { Grid } from "@mui/material";
import "./style.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { PAGE_SIZE } from "../contant";

const getNotes = async (page: number = 0, ownerId: any = null) => {
  if (ownerId) {
    const res = await axios.get(
      `http://localhost:8080/notes?size=${PAGE_SIZE}&page=${page}&sort=id,asec&ownerId=${ownerId}`
    );
    return res.data;
  } else {
    const res = await axios.get(
      `http://localhost:8080/notes?size=${PAGE_SIZE}&page=${page}&sort=id,asec`
    );
    return res.data;
  }
};

export default function NoteContainer(props: any) {
  const [notes, setNotes] = useState<null | any>(null);

  useEffect(() => {
    setNotes(props);
  }, [props]);
  return (
    <>
      <Grid
        className="search-header-notes-card"
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 2, sm: 4, md: 8 }}
      >
        {notes?.notes?.map((note: any, index: number) => (
          <Grid item xs={2} sm={2} md={4} key={index}>
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
      {notes?.totalPages > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            bottom: "10px",
          }}
        >
          <Stack spacing={2} style={{ margin: "20px 40px 0" }}>
            <Pagination
              count={notes?.totalPages}
              onChange={async (e: any, page: number) => {
                const data = await getNotes(page - 1, props?.ownerId);
                setNotes(data);
              }}
            />
          </Stack>
        </div>
      )}
    </>
  );
}
