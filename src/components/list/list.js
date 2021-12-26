import ListItem from "../listItem";
import './list.css'

export default function List({ notes,removeNote,changePage }) {
  const listItems = notes.map((el) => {
    return <li>
        <ListItem id={el.id} key={el.id} title={el.title} text={el.text} date={el.date} removeNote={()=>removeNote(el.id)} changePage={changePage}/>
    </li>;
  });

  return (
    <div className="list">
      <h1>notes</h1>
      <ul>{listItems}</ul>
    </div>
  );
}
