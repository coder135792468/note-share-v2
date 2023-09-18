import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Loader from "../shared/Loader";
import { useSession } from "next-auth/react";
import axios from "axios";
import { PAGE_SIZE } from "../contant";
import NoteContainer from "../shared/NoteContainer";

const getAllNotes = async (ownerId: string = "") => {
  const res = await axios.get(
    `http://localhost:8080/library/${ownerId}?size=${PAGE_SIZE}&sort=id,asec`
  );
  return res.data;
};
export const LibraryButton = () => {
  const { data: session }: any = useSession();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setNoteData] = useState<null | any>(null);

  if (session === undefined) return null;

  const getLibrary = async () => {
    try {
      setLoading(true);
      getAllNotes(session?.user?.uid).then((res) => {
        let new_data = res;
        new_data?.notes?.forEach((ele: any) => {
          ele = ele?.note;
        });
        console.log(new_data?.notes);
        // @ts-ignore
        new_data.notes = new_data?.notes?.map((ele: any) => ele.note);
        setNoteData(new_data);
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Box
        sx={{
          padding: "50px",
          width: {
            xs: "50%",
            sm: "auto",
          },
          display: {
            xs: "flex",
            sm: "inline-block",
          },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#6190e8",
          marginLeft: {
            xs: "10%",
            sm: "20px",
          },
          margin: "20px",
          borderRadius: "5px",
          backgroundImage: "linear-gradient(to right, #6190e8, #a7bfe8)",
          boxShadow: "0px 2px 2px rgba(0,0,0,0.4)",
        }}
      >
        <Button
          variant="contained"
          color="warning"
          onClick={(e) => {
            setModal(true);
            getLibrary();
          }}
        >
          Show Library
        </Button>
      </Box>

      <Modal
        open={modal}
        onClose={() => {
          setModal(false);
        }}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            width: "80vw",
            height: "80vh",
            background: "#fff",
            margin: "10vh auto",
            borderRadius: "5px",
          }}
        >
          <Loader open={loading} />
          {!loading && <NoteContainer {...data} ownerId={session?.user?.uid} />}
        </Box>
      </Modal>
    </>
  );
};
