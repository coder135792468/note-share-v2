import { Footer } from "@/app/Footer";
import Header from "@/app/Header";
import "./style.css";
import { Typography, Button, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";

const getNoteData = async (id: string = "") => {
  const res = await axios.get(`http://localhost:8080/notes/${id}`);
  return res.data;
};
export default async function NotePage({ params: { id } }: any) {
  const data = await getNoteData(id);
  console.log(data);
  return (
    <div>
      <Header />
      <div className="note-review-info">
        <div
          className="note-review-section"
          style={{ background: "rgba(0,0,0,.2)" }}
        >
          <iframe style={{ width: "100%", height: "100%" }} src={data?.file} />
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
                  <div>Course</div>
                </Grid>
                <Grid xs={6}>
                  <div>{data?.qualification}</div>
                </Grid>
                <Grid xs={6}>
                  <div>Subject</div>
                </Grid>
                <Grid xs={6}>
                  <div>{data?.subject}</div>
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
                  <div>{data?.title}</div>
                </Grid>

                <Grid xs={6}>
                  <div>Author</div>
                </Grid>
                <Grid xs={6}>
                  <div>{data?.author}</div>
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
