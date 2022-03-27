import Grocerycontainer from "./Grocerycontainer";
import { useState, useEffect } from "react";
import Alert from "./Alert";
import "./Todo.css";
const Form = () => {
  const [list, setlist] = useState([]);
  const [name, setname] = useState("");
  const [editId, seteditId] = useState(null);
  const [isEditing, setisEditing] = useState(false);
  const [alert, setalert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const submitted = (event) => {
    event.preventDefault();
    if (!name) {
      console.log("empty");
      showalert(true, "Please Enter Value", "danger");
    } else if (name && isEditing) {
      if (!name) {
        console.log("empty");
        showalert(true, "Please Enter Value", "danger");
      }

      showalert(true, "Value Changed", "success");
      setisEditing(false);
    } else {
      showalert(true, "Item Added To The List", "success");
      const newlist = { id: new Date().getTime().toString(), title: name };
      setlist([...list, newlist]);
      console.log(list);
      setname("");
    }
  };
  const deletedata = (id) => {
    const newdata = list.filter((lt) => id !== lt.id);
    setlist(newdata);
  };
  const clear = () => {
    showalert(true, "Empty List", "danger");
    const newclr = list.filter((lt) => lt.id < 0);
    setlist(newclr);
  };
  const showalert = (show = false, msg = "", type = "") => {
    setalert({
      show,
      msg,
      type,
    });
  };
  const onedit = (written) => {
    console.log(written);
    setname(written);
    setisEditing(true);
  };

  return (
    <div className="mainbody">
      <div className="main">
        <form onSubmit={submitted}>
          {alert.show && <Alert alert={alert} showalert={showalert} />}
          <h3>Super Todo</h3>
          <div className="form">
            <input
              className="input"
              placeholder="e.g. Aaloo  Bhujia"
              value={name}
              type="text"
              onChange={(element) => {
                setname(element.target.value);
              }}
            ></input>
            <button className="btn-sumit" type="submit">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <Grocerycontainer
              list={list}
              deletedata={deletedata}
              onedit={onedit}
            />
            <button className="clear-items" onClick={clear}>
              {" "}
              Clear Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
