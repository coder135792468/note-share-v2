import Header from "../Header";
import { Footer } from "../Footer";
import { Box } from "@mui/material";
import NoteContainer from "../shared/NoteContainer";
import axios from "axios";
import { PAGE_SIZE } from "../../assets/contants/contant";
import { NoteSearchBar } from "../components/NoteSearchBar";

const getAllNotes = async (search: string = "") => {
  const res = await axios.get(
    `http://localhost:8080/notes?size=${PAGE_SIZE}&sort=id,asec&search=${search}`
  );
  return res.data;
};
export default async function Search({ searchParams: { search } }: any) {
  const data = await getAllNotes(search);
  return (
    <Box sx={{ background: "rgba(0,0,0,0.03)" }}>
      <Header showSearch={false} />
      <NoteSearchBar />
      {search && (
        <Box
          component={"h1"}
          sx={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontWeight: "700",
            margin: "10px 0 70px 0",
          }}
        >
          Search Result for "{search}"
        </Box>
      )}
      <Box sx={{ minHeight: "50vh", paddingBottom: "30px" }}>
        <NoteContainer {...data} />
      </Box>
      <Footer />
    </Box>
  );
}
