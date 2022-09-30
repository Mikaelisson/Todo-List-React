import React from "react";
import IconDone from "./assets/IconDone";
import IconDelete from "./assets/IconDelete";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, changeDone } from "../actions/listAction";

function List() {
  const items = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  return (
    <ul className="p-0 mt-4">
      {items
        .map((item, index) => {
          return (
            <li
              key={index}
              className={
                item.done
                  ? "w-100 card p-3 mb-3 d-flex flex-row text-decoration-line-through opacity-50"
                  : "w-100 card p-3 mb-3 d-flex flex-row"
              }
            >
              <div className="w-75 fw-bold fs-4">{item.text}</div>
              <div className="w-25 d-flex justify-content-end align-items-center gap-2">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(changeDone(item.id));
                  }}
                  className={
                    item.done ? "btn btn-success" : "btn btn-outline-success"
                  }
                >
                  <IconDone className="icon" />
                </button>

                <button
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(deleteItem(item.id));
                  }}
                  className={
                    item.done ? "btn btn-danger" : "btn btn-outline-danger"
                  }
                >
                  <IconDelete className="icon" />
                </button>
              </div>
            </li>
          );
        })
        .reverse()}
    </ul>
  );
}

export default List;
