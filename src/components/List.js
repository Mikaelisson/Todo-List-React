import React from "react";
import EditItem from "./EditItem";
import DeleteItem from "./DeleteItem";

function List(props) {
  return props.items
    .map((item, index) => {
      return (
        <ul key={item.id} className="card p-3 mb-3 d-flex flex-row">
          <li className="w-75">{item.text}</li>
          <div className="w-25 d-flex justify-content-end align-items-center gap-2">
            <EditItem onEditItem={props.onEditItem} index={index} item={item} />
            <DeleteItem onDeleteItem={props.onDeleteItem} item={item} />
          </div>
        </ul>
      );
    })
    .reverse();
}

export default List;
