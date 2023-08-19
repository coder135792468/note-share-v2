"use client";
import Header from "../Header";
import { UploadButton } from "../shared/UploadButton";
import "./style.css";

import DownloadingIcon from "@mui/icons-material/Downloading";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <UploadButton />
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
