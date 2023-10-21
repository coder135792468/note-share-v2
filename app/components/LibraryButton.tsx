import { Box, Button, Typography, alpha } from "@mui/material";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Loader from "../shared/Loader";
import { useSession } from "next-auth/react";
import axios from "axios";
import { PAGE_SIZE } from "../../assets/contants/contant";
import NoteContainer from "../shared/NoteContainer";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

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
          let temp = ele;
          ele = ele?.note;
          ele.libraryId = temp?.id;
        });
        // @ts-ignore
        new_data.notes = new_data?.notes?.map((ele: any) => ele.note);
        console.log(new_data);
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
          padding: "30px",
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
          marginLeft: {
            xs: "10%",
            sm: "20px",
          },
          margin: "20px",
          borderRadius: "5px",
          border: "1px solid #999",
          boxShadow: `0 0 12px 0 ${alpha(
            "#919EAB",
            0.2
          )}, 0 12px 24px -4px ${alpha("#919EAB", 0.12)}`,
        }}
        onClick={(e) => {
          setModal(true);
          getLibrary();
        }}
      >
        <Box sx={{ color: "secondary.main", textAlign: "center" }}>
          <LibraryBooksIcon />
        </Box>
        <Typography sx={{ opacity: 0.72, fontWeight: 700 }}>
          Show Library
        </Typography>
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
            minHeight: "50vh",
            maxHeight: "60vh",
            background: "#fff",
            p: 2,
            margin: "10vh auto",
            borderRadius: "5px",
            overflow: "auto",
          }}
        >
          <Loader open={loading} />
          {!loading && (
            <NoteContainer
              {...data}
              ownerId={session?.user?.uid}
              isLibrary={true}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};
