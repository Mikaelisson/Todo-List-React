import React, { useState } from "react";
import List from "./List";
import All from "./All";
import Active from "./Active";
import Done from "./Done";
import AddTask from "./AddTask";

function TodoForm() {
  const [users, setUsers] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const userInput = document.getElementById("userInput");
    if (userInput.value && userInput.value !== " ") {
      setUsers([...users, userInput.value]);
      userInput.value = "";
    }
  };
  return (
    <form>
      <div className="d-flex flex-row gap-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="type to search"
            id="userInput"
            aria-describedby="basic-addon1"
          ></input>
        </div>

        <All />
        <Active />
        <Done />
      </div>

      <div className="d-flex justify-content-end my-2">
        <AddTask onAddItem={addItem} />
      </div>

      <div>
        <List users={users} />
      </div>
    </form>
  );
}

export default TodoForm;
