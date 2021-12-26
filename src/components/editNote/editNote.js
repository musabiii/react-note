import { useState } from "react";
import "./editNote.css";
export default function EditNote({ editNote, changePage, note }) {
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(note);
    // const t = e.target;
    const newNote = {
      title,
      text,
      id:note.id,
      date: getFormatDate(new Date()),
    };
     console.log(newNote);
     editNote(newNote);
     
    // addNote(newNote);
    changePage("List");
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleCancel = () => {
    console.log("cancel");
    changePage("List");
  };
  return (
    <div className="editNote">
      <h1>edit note</h1>
      <form onSubmit={handleSubmit} className="editNote__form">
        <input
          className="editNote__title"
          type="text"
          value={title}
          onChange={handleChangeTitle}
        />
        <textarea
          className="editNote__text"
          cols="25"
          rows="5"
          value={text}
          onChange={handleChangeText}
        ></textarea>
        <div className="editNote-btns">
          <input className="editNote__submit btn1" type="submit" value="save" />
          <input
            className="editNote__submit btn1"
            type="button"
            value="cancel"
            onClick={handleCancel}
          />
        </div>
      </form>
    </div>
  );
}

function getFormatDate(date) {
  const d = expandZero(date.getDate());
  const m = expandZero(date.getMonth() + 1);
  const y = expandZero(String(date.getFullYear()));
  const h = expandZero(date.getHours());
  const min = expandZero(date.getMinutes());
  const res = `${d}.${m}.${y} ${h}:${min}`;
  return res;
}

function expandZero(x) {
  if (x.length === 1) {
    return `0${x}`;
  }
  return x;
}
