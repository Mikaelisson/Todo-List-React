import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  function hadleChange(event) {
    let text = event.target.value;
    setText(text);
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text);
      setText("");
    }
  }

  return (
    <form>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={hadleChange}
          value={text}
        ></input>
        <button
          className="btn btn-light"
          type="button"
          onClick={addItem}
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
