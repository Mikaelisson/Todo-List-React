import React, { useState } from "react";
import List from "./List";

import { useDispatch } from "react-redux";
import { addItem } from "../actions/listAction";

function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  //valor do input
  const handleChange = (e) => {
    let t = e.target.value;
    setText(t);
  };

  //adicionar novo item
  const addItemEvent = () => {
    if (text) {
      dispatch(addItem(text));
      setText("");
    }
  };

  return (
    <form>
      <div className="d-flex flex-row gap-2">
        <div className="input-group w-75">
          <input
            type="text"
            className="form-control"
            placeholder="Type to add"
            aria-describedby="basic-addon1"
            onChange={handleChange}
            value={text}
          ></input>
        </div>

        <button
          onClick={(event) => {
            event.preventDefault();
            addItemEvent();
          }}
          id="addItem"
          className="btn btn-outline-primary w-25"
        >
          Add Task
        </button>
      </div>

      <div>
        <List />
      </div>
    </form>
  );
}

export default TodoForm;
