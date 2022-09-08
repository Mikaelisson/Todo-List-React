import React, { useEffect, useState } from "react";
import List from "./List";
import All from "./All";
import Active from "./Active";
import Done from "./Done";
import AddTask from "./AddTask";

function TodoForm() {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem("users"));
    if (savedItems) setUsers(savedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addItem = (e) => {
    e.preventDefault();
    if (text) {
      setUsers([...users, text]);
      setText("");
    }
  };

  const handleChange = (e) => {
    let t = e.target.value;
    setText(t);
  };

  return (
    <form>
      <div className="d-flex flex-row gap-2">
        <div className="input-group w-75">
          <input
            type="text"
            className="form-control"
            placeholder="type to search"
            aria-describedby="basic-addon1"
            id="userInput"
            onChange={handleChange}
            value={text}
          ></input>
        </div>

        <AddTask onAddItem={addItem} />
      </div>

      <div className="d-flex justify-content-end gap-2 my-2">
        <All />
        <Active />
        <Done />
      </div>

      <div>
        <List users={users} />
      </div>
    </form>
  );
}

export default TodoForm;
