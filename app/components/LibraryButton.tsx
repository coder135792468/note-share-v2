import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Loader from "../shared/Loader";
import { useSession } from "next-auth/react";
import NoteContainer from "../shared/NoteContainer";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import * as styles from "./styles/libraryStyles";
import { getAllNotes } from "../../assets/helper/api";

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
        sx={styles.libraryContainer}
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
