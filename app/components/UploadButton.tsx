import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "@/app/firebase";
import "../shared/style.css";
import { useSession } from "next-auth/react";
import Modal from "@mui/material/Modal";
import StepperModal from "../shared/StepperModal";
import Loader from "../shared/Loader";
import * as styles from "./styles/uploadButtonStyles";

interface FormData {
  uid: string;
  title: string;
  desc: string | undefined | JSX.Element;
  qualification: string;
  subject: string;
  author: string;
  file: string;
}

export const UploadButton = () => {
  const [file, setFile] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [modal, setModal] = useState(false);
  const { data: session }: any = useSession();
  if (session === undefined) return null;

  const [data, setData] = useState<FormData>({
    uid: "",
    title: "",
    desc: "",
    subject: "",
    qualification: "",
    author: "",
    file: "",
  });

  const uploadFile = () => {
    const fileUpload = ref(storage, `files/${file?.name}`);
    const uploadTask = uploadBytesResumable(fileUpload, file);
    setUploading(true);
    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await setData({
            ...data,
            file: downloadURL,
          });

          await fetch("http://localhost:8080/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          setUploading(false);
          setModal(false);
          setFile(null);
          console.log(downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    setData({
      ...data,
      uid: session?.user?.uid,
      author: session?.user?.name,
    });
  }, [session]);

  return (
    <>
      <Box
        sx={styles.uploadButtonContainer}
        onClick={(e) => {
          setModal(true);
          setUploading(false);
          setData({
            uid: "",
            title: "",
            desc: "",
            subject: "",
            qualification: "",
            author: "",
            file: "",
          });
          setFile(null);
        }}
      >
        <Box sx={styles.cloudIcon}>
          <CloudUploadIcon />
        </Box>
        <Typography sx={{ opacity: 0.72, fontWeight: 700 }}>
          Upload your file
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
        <Box sx={styles.stepperContainer}>
          {uploading ? (
            <Loader open={uploading} />
          ) : (
            <StepperModal
              file={file}
              setFile={setFile}
              data={data}
              setData={setData}
              uploadFile={uploadFile}
            />
          )}

          <div className="dashboard-upload-cards-container upload-button" />
        </Box>
      </Modal>
    </>
  );
};
