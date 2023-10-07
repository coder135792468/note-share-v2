import { Footer } from "@/app/Footer";
import Header from "@/app/Header";
import { DownloadButton } from "@/app/layout/DownloadButton";
import { SaveButton } from "@/app/shared/SaveButton";
import { Typography, Button, Divider, Box, Chip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";

const getNoteData = async (id: string = "") => {
  const res = await axios.get(`http://localhost:8080/notes/${id}`);
  return res.data;
};

const noteReviewStyle = {
  height: {
    xs: "300px",
    sm: "auto",
  },
};
export default async function NotePage({ params: { id } }: any) {
  const data = await getNoteData(id);
  console.log(data);
  return (
    <Box>
      <Header />
      <Box
        sx={{
          minHeight: {
            xs: "30vh",
            sm: "60vh",
          },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1.5fr 1fr",
          },
          gridGap: "10px",
          margin: "20px 5px",
        }}
      >
        <Box
          sx={noteReviewStyle}
          style={{
            background: "rgba(0,0,0,.2)",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <iframe style={{ width: "100%", height: "100%" }} src={data?.file} />
        </Box>
        <Box>
          <Box>
            <Chip
              color="info"
              label={
                <strong style={{ fontFamily: "sans-serif" }}>
                  Notes Details
                </strong>
              }
            />
            <Chip
              label={
                data?.download ? `${data.download} Downloads` : "Not Known"
              }
            />

            {/* Specification */}
            <Box
              style={{
                padding: 10,
                margin: "10px 0",
                border: "2px solid rgba(0,0,0,0.1)",
                fontFamily: "sans-serif",
                borderRadius: "5px",
              }}
            >
              <strong>Description: </strong>
              <span>{data?.desc}</span>
            </Box>
            <Box
              style={{
                padding: 10,
                margin: "10px 0",
                border: "2px solid rgba(0,0,0,0.1)",
                fontFamily: "sans-serif",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid xs={6}>
                  <Box sx={{ fontWeight: 700 }}>Course</Box>
                </Grid>
                <Grid xs={6}>
                  <Box>{data?.qualification}</Box>
                </Grid>
                <Grid xs={6}>
                  <Box sx={{ fontWeight: 700 }}>Subject</Box>
                </Grid>
                <Grid xs={6}>
                  <Box>{data?.subject}</Box>
                </Grid>
              </Grid>
            </Box>
            <Divider />

            {/* Note Deatils */}
            <Box
              style={{
                padding: 10,
                margin: "10px 0",
                border: "2px solid rgba(0,0,0,0.1)",
                fontFamily: "sans-serif",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid xs={6}>
                  <Box sx={{ fontWeight: 700 }}>Course Code</Box>
                </Grid>
                <Grid xs={6}>
                  <Box>{data?.title}</Box>
                </Grid>

                <Grid xs={6}>
                  <Box sx={{ fontWeight: 700 }}>Author</Box>
                </Grid>
                <Grid xs={6}>
                  <Box>{data?.author}</Box>
                </Grid>
              </Grid>
            </Box>
            <Divider />

            <DownloadButton data={data} />
            <SaveButton noteId={id} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
