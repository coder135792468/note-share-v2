import Header from "../Header";
import { Footer } from "../Footer";
import { Box } from "@mui/material";
import NoteContainer from "../shared/NoteContainer";
import axios from "axios";

const PAGE_SIZE = 3;

const getAllNotes = async (search: string = "") => {
  const res = await axios.get(
    `http://localhost:8080/notes?size=${PAGE_SIZE}&sort=id,asec&search=${search}`
  );
  return res.data;
};
export default async function Search({ searchParams: { search } }: any) {
  const data = await getAllNotes(search);
  console.log(data);
  return (
    <Box>
      <Header />
      <Box sx={{ minHeight: "50vh", paddingBottom: "30px" }}>
        <NoteContainer {...data} />
      </Box>
      <Footer />
    </Box>
  );
}
