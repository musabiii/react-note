import "./sidebar.css";
export default function Sidebar({handlePage}) {


  return (
    <div className="sidebar">
      <p><input className="sidebar__btn" type="button" value={"Home"} onClick={()=>handlePage('Hello')} /></p>
      <p><input className="sidebar__btn" type="button" value={"add new"} onClick={()=>handlePage('AddNew')} /></p>
      <p><input className="sidebar__btn" type="button" value={"all notes"}  onClick={()=>handlePage('List')} /></p>
    </div>
  );
}
