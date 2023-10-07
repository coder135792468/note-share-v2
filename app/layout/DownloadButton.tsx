"use client";
import { Button } from "@mui/material";
import DownloadingIcon from "@mui/icons-material/Downloading";

export const DownloadButton = ({ data }: any) => (
  <Button
    color="error"
    variant="contained"
    style={{ margin: "10px", display: "flex" }}
    onClick={() => {
      const a = document.createElement("a");
      a.href = data?.file;
      a.target = "_blank";
      a.download = Date.now().toString();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }}
  >
    <span>
      <DownloadingIcon />
    </span>
    <span
      style={{
        padding: "0 4px",
        position: "relative",
        top: "-2px",
      }}
    >
      Download
    </span>
  </Button>
);
