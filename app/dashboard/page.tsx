"use client";
import Header from "../Header";
import { UploadButton } from "../shared/UploadButton";
import "./style.css";
import axios from "axios";
import DownloadingIcon from "@mui/icons-material/Downloading";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import NoteContainer from "../shared/NoteContainer";

const getDownloadCount = async (ownerId: string = "") => {
  const res = await axios.get(`http://localhost:8080/notes/owner/${ownerId}`);
  return res.data;
};
const getAllNotes = async (ownerId: string = "") => {
  const res = await axios.get(
    `http://localhost:8080/notes?size=30&sort=id,asec&ownerId=${ownerId}`
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
    <div>
      <Header />
      <div className="dashboard-container">
        <UploadButton />
        <div className="dashboard-upload-cards-container download-count">
          <div style={{ marginTop: "20px" }}>
            <DownloadingIcon style={{ fontSize: "50px" }} />
          </div>
          <span>
            {session ? `${JSON.stringify(downloadCount)} Downloads` : "Loading"}
          </span>
        </div>
      </div>
      <div className="myNotes-list">
        <h1>My Uploaded Notes</h1>
        <NoteContainer {...data} />
      </div>
    </div>
  );
}
