import "./App.css";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import List from "./components/list";
import Hello from "./components/hello";
import AddNew from "./components/addNew";
import axios from "axios";
import EditNote from "./components/editNote";

let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.io)",
};

let reqOptions = {
  url: "https://61af76a33e2aba0017c49386.mockapi.io/notes",
  method: "GET",
  headers: headersList,
};

function App() {
  let initNotesArr = [];

  let initNote = {
    title: "title of note",
    text: "body of the note",
    id: Math.random(),
    date: new Date(),
  };

  const [notes, setNotes] = useState([initNote]);
  const [page, setPage] = useState("Hello");
  const [editId, setEditId] = useState(0);

  // axios.request(reqOptions).then(function (response) {

  //   setNotes(response.data)
  //   // initNotesArr = response.data;
  // })

  const addNote = (note) => {
    setNotes((prev) => {
      return [note, ...prev];
    });
  };

  const handlePage = (title, id = 0) => {
    console.log(id);
    if (id !== 0) {
      setEditId(id);
    }
    setPage(title);
  };

  const removeNote = (id) => {
    setNotes((prev) => {
      const index = prev.findIndex((el) => el.id === id);
      const before = prev.slice(0, index);
      const after = prev.slice(index + 1);
      return [...before, ...after];
    });
  };

  const editNote = (note) => {
    const id = note.id;
    setNotes((prev) => {
      const index = prev.findIndex((el) => el.id === id);
      const before = prev.slice(0, index);
      const after = prev.slice(index + 1);
      return [...before, note, ...after];
    });
  };

  let content = <Hello />;

  if (page === "List") {
    content = (
      <List notes={notes} removeNote={removeNote} changePage={handlePage} />
    );
  } else if (page === "AddNew") {
    content = <AddNew addNote={addNote} changePage={handlePage} />;
  } else if (page === "Hello") {
    content = <Hello />;
  } else if (page === "EditNote") {
    if (editId !== 0) {
      const index = notes.findIndex((el) => el.id === editId);
      const note = notes[index];
      content = <EditNote note={note} changePage={handlePage} editNote={editNote}/>;
    } else {
      content = <EditNote />;
    }
  }

  return (
    <div className="App">
      <Sidebar handlePage={handlePage} />
      <div className="content">{content}</div>
    </div>
  );
}

export default App;
