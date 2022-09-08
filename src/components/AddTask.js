import React from "react";

function AddTask(props) {
  return (
    <button onClick={props.onAddItem} id="addItem" className="btn btn-outline-primary w-25">
      Add Task
    </button>
  );
}

export default AddTask;
