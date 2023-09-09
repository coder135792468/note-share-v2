import Header from "../Header";
import { Footer } from "../Footer";
import "./style.css";
import { FormControlLabel, Grid } from "@mui/material";
import { MyCheckBox } from "../shared/MyCheckBox";
import NoteContainer from "../shared/NoteContainer";
import axios from "axios";

const PAGE_SIZE = 10;

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
    <div>
      <Header />
      <div className="search-header-field">
        <NoteContainer {...data} />
      </div>
      <Footer />
    </div>
  );
}
