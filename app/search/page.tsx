import Header from "../Header";
import { Footer } from "../Footer";
import "./style.css";
import { FormControlLabel } from "@mui/material";
import { MyCheckBox } from "../shared/MyCheckBox";
import { NoteCard } from "../shared/NoteCard";

const getAllNotes = async ()=>{
    const res = await fetch('http://localhost:8080/notes?size=30&sort=id,asec');
    return res.json();
}
export default async  function Search() {
  const filters_data = [
    { label: "English" },
    { label: "Maths" },
    { label: "Physics" },
    { label: "Chemistry" },
  ];
  const notes_data = [
    {
      id:1,
      title: "Answer/Questions Notes for 10th Class English.",
      desc: "English notes for 10th Standard.",
      subject: "English",
      qualification: "10th",
      author: "Hamzatauqr",
    },
    {
      id:2,
      title: "Maths Formula For 10th Class",
      desc: "I hope those formula will help you to improve your mathematics",
      subject: "Maths",
      qualification: "10th",
      author: "Darvi",
    },
    {
      id:3,
      title: "Answer/Questions Notes for 10th Class English.",
      desc: "English notes for 10th Standard.",
      subject: "English",
      qualification: "10th",
      author: "Hamzatauqr",
    },
    {
      id:4,
      title: "Maths Formula For 10th Class",
      desc: "I hope those formula will help you to improve your mathematics",
      subject: "Maths",
      qualification: "10th",
      author: "Darvi",
    },
  ];
  
  const data =await getAllNotes();
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

        <div className="search-header-notes-card">
          {notes_data?.map((note) => (
            <NoteCard note={note}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
