import { Footer } from "@/app/Footer";
import Header from "@/app/Header";
import { SaveButton } from "@/app/shared/SaveButton";
import { Typography, Button, Divider, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";

const getNoteData = async (id: string = "") => {
  const res = await axios.get(`http://localhost:8080/notes/${id}`);
  return res.data;
};

const noteReviewStyle = {
  height: {
    xs: "300px",
    sm: "500px",
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
        <Box sx={noteReviewStyle} style={{ background: "rgba(0,0,0,.2)" }}>
          <iframe style={{ width: "100%", height: "100%" }} src={data?.file} />
        </Box>
        <Box sx={noteReviewStyle}>
          <Box>
            <strong>Notes Details</strong>
            {/* Specification */}
            <Box style={{ paddingBottom: 10 }}>
              <Typography
                component="p"
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
                  <Box>Course</Box>
                </Grid>
                <Grid xs={6}>
                  <Box>{data?.qualification}</Box>
                </Grid>
                <Grid xs={6}>
                  <Box>Subject</Box>
                </Grid>
                <Grid xs={6}>
                  <Box>{data?.subject}</Box>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            {/* Note Deatils */}
            <Box style={{ paddingBottom: 10 }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid xs={6}>
                  <Box>Course Code</Box>
                </Grid>
                <Grid xs={6}>
                  <Box>{data?.title}</Box>
                </Grid>

                <Grid xs={6}>
                  <Box>Author</Box>
                </Grid>
                <Grid xs={6}>
                  <Box>{data?.author}</Box>
                </Grid>
              </Grid>
            </Box>
            <Divider />

            <Button
              color="success"
              variant="contained"
              style={{ margin: "10px" }}
            >
              Download
            </Button>
            <SaveButton noteId={id} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
