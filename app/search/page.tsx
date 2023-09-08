import Header from "../Header";
import { Footer } from "../Footer";
import "./style.css";
import { FormControlLabel, Grid } from "@mui/material";
import { MyCheckBox } from "../shared/MyCheckBox";
import NoteContainer from "../shared/NoteContainer";
import axios from "axios";

const getAllNotes = async (search: string = "") => {
  const res = await axios.get(
    `http://localhost:8080/notes?size=30&sort=id,asec&search=${search}`
  );
  return res.data;
};
export default async function Search({ searchParams: { search } }: any) {
  const filters_data = [
    { label: "English" },
    { label: "Maths" },
    { label: "Physics" },
    { label: "Chemistry" },
  ];
  const data = await getAllNotes(search);
  console.log(data);
  return (
    <div>
      <Header />
      <div className="search-header-field">
        <div className="search-header-filter-container">
          {filters_data?.map((ele) => (
            <FormControlLabel
              value="end"
              control={<MyCheckBox />}
              label={ele.label}
              labelPlacement="end"
            />
          ))}
        </div>
        <NoteContainer {...data} />
      </div>
      <Footer />
    </div>
  );
}
