import React from "react";
import IconDone from "./assets/IconDone";

function DoneItem(props) {


  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        props.onDoneItem(props.item)
      }}
      className="btn btn-outline-success"
    >
      <IconDone className="icon" />
    </button>
  );
}

export default DoneItem;
