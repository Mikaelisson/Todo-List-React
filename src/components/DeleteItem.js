import React from "react";
import IconDelete from "./assets/IconDelete";

function DeleteItem(props) {
  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        props.onDeleteItem(props.item);
      }}
      className="btn btn-outline-danger"
    >
      <IconDelete className="icon" />
    </button>
  );
}

export default DeleteItem;
