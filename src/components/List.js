import React from "react";
import DeleteItem from "./DeleteItem";
import DoneItem from "./DoneItem";

function List(props) {
  return (
    <ul className="p-0">
      {props.items
        .map((item, index) => {
          return (
            <li
              key={index}
              className={
                item.done
                  ? "w-100 card p-3 mb-3 d-flex flex-row text-decoration-line-through opacity-75"
                  : "w-100 card p-3 mb-3 d-flex flex-row"
              }
            >
              <div className="w-75 fw-bold fs-4">{item.text}</div>
              <div className="w-25 d-flex justify-content-end align-items-center gap-2">
                <DoneItem item={item} onDoneItem={props.onDoneItem} />
                <DeleteItem onDeleteItem={props.onDeleteItem} item={item} />
              </div>
            </li>
          );
        })
        .reverse()}
    </ul>
  );
}

export default List;
