"use client";
import Header from "../Header";
import { UploadButton } from "../components/UploadButton";
import "./style.css";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import NoteContainer from "../shared/NoteContainer";
import { Box, Chip } from "@mui/material";
import { LibraryButton } from "../components/LibraryButton";
import { PAGE_SIZE } from "../contant";
import { Footer } from "../Footer";

const getDownloadCount = async (ownerId: string = "") => {
  const res = await axios.get(`http://localhost:8080/notes/owner/${ownerId}`);
  return res.data;
};
const getAllNotes = async (ownerId: string = "") => {
  const res = await axios.get(
    `http://localhost:8080/notes?size=${PAGE_SIZE}&sort=id,asec&ownerId=${ownerId}`
  );
  return res.data;
};
export default function Page() {
  const { data: session }: any = useSession();
  const [downloadCount, setDownloadCount] = useState<null | any>(0);
  const [data, setNoteData] = useState<null | any>(null);

  useEffect(() => {
    if (session) {
      getDownloadCount(session?.user?.uid).then((result) => {
        console.log(result);
        setDownloadCount(result);
      });
      getAllNotes(session?.user?.uid).then((res) => {
        setNoteData(res);
      });
    }
  }, [session]);
  if (session === undefined) return null;

  return (
    <Box>
      <Header />
      <Box>
        <UploadButton />
        <LibraryButton />
      </Box>

      <Box className="myNotes-list">
        <h1>
          My Uploaded Notes{" "}
          <Chip
            color="secondary"
            label={
              session ? `${JSON.stringify(downloadCount)} Downloads` : "Loading"
            }
          />
        </h1>
        <NoteContainer {...data} ownerId={session?.user?.uid} />
      </Box>
      <Footer />
    </Box>
  );
}
