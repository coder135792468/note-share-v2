"use client";
import React, { useEffect, useState } from "react";
import { NoteCard } from "./NoteCard";
import { Box, Container, Grid } from "@mui/material";
import "./style.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { PAGE_SIZE } from "../../assets/contants/contant";
import no_record from "@/assets/images/2953962.jpg";
import Image from "next/image";
const getNotes = async (
  page: number = 0,
  ownerId: any = null,
  isLibrary: boolean = false
) => {
  if (isLibrary) {
    const res = await axios.get(
      `http://localhost:8080/library/${ownerId}?size=${PAGE_SIZE}&page=${page}&sort=id,asec`
    );
    return res.data;
  } else if (ownerId) {
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

  const fetchNotes = async (
    page: number = 0,
    ownerId: string = props?.ownerId,
    isLibrary: boolean = props?.isLibrary
  ) => {
    let data = await getNotes(page, ownerId, isLibrary);
    if (props?.isLibrary) {
      data?.notes?.forEach((ele: any) => {
        ele = ele?.note;
      });
      // @ts-ignore
      data.notes = data?.notes?.map((ele: any) => ele.note);
    }
    setNotes(data);
  };
  // const {notes:{notes}} = props;
  console.log({ props });
  return (
    <Container>
      {notes?.notes?.length === 0 && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={no_record}
            alt="no-record"
            style={{
              width: "100%",
              height: "250px",
              maxWidth: "450px",
              objectFit: "contain",
              margin: "2% auto",
            }}
          />
        </Box>
      )}
      <Grid
        className="search-header-notes-card"
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 2, sm: 4, md: 8 }}
      >
        {notes?.notes?.map((note: any, index: number) => (
          <Grid item xs={2} sm={2} md={4} key={index}>
            <NoteCard
              note={note}
              isLibrary={props.isLibrary}
              onDelete={props.isLibrary && getNotes}
              setNotes={setNotes}
              ownerId={props.ownerId}
            />
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
          {notes && (
            <Stack spacing={2} style={{ margin: "20px 40px 0" }}>
              <Pagination
                count={notes?.totalPages}
                onChange={async (e: any, page: number) => {
                  console.log(page);
                  await fetchNotes(page - 1, props.ownerId, props?.isLibrary);
                }}
              />
            </Stack>
          )}
        </div>
      )}
    </Container>
  );
}
