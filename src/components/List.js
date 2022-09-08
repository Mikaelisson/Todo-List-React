import React from "react";
import IconEdit from "./assets/IconEdit";
import IconDelete from "./assets/IconDelete";

function List(props) {

  return props.items.map((item) => {
    return (
      <div key={item.id} className="card p-3 mb-3 d-flex flex-row">
        <div className="w-75">{item.text}</div>
        <div className="w-25 d-flex justify-content-end align-items-center gap-2">
          <button className="btn btn-outline-secondary">
            <IconEdit className="icon" />
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              props.onDeleteItem(item);
            }}
            className="btn btn-outline-danger"
          >
            <IconDelete className="icon" />
          </button>
        </div>
      </div>
    );
  });
}

export default List;
