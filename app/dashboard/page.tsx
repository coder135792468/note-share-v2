"use client";
import { useState } from "react";
import Header from "../Header";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import "./style.css";
import { Button } from "@mui/material";
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "@/app/firebase";
import DownloadingIcon from "@mui/icons-material/Downloading";

export default function Page() {
  const [file, setFile] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const onChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = () => {
    setUploading(true);
    const fileUpload = ref(storage, `files/${file?.name}`);
    const uploadTask = uploadBytesResumable(fileUpload, file);

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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUploading(false);
          setProgress(0);
          setFile(null);
          console.log(downloadURL);
        });
      }
    );
  };
  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-upload-cards-container">
          <input
            onChange={onChange}
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
          {uploading && (
            <div>
              <div style={{ color: "#000", textAlign: "center" }}>
                {progress}%
              </div>
              <progress value={progress} max="100" style={{ width: "100%" }} />
            </div>
          )}
        </div>
        <div className="dashboard-upload-cards-container download-count">
          <div style={{ marginTop: "20px" }}>
            <DownloadingIcon style={{ fontSize: "50px" }} />
          </div>
          <span>0 Downloads!</span>
        </div>
        <div className="dashboard-upload-cards-container my-upload-list"></div>
      </div>
    </div>
  );
}
