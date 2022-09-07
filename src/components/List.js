import React from "react";
import IconEdit from "./assets/IconEdit";
import IconDelete from "./assets/IconDelete";

function List(props) {
  return props.users.map((user, index) => {
    return (
      <div key={index} className="card p-3 mb-3 d-flex flex-row">
        <div className="w-75">{user}</div>
        <div className="w-25 d-flex justify-content-end align-items-center gap-2">
          <button className="btn btn-outline-secondary">
            <IconEdit className="w-25" />
          </button>
          <button className="btn btn-outline-danger">
            <IconDelete className="w-25" />
          </button>
        </div>
      </div>
    );
  });
}

export default List;
