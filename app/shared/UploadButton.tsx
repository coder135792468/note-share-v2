import React, { useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  TextField,
} from "@mui/material";
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "@/app/firebase";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";

export const UploadButton = () => {
  const [file, setFile] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [modal, setModal] = useState(false);

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
        <Button variant="contained" onClick={(e) => setModal(true)}>
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
              <Input className="upload-form-input" placeholder="Enter title" />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  width: "80vw",
                  maxWidth: "600px",
                }}
              >
                <div className="upload-button-select-subject">
                  <select>
                    <option selected>Select Subject</option>
                    <option value="1">Americano</option>
                    <option value="3">Green Tea</option>
                  </select>
                </div>
                <div className="upload-button-select-subject">
                  <select>
                    <option selected>Select Grade</option>
                    <option value="1">Americano</option>
                    <option value="3">Green Tea</option>
                  </select>
                </div>
              </div>
              <TextField
                className="upload-form-input"
                multiline={true}
                variant="filled"
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
