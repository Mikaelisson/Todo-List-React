import React from "react";
import IconEdit from "./assets/IconEdit";

function EditItem(props) {
  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        props.onEditItem(props.index, props.item);
      }}
      className="btn btn-outline-secondary"
    >
      <IconEdit className="icon" />
    </button>
  );
}

export default EditItem;
