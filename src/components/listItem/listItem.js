import "./listItem.css";
export default function ListItem({id,title,text,date,removeNote,changePage}) {


  return (
    <div className="listItem">
      <h2>{title}</h2>
      <h3>{text}</h3>
      <small>{date.toString()}</small>
      <div className="controls">
          <input className="listItem__edit btn1" type="button" value={'edit'} onClick={()=>changePage('EditNote',id)}/>
          <input className="listItem__delete btn1" type="button" value={'delete'} onClick={removeNote}/>
      </div>
    </div>
  );
}
