import React, { useEffect, useState } from "react";
import { Button, IconButton, Input, TextField } from "@mui/material";
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "@/app/firebase";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import { useSession } from "next-auth/react";

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
      <div
        className="dashboard-upload-cards-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          background: "lightgrey",
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
      </div>
      {modal && (
        <div className="dashboard-modal">
          <div className="dashboard-modal-header">
            <span>Upload Your Notes</span>
            <IconButton onClick={(e) => setModal(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="dashboard-upload-cards-container upload-button">
            <input
              onChange={(e: any) => setFile(e.target.files[0])}
              type="file"
              id="file-input"
              accept="application/pdf"
              hidden
            />
            <label htmlFor="file-input" className="file-upload-button">
              <FileUploadIcon />
              {file?.name ? (
                <span>{file.name}</span>
              ) : (
                <span>Choose File to Upload</span>
              )}
            </label>

            {uploading && (
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
            )}
            <div className="upload-form-container">
              <Input
                onChange={(e: any) => {
                  setData({
                    ...data,
                    title: e.target.value,
                  });
                }}
                className="upload-form-input"
                placeholder="Enter title"
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  width: "80vw",
                  maxWidth: "600px",
                }}
              >
                <div className="upload-button-select-subject">
                  <select
                    onChange={(e: any) => {
                      setData({
                        ...data,
                        subject: e.target.value,
                      });
                    }}
                  >
                    <option selected>Select Subject</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                    <option value="English">English</option>
                  </select>
                </div>
                <div className="upload-button-select-subject">
                  <select
                    onChange={(e: any) => {
                      setData({
                        ...data,
                        qualification: e.target.value,
                      });
                    }}
                  >
                    <option selected>Select Grade</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                  </select>
                </div>
              </div>
              <TextField
                className="upload-form-input"
                multiline={true}
                variant="filled"
                onChange={(e: any) => {
                  setData({ ...data, desc: e.target.value });
                }}
                placeholder="Enter Note description...."
                style={{ height: "auto", marginTop: "5px" }}
              />
            </div>

            <Button
              style={{ marginTop: "30px" }}
              variant="contained"
              color="primary"
              disabled={uploading}
              onClick={uploadFile}
              fullWidth
            >
              Upload
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
