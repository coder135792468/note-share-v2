"use client";
import { useState } from "react";
import { Footer } from "@/app/Footer";
import Header from "@/app/Header";
import "./style.css";
import { Typography, Button, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function NotePage() {
  return (
    <div>
      <Header />
      <div className="note-review-info">
        <div
          className="note-review-section"
          style={{ background: "rgba(0,0,0,.2)" }}
        >
          <iframe
            style={{ width: "100%", height: "100%" }}
            src="https://firebasestorage.googleapis.com/v0/b/notes-share-3ba29.appspot.com/o/files%2Fdocument.pdf?alt=media&token=07bc60e9-c102-42d7-be4d-5f84180d46b5"
          />
        </div>
        <div className="note-review-section">
          <div className="note-review-section-header">
            <strong>Notes Details</strong>
            {/* Specification */}
            <div style={{ paddingBottom: 10 }}>
              <Typography
                component="div"
                style={{ background: "blue", color: "#fff", padding: "5px" }}
              >
                Specification
              </Typography>

              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid xs={6}>
                  <div>Institution</div>
                </Grid>
                <Grid xs={6}>
                  <div>10th NOTES ENGLISH</div>
                </Grid>
                <Grid xs={6}>
                  <div>Course</div>
                </Grid>
                <Grid xs={6}>
                  <div>Class 10</div>
                </Grid>
              </Grid>
            </div>
            <Divider />
            {/* Note Deatils */}
            <div style={{ paddingBottom: 10 }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid xs={6}>
                  <div>Course Code</div>
                </Grid>
                <Grid xs={6}>
                  <div>10th NOTES ENGLISH</div>
                </Grid>
                <Grid xs={6}>
                  <div>Written</div>
                </Grid>
                <Grid xs={6}>
                  <div>20 April,2021</div>
                </Grid>
                <Grid xs={6}>
                  <div>Author</div>
                </Grid>
                <Grid xs={6}>
                  <div>Devril</div>
                </Grid>
              </Grid>
            </div>
            <Divider />

            <Button
              color="success"
              variant="contained"
              style={{ margin: "10px" }}
            >
              Download Note
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
