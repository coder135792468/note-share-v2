import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "@/app/firebase";
import "./style.css";
import { useSession } from "next-auth/react";
import Modal from "@mui/material/Modal";
import StepperModal from "./StepperModal";

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
    <div>
      <Box
        sx={{
          padding: "50px",
          backgroundColor: "grey",
          display: "inline-block",
          margin: "20px",
          borderRadius: "5px",
          backgroundImage:
            "radial-gradient( circle farthest-corner at 10% 20%,  rgba(249,232,51,1) 0%, rgba(250,196,59,1) 100.2% )",
          boxShadow: "0px 2px 2px rgba(0,0,0,0.4)",
        }}
      >
        <Button
          variant="contained"
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
          Upload A File
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
          <StepperModal
            file={file}
            setFile={setFile}
            data={data}
            setData={setData}
            uploadFile={uploadFile}
          />

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
    </div>
  );
};
