import "./addNew.css";
export default function AddNew({ addNote,changePage }) {



  const handleSubmit = (e) => {
    e.preventDefault();
    const t = e.target;
    const newNote = {
      title: t[0].value,
      text: t[1].value,
      id:Math.random(),
      date: getFormatDate(new Date()),
    };
    console.log(newNote);
    addNote(newNote);
    changePage('Hello')
  };

  return (
    <div className="addNew">
      <h1>new note</h1>
      <form onSubmit={handleSubmit} className="addNew__form">
        <input className="addNew__title" type="text" placeholder="title" />
        <textarea className="addNew__text" cols="25" rows="5" placeholder="type note"></textarea>
        <input className="addNew__submit btn1" type="submit" value="add" />
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
  if ((x.length === 1)) {
    return `0${x}`;
  }
  return x;
}