import React, { useEffect, useState } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
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
import { alpha } from "@mui/material/styles";

export const UploadButton = () => {
  const [file, setFile] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [modal, setModal] = useState(false);
  const { data: session }: any = useSession();
  if (session === undefined) return null;

  const [data, setData] = useState<any>({
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
      (snapshot) => {
        setProgress(
          Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
      },
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
          setProgress(0);
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
        sx={{
          padding: "30px",
          width: {
            xs: "50%",
            sm: "auto",
          },
          backgroundColor: "#D0F2FF",
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
          setProgress(0);
        }}
      >
        <Box sx={{ color: "secondary.main", textAlign: "center" }}>
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
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
          }}
        >
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

          <div className="dashboard-upload-cards-container upload-button">
            {/* {uploading && (
              <div>
                <div style={{ color: "#000", textAlign: "center" }}>
                  {progress}%
                </div>
                <progress
                  value={progress}
                  max="100"
                  style={{ width: "100%" }}
                />
              </div>
            )} */}
          </div>
        </Box>
      </Modal>
    </>
  );
};
